# Portfolio Build — Pending Work

**Owner:** Mohit Chauhan  
**Project Root:** `c:\Users\HP\Desktop\Portfolio\mohit-portfolio`  
**Last Updated:** October 4, 2026

---

## ✅ Phase 3: Navbar, Theme Toggle and Mobile Menu — COMPLETE

- [x] Verify `ThemeToggle.tsx` lint-clean with `useSyncExternalStore` fix
- [x] Run `npm run lint` — 0 warnings
- [x] Run `npm run typecheck` — 0 errors
- [x] Run `npm run build` — static build passes
- [x] Manual verification (desktop & mobile menu, skip link, theme toggle)
- [x] Commit: `phase 3: navbar, theme toggle and mobile menu`

---

## ✅ Phase 4: Page Sections — COMPLETE

**Files created:**

- [x] `src/components/ui/Section.tsx` — section wrapper with `id`, `data-section`, `aria-labelledby`, border, scroll margin
- [x] `src/components/ui/SectionHeading.tsx` — `h2` in serif
- [x] `src/components/ui/TextLink.tsx` — underlined anchor, accent hover, external link detection
- [x] `src/components/ui/LinkList.tsx` — ordered list of TextLinks with hairline dividers
- [x] `src/components/ui/Avatar.tsx` — circular `next/image` with `objectPosition` and `1px` line border
- [x] `src/components/ui/ProjectItem.tsx` — two-column article (date | title, description, result, stack, links)
- [x] `src/components/ui/BackgroundRow.tsx` — two-column entry row (date | title + subtitle)
- [x] `src/components/sections/Hero.tsx` — label, h1, intro, avatar, heroLinks row
- [x] `src/components/sections/Work.tsx` — heading + ProjectItem list
- [x] `src/components/sections/About.tsx` — about paragraphs + skills description list
- [x] `src/components/sections/Background.tsx` — groups with h3 labels + BackgroundRow entries
- [x] `src/components/sections/Contact.tsx` — heading, message, email link, social links row
- [x] `src/components/layout/Footer.tsx` — copyright line, current year
- [x] `src/lib/sections.ts` — section registry populated with all 5 sections
- [x] `src/app/page.tsx` — wire sections from config through registry, include structured data JSON-LD

**Checks:**

- [x] `npm run lint` — 0 warnings
- [x] `npm run typecheck` — 0 errors
- [x] `npm run build` — static build passes
- [x] Commit: `phase 4: page sections`

---

## ✅ Phase 5: Responsive and Dark-Theme Pass — COMPLETE

- [x] Fix every visual difference from Phase 4 comparison
- [x] Complete dark theme styling across all sections
- [x] Apply all responsive rules from Section 13:
  - Navbar: mobile (Menu button) vs desktop (full link row)
  - Hero avatar: 56 px above label on mobile, 64 px top-right on ≥ 640 px
  - Hero name: 40 px mobile → 56 px desktop
  - Project rows: single column < 768 px, two-column ≥ 768 px
  - Skill groups: single column < 640 px, two-column ≥ 640 px
  - Background rows: single column < 640 px, two-column ≥ 640 px
  - Contact links: stacked (12 px gap) < 640 px, row (48 px gap) ≥ 640 px
  - Section padding: 64 px < 768 px, 96 px ≥ 768 px
- [x] No horizontal scrolling at any viewport from 320 px up
- [x] All touch targets ≥ 44 × 44 px on mobile
- [x] Layout survives 200% browser zoom
- [x] Theme toggle verified in light and dark modes
- [x] Commit: `phase 5: responsive and dark-theme pass`

---

## ⏳ Phase 6: Accessibility, SEO, Performance and Documentation — NOT STARTED

**Accessibility (Section 14):**

- [ ] Verify landmark structure: one `header`, one `nav` with label, one `main`, one `footer`
- [ ] Verify heading hierarchy: one `h1`, one `h2` per section, `h3` for project titles / skills heading / background group labels
- [ ] Confirm all text meets minimum sizes: body ≥ 16 px, secondary ≥ 14 px, meta ≥ 12 px
- [ ] Verify all contrast ratios ≥ 4.5:1 (text) and ≥ 3:1 (UI boundaries, focus)
- [ ] Confirm all interactive elements reachable by Tab and operable with Enter/Space
- [ ] Confirm all icon-only controls have `aria-label`; decorative icons have `aria-hidden="true"`

