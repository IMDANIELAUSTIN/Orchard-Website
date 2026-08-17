import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Check, Loader2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const emailSchema = z
  .string()
  .trim()
  .nonempty({ message: "Please enter your email address." })
  .email({ message: "That doesn't look like a valid email address." })
  .max(255, { message: "Email must be less than 255 characters." });

type Status = "idle" | "submitting" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setStatus("error");
      setMessage(result.error.issues[0].message);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setMessage("You're on the list. Watch your inbox for release notes.");
      setEmail("");
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
      </div>
    </section>
  );
}
