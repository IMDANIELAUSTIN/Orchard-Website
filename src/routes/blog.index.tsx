import { createFileRoute, Link } from "@tanstack/react-router";
import { Rss } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";
import { Button } from "@/components/ui/button";
import { sortedPosts, formatDate } from "@/lib/blog";

const title = "Newsroom & Announcements — Orchard";
const description =
  "Official product releases, service announcements, and platform updates from the Orchard project.";

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
        title: "Orchard Newsroom RSS",
        href: "https://orchard-website.lovable.app/rss.xml",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3]">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-6 pb-10 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#290B00]/70 dark:text-[#F6F4F3]/70">
              Product Updates & Announcements
            </span>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-5xl">
              Newsroom
            </h1>
            <p className="mt-3 max-w-xl text-[#290B00]/70 dark:text-[#F6F4F3]/70 text-base leading-relaxed">
              Official releases, product updates, and service announcements from the Orchard project.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-[#290B00]/15 dark:border-[#F6F4F3]/20 bg-[#F6F4F3] dark:bg-[#381406] text-[#290B00] dark:text-[#F6F4F3] hover:bg-[#EAE5E2] dark:hover:bg-[#481C0C]" asChild>
            <a href="/rss.xml">
              <Rss className="size-4 mr-1.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
              Subscribe via RSS
            </a>
          </Button>
        </div>

        <ul className="mt-10 space-y-6">
          {sortedPosts.map((post, idx) => (
            <li key={post.slug} className={`reveal delay-${idx + 1} rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-8 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#EAE5E2] dark:bg-[#481C0C] px-3 py-1 text-xs font-bold text-[#290B00] dark:text-[#F6F4F3]">
                  {post.category}
                </span>
                <span className="text-xs text-[#290B00]/60 dark:text-[#F6F4F3]/60">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#290B00] dark:text-[#F6F4F3]">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-[#5C230C] dark:hover:text-[#DFCFC9] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-base text-[#290B00]/70 dark:text-[#F6F4F3]/70 leading-relaxed">{post.excerpt}</p>
              <p className="mt-6 pt-4 border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10 text-xs text-[#290B00]/60 dark:text-[#F6F4F3]/60">
                {post.author} · {post.readingTime}
              </p>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
