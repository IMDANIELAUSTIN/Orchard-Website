import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Pillars } from "@/components/landing/Pillars";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Showcase } from "@/components/landing/Showcase";
import { Community } from "@/components/landing/Community";
import { BlogSection } from "@/components/landing/BlogSection";
import { Newsletter } from "@/components/landing/Newsletter";
import { Download, SiteFooter } from "@/components/landing/Download";

const title = "Orchard — Resilient Knowledge, Mesh Network & Local Exchange";
const description =
  "Open-source, decentralized, off-grid-first multimedia knowledge hub, P2P mesh network, local community resilience exchange, and open-educational super-app built in native SwiftUI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://orchard-website.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://orchard-website.lovable.app/" }],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Pillars />
        <FeatureGrid />
        <Showcase />
        <Community />
        <BlogSection />
        <Newsletter />
        <Download />
      </main>
      <SiteFooter />
    </div>
  );
}
