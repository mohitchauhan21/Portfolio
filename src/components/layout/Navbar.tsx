"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { site, sections, navItems, type NavItem } from "@/content";
import { useScrolled } from "@/hooks/useScrolled";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/cn";

export function Navbar() {
  const isScrolled = useScrolled(8);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  // Throttled scroll progress line
  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalHeight)));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filter out any navItems targeting disabled sections
  const enabledSectionIds = useMemo(() => {
    return new Set(sections.filter((s) => s.enabled).map((s) => s.id));
  }, []);

  const visibleNavItems = useMemo<NavItem[]>(() => {
    return navItems.filter((item) => {
      if (item.target.type === "section") {
        return enabledSectionIds.has(item.target.id);
      }
      return true;
    });
  }, [enabledSectionIds]);

  // Section ids to spy on
  const spyIds = useMemo(() => {
    return visibleNavItems
      .filter((i) => i.target.type === "section")
      .map((i) => (i.target as { type: "section"; id: string }).id);
  }, [visibleNavItems]);

  // Fallback active id: the first section nav item (e.g. "work"), matching Stitch screenshot
  const fallbackActiveId = spyIds[0] ?? "";
  const activeSectionId = useScrollSpy(spyIds, fallbackActiveId);

  return (
    <>
      <header
        className={cn(
          "bg-background sticky top-0 z-50 w-full transition-colors duration-150",
          isScrolled ? "border-line border-b" : "border-b border-transparent"
        )}
      >
        {/* Scroll Progress Bar (2px accent line) */}
        <div
          aria-hidden="true"
          className="bg-accent absolute bottom-0 left-0 h-[2px] w-full origin-left transition-transform duration-75 ease-out"
          style={{
            transform: `scaleX(${scrollProgress})`,
          }}
        />

        <div className="content-container flex h-14 items-center justify-between md:h-16">
          {/* Wordmark */}
          <a
            href="#main"
            className="text-foreground hover:text-accent focus-visible:ring-accent font-serif text-lg font-medium transition-colors focus:outline-none focus-visible:ring-2"
          >
            {site.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-7">
            <nav className="flex items-center gap-7 relative" aria-label="Primary">
              {visibleNavItems.map((item) => {
                if (item.target.type === "section") {
                  const isActive = activeSectionId === item.target.id;
                  return (
                    <a
                      key={item.label}
                      href={`#${item.target.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "focus-visible:ring-accent relative py-1 text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2",
                        isActive ? "text-foreground font-medium" : "text-muted hover:text-foreground"
                      )}
                    >
                      {item.label}
                      {/* Active sliding indicator */}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="bg-accent absolute bottom-0 left-0 h-[1.5px] w-full transition-all duration-250 ease-out"
                        />
                      )}
                    </a>
                  );
                }

                // External link
                const isExternal = item.target.newTab;
                return (
                  <a
                    key={item.label}
                    href={item.target.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-muted hover:text-foreground focus-visible:ring-accent relative py-1 text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuTriggerRef}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-foreground hover:text-accent focus-visible:ring-accent flex h-11 min-w-[44px] cursor-pointer items-center justify-center px-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 md:hidden"
          >
            {mobileMenuOpen ? site.ui.menuClose : site.ui.menuOpen}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        triggerRef={menuTriggerRef}
        items={visibleNavItems}
      />
    </>
  );
}
