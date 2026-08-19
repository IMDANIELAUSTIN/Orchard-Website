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
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/75 backdrop-blur-2xl [backdrop-filter:saturate(180%)_blur(20px)] [-webkit-backdrop-filter:saturate(180%)_blur(20px)] transition-all">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-[#1D1D1F]">
          <span className="inline-flex size-8 items-center justify-center rounded-xl bg-rose-600 text-white shadow-sm">
            <Trees className="size-4.5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold tracking-tight">Orchard</span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-medium text-[#86868B] lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#1D1D1F]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-rose-600 hover:bg-rose-500 text-white font-medium rounded-full shadow-sm text-xs h-8 px-3.5">
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
