# Mohit Chauhan — Developer Portfolio

A fast, accessible, and responsive personal developer portfolio website for Mohit Chauhan, a Full-Stack Developer and Computer Science undergraduate at Lovely Professional University. Built following an editorial monograph design aesthetic in light (`#fcf9f8` canvas) and dark (`#131316` canvas) modes, the site highlights selected production full-stack and AI-driven projects, technical skills, academic and training background, and verified contact channels with zero layout shift and static pre-rendering.

---

## Technology Stack

- **Framework:** Next.js 16.3.8 (App Router, Turbopack, Static Export `○`)
- **UI Library:** React 19.2.0 & React DOM 19.2.0
- **Language:** TypeScript 5.9.3 (strict mode, no implicit any)
- **Styling:** Tailwind CSS 4.2.2 (vanilla CSS variables via `@theme inline`)
- **Theme Management:** `next-themes` 0.4.6 (light/dark switcher with hydration safety)
- **Code Formatter:** Prettier 3.6.2 with `prettier-plugin-tailwindcss` 0.7.3
- **Linter:** ESLint 9.38.0 with Next.js core web vitals and strict zero-warning rule

---

## Requirements

- **Node.js:** `v20.0.0` or higher (tested on `v24.21.0`)
- **Package Manager:** `npm` `10.0.0` or higher (tested on `11.19.0`)

---

## Commands

```bash
npm install        # Install project dependencies
npm run dev        # Start the local development server at http://localhost:3000
npm run build      # Compile an optimized static production build in .next/
npm start          # Run the pre-built static production server at http://localhost:3000
npm run lint       # Run ESLint across all files with --max-warnings 0
npm run typecheck  # Run TypeScript compiler type-checking without emitting files
npm run format     # Format all code and docs using Prettier
```

---

## Project Structure

```
mohit-portfolio/
├── design/                 # Raw Stitch exports (Editorial and Nocturne reference screens)
├── docs/                   # Build logs, pending trackers, and customization guide
│   ├── CUSTOMIZING.md     # Step-by-step editing manual and troubleshooting guide
│   ├── pending.md         # Phase-by-phase task checklist
│   └── progress.md        # Comprehensive implementation history
├── public/                 # Static public assets served from root
│   ├── images/            # Profile avatar image (mohit-chauhan.jpg)
│   └── resume.pdf         # Downloadable CV/resume document
├── src/                    # Application source code
│   ├── app/               # Next.js App Router root layout, pages, and metadata routes
│   │   ├── globals.css    # Design tokens, CSS variables, typography, and print rules
│   │   ├── icon.tsx       # Dynamically generated 32x32 MC favicon via next/og
│   │   ├── layout.tsx     # Root HTML document, font loading, and ThemeProvider
│   │   ├── not-found.tsx  # Themed 404 page with return navigation
│   │   ├── opengraph-image.tsx # 1200x630 social preview card generated via next/og
│   │   ├── page.tsx       # Main page assembling registered sections and JSON-LD
│   │   ├── robots.ts      # Search engine crawler permissions and sitemap pointer
│   │   └── sitemap.ts     # XML sitemap generator with current build date
│   ├── components/        # React components
│   │   ├── icons/         # Lightweight inline SVG icons (SunIcon, MoonIcon)
│   │   ├── layout/        # Site-wide layout chrome (Navbar, MobileMenu, ThemeToggle, Footer)
│   │   ├── sections/      # Individual page section components (Hero, Work, About, Background, Contact)
│   │   └── ui/            # Reusable UI primitives (Section, SectionHeading, TextLink, Avatar, ProjectItem, BackgroundRow)
│   ├── content/           # Pure TypeScript structured data layer
│   │   ├── background.ts  # Education, training, certificates, and achievements
│   │   ├── contact.ts     # Contact section copy and social link associations
│   │   ├── index.ts       # Central re-export of all content modules
│   │   ├── profile.ts     # Bio, role, location, intro text, and social links
│   │   ├── projects.ts    # Featured projects, stack items, descriptions, and URLs
│   │   ├── site.ts        # Global site metadata, section toggles, and navigation links
│   │   ├── skills.ts      # Categorized technical skill groups
│   │   └── types.ts       # TypeScript interfaces and domain models
│   ├── hooks/             # Custom React hooks (useScrolled, useScrollSpy, useLockBodyScroll)
│   └── lib/               # Helper utilities, section registry, and build validators
│       ├── cn.ts          # Minimal class name joiner
│       ├── sections.ts    # Section registry mapping section IDs to React components
│       ├── url.ts         # URL helpers and external link detector
│       └── validate-content.ts # 9-rule build-time content validation assertion
├── .prettierrc             # Prettier formatting configuration and plugin loader
├── eslint.config.mjs       # ESLint flat config with Next.js rules
├── next.config.ts          # Next.js build and Turbopack configuration
├── package.json            # Scripts, project metadata, and dependency declarations
└── tsconfig.json           # TypeScript configuration with strict mode and @/* path alias
```

---

## Editing Content

All copy, project details, skills, credentials, and social links reside in `src/content/`. Modifying these files does not require changing component JSX.

- **Profile & Bio:** Edit `src/content/profile.ts`
- **Projects:** Edit `src/content/projects.ts`
- **Skills:** Edit `src/content/skills.ts`
- **Education, Certifications & Achievements:** Edit `src/content/background.ts`
- **Navigation & Section Toggles:** Edit `src/content/site.ts`

For comprehensive recipes, copy-pasteable before-and-after snippets, and error troubleshooting, see **[`docs/CUSTOMIZING.md`](./docs/CUSTOMIZING.md)**.

---

## Environment Variables

| Variable | Description | When Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical website origin (e.g. `https://mohitchauhan.dev`) without trailing slash | Required when deploying to a custom domain. When deploying to Vercel without a custom domain, Vercel automatically infers `VERCEL_PROJECT_PRODUCTION_URL`. |

---

## Deployment (Vercel)

Follow these steps to deploy the portfolio to production:

1. **Create Repository:** Create an empty repository on GitHub, add it as remote, and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. **Import to Vercel:** Log in to [Vercel](https://vercel.com/) with GitHub and click **Add New Project**.
3. **Select Repository:** Import the repository. Vercel automatically detects Next.js; leave all build commands as default.
4. **Environment Variables:** If using a custom domain, set `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com` (no trailing slash). If using the default `*.vercel.app` domain, skip this step.
5. **Deploy & Verify:** Click **Deploy**. When completed, verify the live URL against both light and dark themes.
6. **Social Preview Test:** Paste the URL into the Open Graph preview debugger (e.g., [opengraph.xyz](https://www.opengraph.xyz/)) to verify the generated social preview card.

---

## Design Reference Note

The `design/` folder contains original Stitch screen exports and design specs representing the target visual state (Editorial Monograph and Nocturne Monograph). It is intentionally excluded from TypeScript type checking and ESLint builds, but tracked in git as reference documentation.
