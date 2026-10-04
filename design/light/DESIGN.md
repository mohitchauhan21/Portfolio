---
name: Editorial Monograph
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#44474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#4a5f85'
  primary: '#0a2346'
  on-primary: '#ffffff'
  primary-container: '#23395d'
  on-primary-container: '#8ea3cd'
  inverse-primary: '#b1c7f3'
  secondary: '#575e6f'
  on-secondary: '#ffffff'
  secondary-container: '#d8e0f3'
  on-secondary-container: '#5b6373'
  tertiary: '#312100'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c3500'
  on-tertiary-container: '#c09e60'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b1c7f3'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#31476c'
  secondary-fixed: '#dbe2f6'
  secondary-fixed-dim: '#bfc6da'
  on-secondary-fixed: '#141c2a'
  on-secondary-fixed-variant: '#3f4757'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#e6c180'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5b430c'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system is tailored for an editorial, contemplative, and uncompromisingly restrained personal portfolio. It presents work with the quiet authority and pacing of an architectural monograph or literary publication. The audience consists of design directors, curators, writers, and collaborators who value rigorous craft, clarity of thought, and timeless typographic hierarchy over decorative interface trends.

The aesthetic philosophy is pure editorial minimalism:
- Zero decorative ornamentation: no drop shadows, no synthetic glows, no blur effects, and no heavy rounded pill containers.
- Generous macro white space that allows long-form writing and project case studies to breathe.
- Structural reliance on delicate, razor-sharp hairline dividers and precise grid alignment.
- Interaction states that feel literary and tactile, driven by subtle underline shifts and typographic weight changes rather than chromatic saturation.

## Colors

The palette is strictly calibrated for a warm, paper-like tactile experience, devoid of harsh pure whites or stark synthetic blacks. It operates purely in a light mode format.

- **Background (`#faf8f4`):** A warm, unbleached wove-paper tone that grounds the entire reading experience and prevents optical glare.
- **Surface (`#ffffff` or `#faf8f4`):** Reserved for contextual framing or image backdrops. Content sections default to seamless tonal alignment with the canvas background.
- **Primary Text (`#1a1a1a`):** A softened near-black ink with high contrast for long-form reading, avoiding the clinical sharpness of `#000000`.
- **Secondary / Muted Text (`#6b6b6b`):** A disciplined mid-gray reserved for dates, project metadata, figure captions, and secondary notes.
- **Accent Ink Blue (`#23395d`):** A single muted oceanic ink tone, applied sparingly for active navigation indicators, link underlines, and precise focal points.
- **Hairline Border (`#e5e1d8`):** A warm bone-tinted gray used for structural ruling lines, metadata separators, and understated containment borders.

## Typography

Typography is the foundational architecture of the experience. It pairs the literary, transitional cadence of **Newsreader** with the clean, objective legibility of **Inter**.

- **Editorial Headings (Newsreader):** Set at regular weight (400) to mimic archival book typography. Display and headline scales leverage negative tracking to preserve rhythm. Optical sizing should remain natural and unforced.
- **Reading Body (Inter):** Fixed between 17px and 18px (`body-lg`) for essays and project descriptions to ensure effortless continuous reading across viewports. A generous line height (1.65–1.7x) maintains vertical cadence.
- **Micro-Copy & Metadata (Inter):** Small sizes (12px–13px) feature subtle positive letter spacing (`0.02em` to `0.04em`) and uppercase rendering when denoting formal roles, index numbering, dates, or tags.

## Layout & Spacing

The portfolio employs a deliberate, centered single-column composition constrained to a maximum width of **800px** (`50rem`). Wider elements—such as full-bleed editorial imagery or comparative figures—may break out to a maximum container of **1080px**, but primary text never exceeds the 800px measure (65–75 characters per line).

- **Grid & Alignment:** Strictly vertical and linear. Multi-column structures are limited to 2-column or 3-column metadata splits (e.g., Year / Client / Role).
- **Margins & Gutter:** A mobile canvas margin of `1.5rem` (`24px`) expands smoothly to `3rem` (`48px`) on screens above 768px.
- **Vertical Rhythm:** Sections and narrative transitions employ expansive vertical pauses (`space-xl` to `space-2xl`). Content sections are separated by structural hairline borders rather than tinted background blocks.

