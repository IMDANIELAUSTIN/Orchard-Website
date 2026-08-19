import { Apple, Monitor, Github, Radio, ShieldCheck, WifiOff, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/lib/store-links";
import appPreview from "@/assets/app-preview.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase shadow-sm">
          <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
          OPEN SOURCE · ZERO TRACKING · WORKS 100% OFFLINE · NO ACCOUNTS
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Knowledge, connection, and community that{" "}
          <span className="text-brand">never goes dark.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
          A connectivity-agnostic toolkit combining offline encyclopedias, peer-to-peer mesh radio,
          local mutual-aid markets, and ad-free community feeds. Built to keep you informed, connected,
          and self-reliant — even when the grid goes down.
        </p>

        {/* Action Buttons — 32pt rhythm & 52pt touch target */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-13 px-8 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-base shadow-lg shadow-rose-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
            className="h-13 px-7 rounded-2xl font-semibold text-base"
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
            className="h-13 px-7 rounded-2xl font-semibold text-base"
            asChild
          >
            <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-5 mr-1" aria-hidden="true" />
              View on GitHub
            </a>
          </Button>
        </div>

        <p className="mt-4 text-xs font-medium text-muted-foreground">
          Native SwiftUI app. Engineered for iPhone, iPad, Mac, and Apple Watch.
        </p>

        {/* Feature quick highlight badges */}
        <div className="mt-12 mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground border-y border-border/60 py-4">
          <span className="flex items-center gap-1.5">
            <WifiOff className="size-3.5 text-accent" aria-hidden="true" />
            Works 100% Offline
          </span>
          <span className="flex items-center gap-1.5">
            <Radio className="size-3.5 text-primary" aria-hidden="true" />
            No Cell Towers Needed
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-3.5 text-accent" aria-hidden="true" />
            Pocket Encyclopedia
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
            Military-Grade Privacy
          </span>
        </div>

        <div className="mt-12">
          <img
            src={appPreview}
            alt="Orchard off-grid knowledge hub, 3D connection map, and mesh chat app shown on devices"
            width={1200}
            height={912}
            className="mx-auto w-full max-w-4xl rounded-3xl shadow-glow border border-border"
          />
        </div>
      </div>
    </section>
  );
}
