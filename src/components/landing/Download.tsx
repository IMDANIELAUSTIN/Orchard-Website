import { Apple, Monitor, Watch, Github, Share2, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/lib/store-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need an internet connection to use Orchard?",
    answer:
      "No. Orchard is built offline-first. Educational courses, encyclopedias (Wikipedia/MDWiki), passenger rail maps, and local peer-to-peer mesh chats work 100% without internet or cellular reception once downloaded.",
  },
  {
    question: "Does Orchard require an account or phone number?",
    answer:
      "No. Your identity is an on-device cryptographic keypair (secp256k1). You never provide an email, phone number, or identity documents. Your keys and local database never leave your device.",
  },
  {
    question: "How does mesh messaging work in an emergency?",
    answer:
      "Your device connects to nearby peers via Bluetooth Low Energy (BLE) and portable LoRa packet radio transceivers, hopping encrypted packets from node to node across miles with Signal Double Ratchet forward secrecy—no cell towers or ISPs needed.",
  },
  {
    question: "What platforms does Orchard run on?",
    answer:
      "Orchard is built natively in SwiftUI for iPhone (iOS), iPad (iPadOS), Mac (macOS), and Apple Watch (watchOS).",
  },
  {
    question: "How do the 21 provision categories work?",
    answer:
      "You can discover and map local food forests, farmers markets, spring water sources, seed banks, and tool libraries categorized across Timber, Metal, Textiles, Food Staples, Grains, Bakery, Meats, Seafood, Produce, Nuts, Herbs, and Citrus with offline caching.",
  },
];

export function Download() {
  return (
    <section id="download" className="border-t border-black/[0.06] py-24 bg-[#F5F5F7]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main CTA banner */}
        <div className="reveal rounded-[32px] border border-black/[0.06] bg-white p-10 sm:p-16 text-center shadow-card">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#F5F5F7] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 shadow-sm">
            <Sparkles className="size-3.5" aria-hidden="true" />
            100% Free & Open Source
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-5xl">
            Keep the orchard of human knowledge and community alive.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[#86868B]">
            Carry resilient communications, massive offline libraries, and neighborhood mutual-aid in your pocket.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-13 px-8 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-base shadow-lg shadow-rose-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
                <Apple className="size-5 mr-1" aria-hidden="true" />
                Get Orchard for iOS
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="h-13 px-7 rounded-full bg-[#E8E8ED] hover:bg-[#DFDFE4] text-[#1D1D1F] font-semibold text-base"
              asChild
            >
              <a href={STORE_LINKS.macos} target="_blank" rel="noopener noreferrer">
                <Monitor className="size-5 mr-1" aria-hidden="true" />
                macOS & iPadOS
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-7 rounded-full border border-black/[0.12] bg-white hover:bg-black/[0.03] text-[#1D1D1F] font-semibold text-base"
              asChild
            >
              <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-5 mr-1" aria-hidden="true" />
                GitHub Repository
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-7 rounded-full border border-black/[0.12] bg-white hover:bg-black/[0.03] text-[#1D1D1F] font-semibold text-base"
              asChild
            >
              <a href={STORE_LINKS.fediverse} target="_blank" rel="noopener noreferrer">
                <Share2 className="size-5 mr-1" aria-hidden="true" />
                Mastodon / Lemmy
              </a>
            </Button>
          </div>
        </div>

        {/* Integrated FAQ */}
        <div className="reveal delay-2 mt-24 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-sm text-[#86868B]">
              Everything you need to know about Orchard's offline architecture and mesh network.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full space-y-3.5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-black/[0.06] bg-white px-6 py-1.5 shadow-card"
                >
                  <AccordionTrigger className="text-base font-bold text-[#1D1D1F] hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#86868B]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] py-12 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-[#86868B] sm:flex-row">
        <div>
          <p className="font-bold text-[#1D1D1F]">Orchard Super-App</p>
          <p className="text-xs text-[#86868B] mt-1">
            © {new Date().getFullYear()} Orchard Project. Free & Open Source Software (FOSS).
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-xs sm:text-sm font-medium">
          <a href="/#pillars" className="transition-colors hover:text-[#1D1D1F]">
            Pillars
          </a>
          <a href="/#features" className="transition-colors hover:text-[#1D1D1F]">
            Capabilities
          </a>
          <a href="/#how" className="transition-colors hover:text-[#1D1D1F]">
            How it works
          </a>
          <a href="/#specs" className="transition-colors hover:text-[#1D1D1F]">
            Tech Specs
          </a>
          <a href="/pricing" className="transition-colors hover:text-[#1D1D1F]">
            Open Source
          </a>
          <a href="/blog" className="transition-colors hover:text-[#1D1D1F]">
            Blog
          </a>
          <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#1D1D1F]">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
