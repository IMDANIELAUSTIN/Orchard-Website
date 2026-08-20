import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Trees, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Support", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    // On subpages without the hero CTA, keep the header button visible
    if (!isHome) {
      setShowCta(true);
      return;
    }

    const checkHeroCta = () => {
      const heroCtaEl = document.getElementById("hero-cta");
      if (!heroCtaEl) {
        setShowCta(true);
        return;
      }
      // Trigger appearance once the bottom of the hero CTA scrolls past the top navigation bar (56px)
      const rect = heroCtaEl.getBoundingClientRect();
      setShowCta(rect.bottom <= 56);
    };

    checkHeroCta();

    window.addEventListener("scroll", checkHeroCta, { passive: true });
    window.addEventListener("resize", checkHeroCta, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkHeroCta);
      window.removeEventListener("resize", checkHeroCta);
    };
  }, [isHome, location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 bg-[#F6F4F3]/80 dark:bg-[#290B00]/85 backdrop-blur-2xl [backdrop-filter:saturate(180%)_blur(20px)] [-webkit-backdrop-filter:saturate(180%)_blur(20px)] transition-all">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 font-semibold tracking-tight text-[#290B00] dark:text-[#F6F4F3]"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-xl bg-[#290B00] dark:bg-[#F6F4F3] text-[#F6F4F3] dark:text-[#290B00] shadow-sm">
            <Trees className="size-4.5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold tracking-tight">Orchard</span>
        </Link>

        {/* Desktop & Tablet Navigation Menu (md and up) */}
        <nav className="hidden items-center gap-4 sm:gap-6 md:flex lg:gap-8 text-xs sm:text-sm font-medium text-[#290B00]/70 dark:text-[#F6F4F3]/70">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#290B00] dark:hover:text-[#F6F4F3]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Tablet & Desktop: Gracefully appears only after scrolling past the Hero CTA */}
          <div
            className={`hidden md:inline-flex transition-all duration-300 ease-out ${
              showCta
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-1.5 scale-95 pointer-events-none"
            }`}
          >
            <Button
              asChild
              size="sm"
              className="bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-medium rounded-full shadow-sm text-xs h-8 px-3.5 border border-transparent dark:border-[#F6F4F3]/20"
            >
              <a href="/#download">
                <Download className="mr-1.5 size-3.5" aria-hidden="true" />
                Get Orchard
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button (below md) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden size-9 items-center justify-center rounded-full border border-[#290B00]/10 dark:border-[#F6F4F3]/15 bg-[#F6F4F3] dark:bg-[#381406] text-[#290B00] dark:text-[#F6F4F3] hover:bg-[#EAE5E2] dark:hover:bg-[#481C0C] transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#290B00]/10 dark:border-[#F6F4F3]/10 bg-[#F6F4F3]/95 dark:bg-[#290B00]/95 backdrop-blur-2xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#290B00] dark:text-[#F6F4F3] hover:text-[#5C230C] dark:hover:text-[#DFCFC9] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#290B00]/10 dark:border-[#F6F4F3]/10">
              <Button
                asChild
                className="w-full h-11 rounded-full bg-[#290B00] hover:bg-[#3D1405] text-[#F6F4F3] dark:bg-[#F6F4F3] dark:hover:bg-[#E5DED9] dark:text-[#290B00] font-semibold"
              >
                <a href="/#download" onClick={() => setMobileMenuOpen(false)}>
                  <Download className="mr-2 size-4" aria-hidden="true" />
                  Get Orchard
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
