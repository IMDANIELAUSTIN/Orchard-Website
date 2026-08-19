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
          OPEN SOURCE · LOCAL-FIRST · P2P MESH ENCRYPTED · ZERO TRACKING
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Knowledge, connection, and community that{" "}
          <span className="text-brand">never goes dark.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
          Carry entire libraries, emergency radios, local farmer exchanges, and decentralized social feeds
          in your pocket. Built to thrive on high-speed fiber or completely disconnected off the grid.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <Button size="lg" className="shadow-glow" asChild>
            <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
              <Apple className="size-4" aria-hidden="true" />
              Download for iOS
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href={STORE_LINKS.macos} target="_blank" rel="noopener noreferrer">
              <Monitor className="size-4" aria-hidden="true" />
              macOS & Apple Watch
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={STORE_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" aria-hidden="true" />
              View on GitHub
            </a>
          </Button>
        </div>

        <p className="mt-4 text-xs font-medium text-muted-foreground">
          Native SwiftUI app. Engineered for iPhone, iPad, Mac, and watchOS.
        </p>

        {/* Feature quick highlight badges */}
        <div className="mt-12 mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground border-y border-border/60 py-4">
          <span className="flex items-center gap-1.5">
            <WifiOff className="size-3.5 text-accent" aria-hidden="true" />
            100% Offline Capable
          </span>
          <span className="flex items-center gap-1.5">
            <Radio className="size-3.5 text-primary" aria-hidden="true" />
            Bluetooth & LoRa Mesh
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-3.5 text-accent" aria-hidden="true" />
            Kiwix ZIM Super-Library
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
            Signal Double-Ratchet
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
