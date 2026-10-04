"use client";

import { useMemo, useRef, useState } from "react";
import { site, sections, navItems, type NavItem } from "@/content";
import { useScrolled } from "@/hooks/useScrolled";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/cn";

export function Navbar() {
  const isScrolled = useScrolled(8);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

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
            <nav className="flex items-center gap-7" aria-label="Primary">
              {visibleNavItems.map((item) => {
                if (item.target.type === "section") {
                  const isActive = activeSectionId === item.target.id;
                  return (
                    <a
                      key={item.label}
                      href={`#${item.target.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "focus-visible:ring-accent text-sm transition-colors focus:outline-none focus-visible:ring-2",
                        isActive
                          ? "text-foreground decoration-accent underline decoration-1 underline-offset-[6px]"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {item.label}
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
                    className="text-muted hover:text-foreground focus-visible:ring-accent text-sm transition-colors focus:outline-none focus-visible:ring-2"
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
