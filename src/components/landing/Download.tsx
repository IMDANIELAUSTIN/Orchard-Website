import { Apple, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/lib/store-links";

export function Download() {
  return (
    <section id="download" className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Take custody of your bitcoin today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Free, open source, and available on the devices you already use. No account, no KYC,
          no third-party custody.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
              <Apple className="size-4" aria-hidden="true" />
              Download for iOS
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href={STORE_LINKS.android} target="_blank" rel="noopener noreferrer">
              <Smartphone className="size-4" aria-hidden="true" />
              Download for Android
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={STORE_LINKS.desktop} target="_blank" rel="noopener noreferrer">
              <Monitor className="size-4" aria-hidden="true" />
              Desktop
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Orchard Wallet. Open source software.</p>
        <nav className="flex flex-wrap gap-6">
          <a href="/#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="/pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="/blog" className="transition-colors hover:text-foreground">
            Blog
          </a>
          <a href="/#download" className="transition-colors hover:text-foreground">
            Download
          </a>
        </nav>
      </div>
    </footer>
  );
}
