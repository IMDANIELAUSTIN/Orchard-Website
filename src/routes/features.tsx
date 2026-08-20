import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Radio,
  Globe2,
  Share2,
  ShieldCheck,
  Cpu,
  Layers,
  Headphones,
  Watch,
  Lock,
  WifiOff,
  Sparkles,
  Apple,
  Monitor,
  Github,
  Zap,
  CheckCircle2,
  Check,
  ChevronRight,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  HardDrive,
  Compass,
  Repeat,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/lib/store-links";

const title = "Features & Technical Architecture — Orchard Super-App";
const description =
  "Deep dive into Orchard: offline Kiwix ZIM knowledge engine, LoRa and BLE mesh networking, 21-category local exchange, unified Fediverse streams, and sovereign SQLite security.";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://orchard-website.lovable.app/features" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://orchard-website.lovable.app/features" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Orchard",
          operatingSystem: "iOS, iPadOS, macOS, watchOS",
          applicationCategory: "UtilityApplication, EducationApplication, CommunicationApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          description: description,
        }),
      },
    ],
  }),
  component: FeaturesPage,
});

const featurePillars = [
  {
    id: "knowledge",
    badge: "Pillar 01",
    tag: "Offline Knowledge Hub",
    icon: BookOpen,
    title: "Massive Human Knowledge Engine, Stored On-Device",
    subtitle:
      "Carry Wikipedia, medical textbooks, vocational training, and interactive STEM simulations anywhere on Earth—completely offline.",
    capabilities: [
      {
        name: "Kiwix ZIM Compressed Archive Engine",
        desc: "Sub-second indexing and full-text search across gigabytes of encyclopedia and textbook archives without internet.",
      },
      {
        name: "Complete MDWiki & WikiMed Medical Guides",
        desc: "Field surgical guides, emergency pharmacology handbooks, first-aid protocols, and diagnostic references.",
      },
      {
        name: "60+ Course Disciplines across 7 Subject Areas",
        desc: "Complete curricula spanning Engineering, Medicine, Sustainable Agriculture, Cryptography, Math, and Survival.",
      },
      {
        name: "Interactive PhET Science Simulations",
        desc: "Touch-interactive physics, electronics, and chemistry models running directly on Apple Silicon GPUs.",
      },
      {
        name: "Lossless Spatial Audio with Live Synced Transcripts",
        desc: "Follow word-for-word lecture transcripts with AirPods head tracking, or switch to audio-only to save battery.",
      },
    ],
    highlight: "Zero cloud dependencies • 100% local fast SQLite search • Instant startup",
  },
  {
    id: "mesh",
    badge: "Pillar 02",
    tag: "Mesh Communications",
    icon: Radio,
    title: "Decentralized P2P & LoRa Packet Radio Mesh",
    subtitle:
      "When cellular base stations and power grids go dark, Orchard hops encrypted messages device-to-device across miles of terrain.",
    capabilities: [
      {
        name: "Signal Double Ratchet End-to-End Encryption",
        desc: "Every dispatch is cryptographically locked with secp256k1 keys. Intermediate relay nodes cannot read content.",
      },
      {
        name: "Bluetooth Low Energy (BLE) Local Hops",
        desc: "Direct device-to-device communication around homes, buildings, or neighborhood blocks with zero extra hardware.",
      },
      {
        name: "LoRa Packet Radio Integration (Meshtastic Standard)",
        desc: "Pair inexpensive, long-range 915MHz/868MHz/433MHz transceivers over Bluetooth for 1-to-10+ mile range.",
      },
      {
        name: "Multi-Hop Packet Relaying",
        desc: "Messages automatically route and hop across neighboring nodes until reaching the recipient securely.",
      },
      {
        name: "watchOS Emergency Survival Alerts",
        desc: "Receive emergency broadcast cards and send quick status responses directly from your wrist while on the move.",
      },
    ],
    highlight: "No cell towers needed • No SIM card required • Military-grade forward secrecy",
  },
  {
    id: "exchange",
    badge: "Pillar 03",
    tag: "Local Resilience & Mutual Aid",
    icon: Globe2,
    title: "21-Category Resource Map & 3D Connection Globe",
    subtitle:
      "Know exactly where food forests, clean spring water, tool libraries, and medical provisions exist in your community.",
    capabilities: [
      {
        name: "21 Essential Provision Categories",
        desc: "Food Staples, Clean Water, Seed Banks, Produce, Timber, Tools, Solar Charging, Medical Supplies, and Livestock Feed.",
      },
      {
        name: "3D Vector-Tiled Offline Globe",
        desc: "Render a fluid 3D globe with regional topology and offline transit paths without querying Google or Apple Maps servers.",
      },
      {
        name: "Passenger Rail & Transit Navigation",
        desc: "Step-by-step navigation across national passenger rail networks, commuter train corridors, and ferry lines.",
      },
      {
        name: "Peer-to-Peer Proximity Listing Sync",
        desc: "Broadcast available provisions, seed exchanges, and mutual-aid requests that synchronize when passing other Orchard users.",
      },
      {
        name: "Community Resilience Checklists",
        desc: "Pre-built emergency preparedness workflows, water purification guides, and local coordination templates.",
      },
    ],
    highlight: "100% offline maps • Community sovereignty • Direct peer-to-peer bartering",
  },
  {
    id: "fediverse",
    badge: "Pillar 04",
    tag: "Decentralized Social Stream",
    icon: Share2,
    title: "Unified Fediverse Hub: Mastodon, Bluesky, Lemmy & Nostr",
    subtitle:
      "All your decentralized communities in one chronological, calm stream—free from advertising algorithms and toxic outrage feeds.",
    capabilities: [
      {
        name: "ActivityPub (Mastodon) & AT Protocol (Bluesky)",
        desc: "Seamlessly follow accounts, browse hashtags, and publish updates across decentralized social networks.",
      },
      {
        name: "Lemmy Community Discussion Forums",
        desc: "Participate in decentralized forum discussions, submit links, and upvote community field guides.",
      },
      {
        name: "Nostr Protocol Relays with Encrypted DMs",
        desc: "Censorship-resistant global broadcasts with NIP-01 notes and NIP-04/NIP-44 end-to-end encrypted direct messaging.",
      },
      {
        name: "Full Offline Reading & Automatic Caching",
        desc: "Orchard caches subscribed channels when connected to Wi-Fi so you can read articles and threads while off-grid.",
      },
      {
        name: "16 Categorized Chronological Channels",
        desc: "Organized by interest without manipulative ranking algorithms, sponsored posts, or cross-site tracking pixels.",
      },
    ],
    highlight: "Zero algorithmic manipulation • Zero advertisements • 100% chronological",
  },
  {
    id: "privacy",
    badge: "Pillar 05",
    tag: "Sovereign Architecture",
    icon: ShieldCheck,
    title: "Zero Accounts. Zero Telemetry. 100% Sandboxed.",
    subtitle:
      "Your device is your castle. Orchard stores everything on physical flash memory, secured with mathematical cryptographic keys.",
    capabilities: [
      {
        name: "Cryptographic Identity (secp256k1 Keys)",
        desc: "Never hand over your phone number, email address, or government ID. You generate and hold your own private keys.",
      },
      {
        name: "Encrypted Local SQLite Database",
        desc: "All bookmarks, chat histories, offline provisions, and downloaded archives live safely in sandboxed local storage.",
      },
      {
        name: "Zero Telemetry & Zero Analytics Trackers",
        desc: "No Google Analytics, no Facebook SDKs, no tracking pixels. We never know what you search, read, or say.",
      },
      {
        name: "Native Swift 6 & Metal Performance",
        desc: "Engineered specifically for Apple Silicon M-series and A-series chips for maximum battery life and speed.",
      },
      {
        name: "Permissive Open Source Licensing",
        desc: "Every line of source code is open, inspectable, and auditable by the global security community on GitHub.",
      },
    ],
    highlight: "No cloud account lock-in • Auditable open source • Ultra-low battery drain",
  },
];

