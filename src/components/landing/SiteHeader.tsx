import { Link } from "@tanstack/react-router";
import { Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Download", href: "/#download" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-brand">
            <Bitcoin className="size-4 text-primary-foreground" aria-hidden="true" />
          </span>
          Northlight
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm">
          <a href="/#download">Get the app</a>
        </Button>
      </div>
    </header>
  );
}
