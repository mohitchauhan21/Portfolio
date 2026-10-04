# Customization and Content Editing Guide

This guide is a complete, plain-language reference for updating, customizing, and scaling Mohit Chauhan's developer portfolio. You do not need deep framework knowledge to update your resume, add projects, or change links. All personal information and site configuration are isolated in structured TypeScript files inside `src/content/`.

---

## 1. Everyday Changes

Every row from the portfolio configuration model is expanded into numbered steps below:

### 1.1 Add a Project
1. Open `src/content/projects.ts`.
2. Add a new `Project` object to the `projects` array at the exact index where you want it to appear (top of the array renders first).
3. Ensure `id` is a unique slug (e.g. `"my-new-project"`).
4. Supply `title`, `dateLabel` (e.g. `"2026"`), `description`, optional `result` (italicized metric), and at least one item in `stack`.
5. Add repository or live links into the `links` array with `label` and `href`.
6. Run `npm run typecheck` to verify your changes.

### 1.2 Remove or Hide a Project
1. Open `src/content/projects.ts`.
2. To remove completely, delete the project object from the `projects` array.
3. To temporarily hide without deleting, add `hidden: true` to the project object.
4. Run `npm run build` to verify the page renders cleanly without the hidden item.

### 1.3 Reorder Projects
1. Open `src/content/projects.ts`.
2. Move the project objects within the `projects` array. The on-page display order mirrors the array order.

### 1.4 Add a Live Demo Link
1. Open `src/content/projects.ts`.
2. Locate the target project in the `projects` array.
3. In its `links` array, append an object:
   ```ts
   { label: "Live", href: "https://your-demo-url.com" }
   ```
4. The link automatically renders with an accessible label and divider.

### 1.5 Add a Social Link
1. Open `src/content/profile.ts`.
2. In `profile.socials`, add a new entry:
   ```ts
   {
     id: "twitter",
     label: "X (Twitter)",
     href: "https://x.com/yourhandle",
     displayText: "x.com/yourhandle",
   }
   ```
3. To display it in the Hero link row, add `"twitter"` to `profile.heroLinks`.
4. To display it in the Contact section, open `src/content/contact.ts` and add `"twitter"` to `contact.linkIds`.

### 1.6 Add a Skill or a Skill Group
1. Open `src/content/skills.ts`.
2. **To add a skill:** Append the name string into the `items` array of an existing group in `skillGroups`.
3. **To add a group:** Append a new object to `skillGroups`:
   ```ts
   {
     id: "cloud-devops",
     label: "Cloud & DevOps",
     items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
   }
   ```

### 1.7 Add a Certificate or Achievement
1. Open `src/content/background.ts`.
2. Locate the `"certificates"` or `"achievements"` group in `backgroundGroups`.
3. Add a new `BackgroundEntry` object to the `entries` array (newest entries first):
   ```ts
   {
     id: "aws-certified",
     dateLabel: "Oct 2026",
     title: "AWS Certified Solutions Architect – Associate",
     subtitle: "Amazon Web Services",
     href: "https://aws.amazon.com/verification/...",
   }
   ```

### 1.8 Add a New Background Group (e.g., Experience)
1. Open `src/content/background.ts`.
2. Append a new group object to `backgroundGroups`:
   ```ts
   {
     id: "experience",
     label: "Experience",
     entries: [
       {
         id: "swe-intern",
         dateLabel: "Jan 2026 – Present",
         title: "Acme Corporation",
         subtitle: "Software Engineering Intern",
       },
     ],
   }
   ```
3. The new group automatically renders with an `h3` uppercase group header and aligned date columns.

### 1.9 Change the Intro or About Text
1. Open `src/content/profile.ts`.
2. Edit `profile.intro` to update the hero summary sentence.
3. Edit or append strings in `profile.about` to modify paragraphs in the About section.

### 1.10 Hide a Whole Section
1. Open `src/content/site.ts`.
2. In `sections`, find the section by `id` (e.g., `"background"`).
3. Set `enabled: false`.
4. The section will vanish from the main page and its link will automatically disappear from the desktop navbar and mobile drawer.

