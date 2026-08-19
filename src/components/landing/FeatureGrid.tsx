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
    title: "An encyclopedia in your pocket.",
    body: "Carry medical guides, survival manuals, and full Wikipedia snapshots with you everywhere. Access the answers you need, even when the internet goes down.",
  },
  {
    icon: Lock,
    title: "Truly private conversations.",
    body: "Chat securely without ever providing a phone number or email. Every message is locked with Signal-grade encryption, ensuring your data belongs only to you.",
  },
  {
    icon: ProvisionIcon,
    title: "Find essentials, locally.",
    body: "Instantly map and filter local providers for food staples, textiles, timber, and produce. Discover exactly what you need from your community at a glance.",
  },
  {
    icon: Train,
    title: "Navigate without a signal.",
    body: "Get step-by-step transit and walking directions with zero cellular service. National and regional routes are cached right on your device so you never lose your way.",
  },
  {
    icon: Headphones,
    title: "Immersive, intelligent audio.",
    body: "Experience studio-quality Spatial Audio that syncs perfectly with live educational transcripts. Toggle between video and audio instantly to save battery while learning.",
  },
  {
    icon: Watch,
    title: "Lifesaving alerts on your wrist.",
    body: "Keep your phone safely tucked away. Receive critical emergency alerts, glance at survival guides, and control your playback right from your Apple Watch.",
  },
  {
    icon: ShieldAlert,
    title: "Total data sovereignty.",
    body: "No accounts, no tracking, and zero analytics. Your maps, keys, and personal data stay strictly locked and encrypted on your own hardware.",
  },
  {
    icon: Layers,
    title: "One app. Every network.",
    body: "Break free from walled gardens. Seamlessly follow and message friends across diverse social networks and off-grid radio meshes without ever switching apps.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand uppercase tracking-wider">Designed for Real Life</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need when it matters most
          </h2>
          <p className="mt-3 text-muted-foreground text-base leading-relaxed">
            Built from the ground up for peace of mind, off-grid freedom, and effortless community connection.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <article key={title} className="group bg-card p-7 transition-colors hover:bg-secondary">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
