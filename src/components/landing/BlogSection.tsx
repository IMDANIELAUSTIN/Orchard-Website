import { Link } from "@tanstack/react-router";
import { Rss, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sortedPosts, formatDate } from "@/lib/blog";

export function BlogSection() {
  const featured = sortedPosts.slice(0, 3);

  return (
    <section id="blog" className="border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-24 bg-[#EAE5E2] dark:bg-[#1E0700]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#290B00] dark:text-[#F6F4F3] uppercase tracking-wider">Field Notes & Dispatches</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-4xl">
              Notes on mesh networks, offline knowledge & mutual aid
            </h2>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full border-[#290B00]/15 dark:border-[#F6F4F3]/20 bg-[#F6F4F3] dark:bg-[#381406] text-[#290B00] dark:text-[#F6F4F3] hover:bg-[#EAE5E2] dark:hover:bg-[#481C0C]" asChild>
              <a href="/rss.xml">
                <Rss className="size-4 mr-1.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
                RSS feed
              </a>
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#EAE5E2] hover:bg-[#DDD6D2] text-[#290B00] dark:bg-[#381406] dark:hover:bg-[#481C0C] dark:text-[#F6F4F3] border border-[#290B00]/5 dark:border-[#F6F4F3]/10" asChild>
              <Link to="/blog">
                All posts
                <ArrowRight className="size-4 aria-hidden=true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post, idx) => (
            <article
              key={post.slug}
              className={`reveal delay-${idx + 1} flex flex-col justify-between rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-7 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                <h3 className="text-lg font-bold leading-snug text-[#290B00] dark:text-[#F6F4F3]">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-[#5C230C] dark:hover:text-[#DFCFC9] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#290B00]/70 dark:text-[#F6F4F3]/70">{post.excerpt}</p>
              </div>
              <p className="mt-6 pt-4 border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10 text-xs text-[#290B00]/60 dark:text-[#F6F4F3]/60">
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