### 1.11 Reorder Sections
1. Open `src/content/site.ts`.
2. Change the order of objects inside `sections`. The page will render them in this new top-to-bottom sequence.

### 1.12 Change a Navbar Link
1. Open `src/content/site.ts`.
2. Edit `navItems`. You can change link labels or redirect targets (either internal section anchors or external URLs).

### 1.13 Change the Page Title or Description
1. Open `src/content/site.ts`.
2. Update `site.title` (browser tab title) and `site.description` (search engine meta description, maximum 160 characters).

### 1.14 Replace the Resume
1. Save your new resume PDF with the exact filename `resume.pdf`.
2. Overwrite the file at `public/resume.pdf`.
3. Verify by opening `/resume.pdf` in your browser.

### 1.15 Replace the Profile Photo
1. Save your portrait photo at `public/images/mohit-chauhan.jpg`.
2. If your face is positioned differently, open `src/content/profile.ts` and adjust `avatar.objectPosition` (for example, `"center 25%"` or `"center top"`).

### 1.16 Change the Theme Colors
1. Open `src/app/globals.css`.
2. Adjust CSS variables under `:root` (light mode) and `.dark` (dark mode):
   - `--background`: Canvas background color
   - `--foreground`: Primary high-contrast text color
   - `--muted`: Secondary labels, dates, and subtitle text
   - `--line`: Hairline borders and dividers
   - `--accent`: Links, hover states, and focus rings

### 1.17 Change the Typography
1. Open `src/app/layout.tsx`.
2. Change the font imports from `next/font/google` (e.g. replace `Newsreader` or `Inter`).
3. Keep the exported CSS variable names (`--font-serif` and `--font-sans`) so Tailwind utility classes continue to map automatically.

---

## 2. Before-and-After Code Snippets

### Snippet 1: Add a Project (`src/content/projects.ts`)

**Before:**
```ts
export const projects: Project[] = [
  {
    id: "ecotrack",
    title: "EcoTrack — Corporate Carbon Emissions Tracking Platform",
    dateLabel: "2026",
    description: "Full-stack platform that helps companies track carbon emissions...",
    result: "Automated CO₂e calculations across 400+ logs...",
    stack: ["React 19", "TypeScript", "Express.js", "MongoDB", "JWT", "Recharts"],
    links: [{ label: "GitHub", href: "https://github.com/mohitchauhan21/EcoTrack" }],
  },
  // other projects...
];
```

**After:**
```ts
export const projects: Project[] = [
  {
    id: "ai-code-reviewer",
    title: "ReviewPulse — Automated AI Pull Request Reviewer",
    dateLabel: "2026",
    description: "Developer tool that analyzes git diffs using LLMs and posts inline security and architecture suggestions.",
    result: "Reduced manual code review turn-around time by 40%.",
    stack: ["Next.js", "TypeScript", "Node.js", "Gemini API", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/mohitchauhan21/ReviewPulse" },
      { label: "Live", href: "https://reviewpulse.dev" },
    ],
  },
  {
    id: "ecotrack",
    title: "EcoTrack — Corporate Carbon Emissions Tracking Platform",
    dateLabel: "2026",
    description: "Full-stack platform that helps companies track carbon emissions...",
    result: "Automated CO₂e calculations across 400+ logs...",
    stack: ["React 19", "TypeScript", "Express.js", "MongoDB", "JWT", "Recharts"],
    links: [{ label: "GitHub", href: "https://github.com/mohitchauhan21/EcoTrack" }],
  },
  // other projects...
];
```

---

### Snippet 2: Hide a Project (`src/content/projects.ts`)

**Before:**
```ts
  {
    id: "medremind",
    title: "MedRemind — Smart Patient Care Platform",
    dateLabel: "2026",
    description: "Role-based platform connecting patients, caregivers, doctors and admins...",
    result: "Flags patients below 60% adherence across 3 risk tiers.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Chart.js", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/mohitchauhan21/MedRemind" }],
  },
```