const technicalSpecs = [
  { spec: "Programming Language", value: "Swift 6 (Native SwiftUI & Swift Concurrency)" },
  { spec: "Supported Platforms", value: "iOS 17+, iPadOS 17+, macOS 14+ (Sonoma/Sequoia), watchOS 10+" },
  { spec: "Offline Archive Engine", value: "Kiwix ZIM (Wikipedia, MDWiki, Gutenberg, PhET)" },
  { spec: "Mesh Encryption", value: "Signal Protocol Double Ratchet (secp256k1 / AES-256-GCM)" },
  { spec: "Radio Protocols", value: "Bluetooth Low Energy (BLE) & LoRa (Meshtastic 915/868/433 MHz)" },
  { spec: "Upcoming Radio R&D", value: "Wi-Fi HaLow (IEEE 802.11ah sub-GHz long-range)" },
  { spec: "Decentralized Social", value: "ActivityPub (Mastodon), AT Protocol (Bluesky), Lemmy, Nostr (NIP-01/04/44)" },
  { spec: "Local Database", value: "Sandboxed SQLite with WAL mode & AES encryption" },
  { spec: "Tracking & Telemetry", value: "0.0% (Zero analytics, zero trackers, zero phone numbers)" },
  { spec: "License", value: "Permissive Free & Open Source Software (FOSS)" },
];

