import { Check, DownloadCloud, Radio, Users2, Code2, ShieldCheck, Terminal, Cpu } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: DownloadCloud,
    title: "Your library, always with you.",
    lead: "Download medical guides, survival manuals, and transit maps once. Keep them forever on your device.",
    points: [
      "Offline medical handbooks & full encyclopedias",
      "National passenger rail & multimodal transit routes",
      "Interactive STEM labs and vocational trade guides",
    ],
  },
  {
    step: "02",
    icon: Radio,
    title: "Stay in touch without cell towers.",
    lead: "Seamlessly switch to nearby Bluetooth and long-range radio hops the moment signals go dark.",
    points: [
      "Automatic Bluetooth discovery with nearby peers",
      "Long-range packet radio transceivers for multi-mile reach",
      "Signal-grade encryption locked to your device",
    ],
  },
  {
    step: "03",
    icon: Users2,
    title: "Strengthen your neighborhood.",
    lead: "Share food resources, seed swaps, and mutual aid tools directly with your local community.",
    points: [
      "21 provision categories (Timber, Produce, Citrus, etc.)",
      "Neighborhood event planning & tool sharing clinics",
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
    <section id="how" className="border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-24 bg-[#EAE5E2] dark:bg-[#1E0700]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Step-by-step section */}
        <div>
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold text-[#290B00] dark:text-[#F6F4F3] uppercase tracking-wider">How It Works</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-4xl">
              From high-speed fiber to completely off-grid
            </h2>
            <p className="mt-3 text-[#290B00]/70 dark:text-[#F6F4F3]/70 text-base sm:text-lg leading-relaxed">
              A resilient, adaptive topology that gracefully degrades as network infrastructure disconnects.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((block, idx) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className={`reveal delay-${idx + 1} relative flex flex-col justify-between rounded-[28px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-8 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-[#EAE5E2] dark:bg-[#481C0C] text-[#290B00] dark:text-[#F6F4F3] font-bold text-sm">
                        {block.step}
                      </span>
                      <Icon className="size-5 text-[#290B00]/60 dark:text-[#F6F4F3]/60" aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#290B00] dark:text-[#F6F4F3]">{block.title}</h3>
                    <p className="mt-2 text-sm text-[#290B00]/70 dark:text-[#F6F4F3]/70 leading-relaxed">{block.lead}</p>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-[#290B00]/10 dark:border-[#F6F4F3]/15 pt-6">
                    {block.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
                        <span className="text-[#290B00]/70 dark:text-[#F6F4F3]/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specs & Integrity Box */}
        <div id="specs" className="reveal delay-2 mt-24 rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] p-8 sm:p-12 shadow-card">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/15">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#290B00] dark:text-[#F6F4F3] uppercase tracking-wider">
                <Code2 className="size-4" aria-hidden="true" />
                Technical Specs & Integrity
              </div>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl text-[#290B00] dark:text-[#F6F4F3]">
                Built natively for Apple silicon and open standards
              </h3>
              <p className="mt-2 text-sm text-[#290B00]/70 dark:text-[#F6F4F3]/70 max-w-2xl leading-relaxed">
                No web wrappers or Electron bloat. Orchard is written in native Swift 6 for unmatched memory efficiency, battery life, and instantaneous offline responsiveness.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAE5E2] dark:bg-[#481C0C] px-4 py-2 text-xs font-semibold text-[#290B00] dark:text-[#F6F4F3] border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
              <ShieldCheck className="size-4 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
              100% Free & Open Source (FOSS)
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techSpecs.map((spec) => (
              <div key={spec.label} className="rounded-2xl border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#481C0C] p-4 transition-colors hover:bg-[#E2DAD6] dark:hover:bg-[#56220E]">
                <div className="text-xs font-medium text-[#290B00]/60 dark:text-[#F6F4F3]/60">{spec.label}</div>
                <div className="mt-1.5 text-sm font-semibold text-[#290B00] dark:text-[#F6F4F3]">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
