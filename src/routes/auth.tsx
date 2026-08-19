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
    <div className="flex min-h-screen items-center justify-center bg-[#F5F5F7] px-6 py-16">
      <div className="w-full max-w-sm rounded-[28px] border border-black/[0.06] bg-white p-8 sm:p-10 shadow-card">
        <h1 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
          {mode === "signin" ? "Admin sign in" : "Create admin account"}
        </h1>
        <p className="mt-2 text-sm text-[#86868B]">
          Manage newsletter subscribers and exports.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div className="space-y-2">
            <Label htmlFor="admin-email" className="text-xs font-semibold text-[#1D1D1F]">Email</Label>
            <Input
              id="admin-email"
              type="email"
              autoComplete="email"
              maxLength={255}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-11 rounded-xl border-black/[0.1] bg-[#F5F5F7] text-[#1D1D1F] focus:bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password" className="text-xs font-semibold text-[#1D1D1F]">Password</Label>
            <Input
              id="admin-password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              maxLength={72}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-11 rounded-xl border-black/[0.1] bg-[#F5F5F7] text-[#1D1D1F] focus:bg-white"
            />
          </div>

          <Button type="submit" className="w-full h-11 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold shadow-sm" disabled={busy}>
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <p role="status" aria-live="polite" className="mt-4 min-h-5 text-sm">
          {error ? <span className="text-destructive font-medium">{error}</span> : null}
          {notice ? <span className="text-rose-600 font-medium">{notice}</span> : null}
        </p>

        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError("");
            setNotice("");
          }}
          className="mt-2 text-xs font-medium text-[#86868B] hover:text-[#1D1D1F]"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
