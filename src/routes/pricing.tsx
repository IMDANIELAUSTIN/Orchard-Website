import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Apple,
  Smartphone,
  Monitor,
  Sparkles,
  Lock,
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

const title = "Pricing & Plans — Orchard Bitcoin Wallet";
const description =
  "100% free and open-source self-custody bitcoin wallet. Explore standard features, power user supporter options, and institutional custody.";

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

const pricingTiers = [
  {
    name: "Community",
    badge: "100% Free & Open Source",
    priceMonthly: "$0",
    priceAnnual: "$0",
    period: "forever",
    description: "The complete, uncompromising self-custody wallet for everyone.",
    featured: false,
    ctaLabel: "Download Orchard",
    ctaHref: "/#download",
    features: [
      "Unlimited single-sig & 2-of-3 multisig vaults",
      "Hardware signer PSBT integration (Ledger, Trezor, Coldcard, Jade, BitBox)",
      "Instant Lightning Network payments & channel management",
      "Dynamic fee control with RBF bump/cancel & CPFP acceleration",
      "Granular coin control & UTXO labeling",
      "Connect your own Bitcoin Core or Electrum node",
      "Watch-only address & extended public key (xpub) tracking",
      "Plausible deniability decoy vault support",
      "Zero telemetry, zero tracking, zero accounts required",
      "100% Free & Open Source under MIT license",
    ],
  },
  {
    name: "Supporter",
    badge: "For Power Users",
    priceMonthly: "$9",
    priceAnnual: "$89",
    period: "per user / billed annually",
    description: "Cloud convenience, optimized routing, and funding open-source development.",
    featured: true,
    ctaLabel: "Become a Supporter",
    ctaHref: "mailto:support@orchard-website.lovable.app?subject=Orchard%20Supporter%20Plan",
    features: [
      "Everything in Community, plus:",
      "End-to-end encrypted multi-device watch-only sync",
      "High-speed zero-hop Lightning routing liquidity pool",
      "Low-latency private push notification relay server",
      "Automated seed & descriptor backup verification checker",
      "Early beta access to new releases and experimental features",
      "Priority bug triage and feature discussions on GitHub",
      "Official Supporter badge & private developer forum access",
    ],
  },
  {
    name: "Enterprise",
    badge: "Institutions & Family Offices",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    period: "tailored contract",
    description: "High-assurance custody workflows, custom policies, and dedicated engineering.",
    featured: false,
    ctaLabel: "Contact Security Team",
    ctaHref: "mailto:support@orchard-website.lovable.app?subject=Orchard%20Enterprise%20Inquiry",
    features: [
      "Everything in Supporter, plus:",
      "Custom M-of-N threshold signing schemes (e.g. 3-of-5, time-locks)",
      "Multi-user cold storage approval & recovery drill facilitation",
      "Air-gapped deployment & hardware fleet configuration guidance",
      "Dedicated private Electrum node cluster deployment assistance",
      "Custom internal whitelabeling & compliance reporting tools",
      "24/7 dedicated incident response & SLA guarantee",
      "Annual cryptographic audit & key management security review",
    ],
  },
];

