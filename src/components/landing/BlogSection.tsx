import { Link } from "@tanstack/react-router";
import { Rss, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sortedPosts, formatDate } from "@/lib/blog";

export function BlogSection() {
  const featured = sortedPosts.slice(0, 3);

  return (
    <section id="blog" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-brand">From the blog</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Notes on custody, privacy and fees
            </h2>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <a href="/rss.xml">
                <Rss className="size-4" aria-hidden="true" />
                RSS feed
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/blog">
                All posts
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold leading-snug">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-brand">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
                {post.readingTime}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
