import { Link } from "@tanstack/react-router";
import { Trees, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Pillars", href: "/#pillars" },
  { label: "Capabilities", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "Tech Specs", href: "/#specs" },
  { label: "Open Source", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground">
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand text-primary-foreground shadow-sm">
            <Trees className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">Orchard</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-rose-600 hover:bg-rose-500 text-white font-medium rounded-xl shadow-sm">
            <a href="/#download">
              <Download className="mr-1.5 size-3.5" aria-hidden="true" />
              Get Orchard
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
