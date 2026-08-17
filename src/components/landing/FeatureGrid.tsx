import {
  KeyRound,
  ShieldCheck,
  Gauge,
  Cpu,
  Bell,
  EyeOff,
  GitBranch,
  DownloadCloud,
} from "lucide-react";

const features = [
  {
    icon: KeyRound,
    title: "Self-custody by default",
    body: "Your private keys are generated and stored on your device. Nobody else can move your coins.",
  },
  {
    icon: ShieldCheck,
    title: "Multisig vaults",
    body: "Split signing power across several devices for the strongest protection Bitcoin can offer.",
  },
  {
    icon: Gauge,
    title: "Full fee control",
    body: "Bump, cancel or batch payments with RBF and CPFP so you never overpay or get stuck.",
  },
  {
    icon: Cpu,
    title: "Hardware wallet ready",
    body: "Sign PSBTs with popular signing devices while your keys stay completely offline.",
  },
  {
    icon: Bell,
    title: "Instant notifications",
    body: "Get alerted the moment a payment lands in the mempool and again when it confirms.",
  },
  {
    icon: EyeOff,
    title: "Plausible deniability",
    body: "Keep a decoy storage alongside your real one for situations where you must unlock.",
  },
  {
    icon: GitBranch,
    title: "Open source & private",
    body: "Auditable code, fresh addresses per payment, coin control, and your own node if you want it.",
  },
  {
    icon: DownloadCloud,
    title: "Import anything",
    body: "Seeds, descriptors, xpubs or backup files — bring an existing wallet across in seconds.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need, nothing you don&apos;t
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Beyond sending, receiving and storing bitcoin, there is a whole layer of power features
          waiting when you want them.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
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
