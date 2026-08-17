import { Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import appPreview from "@/assets/app-preview.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-hero">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs tracking-wide text-muted-foreground uppercase">
          Open source · Non-custodial
        </span>

        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          A radically simple, seriously powerful{" "}
          <span className="text-brand">bitcoin wallet</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Store, send and receive bitcoin with keys that never leave your device — plus multisig,
          fee control and hardware wallet support when you want to go deeper.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href="#download">
              <Apple className="size-4" aria-hidden="true" />
              Download for iOS
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#download">
              <Smartphone className="size-4" aria-hidden="true" />
              Download for Android
            </a>
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Direct downloads also available for desktop and sideloading.
        </p>

        <div className="mt-16">
          <img
            src={appPreview}
            alt="Northlight bitcoin wallet app shown on two smartphones with balance and transaction screens"
            width={1200}
            height={912}
            className="mx-auto w-full max-w-3xl rounded-3xl shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}
