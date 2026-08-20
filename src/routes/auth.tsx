import { useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const title = "Sign in — Orchard Admin";
const description = "Sign in to manage Orchard newsletter subscribers.";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

const credentialsSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email address." }).max(255),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }).max(72),
});

import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setNotice("");

    const parsed = credentialsSchema.safeParse({ email, password });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details.");
      return;
    }

    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (signUpError) throw signUpError;
        if (!data.session) {
          setNotice("Check your email to confirm your account, then sign in.");
          return;
        }
        navigate({ to: "/admin" });
        return;
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: parsed.data.email,
        password: parsed.data.password,
      });
      if (signInError) throw signInError;
      navigate({ to: "/admin" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3]">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-sm rounded-[28px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-8 sm:p-10 shadow-card">
          <h1 className="text-2xl font-bold tracking-tight text-[#290B00] dark:text-[#F6F4F3]">
            {mode === "signin" ? "Admin sign in" : "Create admin account"}
          </h1>
          <p className="mt-2 text-sm text-[#290B00]/70 dark:text-[#F6F4F3]/70">
            Manage newsletter subscribers and exports.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="admin-email" className="text-xs font-semibold text-[#290B00] dark:text-[#F6F4F3]">Email</Label>
              <Input
                id="admin-email"
                type="email"
                autoComplete="email"
                maxLength={255}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 rounded-xl border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#481C0C] text-[#290B00] dark:text-[#F6F4F3] placeholder:text-[#290B00]/50 dark:placeholder:text-[#F6F4F3]/50 focus:bg-[#F6F4F3] dark:focus:bg-[#381406]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-xs font-semibold text-[#290B00] dark:text-[#F6F4F3]">Password</Label>
              <Input
                id="admin-password"
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                maxLength={72}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-11 rounded-xl border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#481C0C] text-[#290B00] dark:text-[#F6F4F3] placeholder:text-[#290B00]/50 dark:placeholder:text-[#F6F4F3]/50 focus:bg-[#F6F4F3] dark:focus:bg-[#381406]"
              />
            </div>

            <Button type="submit" className="w-full h-11 rounded-full bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-semibold shadow-sm border border-transparent dark:border-[#F6F4F3]/20" disabled={busy}>
              {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <p role="status" aria-live="polite" className="mt-4 min-h-5 text-sm">
            {error ? <span className="text-destructive font-medium">{error}</span> : null}
            {notice ? <span className="text-[#290B00] dark:text-[#F6F4F3] font-medium">{notice}</span> : null}
          </p>

          <button
            type="button"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError("");
              setNotice("");
            }}
            className="mt-2 text-xs font-medium text-[#290B00]/70 dark:text-[#F6F4F3]/70 hover:text-[#290B00] dark:hover:text-[#F6F4F3]"
          >
            {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
