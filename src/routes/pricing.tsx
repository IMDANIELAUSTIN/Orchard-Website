import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Apple,
  Monitor,
  Github,
  Sparkles,
  Heart,
  Radio,
  BookOpen,
  Globe2,
  ShieldCheck,
  Cpu,
  Layers,
  Users2,
  WifiOff,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { STORE_LINKS } from "@/lib/store-links";

const title = "Open Source & Sponsorships — Orchard Project";
const description =
  "Orchard is 100% free and open source. Explore community sponsorship tiers, mesh hardware deployment guides, and our public goods commitment.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://orchard-website.lovable.app/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://orchard-website.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Individual & Community",
    badge: "100% Free & Open Source",
    priceMonthly: "$0",
    priceAnnual: "$0",
    period: "forever",
    description: "The complete, uncompromised Orchard super-app across the Apple ecosystem.",
    featured: false,
    ctaLabel: "Download Orchard",
    ctaHref: "/#download",
    features: [
      "Full Kiwix ZIM Super-Library (Wikipedia, MDWiki, Project Gutenberg)",
      "P2P LoRa & Bluetooth Low Energy mesh chat (Signal Double Ratchet)",
      "21-Category food, spring water & mutual-aid market directory",
      "3D offline connection globe & passenger rail transit routing",
      "Unified Fediverse stream (Mastodon, Bluesky, Lemmy, Nostr, RSS)",
      "Lossless Spatial Audio player with live synced transcripts",
      "Apple Watch (watchOS) emergency alerts & companion",
      "Zero telemetry, zero accounts, zero tracking servers",
      "Permissive Free & Open Source Software (FOSS) licensing",
    ],
  },
  {
    name: "Community Supporter",
    badge: "Sustaining Open Source",
    priceMonthly: "$5",
    priceAnnual: "$50",
    period: "per year voluntary sponsor",
    description: "Support full-time open-source development, ZIM archive seeding, and research.",
    featured: true,
    ctaLabel: "Sponsor on GitHub",
    ctaHref: STORE_LINKS.github,
    features: [
      "Everything in Community (all features are always free for all users)",
      "Directly sustain independent, open-source Swift 6 development",
      "Supporter flair across community Lemmy and Mastodon forums",
      "Early access to TestFlight beta builds and protocol experiments",
      "Community roadmap voting on new course disciplines & tools",
      "Fund public seeding of large Kiwix ZIM knowledge archives",
      "Warm satisfaction of empowering off-grid human resilience",
    ],
  },
  {
    name: "Resilience Hub & Deployments",
    badge: "Schools, Homesteads & Mutual Aid",
    priceMonthly: "Free",
    priceAnnual: "Guides & Blueprints",
    period: "open documentation",
    description: "Hardware blueprints, school server caching setups, and local disaster readiness kits.",
    featured: false,
    ctaLabel: "View Deployment Guides",
    ctaHref: `${STORE_LINKS.github}#deployments`,
    features: [
      "Everything in Community",
      "DIY LoRa packet radio hardware assembly guides (Meshtastic nodes)",
      "Solar repeater & off-grid battery enclosure blueprints",
      "School & library offline local Wi-Fi ZIM mirror deployment docs",
      "Community food forest & seed bank mapping coordination templates",
      "Emergency disaster drill simulation checklists & communication plans",
      "Dedicated community forum for local mesh operators & educators",
    ],
  },
];

