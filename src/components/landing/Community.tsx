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
    <section id="community" className="border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-24 bg-[#F6F4F3] dark:bg-[#290B00]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold text-[#290B00] dark:text-[#F6F4F3] uppercase tracking-wider">Voices of Resilience</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-4xl">
            What the community says
          </h2>
          <p className="mt-3 text-[#290B00]/70 dark:text-[#F6F4F3]/70 text-base sm:text-lg">
            Empowering organizers, educators, homesteaders, and radio operators worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {quotes.map((item, idx) => (
            <figure
              key={item.name}
              className={`reveal delay-${idx + 1} flex flex-col justify-between rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#381406] p-8 shadow-card transition-all duration-300 hover:bg-[#F6F4F3] dark:hover:bg-[#481C0C] hover:shadow-xl hover:-translate-y-1`}
            >
              <blockquote className="text-base leading-relaxed text-[#290B00] dark:text-[#F6F4F3]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-[#290B00]/10 dark:border-[#F6F4F3]/15">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#F6F4F3] dark:bg-[#290B00] text-sm font-bold text-[#290B00] dark:text-[#F6F4F3] shadow-sm border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
                  {item.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-bold text-[#290B00] dark:text-[#F6F4F3]">{item.name}</span>
                  <span className="block text-xs text-[#290B00]/60 dark:text-[#F6F4F3]/60">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