**After:**
```ts
  {
    id: "medremind",
    hidden: true,
    title: "MedRemind — Smart Patient Care Platform",
    dateLabel: "2026",
    description: "Role-based platform connecting patients, caregivers, doctors and admins...",
    result: "Flags patients below 60% adherence across 3 risk tiers.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Chart.js", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/mohitchauhan21/MedRemind" }],
  },
```

---

### Snippet 3: Add a Social Link (`src/content/profile.ts` & `src/content/contact.ts`)

**Before (`src/content/profile.ts`):**
```ts
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/mohitchauhan21",
      displayText: "github.com/mohitchauhan21",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohit-chauhan21",
      displayText: "linkedin.com/in/mohit-chauhan21",
    },
  ],
  heroLinks: ["github", "linkedin", "email"],
```

**After (`src/content/profile.ts`):**
```ts
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/mohitchauhan21",
      displayText: "github.com/mohitchauhan21",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohit-chauhan21",
      displayText: "linkedin.com/in/mohit-chauhan21",
    },
    {
      id: "twitter",
      label: "X (Twitter)",
      href: "https://x.com/mohitchauhan",
      displayText: "x.com/mohitchauhan",
    },
  ],
  heroLinks: ["github", "linkedin", "twitter", "email"],
```

**After (`src/content/contact.ts`):**
```ts
export const contact: ContactConfig = {
  message: "Open to internships and collaborations.",
  linkIds: ["github", "linkedin", "twitter"],
};
```

---

### Snippet 4: Add a Certificate (`src/content/background.ts`)

**Before:**
```ts
  {
    id: "certificates",
    label: "Certificates",
    entries: [
      {
        id: "oracle-foundations",
        dateLabel: "Apr 2026",
        title: "Oracle Data Platform 2025 Certified Foundations Associate",
        href: "https://drive.google.com/file/d/1GMtBf5FgxIy-2BQn5YqkYn_e5JpeFhFz/view?usp=sharing",
      },
      // older certificates...
    ],
  },
```

**After:**
```ts
  {
    id: "certificates",
    label: "Certificates",
    entries: [
      {
        id: "meta-frontend",
        dateLabel: "May 2026",
        title: "Meta Front-End Developer Professional Certificate",
        subtitle: "Coursera & Meta",
        href: "https://coursera.org/verify/professional-cert/...",
      },
      {
        id: "oracle-foundations",
        dateLabel: "Apr 2026",
        title: "Oracle Data Platform 2025 Certified Foundations Associate",
        href: "https://drive.google.com/file/d/1GMtBf5FgxIy-2BQn5YqkYn_e5JpeFhFz/view?usp=sharing",
      },
      // older certificates...
    ],
  },
```

---

### Snippet 5: Add a New Background Group (`src/content/background.ts`)

**Before:**
```ts
export const backgroundGroups: BackgroundGroup[] = [
  { id: "education", label: "Education", entries: [...] },
  { id: "training", label: "Training", entries: [...] },
  { id: "certificates", label: "Certificates", entries: [...] },
  { id: "achievements", label: "Achievements", entries: [...] },
];
```

**After:**
```ts
export const backgroundGroups: BackgroundGroup[] = [
  {
    id: "experience",
    label: "Experience",
    entries: [
      {
        id: "fellowship",
        dateLabel: "Summer 2026",
        title: "Major League Hacking (MLH) Fellow",
        subtitle: "Open Source Contributor on Distributed Systems",
        href: "https://fellowship.mlh.io",
      },
    ],
  },
  { id: "education", label: "Education", entries: [...] },
  { id: "training", label: "Training", entries: [...] },
  { id: "certificates", label: "Certificates", entries: [...] },
  { id: "achievements", label: "Achievements", entries: [...] },
];
```

---

## 3. Adding a New Section Type (6-Step Procedure)

To add a completely new section category (such as `"publications"` or `"open-source"`):

1. **Update SectionId Union:** In `src/content/types.ts`, add the new string ID to `SectionId`:
   ```ts
   export type SectionId = "hero" | "work" | "about" | "background" | "contact" | "publications";
   ```
