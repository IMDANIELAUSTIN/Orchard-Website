import { Link } from "@tanstack/react-router";
import { Rss, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sortedPosts, formatDate } from "@/lib/blog";

export function BlogSection() {
  const featured = sortedPosts.slice(0, 3);

  return (
    <section id="blog" className="border-t border-black/[0.06] py-24 bg-[#F5F5F7]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Field Notes & Dispatches</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">
              Notes on mesh networks, offline knowledge & mutual aid
            </h2>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full border-black/[0.1] bg-white text-[#1D1D1F] hover:bg-black/[0.03]" asChild>
              <a href="/rss.xml">
                <Rss className="size-4" aria-hidden="true" />
                RSS feed
              </a>
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#E8E8ED] hover:bg-[#DFDFE4] text-[#1D1D1F]" asChild>
              <Link to="/blog">
                All posts
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post, idx) => (
            <article
              key={post.slug}
              className={`reveal delay-${idx + 1} flex flex-col justify-between rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                <h3 className="text-lg font-bold leading-snug text-[#1D1D1F]">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-rose-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#86868B]">{post.excerpt}</p>
              </div>
              <p className="mt-6 pt-4 border-t border-black/[0.04] text-xs text-[#86868B]">
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
