import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  HelpCircle,
  Search,
  Sparkles,
  BookOpen,
  Radio,
  Globe2,
  Share2,
  ShieldCheck,
  Cpu,
  Apple,
  Monitor,
  Github,
  MessageSquare,
  Mail,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/Download";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { STORE_LINKS } from "@/lib/store-links";

const title = "Frequently Asked Questions — Orchard Super-App";
const description =
  "Comprehensive answers to all questions about Orchard: offline knowledge archives, LoRa and Bluetooth mesh radio, local provision mapping, and open-source privacy.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://orchard-website.lovable.app/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://orchard-website.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const categories = [
  "All",
  "General & Philosophy",
  "Offline Knowledge",
  "Mesh Radio & Chat",
  "Local Provisions & Mutual Aid",
  "Fediverse & Open Social",
  "Sponsors and Future Products",
] as const;

const allFaqs: FaqItem[] = [
  // General & Philosophy
  {
    id: "gen-1",
    category: "General & Philosophy",
    question: "What is Orchard?",
    answer:
      "Orchard is a decentralized, off-grid-first multimedia knowledge hub, peer-to-peer mesh communications network, and local community resilience exchange. Built natively in Swift 6 and SwiftUI for Apple devices (iOS, iPadOS, macOS, and watchOS), Orchard ensures you stay informed, connected, and capable even when internet, power grids, or cellular infrastructure fail.",
  },
  {
    id: "gen-2",
    category: "General & Philosophy",
    question: "Is Orchard free and open source?",
    answer:
      "Yes. Orchard is 100% Free and Open Source Software (FOSS) distributed under permissive open licenses. There are no locked features, paywalls, advertisements, or venture-capital surveillance. All source code is publicly auditable on GitHub.",
  },
  {
    id: "gen-3",
    category: "General & Philosophy",
    question: "Does Orchard require creating an account or providing personal info?",
    answer:
      "No. Orchard does not require accounts, usernames, phone numbers, or email addresses. Your identity is an on-device cryptographic keypair (secp256k1). All databases, bookmarks, and keys reside strictly in encrypted local SQLite storage on your physical hardware.",
  },
  {
    id: "gen-4",
    category: "General & Philosophy",
    question: "What Apple platforms and operating systems are supported?",
    answer:
      "Orchard is engineered specifically for Apple silicon with native SwiftUI interfaces for iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+ Sonoma/Sequoia), and Apple Watch (watchOS 10+).",
  },
  {
    id: "gen-5",
    category: "General & Philosophy",
    question: "Is Orchard available on Android, Windows, or Linux?",
    answer:
      "Orchard's primary client is crafted exclusively in native Swift 6 to take maximum advantage of Apple Silicon performance, battery efficiency, and CoreBluetooth/Metal APIs. However, because our underlying mesh radio protocols (Meshtastic/LoRa) and archives (Kiwix ZIM) adhere to global open standards, Orchard seamlessly communicates with standard open hardware and cross-platform mesh nodes.",
  },

  // Offline Knowledge
  {
    id: "know-1",
    category: "Offline Knowledge",
    question: "How do offline encyclopedias and educational modules work?",
    answer:
      "Orchard integrates an embedded high-speed Kiwix ZIM archive reader. You can download compressed, searchable snapshots of full Wikipedia (with or without images), MDWiki medical handbooks, Project Gutenberg literature, and interactive PhET science simulations once. They remain permanently readable offline without any internet connection.",
  },
  {
    id: "know-2",
    category: "Offline Knowledge",
    question: "How much device storage do the offline libraries require?",
    answer:
      "You have full granular control over what you download. Vital emergency first-aid guides and survival handbooks require only a few hundred megabytes. Modular vocational courses or curated Wikipedia summaries take 2 to 5 GB. Full comprehensive encyclopedias with high-resolution media can range from 10 GB to 90 GB.",
  },
  {
    id: "know-3",
    category: "Offline Knowledge",
    question: "What educational disciplines and course subjects are included?",
    answer:
      "Orchard includes 60+ course disciplines organized into 7 foundational areas: Health & Medicine, Applied Engineering & Electronics, Agriculture & Food Systems, Computer Science & Cryptography, Mathematics & Physical Sciences, Disaster Preparedness & Survival, and Humanities & History.",
  },
  {
    id: "know-4",
    category: "Offline Knowledge",
    question: "How does Spatial Audio with live transcripts work offline?",
    answer:
      "Orchard features a native Lossless Spatial Audio player that synchronizes time-coded instructional transcripts with recorded audio lectures. You can listen with head-tracking on AirPods, read along with real-time word highlighting, or switch between video and audio modes to conserve device battery during off-grid use.",
  },

  // Mesh Radio & Chat
  {
    id: "mesh-1",
    category: "Mesh Radio & Chat",
    question: "How does peer-to-peer mesh messaging work in an emergency?",
    answer:
      "When cellular base stations fail, Orchard automatically switches to local peer-to-peer radio transport. Devices within range connect directly via Bluetooth Low Energy (BLE). For multi-mile reach, Orchard connects to portable Long Range (LoRa) packet radio transceivers, hopping encrypted messages across nodes until reaching the destination.",
  },
  {
    id: "mesh-2",
    category: "Mesh Radio & Chat",
    question: "How are messages encrypted across the radio mesh?",
    answer:
      "Every direct and group dispatch is cryptographically secured with the Signal Protocol Double Ratchet algorithm using secp256k1 keys. Intermediate mesh nodes forward encrypted packets without ever having access to message plaintext or sender identity.",
  },
  {
    id: "mesh-3",
    category: "Mesh Radio & Chat",
    question: "What external hardware do I need for LoRa packet radio?",
    answer:
      "For close-range mesh (around your home, office, or neighborhood block), zero external hardware is required—Orchard uses your device's built-in Bluetooth Low Energy. For long-range radio spanning 1 to 10+ miles, Orchard pairs wirelessly with any standard Meshtastic-compatible LoRa radio (such as Heltec V3, LilyGO T-Beam, or RAK Wireless nodes).",
  },
  {
    id: "mesh-4",
    category: "Mesh Radio & Chat",
    question: "Can I receive emergency alerts on my Apple Watch?",
    answer:
      "Yes. Orchard's watchOS app receives critical broadcast alerts, displays offline emergency survival cards, and allows quick status replies directly from your wrist while your iPhone remains safely stored in a waterproof pack.",
  },
  {
    id: "mesh-5",
    category: "Mesh Radio & Chat",
    question: "Where can I find hardware assembly blueprints and solar repeater guides?",
    answer:
      "Complete 3D-printable enclosure models, solar panel wiring diagrams, and battery power management blueprints for standalone hilltop repeater stations are published in our open GitHub documentation repository.",
  },
  {
    id: "mesh-6",
    category: "Mesh Radio & Chat",
    question: "Can schools, clinics, and rural libraries deploy Orchard in bulk?",
    answer:
      "Yes! Because Orchard is open source, educators and organizers can deploy Orchard across classroom sets of iPads or Macs without licensing fees, per-seat subscriptions, or internet provisioning requirements.",
  },

  // Local Provisions & Mutual Aid
  {
    id: "prov-1",
    category: "Local Provisions & Mutual Aid",
    question: "What are the 21 provision categories?",
    answer:
      "Orchard organizes localized resource mapping across 21 vital resilience categories: Food Staples, Grains, Bakery, Meats, Poultry, Seafood, Produce, Nuts, Herbs, Citrus, Clean Spring Water, Dairy, Medical Supplies, Firewood, Seed Banks, Tool Libraries, Solar Charging Stations, Timber, Metal Fabrication, Textiles, and Animal Feed.",
  },
  {
    id: "prov-2",
    category: "Local Provisions & Mutual Aid",
    question: "How does the 3D Connection Globe work without cell service?",
    answer:
      "The connection map renders a vector-tiled 3D globe cached directly on your device. It integrates regional transit routes (passenger rail, commuter trains, ferry lines) and local resource points without making live API calls to Google Maps or Apple Maps servers.",
  },
  {
    id: "prov-3",
    category: "Local Provisions & Mutual Aid",
    question: "How do neighbors share tools and coordinate mutual aid events?",
    answer:
      "Users can broadcast local exchange listings (e.g. 'Tool Library: Chainsaw available', 'Seed Swap: Heirloom tomato seedlings', 'Community Water Clinic') over local BLE and LoRa radio channels. Listings sync automatically whenever two Orchard nodes pass within proximity.",
  },

  // Fediverse & Open Social
  {
    id: "fedi-1",
    category: "Fediverse & Open Social",
    question: "Which decentralized networks does Orchard support?",
    answer:
      "Orchard supports ActivityPub (Mastodon), AT Protocol (Bluesky), Lemmy discussion forums, Nostr relays (NIP-01, NIP-04, NIP-44 encrypted DMs), and standard RSS/Atom feeds in one unified, calm stream.",
  },
  {
    id: "fedi-2",
    category: "Fediverse & Open Social",
    question: "Is there any algorithmic feed manipulation or advertising?",
    answer:
      "None. All feeds are strictly chronological. There are no engagement-maximizing recommendation algorithms, no sponsored promotions, and no cross-site tracking pixels.",
  },
  {
    id: "fedi-3",
    category: "Fediverse & Open Social",
    question: "Can I read social feeds and forum threads offline?",
    answer:
      "Yes. Whenever your device is connected to Wi-Fi or cellular, Orchard caches subscribed channels and threads in local storage so you can read long-form articles, forum discussions, and tutorials while disconnected.",
  },

  // Sponsors and Future Products
  {
    id: "sponsor-1",
    category: "Sponsors and Future Products",
    question: "How is Orchard funded, and how can I support development?",
    answer:
      "Orchard is 100% independently developed and funded through voluntary community sponsorships, public goods grants, and open-source contributions. Because Orchard has no corporate investors, advertisements, or paid subscriptions, community sponsorships on our /pricing page (via GitHub Sponsors) directly sustain full-time Swift 6 development, infrastructure costs, and hardware prototyping.",
  },
  {
    id: "sponsor-2",
    category: "Sponsors and Future Products",
    question: "What hardware R&D (LoRa and Wi-Fi HaLow) does funding directly support?",
    answer:
      "A primary portion of sponsorship funds is dedicated to physical hardware research and development for decentralized communications. We are actively developing custom LoRa packet radio nodes and long-range Wi-Fi HaLow (802.11ah) transceiver devices. Operating in the sub-gigahertz (900 MHz) spectrum, Wi-Fi HaLow enables multi-megabit data throughput over kilometer-scale distances at ultra-low power—allowing off-grid communities to transmit rich media, audio, and large Kiwix ZIM encyclopedic articles without cell towers or internet service.",
  },
  {
    id: "sponsor-3",
    category: "Sponsors and Future Products",
    question: "Why does Orchard strictly reject ads, data monetization, and venture capital?",
    answer:
      "We believe that emergency communications, medical knowledge, and educational tools are fundamental human rights. Monetizing user data through advertising networks, tracking trackers, or selling personal metadata completely compromises user safety and sovereignty during crises. Orchard operates with zero telemetry and zero tracking, making community patrons and public grants our sole and trusted foundation.",
  },
  {
    id: "sponsor-4",
    category: "Sponsors and Future Products",
    question: "Can I nominate or recommend Orchard for technology grants, fellowships, or scholarships?",
    answer:
      "Yes! We actively welcome nominations and introductions for open-source software grants, philanthropic research fellowships, digital public goods funds, and humanitarian technology grants. If you represent or know of a grantmaking institution, foundation, or academic fellowship, please reach out directly to Daniel Austin at hello@imdanielaustin.com.",
  },
  {
    id: "sponsor-5",
    category: "Sponsors and Future Products",
    question: "What physical products, devices, and features are planned on the roadmap?",
    answer:
      "Our roadmap includes turnkey weatherproof solar mesh repeaters for mountaintop and rooftop deployment, plug-and-play Wi-Fi HaLow long-range radios, portable disaster resilience kits with preloaded local ZIM archives, and specialized offline vocational training curriculum bundles.",
  },
  {
    id: "sponsor-6",
    category: "Sponsors and Future Products",
    question: "How can hardware engineers, academic institutions, or sponsors get in touch?",
    answer:
      "For custom hardware testing, academic research partnerships, institutional grant disbursements, or direct sponsorships, please email project founder Daniel Austin directly at hello@imdanielaustin.com.",
  },
];