2. **Create Data Model:** In `src/content/publications.ts`, export your data object, and re-export it from `src/content/index.ts`.
3. **Build the Section Component:** Create `src/components/sections/Publications.tsx` using `<Section id={id}>` and `<SectionHeading id={id}>`:
   ```tsx
   import { Section } from "@/components/ui/Section";
   import { SectionHeading } from "@/components/ui/SectionHeading";
   import type { SectionProps } from "@/lib/sections";

   export function Publications({ id, title = "Publications" }: SectionProps) {
     return (
       <Section id={id}>
         <SectionHeading id={id}>{title}</SectionHeading>
         {/* Render items here */}
       </Section>
     );
   }
   ```
4. **Register in Section Registry:** In `src/lib/sections.ts`, import `Publications` and add it to `sectionRegistry`:
   ```ts
   import { Publications } from "@/components/sections/Publications";

   export const sectionRegistry: Record<SectionId, ComponentType<SectionProps>> = {
     hero: Hero,
     work: Work,
     about: About,
     background: Background,
     contact: Contact,
     publications: Publications,
   };
   ```
5. **Enable in Site Configuration:** In `src/content/site.ts`, add the section to `sections`:
   ```ts
   { id: "publications", enabled: true, title: "Publications" }
   ```
   If desired, also append an item to `navItems`.
6. **Add Build Validator Rules:** In `src/lib/validate-content.ts`, add any integrity assertions for your new data file to ensure missing fields or malformed URLs are caught before building.

---

## 4. Content Validation Error Troubleshooting

Build-time validation automatically runs during every build (`assertContentValid()`). If an error is triggered, locate it below to resolve it quickly:

| Error Message Pattern | Why It Occurs | How to Fix |
|---|---|---|
| `Duplicate id "[id]" in [context]` | Two items in the same collection share the same `id` string. | Open the noted file and assign a unique slug to each item. |
| `Entry "[id]" has empty or non-string field "[field]"` | A required string field was left empty (`""`), omitted, or contains only whitespace. | Provide valid text for the indicated field. |
| `Entry "[id]" has invalid href "[href]"` | A link href does not start with `https://`, `http://`, `mailto:`, or `/`. | Ensure external links include `https://` and internal asset paths begin with `/`. |
| `references "[path]", but file was not found under public directory` | An image or document path was declared in `src/content/`, but the physical file is missing from `/public`. | Place the referenced file into the appropriate directory under `public/` (e.g. `public/images/...`). |
| `heroLinks contains unknown id "[id]"` | `profile.heroLinks` references an ID that does not exist in `profile.socials` and is not `"email"`. | Ensure the ID matches one of the IDs declared in `profile.socials`. |
| `contact.linkIds contains unknown id "[id]"` | `contact.linkIds` references an ID that is not defined in `profile.socials`. | Add the corresponding social link object to `profile.socials` first. |
| `navItems contains target for unknown section id "[id]"` | A navigation item targets a section ID that does not exist in `sections`. | Verify spelling against `sections` in `src/content/site.ts`. |
| `profile.email "[email]" must contain exactly one "@" and a dot in its domain` | The email address format is invalid. | Correct `profile.email` in `src/content/profile.ts` (e.g. `user@example.com`). |
| `site.description has [N] characters; maximum allowed is 160 characters` | The SEO meta description exceeds the search engine limit of 160 characters. | Shorten `site.description` in `src/content/site.ts` to 160 characters or fewer. |
| `Project "[id]" must contain at least one stack item` | The `stack` array for a project is empty. | Add at least one technology name string to `stack: [...]`. |

---

## 5. Pre-Deployment Quality Checklist

Run this quick automated verification sequence before committing or deploying changes to production:

```bash
# 1. Lint check (must exit with 0 warnings)
npm run lint

# 2. Type check (must exit with 0 errors)
npm run typecheck

# 3. Static production build (must compile static '○' route)
npm run build
```

Then preview the site locally:
```bash
npm start
```
Check:
- [ ] Light theme looks clean and balanced.
- [ ] Dark theme toggle works in both directions without flickering.
- [ ] External links open in a new tab; email link opens your mail client.
- [ ] Mobile navigation drawer opens, navigates to sections, and traps focus cleanly.
