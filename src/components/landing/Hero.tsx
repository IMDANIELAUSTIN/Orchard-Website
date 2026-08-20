import { Apple, Monitor, Github, Radio, ShieldCheck, WifiOff, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/lib/store-links";
import appPreview from "@/assets/app-preview.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#F6F4F3] via-[#F6F4F3] to-[#EAE5E2] dark:from-[#290B00] dark:via-[#290B00] dark:to-[#1C0700] pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#290B00]/70 dark:text-[#F6F4F3]/70 uppercase shadow-sm">
          <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
          NO EMAIL OR PHONE NUMBER REQUIRED · WORKS 100% OFFLINE · ZERO TRACKING
        </div>

        <h1 className="reveal delay-1 mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-balance text-[#290B00] dark:text-[#F6F4F3] sm:text-6xl lg:text-7xl">
          Knowledge and Community Regardless of{" "}
          <span className="bg-gradient-to-r from-[#290B00] via-[#5C230C] to-[#8C3818] dark:from-[#F6F4F3] dark:via-[#DFCFC9] dark:to-[#C2B2AC] bg-clip-text text-transparent">
            Connection.
          </span>
        </h1>

        <p className="reveal delay-2 mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#290B00]/70 dark:text-[#F6F4F3]/70">
          A connectivity-agnostic tool that combines offline world knowledge, peer-to-peer mesh communication,
          local markets, and ad-free social media feeds. Built to keep communities informed, connected,
          and self-reliant even when the grid goes down.
        </p>

        {/* Action Buttons — 32pt rhythm & 52pt touch target */}
        <div className="reveal delay-3 mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-13 px-8 rounded-full bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-semibold text-base shadow-lg shadow-[#290B00]/20 dark:shadow-[#F6F4F3]/10 transition-all hover:scale-[1.02] active:scale-[0.98] border border-transparent dark:border-[#F6F4F3]/20"
            asChild
          >
            <a href={STORE_LINKS.testflight} target="_blank" rel="noopener noreferrer">
              <Apple className="size-5 mr-1" aria-hidden="true" />
              Test Orchard Today on iOS
            </a>
          </Button>

        </div>

        <p className="reveal delay-3 mt-4 text-xs font-medium text-[#290B00]/60 dark:text-[#F6F4F3]/60">
          Native SwiftUI App Made for Your Apple Devices.
        </p>

        {/* Feature quick highlight badges */}
        <div className="reveal delay-4 mt-12 mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#290B00]/70 dark:text-[#F6F4F3]/70 border-y border-[#290B00]/10 dark:border-[#F6F4F3]/10 py-4">
          <span className="flex items-center gap-1.5">
            <WifiOff className="size-3.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
            Works 100% Offline
          </span>
          <span className="flex items-center gap-1.5">
            <Radio className="size-3.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
            No Cell Towers Needed
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-3.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
            Pocket Encyclopedia
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-[#290B00] dark:text-[#F6F4F3]" aria-hidden="true" />
            Military-Grade Privacy
          </span>
        </div>

        <div className="reveal delay-5 mt-12">
          <div className="mx-auto w-full max-w-4xl rounded-[32px] bg-[#F6F4F3] dark:bg-[#381406] p-3 sm:p-4 shadow-card border border-[#290B00]/10 dark:border-[#F6F4F3]/15">
            <img
              src={appPreview}
              alt="Orchard off-grid knowledge hub, 3D connection map, and mesh chat app shown on devices"
              width={1200}
              height={912}
              className="w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
