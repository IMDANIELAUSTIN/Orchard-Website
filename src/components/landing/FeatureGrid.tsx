import {
  BookOpen,
  Lock,
  Apple as ProvisionIcon,
  Train,
  Headphones,
  Watch,
  ShieldAlert,
  Layers,
} from "lucide-react";

const capabilities = [
  {
    icon: BookOpen,
    title: "Massive Offline Knowledge (ZIM / Kiwix)",
    body: "Host gigabytes of curated human knowledge — medical encyclopedias, emergency survival manuals, agricultural guides, and full Wikipedia snapshots stored locally.",
  },
  {
    icon: Lock,
    title: "Double-Ratchet E2E Encryption",
    body: "Signal Protocol-grade identity keys (secp256k1). Message with forward secrecy over mesh or relays without phone numbers or emails.",
  },
  {
    icon: ProvisionIcon,
    title: "21-Category Provision Directory",
    body: "Map and filter local provisions across Timber, Metal, Textiles, Food Staples, Grains, Bakery, Meats, Seafood, Produce, Nuts, Herbs, and Citrus.",
  },
  {
    icon: Train,
    title: "Offline Passenger Rail & Transit",
    body: "Offline-cached national and regional passenger rail routes (Amtrak, commuter rail, walking, transit) with step-by-step navigation with zero cellular service.",
  },
  {
    icon: Headphones,
    title: "Audiophile Player & Synced Transcripts",
    body: "Lossless and Spatial Audio playback with Dolby Atmos, dynamic buffer scrubbers, video-to-audio toggles, and live synced educational transcripts.",
  },
  {
    icon: Watch,
    title: "Orchard on Wrist (watchOS)",
    body: "Receive emergency mesh alerts, glanceable offline survival guides, and audio playback controls directly from your Apple Watch.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Telemetry & Sandboxed Storage",
    body: "Zero tracking, no central accounts, and no analytics. Your data, maps, and keys reside strictly in encrypted, sandboxed local SQLite.",
  },
  {
    icon: Layers,
    title: "Universal Open Protocols",
    body: "Native support for ActivityPub (Mastodon), AT Protocol (Bluesky), Lemmy APIs, Nostr relays, and Meshtastic/LoRa packet radio.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand uppercase tracking-wider">Deep-Dive Capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineered for complete self-reliance
          </h2>
          <p className="mt-3 text-muted-foreground">
            A comprehensive suite of offline tools, open protocols, and communication channels packaged into a single native SwiftUI binary.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <article key={title} className="group bg-card p-7 transition-colors hover:bg-secondary">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
