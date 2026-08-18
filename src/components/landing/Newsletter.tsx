import { useEffect, useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { Check, Loader2, TriangleAlert } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getRecaptchaSiteKey, subscribeToNewsletter } from "@/lib/newsletter.functions";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const emailSchema = z
  .string()
  .trim()
  .nonempty({ message: "Please enter your email address." })
  .email({ message: "That doesn't look like a valid email address." })
  .max(255, { message: "Email must be less than 255 characters." });

type Status = "idle" | "submitting" | "success" | "error";

function useRecaptcha(siteKey: string | null | undefined) {
  const loaded = useRef(false);

  useEffect(() => {
    if (!siteKey || loaded.current) return;
    loaded.current = true;
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [siteKey]);

  return async (): Promise<string | undefined> => {
    if (!siteKey || !window.grecaptcha) return undefined;
    return new Promise<string | undefined>((resolve) => {
      window.grecaptcha!.ready(() => {
        window
          .grecaptcha!.execute(siteKey, { action: "newsletter_signup" })
          .then(resolve)
          .catch(() => resolve(undefined));
      });
    });
  };
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const fetchSiteKey = useServerFn(getRecaptchaSiteKey);
  const subscribe = useServerFn(subscribeToNewsletter);
  const { data: keyData } = useQuery({
    queryKey: ["recaptcha-site-key"],
    queryFn: () => fetchSiteKey(),
    staleTime: Infinity,
  });
  const executeRecaptcha = useRecaptcha(keyData?.siteKey);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setStatus("error");
      setMessage(result.error.issues[0]?.message ?? "Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const captchaToken = await executeRecaptcha();
      const response = await subscribe({
        data: {
          email: result.data,
          ...(captchaToken ? { captchaToken } : {}),
          ...(company ? { company } : {}),
        },
      });

      if (response.status === "subscribed" || response.status === "already-subscribed") {
        setStatus("success");
        setMessage(response.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(response.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again in a moment.");
    }
  };

  const isInvalid = status === "error";

  return (
    <section id="newsletter" className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Stay in the loop</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Occasional updates on new releases, security notes and self-custody guides. No spam, and
          you can unsubscribe any time.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={255}
            value={email}
            aria-invalid={isInvalid}
            aria-describedby="newsletter-status"
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            className="h-11 flex-1"
          />
          {/* Honeypot field — hidden from real users, catches simple bots. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="hidden"
          />
          <Button type="submit" size="lg" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Subscribing
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>

        <p
          id="newsletter-status"
          role="status"
          aria-live="polite"
          className="mt-4 min-h-5 text-sm"
        >
          {message ? (
            <span
              className={`inline-flex items-center gap-2 ${
                status === "success" ? "text-accent" : "text-destructive"
              }`}
            >
              {status === "success" ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <TriangleAlert className="size-4" aria-hidden="true" />
              )}
              {message}
            </span>
          ) : null}
        </p>

        {keyData?.siteKey ? (
          <p className="mt-3 text-xs text-muted-foreground">
            Protected by reCAPTCHA — Google's{" "}
            <a
              href="https://policies.google.com/privacy"
              className="underline underline-offset-4"
              rel="noreferrer noopener"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              className="underline underline-offset-4"
              rel="noreferrer noopener"
              target="_blank"
            >
              Terms
            </a>{" "}
            apply.
          </p>
        ) : null}
      </div>
    </section>
  );
}