const featureComparison = [
  {
    category: "Knowledge & Education",
    rows: [
      { name: "Kiwix ZIM Engine (Wikipedia, MDWiki, Gutenberg)", free: true, supporter: true, hubs: true },
      { name: "60+ Course disciplines across 7 subject areas", free: true, supporter: true, hubs: true },
      { name: "Interactive PhET science simulations", free: true, supporter: true, hubs: true },
      { name: "High-fidelity Lossless & Spatial Audio with transcripts", free: true, supporter: true, hubs: true },
      { name: "Local ZIM seeding & library caching server docs", free: false, supporter: true, hubs: true },
    ],
  },
  {
    category: "Mesh Communications & Privacy",
    rows: [
      { name: "Signal Double Ratchet E2E Encryption (secp256k1)", free: true, supporter: true, hubs: true },
      { name: "Bluetooth Low Energy (BLE) proximity mesh hops", free: true, supporter: true, hubs: true },
      { name: "LoRa packet radio integration (Meshtastic serial)", free: true, supporter: true, hubs: true },
      { name: "Zero accounts, zero telemetry, sandboxed local SQLite", free: true, supporter: true, hubs: true },
      { name: "DIY solar mesh repeater hardware blueprints", free: false, supporter: true, hubs: true },
    ],
  },
  {
    category: "Community & Mutual Aid",
    rows: [
      { name: "21-Category provision map (Timber, Produce, Citrus, etc.)", free: true, supporter: true, hubs: true },
      { name: "3D offline globe & passenger rail navigation", free: true, supporter: true, hubs: true },
      { name: "Unified Fediverse Hub (Mastodon, Bluesky, Lemmy, Nostr)", free: true, supporter: true, hubs: true },
      { name: "watchOS emergency mesh alerts & survival tips", free: true, supporter: true, hubs: true },
      { name: "Neighborhood seed bank & tool library coordination guides", free: false, supporter: true, hubs: true },
    ],
  },
];

const faqs = [
  {
    question: "Why is Orchard 100% free and open source?",
    answer:
      "We believe that access to human knowledge, emergency communications, and community mutual aid are fundamental public goods. Knowledge should never be gated behind paywalls or subscriptions, especially in crises.",
  },
  {
    question: "How is the Orchard project funded?",
    answer:
      "Orchard is sustained through voluntary community sponsorships, public grants, and contributions from open-source developers, educators, and mesh resilience enthusiasts around the world.",
  },
  {
    question: "What hardware do I need for LoRa packet radio mesh chats?",
    answer:
      "You can chat peer-to-peer over Bluetooth with any nearby iPhone or Mac without extra hardware. For long-range radio meshes spanning miles, you can pair inexpensive, portable LoRa transceivers (such as Heltec V3, LilyGO T-Beam, or RAK Wireless Meshtastic radios) over Bluetooth.",
  },
  {
    question: "How much storage do offline knowledge archives take?",
    answer:
      "You choose what to download. Core medical and survival guides take only a few hundred megabytes. Full Wikipedia with images or extensive STEM libraries can range from 10 GB to 90 GB, all seamlessly indexed by Orchard's native ZIM engine.",
  },
  {
    question: "Can schools or community organizations deploy Orchard in bulk?",
    answer:
      "Yes! Orchard is licensed under permissive FOSS licenses. Schools, rural clinics, homesteads, and mutual-aid groups can deploy and distribute Orchard freely across devices without licensing fees or registration.",
  },
];

