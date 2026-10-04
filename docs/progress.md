# Portfolio Build — Progress Log

**Owner:** Mohit Chauhan  
**Project Root:** `c:\Users\HP\Desktop\Portfolio\mohit-portfolio`  
**Last Updated:** October 4, 2026

---

## ✅ Phase 0: Inspection and Plan — COMPLETE

- Read all 24 sections (1,077 paragraphs) of build specification
- Identified light theme folder: `stitch_mohit_chauhan_developer_portfolio` (Editorial Monograph, `#fcf9f8` canvas)
- Identified dark theme folder: `stitch_mohit_chauhan_developer_portfolio (1)` (Nocturne Monograph, `#131316` canvas)
- Confirmed: No mobile-width Stitch screen exports exist in either folder
- Extracted all 11 PDF link annotations from `Mohit CV.pdf` with exact target URLs
- Mapped 3 project GitHub URLs, 1 training certificate URL, 4 credential URLs
- Confirmed photo dimensions: `699 × 1280 px` — no resizing needed
- Selected `objectPosition: "center 20%"` for avatar crop
- Verified Node.js `v24.21.0` and npm `11.19.0`
- Ran WCAG 2.2 contrast checks on all light and dark tokens — all text tokens pass ≥ 4.5:1
- Produced full design extraction report (fonts, colors, spacing, components)

---

## ✅ Phase 1: Scaffold and Tooling — COMPLETE

**Git commit:** `phase 1: scaffold and tooling`

- Created Next.js 16.3.8 project with TypeScript, Tailwind CSS v4, ESLint, App Router, `src/` directory, `@/*` alias
- Installed `next-themes`, `prettier`, `prettier-plugin-tailwindcss`
- Uninstalled `babel-plugin-react-compiler` (not in spec-allowed packages)
- Created `.prettierrc` with plugin configuration
- Updated `package.json` scripts: added `typecheck` and `format`, updated `lint` to `eslint . --max-warnings 0`
- Cleaned `next.config.ts` (removed reactCompiler)
- Updated `tsconfig.json` to exclude `design/` folder from TypeScript compilation
- Updated `eslint.config.mjs` to ignore `design/**` in ESLint
- Copied Stitch exports → `design/light/` and `design/dark/`
- Copied `Mohit CV.pdf` → `public/resume.pdf`
- Copied `Formals Pic.jpg` → `public/images/mohit-chauhan.jpg`
- Created all required directories
- ✅ `npm run lint`, `npm run typecheck`, `npm run build` — all clean

---

## ✅ Phase 2: Design Tokens, Fonts and Content Layer — COMPLETE

**Git commit:** `phase 2: design tokens, fonts and content layer`

- `src/app/globals.css` — CSS variables, `@theme inline` Tailwind mapping, dark variant, scroll-behavior, selection color, print stylesheet
- `src/app/layout.tsx` — Newsreader + Inter via `next/font/google`, metadata, viewport themeColor, skip link, ThemeProvider
- `src/components/layout/ThemeProvider.tsx` — `next-themes` client wrapper
- `src/content/types.ts` — all TypeScript types
- `src/content/site.ts` — SiteConfig, sections, navItems
- `src/content/profile.ts` — Profile with socials, avatar, heroLinks, resume
- `src/content/projects.ts` — EcoTrack, SciBot, MedRemind with GitHub URLs; corrected EcoTrack result
- `src/content/skills.ts` — Languages + Frameworks & Tools (incl. OpenAI API, Gemini API, Hugging Face)
- `src/content/background.ts` — Education, Training, Certificates, Achievements with all credential hrefs
- `src/content/contact.ts` — Contact config
- `src/content/index.ts` — Central re-export
- `src/lib/validate-content.ts` — 9-rule build-time content validator
- `src/lib/cn.ts` — 5-line class name joiner
- `src/lib/url.ts` — URL helper utilities
- `src/lib/sections.ts` — Section registry

**Validation drills confirmed:**

- ✅ Duplicate id → clear build error
- ✅ Missing asset path → clear build error
- ✅ Unknown id in heroLinks → clear build error
- ✅ Final clean build passes

---

## ✅ Phase 3: Navbar, Theme Toggle and Mobile Menu — COMPLETE

**Git commit:** `phase 3: navbar, theme toggle and mobile menu`

- `src/hooks/useScrolled.ts` — 8px threshold detection
- `src/hooks/useScrollSpy.ts` — IntersectionObserver active section tracking
- `src/hooks/useLockBodyScroll.ts` — overflow hidden when mobile menu open
- `src/components/icons/SunIcon.tsx` — inline SVG sun icon
- `src/components/icons/MoonIcon.tsx` — inline SVG moon icon
- `src/components/layout/ThemeToggle.tsx` — hydration-safe toggle with `useSyncExternalStore`
- `src/components/layout/MobileMenu.tsx` — accessible drawer with focus trap, Escape, Tab wrap
- `src/components/layout/Navbar.tsx` — responsive header, wordmark, desktop nav, active indicator
- `src/app/layout.tsx` — Navbar integrated

---

## ✅ Phase 4: Page Sections — COMPLETE

**Git commit:** `phase 4: page sections`

- `src/components/ui/Section.tsx` — section wrapper with id, scroll-margin, hero padding, border-line
- `src/components/ui/SectionHeading.tsx` — serif h2 with responsive sizing (28px mobile, 36px desktop)
- `src/components/ui/TextLink.tsx` — underlined link with accent hover and external link handling
- `src/components/ui/LinkList.tsx` — hairline-divided link list with accessible labels
- `src/components/ui/Avatar.tsx` — circular avatar with next/image, border, and object-position
- `src/components/ui/ProjectItem.tsx` — two-column article (date | title, description, result, stack, links)
- `src/components/ui/BackgroundRow.tsx` — two-column entry row (date | title + subtitle)
- `src/components/sections/Hero.tsx` — role/location label, h1, intro, responsive avatar (56px mobile / 64px desktop), heroLinks
- `src/components/sections/Work.tsx` — heading + ProjectItem list (all visible projects)
- `src/components/sections/About.tsx` — paragraphs + skills description list (dl/dt/dd)
- `src/components/sections/Background.tsx` — group labels + BackgroundRow entries (Education, Training, Certificates, Achievements)
- `src/components/sections/Contact.tsx` — message, large serif email link, responsive social links row
- `src/components/layout/Footer.tsx` — copyright line with dynamic year, no border
- `src/lib/sections.ts` — populated sectionRegistry with all 5 section components
- `src/app/page.tsx` — wired sections via registry, JSON-LD Person schema (name, role, site URL, avatar, socials)
- ✅ `npm run lint` (0 warnings), `npm run typecheck` (0 errors), `npm run build` (static build `○ /`) clean

