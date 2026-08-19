import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";
import { getPost, formatDate, SITE_URL } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Post not found — Orchard" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const url = `${SITE_URL}/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} — Orchard Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3]">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-32 text-center">
        <div className="rounded-[28px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-12 shadow-card">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3]">Post not found</h1>
          <p className="mt-4 text-[#290B00]/70 dark:text-[#F6F4F3]/70">That article does not exist or has been moved.</p>
          <Link to="/blog" className="mt-8 inline-block font-semibold text-[#290B00] dark:text-[#F6F4F3] hover:underline">
            Back to the blog
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#290B00]/70 dark:text-[#F6F4F3]/70 hover:text-[#290B00] dark:hover:text-[#F6F4F3] transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All posts
        </Link>

        <article className="mt-8 rounded-[28px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-8 sm:p-12 shadow-card">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-[#290B00] dark:text-[#F6F4F3]">
            {post.title}
          </h1>
          <p className="mt-4 pb-8 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 text-sm text-[#290B00]/60 dark:text-[#F6F4F3]/60">
            {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
            {post.readingTime}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#290B00]/90 dark:text-[#F6F4F3]/90 font-normal">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