function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3]">
      <SiteHeader />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F6F4F3] via-[#F6F4F3] to-[#EAE5E2] dark:from-[#290B00] dark:via-[#290B00] dark:to-[#1C0700] border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-20 sm:py-28">
          <div className="reveal mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#290B00] dark:text-[#F6F4F3] shadow-sm">
              <HelpCircle className="size-3.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
              Knowledge Base & Documentation
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#290B00]/70 dark:text-[#F6F4F3]/70 leading-relaxed">
              Clear answers on how Orchard keeps you informed, connected, and self-reliant — online or completely off the grid.
            </p>

            {/* Search Input Bar */}
            <div className="mx-auto mt-10 max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 size-5 text-[#290B00]/50 dark:text-[#F6F4F3]/50 pointer-events-none" aria-hidden="true" />
                <Input
                  type="search"
                  placeholder="Search questions (e.g., LoRa, Wikipedia, Apple Watch, privacy, SQLite)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 rounded-full pl-12 pr-6 border-[#290B00]/15 dark:border-[#F6F4F3]/20 bg-[#F6F4F3] dark:bg-[#381406] text-[#290B00] dark:text-[#F6F4F3] placeholder:text-[#290B00]/40 dark:placeholder:text-[#F6F4F3]/40 shadow-sm focus:bg-white dark:focus:bg-[#481C0C] text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Filter Tabs */}
        <section className="mx-auto max-w-6xl px-6 mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#290B00] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:text-[#290B00] shadow-sm"
                    : "bg-[#EAE5E2] dark:bg-[#381406] text-[#290B00]/70 dark:text-[#F6F4F3]/70 hover:text-[#290B00] dark:hover:text-[#F6F4F3] hover:bg-[#DDD6D2] dark:hover:bg-[#481C0C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count Header */}
          <div className="mt-8 flex items-center justify-between text-xs font-medium text-[#290B00]/60 dark:text-[#F6F4F3]/60 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 pb-4">
            <span>
              Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? "question" : "questions"}
              {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
              {searchQuery ? ` matching "${searchQuery}"` : ""}
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#290B00] dark:text-[#F6F4F3] underline hover:opacity-80"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Accordion Questions List */}
          <div className="mt-8">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="reveal rounded-[24px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] px-6 sm:px-8 py-2 shadow-card transition-all"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-[#290B00] dark:text-[#F6F4F3] hover:no-underline py-4">
                      <span className="flex items-center gap-3">
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base leading-relaxed text-[#290B00]/70 dark:text-[#F6F4F3]/70 pt-2 pb-6 border-t border-[#290B00]/5 dark:border-[#F6F4F3]/10 mt-2">
                      <p>{faq.answer}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#290B00]/50 dark:text-[#F6F4F3]/50">
                        <span className="rounded-md bg-[#EAE5E2] dark:bg-[#481C0C] px-2 py-0.5">
                          {faq.category}
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="rounded-[28px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-12 text-center">
                <HelpCircle className="mx-auto size-8 text-[#290B00]/40 dark:text-[#F6F4F3]/40" />
                <h3 className="mt-4 text-lg font-bold text-[#290B00] dark:text-[#F6F4F3]">
                  No matching questions found
                </h3>
                <p className="mt-2 text-sm text-[#290B00]/70 dark:text-[#F6F4F3]/70">
                  Try adjusting your search terms or selecting a different category.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-6 rounded-full bg-[#EAE5E2] dark:bg-[#481C0C] text-[#290B00] dark:text-[#F6F4F3]"
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Still have questions banner */}
        <section className="reveal mx-auto mt-24 max-w-5xl px-6">
          <div className="rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#381406] p-8 sm:p-12 shadow-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#290B00] dark:text-[#F6F4F3] uppercase tracking-wider">
                  <MessageSquare className="size-4" aria-hidden="true" />
                  Community & Support
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#290B00] dark:text-[#F6F4F3]">
                  Have a question, grant lead, or partnership idea?
                </h3>
                <p className="mt-2 text-sm text-[#290B00]/70 dark:text-[#F6F4F3]/70 max-w-xl leading-relaxed">
                  Join our open community on GitHub Discussions or contact Daniel Austin directly for hardware inquiries, grant nominations, and institutional sponsorships at{" "}
                  <a href="mailto:hello@imdanielaustin.com" className="font-semibold text-[#290B00] dark:text-[#F6F4F3] underline hover:opacity-80">
                    hello@imdanielaustin.com
                  </a>.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-semibold"
                  asChild
                >
                  <a href="mailto:hello@imdanielaustin.com">
                    <Mail className="size-4 mr-2" aria-hidden="true" />
                    Email Daniel Austin
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border border-[#290B00]/15 dark:border-[#F6F4F3]/20 bg-[#F6F4F3] dark:bg-[#381406] text-[#290B00] dark:text-[#F6F4F3] font-semibold hover:bg-[#EAE5E2] dark:hover:bg-[#481C0C]"
                  asChild
                >
                  <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
                    <Github className="size-4 mr-2" aria-hidden="true" />
                    GitHub Discussions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="reveal mx-auto mt-24 max-w-5xl px-6 text-center">
          <div className="rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-10 sm:p-16 shadow-card">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-4xl">
              Carry human knowledge and mesh power everywhere
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
