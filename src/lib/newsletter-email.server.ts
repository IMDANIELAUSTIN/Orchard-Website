// Sends the newsletter confirmation email.
//
// Email delivery is wired to the project's managed email sender. Until a
// verified sender domain is configured for the project, sends are skipped and
// recorded on the subscriber row so nothing is silently lost.
export async function sendConfirmationEmail(
  email: string,
): Promise<{ status: "sent" | "skipped" | "failed"; error?: string }> {
  try {
    const senderReady = Boolean(process.env["LOVABLE_API_KEY"] && process.env["EMAIL_SENDER_DOMAIN"]);
    if (!senderReady) {
      return { status: "skipped", error: "No verified sender domain configured yet." };
    }

    const { sendTemplateEmail } = (await import(
      /* @vite-ignore */ "@/lib/email-templates/send-email"
    )) as {
      sendTemplateEmail: (
        template: string,
        to: string,
        options?: { templateData?: Record<string, unknown>; idempotencyKey?: string },
      ) => Promise<{ sent: boolean; reason?: string }>;
    };

    const result = await sendTemplateEmail("newsletter-confirmation", email, {
      templateData: { email },
      idempotencyKey: `newsletter-confirmation-${email}`,
    });

    return result.sent ? { status: "sent" } : { status: "skipped", error: result.reason };
  } catch (error) {
    console.error("Confirmation email failed", error);
    return { status: "failed", error: error instanceof Error ? error.message : "Unknown error" };
  }
}