**SEO & Metadata (Section 15):**

- [ ] `src/app/icon.tsx` — generated 32×32 favicon with "MC"
- [ ] `src/app/opengraph-image.tsx` — 1200×630 OG image via `@vercel/og` (name, role, site URL)
- [ ] `src/app/sitemap.ts` — single root URL with current date as `lastModified`
- [ ] `src/app/robots.ts` — allow all crawlers, point to sitemap
- [ ] `src/app/not-found.tsx` — themed 404 with link to home
- [ ] Verify JSON-LD Person schema in `page.tsx` (name, jobTitle, url, image, sameAs)

**Documentation (Section 18):**

- [ ] `README.md` — project description, stack versions, requirements, commands, folder structure, editing guide, environment variable, deployment steps, design reference note
- [ ] `docs/CUSTOMIZING.md` — all 17.1 recipes as numbered steps, 5 before/after code snippets, 6-step new section procedure, validation error troubleshooting table, deployment checklist

**Snippet verification drills (Section 18.2):**

- [ ] Apply "add a project" snippet → typecheck + build → verify on page → revert
- [ ] Apply "hide a project" snippet → typecheck + build → verify on page → revert
- [ ] Apply "add a social link" snippet → typecheck + build → verify on page → revert
- [ ] Apply "add a certificate" snippet → typecheck + build → verify on page → revert
- [ ] Apply "add a new background group" snippet → typecheck + build → verify on page → revert

**Checks:**

- [ ] `npm run lint` — 0 warnings
- [ ] `npm run typecheck` — 0 errors
- [ ] `npm run build` — static build passes
- [ ] Commit: `phase 6: accessibility, seo, performance and documentation`

---

## ⏳ Phase 7: Repository and Deployment Readiness — NOT STARTED

- [ ] Verify `.gitignore` is correct (generated by create-next-app)
- [ ] Search for and remove any unused files and dependencies
- [ ] Confirm zero TODO comments in the codebase
- [ ] Confirm zero `console.log` calls
- [ ] Confirm zero commented-out code blocks
- [ ] Confirm zero unused imports

**Full Verification Protocol (Section 20):**

- [ ] `npm run lint` — 0 warnings
- [ ] `npm run typecheck` — 0 errors
- [ ] `npm run build` — static build, `○` route
- [ ] All 8 viewport × theme screenshots match Stitch (or differences justified)
- [ ] Functional checks:
  - [ ] Theme toggle works in both directions, survives reload, respects OS preference
  - [ ] Every nav link scrolls to correct section without clipping under navbar
  - [ ] Active nav link changes as page scrolls
  - [ ] Resume link opens `/resume.pdf` in new tab
  - [ ] All external links open in new tab with `rel="noopener noreferrer"`
  - [ ] Mobile menu focus trap, Escape, link-close all work
  - [ ] Skip link appears on first Tab
  - [ ] All content readable with JavaScript disabled
  - [ ] Print preview: clean light-theme page, no navbar
  - [ ] No console errors or warnings on load or interaction
- [ ] Lighthouse mobile + desktop: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95

**Scalability drills (Section 20.5):**

- [ ] Add 4th project in `projects.ts` → build passes → revert
- [ ] Disable a section in `site.ts` → section + nav link disappear → build passes → revert
- [ ] Add social link in `profile.ts`, add to `contact.linkIds` → appears in contact section → build passes → revert

**Final commit:**

- [ ] Commit: `phase 7: repository and deployment readiness`
- [ ] Clean working tree (no uncommitted changes)
- [ ] One commit per phase in git history

---

## 📋 Summary Table

| Phase | Description                                       | Status         |
| ----- | ------------------------------------------------- | -------------- |
| 0     | Inspection and Plan                               | ✅ Complete    |
| 1     | Scaffold and Tooling                              | ✅ Complete    |
| 2     | Design Tokens, Fonts and Content Layer            | ✅ Complete    |
| 3     | Navbar, Theme Toggle and Mobile Menu              | ✅ Complete    |
| 4     | Page Sections                                     | ✅ Complete    |
| 5     | Responsive and Dark-Theme Pass                    | ✅ Complete    |
| 6     | Accessibility, SEO, Performance and Documentation | 🔄 In Progress |
| 7     | Repository and Deployment Readiness               | ⏳ Not Started |
