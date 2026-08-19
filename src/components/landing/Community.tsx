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
    <section id="community" className="border-t border-black/[0.06] py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Voices of Resilience</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">
            What the community says
          </h2>
          <p className="mt-3 text-[#86868B] text-base sm:text-lg">
            Empowering organizers, educators, homesteaders, and radio operators worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {quotes.map((item, idx) => (
            <figure
              key={item.name}
              className={`reveal delay-${idx + 1} flex flex-col justify-between rounded-[24px] border border-black/[0.06] bg-[#F5F5F7] p-8 shadow-card transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1`}
            >
              <blockquote className="text-base leading-relaxed text-[#1D1D1F]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-black/[0.05]">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-sm font-bold text-rose-600 shadow-sm border border-black/[0.04]">
                  {item.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-bold text-[#1D1D1F]">{item.name}</span>
                  <span className="block text-xs text-[#86868B]">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
