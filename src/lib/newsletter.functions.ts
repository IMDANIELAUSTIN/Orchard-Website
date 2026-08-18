import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const signupSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your email address." })
    .email({ message: "That doesn't look like a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." }),
  captchaToken: z.string().trim().max(4000).optional(),
  // Honeypot: real users never fill this in.
  company: z.string().max(200).optional(),
});

export type NewsletterSignupResult = {
  status: "subscribed" | "already-subscribed" | "rejected" | "error";
  message: string;
};

export const getRecaptchaSiteKey = createServerFn({ method: "GET" }).handler(async () => {
  return { siteKey: process.env["RECAPTCHA_SITE_KEY"] ?? null };
});

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => signupSchema.parse(input))
  .handler(async ({ data }): Promise<NewsletterSignupResult> => {
    if (data.company && data.company.length > 0) {
      return { status: "rejected", message: "Your signup could not be verified." };
    }

    const secret = process.env["RECAPTCHA_SECRET_KEY"];
    if (secret) {
      if (!data.captchaToken) {
        return {
          status: "rejected",
          message: "We couldn't verify that you're human. Please reload and try again.",
        };
      }
      try {
        const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ secret, response: data.captchaToken }),
        });
        const verification = (await verifyResponse.json()) as {
          success?: boolean;
          score?: number;
        };
        if (!verification.success || (verification.score ?? 0) < 0.5) {
          return {
            status: "rejected",
            message: "Your signup looked automated. Please try again.",
          };
        }
      } catch (error) {
        console.error("reCAPTCHA verification failed", error);
        return {
          status: "error",
          message: "We couldn't verify your signup right now. Please try again shortly.",
        };
      }
    }

    const email = data.email.toLowerCase();
    const userAgent = getRequestHeader("user-agent")?.slice(0, 500) ?? null;
    const forwardedFor = getRequestHeader("x-forwarded-for") ?? "";
    const ip = forwardedFor.split(",")[0]?.trim() || null;
    let ipHash: string | null = null;
    if (ip) {
      const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
      ipHash = Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    }

    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const { data: existing } = await supabaseAdmin
        .from("newsletter_subscribers")
        .select("id")
        .eq("email", email)
        .maybeSingle();

      if (existing) {
        return {
          status: "already-subscribed",
          message: "You're already on the list — watch your inbox for release notes.",
        };
      }

      const { data: inserted, error } = await supabaseAdmin
        .from("newsletter_subscribers")
        .insert({
          email,
          user_agent: userAgent,
          ip_hash: ipHash,
        })
        .select("id")
        .single();

      if (error) {
        if (error.code === "23505") {
          return {
            status: "already-subscribed",
            message: "You're already on the list — watch your inbox for release notes.",
          };
        }
        throw error;
      }

      const { sendConfirmationEmail } = await import("./newsletter-email.server");
      const emailResult = await sendConfirmationEmail(email);

      await supabaseAdmin
        .from("newsletter_subscribers")
        .update({
          confirmation_email_status: emailResult.status,
          confirmation_email_error: emailResult.error ?? null,
        })
        .eq("id", inserted.id);

      return {
        status: "subscribed",
        message: "You're on the list. Watch your inbox for a confirmation email.",
      };
    } catch (error) {
      console.error("Newsletter signup failed", error);
      return {
        status: "error",
        message: "Something went wrong saving your signup. Please try again in a moment.",
      };
    }
  });
