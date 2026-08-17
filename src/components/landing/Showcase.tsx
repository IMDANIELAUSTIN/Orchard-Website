import { Check } from "lucide-react";

const blocks = [
  {
    title: "Watch-only wallets",
    lead: "Use a wallet day to day while the keys stay somewhere safer.",
    points: [
      "Pair with a hardware signer over PSBT",
      "Track any address or extended public key",
      "Review history without exposing secrets",
    ],
  },
  {
    title: "Transaction control",
    lead: "Payments should never leave you guessing.",
    points: [
      "See a realistic estimate before confirming",
      "Speed up or cancel an outgoing payment",
      "Accelerate an incoming one with CPFP",
    ],
  },
  {
    title: "Lightning ready",
    lead: "Small payments settle instantly and cost almost nothing.",
    points: [
      "Connect your own Lightning node",
      "Scan an invoice and pay in one tap",
      "Move funds between on-chain and Lightning",
    ],
  },
];

export function Showcase() {
  return (
    <section id="how" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple on the surface, deep when you need it
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <h3 className="text-lg font-semibold">{block.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{block.lead}</p>
              <ul className="mt-6 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
