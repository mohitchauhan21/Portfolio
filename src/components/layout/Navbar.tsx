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
          "sticky top-0 z-50 w-full bg-background transition-colors duration-150",
          isScrolled ? "border-b border-line" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-14 md:h-16 max-w-[800px] items-center justify-between px-6 sm:px-8">
          {/* Wordmark */}
          <a
            href="#main"
            className="font-serif text-lg font-medium text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                        "text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        isActive
                          ? "text-foreground underline decoration-1 underline-offset-[6px] decoration-accent"
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
                    className="text-sm text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
            className="flex h-11 min-w-[44px] items-center justify-center px-2 text-sm font-medium text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden cursor-pointer"
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
