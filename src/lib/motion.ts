/**
 * Central animation parameters for the portfolio.
 * Modify parameters here to tune timing, distances, and easings globally.
 */

export const MOTION = {
  // Global easing function: smooth ease-out without bounce or overshoot
  ease: [0.22, 1, 0.36, 1] as const,

  // 1. Hero Entrance
  hero: {
    distance: 12, // px
    duration: 0.5, // seconds (500ms)
    stagger: 0.08, // seconds (80ms)
  },

  // 2. Scroll Reveal
  reveal: {
    distance: 20, // px
    duration: 0.5, // seconds (500ms)
    stagger: 0.06, // seconds (60ms)
    viewportAmount: 0.2, // 20% visible before triggering
  },

  // 3. Navbar Active Indicator
  navbar: {
    duration: 0.25, // seconds (250ms)
  },

  // 5. Links
  linkUnderlineDuration: "200ms",

  // 6. Project Rows Hover
  projectHover: {
    shiftDistance: "4px",
    duration: "200ms",
  },

  // 7. Skill Items Hover
  skillHover: {
    liftDistance: "-2px",
    duration: "150ms",
  },

  // 8. Theme Toggle
  themeToggle: {
    rotation: 90, // degrees
    duration: 0.3, // seconds (300ms)
    themeColorTransition: "200ms",
  },

  // 9. Mobile Menu
  mobileMenu: {
    overlayFadeDuration: 0.2, // seconds (200ms)
    overlayFadeOutDuration: 0.15, // seconds (150ms)
    itemSlideDistance: 12, // px
    itemStagger: 0.05, // seconds (50ms)
  },
};
