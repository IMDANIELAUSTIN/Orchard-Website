import { createFileRoute, Link } from "@tanstack/react-router";
import { Rss } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";
import { Button } from "@/components/ui/button";
import { sortedPosts, formatDate } from "@/lib/blog";

const title = "Blog — Orchard Bitcoin Wallet";
const description =
  "Practical writing on bitcoin self-custody, multisig vaults, fee strategy and Lightning payments from the Orchard team.";

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
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Notes on custody, privacy, fees and Lightning — written by the people building
              Orchard.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="/rss.xml">
              <Rss className="size-4" aria-hidden="true" />
              Subscribe via RSS
            </a>
          </Button>
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {sortedPosts.map((post) => (
            <li key={post.slug} className="py-8">
              <h2 className="text-xl font-semibold tracking-tight">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-brand">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-4 text-sm text-muted-foreground">
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
