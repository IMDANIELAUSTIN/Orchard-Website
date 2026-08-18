import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type Subscriber = {
  id: string;
  email: string;
  status: string;
  source: string;
  confirmation_email_status: string;
  created_at: string;
};

export const listSubscribers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ isAdmin: boolean; subscribers: Subscriber[] }> => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });

    if (!isAdmin) return { isAdmin: false, subscribers: [] };

    const { data, error } = await context.supabase
      .from("newsletter_subscribers")
      .select("id, email, status, source, confirmation_email_status, created_at")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return { isAdmin: true, subscribers: (data ?? []) as Subscriber[] };
  });
