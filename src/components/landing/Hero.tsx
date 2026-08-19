import { Apple, Monitor, Github, Radio, ShieldCheck, WifiOff, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/lib/store-links";
import appPreview from "@/assets/app-preview.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F7] pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-[#86868B] uppercase shadow-sm">
          <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
          OPEN SOURCE · ZERO TRACKING · WORKS 100% OFFLINE · NO ACCOUNTS
        </div>

        <h1 className="reveal delay-1 mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-balance text-[#1D1D1F] sm:text-6xl lg:text-7xl">
          Knowledge, connection, and community that{" "}
          <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">never goes dark.</span>
        </h1>

        <p className="reveal delay-2 mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#86868B]">
          A connectivity-agnostic toolkit combining offline encyclopedias, peer-to-peer mesh radio,
          local mutual-aid markets, and ad-free community feeds. Built to keep you informed, connected,
          and self-reliant — even when the grid goes down.
        </p>

        {/* Action Buttons — 32pt rhythm & 52pt touch target */}
        <div className="reveal delay-3 mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-13 px-8 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-base shadow-lg shadow-rose-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            asChild
          >
            <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
              <Apple className="size-5 mr-1" aria-hidden="true" />
              Get Orchard for iOS
            </a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="h-13 px-7 rounded-full bg-[#E8E8ED] hover:bg-[#DFDFE4] text-[#1D1D1F] font-semibold text-base shadow-sm transition-all"
            asChild
          >
            <a href={STORE_LINKS.macos} target="_blank" rel="noopener noreferrer">
              <Monitor className="size-5 mr-1" aria-hidden="true" />
              macOS & Apple Watch
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-13 px-7 rounded-full border border-black/[0.12] bg-white hover:bg-black/[0.03] text-[#1D1D1F] font-semibold text-base shadow-sm transition-all"
            asChild
          >
            <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-5 mr-1" aria-hidden="true" />
              View on GitHub
            </a>
          </Button>
        </div>

        <p className="reveal delay-3 mt-4 text-xs font-medium text-[#86868B]">
          Native SwiftUI app. Engineered for iPhone, iPad, Mac, and Apple Watch.
        </p>

        {/* Feature quick highlight badges */}
        <div className="reveal delay-4 mt-12 mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#86868B] border-y border-black/[0.06] py-4">
          <span className="flex items-center gap-1.5">
            <WifiOff className="size-3.5 text-rose-600" aria-hidden="true" />
            Works 100% Offline
          </span>
          <span className="flex items-center gap-1.5">
            <Radio className="size-3.5 text-rose-600" aria-hidden="true" />
            No Cell Towers Needed
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-3.5 text-rose-600" aria-hidden="true" />
            Pocket Encyclopedia
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-rose-600" aria-hidden="true" />
            Military-Grade Privacy
          </span>
        </div>

        <div className="reveal delay-5 mt-12">
          <div className="mx-auto w-full max-w-4xl rounded-[32px] bg-white p-3 sm:p-4 shadow-card border border-black/[0.06]">
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