const featureMatrix = [
  {
    category: "Custody & Security",
    rows: [
      { name: "Non-custodial (Keys stored on your device only)", community: true, supporter: true, enterprise: true },
      { name: "BIP39 seed phrases & passphrase protection", community: true, supporter: true, enterprise: true },
      { name: "Multisig vaults (2-of-3 out-of-the-box)", community: true, supporter: true, enterprise: true },
      { name: "Custom M-of-N & time-locked scripts", community: false, supporter: false, enterprise: true },
      { name: "Hardware signers via air-gap PSBT / QR / USB", community: true, supporter: true, enterprise: true },
      { name: "Plausible deniability decoy storage", community: true, supporter: true, enterprise: true },
      { name: "Encrypted multi-device sync", community: false, supporter: true, enterprise: true },
    ],
  },
  {
    category: "Transactions & Network",
    rows: [
      { name: "Lightning Network instant micropayments", community: true, supporter: true, enterprise: true },
      { name: "Live mempool fee distribution graph", community: true, supporter: true, enterprise: true },
      { name: "Replace-By-Fee (RBF) bump & cancel", community: true, supporter: true, enterprise: true },
      { name: "Child-Pays-For-Parent (CPFP) acceleration", community: true, supporter: true, enterprise: true },
      { name: "Coin control & manual UTXO selection", community: true, supporter: true, enterprise: true },
      { name: "Custom Electrum / Bitcoin Core node connection", community: true, supporter: true, enterprise: true },
      { name: "High-capacity Lightning routing liquidity", community: false, supporter: true, enterprise: true },
    ],
  },
  {
    category: "Privacy & Support",
    rows: [
      { name: "No account, no KYC, no email needed", community: true, supporter: true, enterprise: true },
      { name: "Zero telemetry or transaction logging", community: true, supporter: true, enterprise: true },
      { name: "Private low-latency push notification relay", community: false, supporter: true, enterprise: true },
      { name: "Community GitHub discussions & issues", community: true, supporter: true, enterprise: true },
      { name: "Priority developer issue triage", community: false, supporter: true, enterprise: true },
      { name: "Dedicated 24/7 SLA & key recovery consultation", community: false, supporter: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "Is Orchard really 100% free?",
    answer:
      "Yes! Orchard is open-source software licensed under MIT. You can download it on iOS, Android, and Desktop and use every single core feature—including multisig vaults, hardware signers, custom nodes, and Lightning—without ever paying a cent or registering an account.",
  },
  {
    question: "Does Orchard take any fees from my transactions?",
    answer:
      "No. Orchard takes zero cut (0 bps) on transactions. You only pay standard Bitcoin network mining fees (or tiny fractions of a cent on Lightning), which go directly and entirely to the decentralized network miners and routing nodes. You always choose your own sat/vB fee rate.",
  },
  {
    question: "What is the Supporter tier for?",
    answer:
      "The Supporter tier is designed for bitcoin power users who want optional cloud conveniences (such as encrypted watch-only device sync and dedicated Lightning liquidity) while actively supporting independent, open-source Bitcoin development.",
  },
  {
    question: "Do you ever have access to my private keys or funds?",
    answer:
      "Never. Orchard is non-custodial. Your keys are generated and encrypted locally on your hardware device and are never sent to any server. We cannot access, freeze, or recover your funds—you maintain complete sovereign ownership.",
  },
  {
    question: "What happens if Orchard shuts down or disappears?",
    answer:
      "Your funds remain completely safe. Orchard adheres strictly to Bitcoin industry standards (BIP39, BIP32, BIP84, BIP174 PSBT, and Output Descriptors). You can restore your seed phrases and wallet descriptors into any other compatible wallet (such as Sparrow, Electrum, or BlueWallet) at any time.",
  },
  {
    question: "Can I connect my own private Bitcoin node?",
    answer:
      "Yes. You can connect Orchard to your own Bitcoin Core, Electrs, Fulcrum, or EPS server over SSL or Tor. This ensures 100% privacy with zero third-party data queries.",
  },
];

function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pb-24">
        {/* Header section */}
        <section className="bg-hero border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              Transparent & Non-Custodial
            </span>

            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Free and open source.{" "}
              <span className="text-brand">Forever sovereign.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Orchard is built for financial sovereignty. No subscription is required to hold your
              own keys, build multisig vaults, or pay over Lightning.
            </p>

            {/* Billing Toggle */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className={`text-sm ${!annual ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                type="button"
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
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
                Annually{" "}
                <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">
                  Save ~18%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mx-auto max-w-6xl px-6 -mt-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
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
                    Most Popular
                  </div>
                )}

                <div>
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {tier.badge}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight">{tier.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="my-8 border-y border-border py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {annual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    {tier.period && (
                      <span className="text-xs text-muted-foreground">
                        {tier.priceMonthly === "$0"
                          ? "/ forever"
                          : annual
                            ? "/ billed annually"
                            : "/ month"}
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
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fee transparency banner */}
        <section className="mx-auto mt-24 max-w-6xl px-6">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-wider">
                  <Lock className="size-3.5" aria-hidden="true" />
                  Transparent Fee Policy
                </span>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  0% wallet markup. You only pay miners.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Many wallets add a hidden 0.5% – 2% surcharge on sends or swaps. Orchard is built
                  on true Bitcoin principles: we charge 0% on transactions. You only pay network miner
                  fees, which you customize down to the exact sat/vB.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/80 bg-background/60 p-4 text-center">
                  <div className="text-2xl font-bold text-accent">0%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Wallet fee</div>
                </div>
                <div className="rounded-2xl border border-border/80 bg-background/60 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="mt-1 text-xs text-muted-foreground">To network miners</div>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-2xl border border-border/80 bg-background/60 p-4 text-center">
                  <div className="text-2xl font-bold text-primary">&lt; $0.001</div>
                  <div className="mt-1 text-xs text-muted-foreground">Lightning fees</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Matrix Table */}
        <section className="mx-auto mt-28 max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Compare features across plans
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything essential for self-custody is open source and free.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  <th className="p-4 sm:p-5 font-semibold text-foreground">Feature</th>
                  <th className="p-4 sm:p-5 font-semibold text-center text-foreground">Community</th>
                  <th className="p-4 sm:p-5 font-semibold text-center text-primary">Supporter</th>
                  <th className="p-4 sm:p-5 font-semibold text-center text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {featureMatrix.map((section) => (
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
                          {row.community ? (
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
                          {row.enterprise ? (
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
              Clear answers on licensing, security, and custody.
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
              Start holding your own bitcoin
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Free, private, and available right now on iOS, Android, and Desktop.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
                  <Apple className="size-4" aria-hidden="true" />
                  Download for iOS
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={STORE_LINKS.android} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="size-4" aria-hidden="true" />
                  Download for Android
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={STORE_LINKS.desktop} target="_blank" rel="noopener noreferrer">
                  <Monitor className="size-4" aria-hidden="true" />
                  Desktop
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
