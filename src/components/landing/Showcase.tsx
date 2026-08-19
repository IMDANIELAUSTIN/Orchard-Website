import { Check, DownloadCloud, Radio, Users2, Code2, ShieldCheck, Terminal, Cpu } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: DownloadCloud,
    title: "Download Once, Keep Forever",
    lead: "Preload knowledge packs, passenger rail routes, or audio courses when you have Wi-Fi.",
    points: [
      "Kiwix ZIM medical & encyclopedia snapshots",
      "Offline rail & multimodal transit maps",
      "Interactive PhET science simulations",
    ],
  },
  {
    step: "02",
    icon: Radio,
    title: "Connect Automatically",
    lead: "Seamlessly switch from internet relays to local Bluetooth and LoRa mesh hops.",
    points: [
      "Bluetooth Low Energy for proximity hops",
      "Long-range LoRa packet radio transceiver integration",
      "Signal Double Ratchet E2E forward secrecy",
    ],
  },
  {
    step: "03",
    icon: Users2,
    title: "Organize Your Community",
    lead: "Share location markers, seed trades, mutual aid hubs, and gatherings across peer nodes.",
    points: [
      "21 provision categories (Timber, Produce, Citrus, etc.)",
      "Offline event coordination & repair clinics",
      "Zero central servers or account dependencies",
    ],
  },
];

const techSpecs = [
  { label: "Architecture", value: "100% Swift 6 & SwiftUI" },
  { label: "Platforms", value: "iOS, iPadOS, macOS, watchOS" },
  { label: "Mesh Protocols", value: "Bluetooth Low Energy, LoRa (Meshtastic)" },
  { label: "Cryptography", value: "LibSignalClient Double Ratchet (secp256k1)" },
  { label: "Fediverse Support", value: "ActivityPub, ATProto (Bluesky), Lemmy" },
  { label: "Decentralized Dispatches", value: "Nostr (NIP-01, NIP-04, NIP-44), RSS" },
  { label: "Offline Storage", value: "Encrypted Sandboxed SQLite & FlatFiles" },
  { label: "Licensing & Telemetry", value: "100% Free / Libre FOSS · Zero Analytics" },
];

export function Showcase() {
  return (
    <section id="how" className="border-t border-border py-24 bg-card/10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Step-by-step section */}
        <div>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand uppercase tracking-wider">How It Works</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              From high-speed fiber to completely off-grid
            </h2>
            <p className="mt-3 text-muted-foreground">
              A resilient, adaptive topology that gracefully degrades as network infrastructure disconnects.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className="relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary font-bold text-sm">
                      {block.step}
                    </span>
                    <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{block.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{block.lead}</p>
                  <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
                    {block.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specs & Integrity Box */}
        <div id="specs" className="mt-24 rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 sm:p-12 shadow-card">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 border-b border-border/80">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-wider">
                <Code2 className="size-4" aria-hidden="true" />
                Technical Specs & Integrity
              </div>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl text-foreground">
                Built natively for Apple silicon and open standards
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                No web wrappers or Electron bloat. Orchard is written in native Swift for unmatched memory efficiency, battery life, and offline responsiveness.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-secondary px-4 py-2 text-xs font-semibold text-foreground border border-border">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              100% Free & Open Source (FOSS)
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techSpecs.map((spec) => (
              <div key={spec.label} className="rounded-2xl border border-border/70 bg-background/50 p-4">
                <div className="text-xs font-medium text-muted-foreground">{spec.label}</div>
                <div className="mt-1.5 text-sm font-semibold text-foreground">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
