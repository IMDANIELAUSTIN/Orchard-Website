import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Download, LogOut, RefreshCw } from "lucide-react";
import { listSubscribers, type Subscriber } from "@/lib/admin.functions";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const title = "Subscribers — Orchard Admin";
const description = "View and export Orchard newsletter subscribers.";

export const Route = createFileRoute("/_authenticated/admin")({
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
  component: AdminPage,
});

function toCsv(rows: Subscriber[]) {
  const header = ["email", "status", "source", "confirmation_email_status", "created_at"];
  const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
  const lines = rows.map((row) =>
    [row.email, row.status, row.source, row.confirmation_email_status, row.created_at]
      .map((value) => escape(String(value ?? "")))
      .join(","),
  );
  return [header.join(","), ...lines].join("\n");
}

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchSubscribers = useServerFn(listSubscribers);
  const [search, setSearch] = useState("");

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["subscribers"],
    queryFn: () => fetchSubscribers(),
  });

  const subscribers = data?.subscribers ?? [];
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return subscribers;
    return subscribers.filter((row) => row.email.toLowerCase().includes(term));
  }, [subscribers, search]);

  const handleExport = () => {
    const blob = new Blob([toCsv(filtered)], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `newsletter-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3]">
      <header className="border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 bg-[#F6F4F3] dark:bg-[#381406]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#290B00] dark:text-[#F6F4F3]">Newsletter subscribers</h1>
            <p className="text-xs font-medium text-[#290B00]/60 dark:text-[#F6F4F3]/60">
              {isLoading ? "Loading…" : `${subscribers.length} total`}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full border-[#290B00]/15 dark:border-[#F6F4F3]/20 bg-[#F6F4F3] dark:bg-[#381406] text-[#290B00] dark:text-[#F6F4F3] hover:bg-[#EAE5E2] dark:hover:bg-[#481C0C]" onClick={() => refetch()} disabled={isFetching}>
              <RefreshCw className={`size-4 mr-1 ${isFetching ? "animate-spin" : ""}`} aria-hidden />
              Refresh
            </Button>
            <Button size="sm" className="rounded-full bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-medium shadow-sm border border-transparent dark:border-[#F6F4F3]/20" onClick={handleExport} disabled={filtered.length === 0}>
              <Download className="size-4 mr-1" aria-hidden />
              Export CSV
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-[#290B00]/70 dark:text-[#F6F4F3]/70 hover:text-[#290B00] dark:hover:text-[#F6F4F3]" onClick={handleSignOut}>
              <LogOut className="size-4 mr-1" aria-hidden />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        {error ? (
          <p className="text-sm text-destructive font-medium">Could not load subscribers. Try refreshing.</p>
        ) : data && !data.isAdmin ? (
          <p className="text-sm text-[#290B00]/70 dark:text-[#F6F4F3]/70">
            Your account doesn't have admin access yet. Ask an existing admin to grant it.
          </p>
        ) : (
          <>
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by email"
              className="mb-6 max-w-xs h-11 rounded-full border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] text-[#290B00] dark:text-[#F6F4F3] px-4"
              aria-label="Search subscribers by email"
            />

            <div className="overflow-x-auto rounded-2xl border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] shadow-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#EAE5E2] dark:bg-[#481C0C] text-[#290B00] dark:text-[#F6F4F3] font-bold">
                  <tr>
                    <th className="px-5 py-3.5">Email</th>
                    <th className="px-5 py-3.5">Status</th>
                    <th className="px-5 py-3.5">Confirmation email</th>
                    <th className="px-5 py-3.5">Signed up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#290B00]/10 dark:divide-[#F6F4F3]/15">
                  {filtered.map((row) => (
                    <tr key={row.id} className="hover:bg-[#EAE5E2]/50 dark:hover:bg-[#481C0C]/50 transition-colors">
                      <td className="px-5 py-3.5 font-medium text-[#290B00] dark:text-[#F6F4F3]">{row.email}</td>
                      <td className="px-5 py-3.5 text-[#290B00]/70 dark:text-[#F6F4F3]/70">{row.status}</td>
                      <td className="px-5 py-3.5 text-[#290B00]/70 dark:text-[#F6F4F3]/70">
                        {row.confirmation_email_status}
                      </td>
                      <td className="px-5 py-3.5 text-[#290B00]/70 dark:text-[#F6F4F3]/70">
                        {new Date(row.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {!isLoading && filtered.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-5 py-8 text-center text-[#290B00]/70 dark:text-[#F6F4F3]/70">
                        No subscribers yet.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
