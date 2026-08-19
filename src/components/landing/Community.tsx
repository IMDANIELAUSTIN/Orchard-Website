const quotes = [
  {
    quote:
      "When storms knocked out power and cell towers, our neighborhood mesh kept emergency coordination and welfare check-ins alive for days without missing a beat.",
    name: "Marta Oliveira",
    role: "Community Resilience Organizer",
  },
  {
    quote:
      "Having full offline Wikipedia, MDWiki, and PhET simulations on my iPad has completely transformed how I teach in rural, disconnected classrooms.",
    name: "Devon Reyes",
    role: "STEM Educator & Field Researcher",
  },
  {
    quote:
      "The 21-category provision map made it effortless to organize our neighborhood seed bank, tool library, and local citrus exchange.",
    name: "Aiko Tanaka",
    role: "Urban Agroforestry Lead",
  },
  {
    quote:
      "Signal Double Ratchet over LoRa packet radio is the gold standard for off-grid communication. Having it native in SwiftUI is incredible.",
    name: "Samuel Adeyemi",
    role: "Emergency Communications Specialist",
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
