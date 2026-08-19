import { createFileRoute, Link } from "@tanstack/react-router";
import { Rss } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";
import { Button } from "@/components/ui/button";
import { sortedPosts, formatDate } from "@/lib/blog";

const title = "Blog & Field Notes — Orchard";
const description =
  "Practical dispatches on peer-to-peer mesh networks, offline super-libraries, mutual aid exchanges, and Fediverse protocols from the Orchard project.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://orchard-website.lovable.app/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://orchard-website.lovable.app/blog" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Orchard Blog RSS",
        href: "https://orchard-website.lovable.app/rss.xml",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-6 pb-10 border-b border-black/[0.06]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">Dispatches & Articles</span>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#1D1D1F]">Blog & Field Notes</h1>
            <p className="mt-3 max-w-xl text-[#86868B] text-base leading-relaxed">
              Notes on offline-first software, packet radio meshes, local food resilience, and open knowledge hubs.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-black/[0.1] bg-white text-[#1D1D1F] hover:bg-black/[0.03]" asChild>
            <a href="/rss.xml">
              <Rss className="size-4 mr-1.5 text-rose-600" aria-hidden="true" />
              Subscribe via RSS
            </a>
          </Button>
        </div>

        <ul className="mt-10 space-y-6">
          {sortedPosts.map((post, idx) => (
            <li key={post.slug} className={`reveal delay-${idx + 1} rounded-[24px] border border-black/[0.06] bg-white p-8 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
              <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-rose-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-base text-[#86868B] leading-relaxed">{post.excerpt}</p>
              <p className="mt-6 pt-4 border-t border-black/[0.04] text-xs text-[#86868B]">
                {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
                {post.readingTime}
              </p>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
