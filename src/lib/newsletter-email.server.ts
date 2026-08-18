// Sends the newsletter confirmation email.
//
// Email delivery is wired to the project's managed email sender. Until a
// verified sender domain is configured for the project, sends are skipped and
// recorded on the subscriber row so nothing is silently lost.
type SendResult = { status: "sent" | "skipped" | "failed"; error?: string };

type SendTemplateEmail = (
  template: string,
  to: string,
  options?: { templateData?: Record<string, unknown>; idempotencyKey?: string },
) => Promise<{ sent: boolean; reason?: string }>;

const SEND_HELPER_PATH = "@/lib/email-templates/send-email";

export async function sendConfirmationEmail(email: string): Promise<SendResult> {
  try {
    const senderReady = Boolean(
      process.env["LOVABLE_API_KEY"] && process.env["EMAIL_SENDER_DOMAIN"],
    );
    if (!senderReady) {
      return { status: "skipped", error: "No verified sender domain configured yet." };
    }

    const mod = (await import(/* @vite-ignore */ SEND_HELPER_PATH)) as {
      sendTemplateEmail: SendTemplateEmail;
    };

    const result = await mod.sendTemplateEmail("newsletter-confirmation", email, {
      templateData: { email },
      idempotencyKey: `newsletter-confirmation-${email}`,
    });

    if (result.sent) return { status: "sent" };
    return result.reason ? { status: "skipped", error: result.reason } : { status: "skipped" };
  } catch (error) {
    console.error("Confirmation email failed", error);
    return { status: "failed", error: error instanceof Error ? error.message : "Unknown error" };
  }
}
