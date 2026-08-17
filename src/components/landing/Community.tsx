const quotes = [
  {
    quote:
      "The first wallet I hand to someone new to bitcoin. They are sending a payment within a minute.",
    name: "Marta Oliveira",
    role: "Meetup organiser, Lisbon",
  },
  {
    quote: "Fee bumping and coin control in a mobile app that still feels calm. Rare combination.",
    name: "Devon Reyes",
    role: "Self-custody educator",
  },
  {
    quote: "I run my own node and it connected in under a minute. No accounts, no email, no fuss.",
    name: "Aiko Tanaka",
    role: "Node operator",
  },
  {
    quote:
      "Multisig used to be a weekend project. Now it is a guided setup I can walk a client through.",
    name: "Samuel Adeyemi",
    role: "Security consultant",
  },
];

export function Community() {
  return (
    <section id="community" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          What the community says
        </h2>
        <p className="mt-3 text-muted-foreground">Builders and users from around the world.</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {quotes.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <blockquote className="text-base leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-accent">
                  {item.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium">{item.name}</span>
                  <span className="block text-muted-foreground">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