function FeaturesPage() {
  const [activePillar, setActivePillar] = useState<string>("knowledge");

  return (
    <div className="min-h-screen bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3]">
      <SiteHeader />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F6F4F3] via-[#F6F4F3] to-[#EAE5E2] dark:from-[#290B00] dark:via-[#290B00] dark:to-[#1C0700] border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-20 sm:py-28">
          <div className="reveal mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#290B00] dark:text-[#F6F4F3] shadow-sm">
              <Sparkles className="size-3.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
              Full Technical Specifications & Architecture
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-6xl">
              Engineered for Complete Self-Reliance
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#290B00]/70 dark:text-[#F6F4F3]/70 leading-relaxed">
              Orchard converges massive offline encyclopedias, peer-to-peer radio meshes, local food resilience mapping, and decentralized Fediverse streams into one native Apple super-app.
            </p>

            {/* Quick Spec Highlights Bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-[#290B00]/80 dark:text-[#F6F4F3]/80">
              <span className="rounded-full bg-[#EAE5E2] dark:bg-[#381406] px-3.5 py-1.5 border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
                Kiwix ZIM Engine
              </span>
              <span className="rounded-full bg-[#EAE5E2] dark:bg-[#381406] px-3.5 py-1.5 border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
                Signal Double Ratchet
              </span>
              <span className="rounded-full bg-[#EAE5E2] dark:bg-[#381406] px-3.5 py-1.5 border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
                LoRa Packet Radio
              </span>
              <span className="rounded-full bg-[#EAE5E2] dark:bg-[#381406] px-3.5 py-1.5 border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
                21 Provision Categories
              </span>
              <span className="rounded-full bg-[#EAE5E2] dark:bg-[#381406] px-3.5 py-1.5 border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
                Zero Telemetry
              </span>
            </div>
          </div>
        </section>

        {/* Feature Navigation Pills */}
        <section className="sticky top-14 z-40 bg-[#F6F4F3]/90 dark:bg-[#290B00]/90 backdrop-blur-md border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-4">
          <div className="mx-auto max-w-6xl px-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar">
            {featurePillars.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#381406] text-[#290B00]/70 dark:text-[#F6F4F3]/70 hover:text-[#290B00] dark:hover:text-[#F6F4F3] hover:bg-[#DDD6D2] dark:hover:bg-[#481C0C] transition-all"
              >
                {pillar.tag}
              </a>
            ))}
            <a
              href="#specs"
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#381406] text-[#290B00]/70 dark:text-[#F6F4F3]/70 hover:text-[#290B00] dark:hover:text-[#F6F4F3] hover:bg-[#DDD6D2] dark:hover:bg-[#481C0C] transition-all"
            >
              Specs Matrix
            </a>
          </div>
        </section>

        {/* Feature Pillars Detailed Breakdown */}
        <div className="mx-auto max-w-5xl px-6 mt-16 space-y-24">
          {featurePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <section
                key={pillar.id}
                id={pillar.id}
                className="reveal scroll-mt-28 rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-8 sm:p-12 shadow-card"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#290B00] dark:bg-[#F6F4F3] text-[#F6F4F3] dark:text-[#290B00] shadow-sm">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#290B00]/60 dark:text-[#F6F4F3]/60">
                        {pillar.badge} — {pillar.tag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3]">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-base sm:text-lg text-[#290B00]/80 dark:text-[#F6F4F3]/80 leading-relaxed font-normal">
                  {pillar.subtitle}
                </p>

                {/* Capabilities Grid */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {pillar.capabilities.map((cap) => (
                    <div
                      key={cap.name}
                      className="rounded-2xl border border-[#290B00]/10 dark:border-[#F6F4F3]/10 bg-[#EAE5E2] dark:bg-[#481C0C] p-5 transition-colors"
                    >
                      <h3 className="flex items-center gap-2 text-sm font-bold text-[#290B00] dark:text-[#F6F4F3]">
                        <CheckCircle2 className="size-4 shrink-0 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
                        {cap.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#290B00]/70 dark:text-[#F6F4F3]/70">
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pillar Highlight Footer */}
                <div className="mt-8 pt-4 border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10 flex items-center justify-between text-xs font-semibold text-[#290B00]/60 dark:text-[#F6F4F3]/60">
                  <span>{pillar.highlight}</span>
                </div>
              </section>
            );
          })}

          {/* Technical Specifications Matrix Section */}
          <section
            id="specs"
            className="reveal scroll-mt-28 rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#381406] p-8 sm:p-12 shadow-card"
          >
            <div className="flex items-center gap-3 pb-6 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#290B00] dark:bg-[#F6F4F3] text-[#F6F4F3] dark:text-[#290B00] shadow-sm">
                <Cpu className="size-6" aria-hidden="true" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#290B00]/60 dark:text-[#F6F4F3]/60">
                  Engineering Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3]">
                  Technical Specifications Matrix
                </h2>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#290B00]">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-[#290B00]/10 dark:divide-[#F6F4F3]/15">
                  {technicalSpecs.map((row) => (
                    <tr key={row.spec} className="hover:bg-[#EAE5E2]/50 dark:hover:bg-[#381406]/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-[#290B00] dark:text-[#F6F4F3] w-1/3">
                        {row.spec}
                      </td>
                      <td className="px-6 py-4 text-[#290B00]/80 dark:text-[#F6F4F3]/80">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom Download CTA */}
          <section className="reveal text-center rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-10 sm:p-16 shadow-card">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-4xl">
              Experience the complete Orchard super-app
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#290B00]/70 dark:text-[#F6F4F3]/70">
              Free, open source, and available natively for iOS, iPadOS, macOS, and Apple Watch.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="h-13 px-8 rounded-full bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-semibold shadow-sm border border-transparent dark:border-[#F6F4F3]/20" asChild>
                <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
                  <Apple className="size-5 mr-1" aria-hidden="true" />
                  Download for iOS
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="h-13 px-7 rounded-full bg-[#EAE5E2] hover:bg-[#DDD6D2] text-[#290B00] dark:bg-[#481C0C] dark:hover:bg-[#56220E] dark:text-[#F6F4F3] font-semibold border border-[#290B00]/5 dark:border-[#F6F4F3]/10" asChild>
                <a href={STORE_LINKS.macos} target="_blank" rel="noopener noreferrer">
                  <Monitor className="size-5 mr-1" aria-hidden="true" />
                  macOS & watchOS
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-7 rounded-full border border-[#290B00]/15 dark:border-[#F6F4F3]/20 bg-[#F6F4F3] dark:bg-[#381406] hover:bg-[#EAE5E2] dark:hover:bg-[#481C0C] text-[#290B00] dark:text-[#F6F4F3] font-semibold" asChild>
                <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="size-5 mr-1" aria-hidden="true" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
