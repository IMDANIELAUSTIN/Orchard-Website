import { Monitor, Github, Radio, ShieldCheck, WifiOff, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppleLogo } from "@/components/icons/AppleLogo";
import { STORE_LINKS } from "@/lib/store-links";
import appPreview from "@/assets/app-preview.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#F6F4F3] via-[#F6F4F3] to-[#EAE5E2] dark:from-[#290B00] dark:via-[#290B00] dark:to-[#1C0700] pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <h1 className="reveal delay-1 mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-balance text-[#290B00] dark:text-[#F6F4F3] sm:text-6xl lg:text-7xl">
          Knowledge and Community Regardless of Connection.
        </h1>

        <p className="reveal delay-2 mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#290B00]/70 dark:text-[#F6F4F3]/70">
          A connectivity-agnostic tool that combines offline world knowledge, peer-to-peer mesh communication,
          local markets, and ad-free social media feeds. Built to keep communities informed, connected,
          and self-reliant, if and when data networks are unavailable.
        </p>

        {/* Action Buttons — 32pt rhythm & 52pt touch target */}
        <div id="hero-cta" className="reveal delay-3 mt-8 flex flex-col items-center justify-center gap-3">
          <Button
            size="lg"
            className="h-13 px-8 rounded-full bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-semibold text-base shadow-lg shadow-[#290B00]/20 dark:shadow-[#F6F4F3]/10 transition-all hover:scale-[1.02] active:scale-[0.98] border border-transparent dark:border-[#F6F4F3]/20"
            asChild
          >
            <a href={STORE_LINKS.testflight} target="_blank" rel="noopener noreferrer">
              <AppleLogo className="size-4.5 mr-2 -translate-y-0.5" aria-hidden="true" />
              Test Orchard Today on iOS
            </a>
          </Button>
          <p className="text-xs text-[#290B00]/60 dark:text-[#F6F4F3]/60 font-medium">
            Native SwiftUI App Made for Your Apple Devices.
          </p>
        </div>

        <div className="reveal delay-5 mt-12">
          <div className="mx-auto w-full max-w-4xl rounded-[40px] bg-[#F6F4F3] dark:bg-[#381406] p-3 sm:p-4 shadow-card border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
              alt="Orchard off-grid device interface and mesh network preview"
              width={1600}
              height={900}
              loading="eager"
              className="w-full rounded-[32px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
