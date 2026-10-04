"use client";

import { useEffect, useRef } from "react";
import { site, type NavItem } from "@/content";
import { ThemeToggle } from "./ThemeToggle";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  items: NavItem[];
}

export function MobileMenu({ isOpen, onClose, triggerRef, items }: MobileMenuProps) {
  useLockBodyScroll(isOpen);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close when viewport widens to 768px or above
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  // Focus management & Escape handling
  useEffect(() => {
    if (!isOpen) return;

    // Focus first link on open
    const timer = setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab") {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];
        const trigger = triggerRef.current;

        if (e.shiftKey) {
          if (document.activeElement === firstElement && trigger) {
            e.preventDefault();
            trigger.focus();
          } else if (document.activeElement === trigger) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement && trigger) {
            e.preventDefault();
            trigger.focus();
          } else if (document.activeElement === trigger) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col justify-between bg-background px-6 py-10 md:hidden"
    >
      <nav className="flex flex-col space-y-5" aria-label="Mobile">
        {items.map((item, index) => {
          const href =
            item.target.type === "section"
              ? `#${item.target.id}`
              : item.target.href;
          const isExternal =
            item.target.type === "external" && item.target.newTab;

          return (
            <a
              key={item.label}
              ref={index === 0 ? firstLinkRef : undefined}
              href={href}
              onClick={() => {
                onClose();
                triggerRef.current?.focus();
              }}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="font-serif text-[32px] text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="flex items-center justify-between border-t border-line pt-6">
        <span className="text-sm text-muted">{site.ui.themeToggle}</span>
        <ThemeToggle />
      </div>
    </div>
  );
}
