import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Showcase } from "@/components/landing/Showcase";
import { Community } from "@/components/landing/Community";
import { Newsletter } from "@/components/landing/Newsletter";
import { Download, SiteFooter } from "@/components/landing/Download";

const title = "Northlight — Simple, Powerful Bitcoin Wallet";
const description =
  "Self-custody bitcoin wallet with multisig vaults, fee control, hardware wallet support and Lightning. Open source, private, free on iOS, Android and desktop.";

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
        <FeatureGrid />
        <Showcase />
        <Community />
        <Newsletter />
        <Download />
      </main>
      <SiteFooter />
    </div>
  );
}