function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pb-24">
        {/* Hero header */}
        <section className="bg-hero border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Heart className="size-3.5 text-rose-400" aria-hidden="true" />
              Public Goods Software
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
              100% Free & Open Source.{" "}
              <span className="text-brand">Built for Sovereignty.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Orchard has no paywalls, locked features, advertisements, or venture-capital surveillance.
              Every tool is freely accessible to everyone on Earth.
            </p>

            {/* Toggle */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className={`text-sm ${!annual ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                Monthly Sponsor
              </span>
              <button
                type="button"
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  annual ? "bg-primary" : "bg-muted"
                }`}
                role="switch"
                aria-checked={annual}
              >
                <span
                  className={`pointer-events-none inline-block size-5 transform rounded-full bg-primary-foreground shadow-lg ring-0 transition duration-200 ease-in-out ${
                    annual ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm ${annual ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                Annual Sponsor{" "}
                <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">
                  Support Long-Term FOSS
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Tiers Grid */}
        <section className="mx-auto max-w-6xl px-6 -mt-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-3xl border bg-card p-8 shadow-card transition-all ${
                  tier.featured
                    ? "border-primary ring-2 ring-primary/40 relative lg:-translate-y-4 shadow-glow"
                    : "border-border"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground uppercase tracking-wider">
                    Community Funded
                  </div>
                )}

                <div>
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {tier.badge}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight">{tier.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                </div>

                <div className="my-8 border-y border-border py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {annual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    {tier.period && (
                      <span className="text-xs text-muted-foreground">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="flex-1 space-y-3.5">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className={feature.startsWith("Everything in") ? "font-semibold text-foreground" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4">
                  <Button
                    size="lg"
                    className="w-full"
                    variant={tier.featured ? "default" : "secondary"}
                    asChild
                  >
                    <a href={tier.ctaHref} target={tier.ctaHref.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {tier.ctaLabel}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Public Goods Commitment Banner */}
        <section className="mx-auto mt-24 max-w-6xl px-6">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-wider">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  Our Open Source Covenant
                </span>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Zero telemetry. No ads. Uncompromised privacy.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Orchard will never sell user data, inject tracking scripts, or place educational resources behind paywalls.
                  All software is peer-auditable and distributed under permissive open licenses for the benefit of humanity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/80 bg-background/60 p-4 text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Free & Open Source</div>
                </div>
                <div className="rounded-2xl border border-border/80 bg-background/60 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">0</div>
                  <div className="mt-1 text-xs text-muted-foreground">Tracking scripts</div>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-2xl border border-border/80 bg-background/60 p-4 text-center">
                  <div className="text-2xl font-bold text-primary">Offline</div>
                  <div className="mt-1 text-xs text-muted-foreground">By default</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Matrix */}
        <section className="mx-auto mt-28 max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Compare features across tiers
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every single core feature is included free of charge for all users.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  <th className="p-4 sm:p-5 font-semibold text-foreground">Feature</th>
                  <th className="p-4 sm:p-5 font-semibold text-center text-foreground">Community ($0)</th>
                  <th className="p-4 sm:p-5 font-semibold text-center text-primary">Supporter</th>
                  <th className="p-4 sm:p-5 font-semibold text-center text-foreground">Resilience Hubs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {featureComparison.map((section) => (
                  <tr key={section.category} className="contents">
                    <td
                      colSpan={4}
                      className="bg-secondary/40 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {section.category}
                    </td>
                    {section.rows.map((row) => (
                      <tr key={row.name} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-5 py-4 font-medium text-foreground">{row.name}</td>
                        <td className="px-5 py-4 text-center">
                          {row.free ? (
                            <Check className="mx-auto size-4 text-accent" aria-hidden="true" />
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center">
                          {row.supporter ? (
                            <Check className="mx-auto size-4 text-primary" aria-hidden="true" />
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center">
                          {row.hubs ? (
                            <Check className="mx-auto size-4 text-accent" aria-hidden="true" />
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto mt-28 max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-muted-foreground">
              Questions about our public goods philosophy, mesh hardware, and deployment.
            </p>
          </div>

          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-border bg-card px-6 py-2 shadow-card"
                >
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Download CTA */}
        <section className="mx-auto mt-28 max-w-5xl px-6 text-center">
          <div className="rounded-3xl border border-border bg-card p-10 sm:p-16 shadow-card">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Carry human knowledge and mesh power everywhere
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Free, open source, and available natively for iOS, iPadOS, macOS, and Apple Watch.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Button size="lg" className="shadow-glow" asChild>
                <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
                  <Apple className="size-4" aria-hidden="true" />
                  Download for iOS
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={STORE_LINKS.macos} target="_blank" rel="noopener noreferrer">
                  <Monitor className="size-4" aria-hidden="true" />
                  macOS & watchOS
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="size-4" aria-hidden="true" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
