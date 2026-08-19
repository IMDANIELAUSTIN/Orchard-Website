import { createFileRoute } from "@tanstack/react-router";
import { sortedPosts, SITE_URL } from "@/lib/blog";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = sortedPosts
          .map((post) => {
            const url = `${SITE_URL}/blog/${post.slug}`;
            return [
              `    <item>`,
              `      <title>${escapeXml(post.title)}</title>`,
              `      <link>${url}</link>`,
              `      <guid isPermaLink="true">${url}</guid>`,
              `      <description>${escapeXml(post.excerpt)}</description>`,
              `      <author>noreply@orchard-website.lovable.app (${escapeXml(post.author)})</author>`,
              `      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>`,
              `    </item>`,
            ].join("\n");
          })
          .join("\n");

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
          `  <channel>`,
          `    <title>Orchard Blog</title>`,
          `    <link>${SITE_URL}/blog</link>`,
          `    <description>Notes on bitcoin self-custody, multisig, fees and Lightning from the Orchard team.</description>`,
          `    <language>en-us</language>`,
          `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
          items,
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
