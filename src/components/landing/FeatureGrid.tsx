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
    <section id="features" className="border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-24 bg-[#F6F4F3] dark:bg-[#290B00]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold text-[#290B00] dark:text-[#F6F4F3] uppercase tracking-wider">Designed for Real Life</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#290B00] dark:text-[#F6F4F3] sm:text-4xl">
            Everything you need when it matters most
          </h2>
          <p className="mt-3 text-[#290B00]/70 dark:text-[#F6F4F3]/70 text-base sm:text-lg leading-relaxed">
            Built from the ground up for peace of mind, off-grid freedom, and effortless community connection.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, body }, idx) => (
            <article
              key={title}
              className={`reveal delay-${(idx % 4) + 1} group flex flex-col justify-between rounded-[32px] border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#EAE5E2] dark:bg-[#381406] p-6 sm:p-7 shadow-card transition-all duration-300 hover:bg-[#F6F4F3] dark:hover:bg-[#481C0C] hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                <span className="inline-flex size-11 items-center justify-center rounded-[20px] bg-[#F6F4F3] dark:bg-[#290B00] text-[#290B00] dark:text-[#F6F4F3] shadow-sm border border-[#290B00]/10 dark:border-[#F6F4F3]/15 transition-transform group-hover:scale-110">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-[#290B00] dark:text-[#F6F4F3]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#290B00]/70 dark:text-[#F6F4F3]/70">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