## Elevation & Depth

This design system explicitly rejects dimensional elevation. There are no box shadows, drop shadows, elevated z-index floating cards, blur effects, or faux-surface layers.

Spatial hierarchy and separation are achieved exclusively through:
1. **Hairline Rules:** Consistent 1px solid dividers (`#e5e1d8`) defining headers, footers, and project demarcations.
2. **Generous White Space:** Clear macro spacing that isolates components and directs cognitive focus without synthetic depth.
3. **Typographic Contrast:** Clear relationships established via scale transitions between display serif and sans-serif body copy.
4. **Subtle Surface Shifting:** In rare instances where visual grouping is required, surfaces shift cleanly between `#faf8f4` and `#ffffff` without borders or shadows.

## Shapes

The design system maintains a **sharp shape language** (`roundedness: 0`). 

All interactive containers, media wrappers, dividers, inputs, and architectural boundaries use 0px border radius. This sharp-edged geometry reinforces the print-inspired, book-like visual narrative and prevents the interface from degenerating into generic consumer app patterns.

## Components

### Buttons
- **Primary:** Text-first or sharply framed. Styled as high-contrast flat surfaces (`#1a1a1a` background, `#faf8f4` text, 0px radius, 12px 24px padding) or as refined text links flanked by a terminal glyph (`→`). No rounded corners, no shadows.
- **Secondary / Minimal:** Transparent background, crisp 1px border (`#1a1a1a` or `#e5e1d8`), `#1a1a1a` text. On hover, background shifts to `#1a1a1a` and text to `#faf8f4`.
- **Text Action:** Standard body font with a persistent 1px hairline underline in `#e5e1d8` that transitions to ink blue (`#23395d`) on hover, with a 2px vertical offset.

### Links & Active Navigation
- Main navigation items are rendered in 13px Inter (`label-md`).
- Active items feature a 1px solid underline in `#23395d` offset by 6px, or an adjacent understated marker (e.g., `(01)` or `•`).
- In-text editorial links display a delicate 1px solid bottom border in ink blue (`#23395d`).

### Lists & Index Rows
- Projects, essays, and index items are organized as tabular rows separated by 1px hairline horizontal dividers (`#e5e1d8`).
- Each row contains: Left-aligned index number or date (13px, `#6b6b6b`), middle-aligned title (18px–20px Newsreader, `#1a1a1a`), and right-aligned category/role (13px, `#6b6b6b`).
- Hover state: The entire row responds with a subtle transition of the title text color to `#23395d` and a slight horizontal translation of an arrow glyph (`→`). The row background remains strictly uncolored.

### Cards & Project Previews
- Cards are flat visual containers without dropshadows or rounded corners.
- Images sit flush to the top edge, framed with an optional 1px hairline border (`#e5e1d8`) if the image edge requires delineation from the warm canvas.
- Captions and titles are placed underneath with zero internal padding to mimic photographic plates in art catalogs.

### Metadata Chips & Tags
- No colored pill badges or rounded tags.
- Categorical descriptors appear strictly as monospace-style or clean uppercase sans-serif text (`11px`, `tracking: 0.06em`, `#6b6b6b`).
- When grouping is necessary, items are separated by a forward slash (`/`) or a middle dot (`·`).

### Form Inputs
- Single-line and multi-line inputs feature an understated bottom-only 1px hairline border (`#e5e1d8`), abandoning the 4-sided boxed input pattern.
- Background is transparent, blending seamlessly into `#faf8f4`.
- Focus state: Bottom border transitions crisply to `#23395d`. Placeholder text sits in `#6b6b6b` at 15px.

### Pull Quotes & Footnotes
- **Pull Quotes:** 24px–28px italic Newsreader, centered or left-aligned with a single vertical hairline on the left (`#23395d`, 2px width).
- **Footnotes:** 12px Inter, positioned at the section conclusion beneath a short 48px hairline divider.