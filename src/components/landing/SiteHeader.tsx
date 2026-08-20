import { Link } from "@tanstack/react-router";
import { Trees, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
    { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Benefits", href: "/#how" },
  { label: "Support", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 bg-[#F6F4F3]/80 dark:bg-[#290B00]/85 backdrop-blur-2xl [backdrop-filter:saturate(180%)_blur(20px)] [-webkit-backdrop-filter:saturate(180%)_blur(20px)] transition-all">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-[#290B00] dark:text-[#F6F4F3]">
          <span className="inline-flex size-8 items-center justify-center rounded-xl bg-[#290B00] dark:bg-[#F6F4F3] text-[#F6F4F3] dark:text-[#290B00] shadow-sm">
            <Trees className="size-4.5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold tracking-tight">Orchard</span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-medium text-[#290B00]/65 dark:text-[#F6F4F3]/65 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#290B00] dark:hover:text-[#F6F4F3]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-medium rounded-full shadow-sm text-xs h-8 px-3.5 border border-transparent dark:border-[#F6F4F3]/20">
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
