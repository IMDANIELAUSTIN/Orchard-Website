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
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SiteHeader />

      <main className="pb-24">
        {/* Hero header */}
        <section className="bg-gradient-to-b from-white via-white to-[#F5F5F7] border-b border-black/[0.06] py-20 sm:py-28">
          <div className="reveal mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 shadow-sm">
              <Heart className="size-3.5 text-rose-500" aria-hidden="true" />
              Public Goods Software
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-6xl">
              100% Free & Open Source.{" "}
              <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">Built for Sovereignty.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#86868B] leading-relaxed">
              Orchard has no paywalls, locked features, advertisements, or venture-capital surveillance.
              Every tool is freely accessible to everyone on Earth.
            </p>

            {/* Toggle */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className={`text-sm ${!annual ? "font-bold text-[#1D1D1F]" : "text-[#86868B]"}`}>
                Monthly Sponsor
              </span>
              <button
                type="button"
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  annual ? "bg-rose-600" : "bg-[#E8E8ED]"
                }`}
                role="switch"
                aria-checked={annual}
              >
                <span
                  className={`pointer-events-none inline-block size-6 transform rounded-full bg-white shadow-md transition duration-200 ease-in-out ${
                    annual ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm ${annual ? "font-bold text-[#1D1D1F]" : "text-[#86868B]"}`}>
                Annual Sponsor{" "}
                <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-600 border border-rose-100">
                  Sustain Long-Term FOSS
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Tiers Grid */}
        <section className="mx-auto max-w-6xl px-6 -mt-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`reveal delay-${idx + 1} flex flex-col rounded-[28px] border bg-white p-8 shadow-card transition-all duration-300 ${
                  tier.featured
                    ? "border-rose-600 ring-2 ring-rose-600/30 relative lg:-translate-y-4 shadow-xl"
                    : "border-black/[0.06] hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-rose-600 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                    Community Funded
                  </div>
                )}

                <div>
                  <span className="inline-block rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#86868B]">
                    {tier.badge}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1D1D1F]">{tier.name}</h2>
                  <p className="mt-2 text-sm text-[#86868B] leading-relaxed">{tier.description}</p>
                </div>

                <div className="my-8 border-y border-black/[0.06] py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
                      {annual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    {tier.period && (
                      <span className="text-xs text-[#86868B]">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="flex-1 space-y-3.5">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-rose-600" aria-hidden="true" />
                      <span className={feature.startsWith("Everything in") ? "font-bold text-[#1D1D1F]" : "text-[#86868B]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4">
                  <Button
                    size="lg"
                    className={`w-full h-12 rounded-full font-semibold ${
                      tier.featured
                        ? "bg-rose-600 hover:bg-rose-500 text-white shadow-sm"
                        : "bg-[#E8E8ED] hover:bg-[#DFDFE4] text-[#1D1D1F]"
                    }`}
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
          <div className="reveal delay-2 rounded-[32px] border border-black/[0.06] bg-white p-8 sm:p-12 shadow-card">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 uppercase tracking-wider">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  Our Open Source Covenant
                </span>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl text-[#1D1D1F]">
                  Zero telemetry. No ads. Uncompromised privacy.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#86868B]">
                  Orchard will never sell user data, inject tracking scripts, or place educational resources behind paywalls.
                  All software is peer-auditable and distributed under permissive open licenses for the benefit of humanity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/[0.06] bg-[#F5F5F7] p-4 text-center">
                  <div className="text-2xl font-extrabold text-rose-600">100%</div>
                  <div className="mt-1 text-xs text-[#86868B]">Free & Open Source</div>
                </div>
                <div className="rounded-2xl border border-black/[0.06] bg-[#F5F5F7] p-4 text-center">
                  <div className="text-2xl font-extrabold text-[#1D1D1F]">0</div>
                  <div className="mt-1 text-xs text-[#86868B]">Tracking scripts</div>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-2xl border border-black/[0.06] bg-[#F5F5F7] p-4 text-center">
                  <div className="text-2xl font-extrabold text-rose-600">Offline</div>
                  <div className="mt-1 text-xs text-[#86868B]">By default</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Matrix */}
        <section className="mx-auto mt-28 max-w-6xl px-6">
          <div className="reveal text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">
              Compare features across tiers
            </h2>
            <p className="mt-3 text-[#86868B]">
              Every single core feature is included free of charge for all users.
            </p>
          </div>

          <div className="reveal delay-1 mt-12 overflow-x-auto rounded-[24px] border border-black/[0.06] bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/[0.06] bg-[#F5F5F7]">
                  <th className="p-4 sm:p-5 font-bold text-[#1D1D1F]">Feature</th>
                  <th className="p-4 sm:p-5 font-bold text-center text-[#1D1D1F]">Community ($0)</th>
                  <th className="p-4 sm:p-5 font-bold text-center text-rose-600">Supporter</th>
                  <th className="p-4 sm:p-5 font-bold text-center text-[#1D1D1F]">Resilience Hubs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {featureComparison.map((section) => (
                  <tr key={section.category} className="contents">
                    <td
                      colSpan={4}
                      className="bg-[#FAFAFA] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#86868B]"
                    >
                      {section.category}
                    </td>
                    {section.rows.map((row) => (
                      <tr key={row.name} className="hover:bg-[#F5F5F7]/60 transition-colors">
                        <td className="px-5 py-4 font-medium text-[#1D1D1F]">{row.name}</td>
                        <td className="px-5 py-4 text-center">
                          {row.free ? (
                            <Check className="mx-auto size-4 text-rose-600" aria-hidden="true" />
                          ) : (
                            <span className="text-xs text-[#86868B]">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center">
                          {row.supporter ? (
                            <Check className="mx-auto size-4 text-rose-600" aria-hidden="true" />
                          ) : (
                            <span className="text-xs text-[#86868B]">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center">
                          {row.hubs ? (
                            <Check className="mx-auto size-4 text-rose-600" aria-hidden="true" />
                          ) : (
                            <span className="text-xs text-[#86868B]">—</span>
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
          <div className="reveal text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-[#86868B]">
              Questions about our public goods philosophy, mesh hardware, and deployment.
            </p>
          </div>

          <div className="reveal delay-1 mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-black/[0.06] bg-white px-6 py-2 shadow-card"
                >
                  <AccordionTrigger className="text-base font-bold text-[#1D1D1F] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#86868B]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Download CTA */}
        <section className="reveal delay-2 mx-auto mt-28 max-w-5xl px-6 text-center">
          <div className="rounded-[32px] border border-black/[0.06] bg-white p-10 sm:p-16 shadow-card">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">
              Carry human knowledge and mesh power everywhere
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#86868B]">
              Free, open source, and available natively for iOS, iPadOS, macOS, and Apple Watch.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="h-13 px-8 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold shadow-sm" asChild>
                <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
                  <Apple className="size-5 mr-1" aria-hidden="true" />
                  Download for iOS
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="h-13 px-7 rounded-full bg-[#E8E8ED] hover:bg-[#DFDFE4] text-[#1D1D1F] font-semibold" asChild>
                <a href={STORE_LINKS.macos} target="_blank" rel="noopener noreferrer">
                  <Monitor className="size-5 mr-1" aria-hidden="true" />
                  macOS & watchOS
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-7 rounded-full border border-black/[0.12] bg-white text-[#1D1D1F] font-semibold" asChild>
                <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="size-5 mr-1" aria-hidden="true" />
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
