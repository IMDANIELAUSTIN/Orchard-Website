import { Radio, BookOpen, Globe2, Share2, Shield, Sparkles, WifiOff, Cpu } from "lucide-react";

const pillars = [
  {
    id: "mesh",
    icon: Radio,
    badge: "Off-Grid Communication",
    title: "Stay connected anywhere.",
    subtitle: "Peer-to-peer messaging that works without cell towers.",
    description:
      "Keep in touch with family and neighbors even when the power grid or internet goes dark. Messages hop securely from device to device with Signal-grade encryption and zero dependence on central servers.",
    tags: ["Signal Double Ratchet", "LoRa Packet Radio", "BLE Discovery", "Nostr Relays", "Multi-Hop Mesh"],
    accentColor: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    id: "library",
    icon: BookOpen,
    badge: "Infinite Knowledge",
    title: "Human knowledge, always offline.",
    subtitle: "Medical guides, encyclopedias, and courses on your device.",
    description:
      "Never lose access to essential answers. Carry full offline copies of Wikipedia, emergency survival handbooks, interactive science labs, and vocational courses right on your iPhone, iPad, or Mac.",
    tags: ["Kiwix ZIM Engine", "Full Wikipedia & MDWiki", "PhET Simulations", "60+ Course Disciplines", "Project Gutenberg"],
    accentColor: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    id: "map",
    icon: Globe2,
    badge: "Local Abundance",
    title: "Build a resilient neighborhood.",
    subtitle: "Local food markets, mutual aid, and offline transit maps.",
    description:
      "Know where to find clean water, fresh produce, seed banks, and tool libraries in your area. Coordinate community events and navigate passenger rail routes without cellular service.",
    tags: ["3D Offline Globe", "21 Provision Categories", "Mutual Aid Exchanges", "Passenger Rail Transit", "Offline GPS"],
    accentColor: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    id: "fediverse",
    icon: Share2,
    badge: "Open Social",
    title: "Social feeds that respect you.",
    subtitle: "Your favorite open networks in one calm, chronological stream.",
    description:
      "Follow people and discussions across Mastodon, Bluesky, Lemmy, and Nostr without algorithmic manipulation, ad tracking, or corporate walled gardens.",
    tags: ["ActivityPub (Mastodon)", "AT Protocol (Bluesky)", "Lemmy Communities", "Nostr Notes", "16 Channels"],
    accentColor: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="border-t border-border py-24 bg-card/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Core Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Four Pillars of Resilience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Engineered from the ground up for peace of mind, mutual aid, and continuous learning — online or completely off the grid.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                {/* Subtle gradient background on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accentColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary shadow-sm">
                      <Icon className={`size-6 ${pillar.iconColor}`} aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-secondary/90 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-accent">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-border/60">
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-lg border border-border/80 bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground group-hover:border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
