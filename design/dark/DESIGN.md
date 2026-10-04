---
name: Nocturne Monograph
colors:
  surface: '#131316'
  surface-dim: '#131316'
  surface-bright: '#39393c'
  surface-container-lowest: '#0e0e11'
  surface-container-low: '#1b1b1e'
  surface-container: '#1f1f22'
  surface-container-high: '#2a2a2d'
  surface-container-highest: '#353438'
  on-surface: '#e4e1e6'
  on-surface-variant: '#c4c6ce'
  inverse-surface: '#e4e1e6'
  inverse-on-surface: '#303033'
  outline: '#8e9198'
  outline-variant: '#43474d'
  surface-tint: '#b1c8ea'
  primary: '#b1c8ea'
  on-primary: '#1a324c'
  primary-container: '#8da4c4'
  on-primary-container: '#233a55'
  inverse-primary: '#49607d'
  secondary: '#cac6bf'
  on-secondary: '#31302c'
  secondary-container: '#484742'
  on-secondary-container: '#b8b5ae'
  tertiary: '#c8c5cc'
  on-tertiary: '#303035'
  tertiary-container: '#a3a1a7'
  on-tertiary-container: '#38383d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b1c8ea'
  on-primary-fixed: '#011c36'
  on-primary-fixed-variant: '#314864'
  secondary-fixed: '#e6e2db'
  secondary-fixed-dim: '#cac6bf'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#484742'
  tertiary-fixed: '#e4e1e8'
  tertiary-fixed-dim: '#c8c5cc'
  on-tertiary-fixed: '#1b1b20'
  on-tertiary-fixed-variant: '#47464c'
  background: '#131316'
  on-background: '#e4e1e6'
  surface-variant: '#353438'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: 4rem
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.5rem
    fontWeight: '400'
    lineHeight: 3rem
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '300'
    lineHeight: 1.875rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.65rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.45rem
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.1em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.5rem
  margin-tablet: 3rem
  margin-desktop: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

The design system embodies the contemplative atmosphere of a private late-night reading room or an archived literary publication. Designed for curators, essayists, architects, and senior practitioners, it balances extreme restraint with typographic distinction. 

Drawing heavily from classical literary publishing and Swiss minimalist book design, the visual posture avoids tech tropes—eschewing heavy rounded radii, glow effects, floating cards, or high-saturation accents. The design communicates authority, intellect, and patient craftsmanship through quiet precision, generous negative space, deliberate typographic tension, and delicate tactile borders.

## Colors

The palette is tuned specifically for low-fatigue reading and contemplative portfolio perusal:

- **Canvas & Background (`#131316`):** An ink-stained, warm charcoal black. It avoids synthetic absolute blacks (#000000) to preserve warmth and optical depth.
- **Primary Text (`#ece8e1`):** Warm ivory parchment white, offering crisp contrast without optical glare.
- **Secondary & Meta Text (`#9e9a93`):** Muted warm slate gray for metadata, dates, footnotes, and tertiary attributions.
- **Accent (`#8da4c4`):** An understated muted ink-slate blue. Used strictly for interactive states, focused citations, active navigation indicators, and quiet text links.
- **Hairline Dividers & Borders (`#26262b`):** Barely-there warm charcoal strokes providing structure without interrupting text rhythm. A secondary tier (`#1c1d22`) may be used for subtle inner separations.

## Typography

The typography relies on intentional contrast between classical literary serifs and neutral functional grotesques:

- **Display & Headlines (`Newsreader`):** Used with normal weight (400) and optical sizing enabled. It delivers the refined cadence of bespoke book publishing. Italic cuts may be utilized sparingly for pull quotes, epigraphs, and publication dates.
- **Body & Captions (`Inter`):** Clean, crisp, neutral sans-serif set with slightly relaxed line heights to provide clear legibility across long-form reading passages against the dark background.
- **Labels & Metadata:** Set in small, tracked-out sans-serif capitals (`letterSpacing: 0.08em` to `0.1em`) to punctuate structural shifts and date indices.

## Layout & Spacing

The layout philosophy is defined by a focused, single-column reading column with a maximum width of `680px` for essay text, expanding to a maximum of `960px` for mixed-media projects, index views, or paired archival plates.

- **Grid & Alignment:** Strictly single centered column or asymmetrical two-column (meta sidebar + content body) on wider displays. Elements do not span wide expanses needlessly; whitespace frames the work.
- **Vertical Rhythm:** Generous vertical margins (`space-xl` and higher) decouple distinct projects or sections, allowing each piece to be evaluated on its own merits without competing visual noise.
- **Responsive Adaptations:**
  - **Mobile (< 768px):** Margin of 1.5rem, full-width fluid text column, secondary metadata stacked beneath titles.
  - **Desktop (≥ 768px):** Centered reader track with lateral margins reaching up to 4rem, or sidebar alignment where dates/indices sit left-aligned in the gutter.

## Elevation & Depth

This design system avoids dropped shadows, blurred layered backdrops, and faux-3D elevation entirely. Depth is achieved via **tonal flatness and graphic linework**:

- **No Shadows:** Shadows are explicitly forbidden. Floating planes and layered card elevations do not exist in this environment.
- **Low-Contrast Hairlines:** Hierarchy and containment are achieved through 1px solid hairline borders (`#26262b`).
- **Z-Index Discretion:** Fixed navigation elements reside on a unified surface plane (`#131316`), blending seamlessly into the canvas without glassmorphism or backdrop blurs.

## Shapes

The shape system is strictly **sharp (0px)**. 

Every boundary adheres to architectural right angles:
- Buttons, inputs, borders, image framing, and interactive indicators have zero border radius.
- Corners are crisp and uncompromising, reinforcing the look and feel of untrimmed archival paper, folio sheets, and technical monographs.

## Components

### Buttons & Interactive Links
- **Primary Action:** Sharp-edged rectangular containers with a 1px border of `#8da4c4`, an empty background, and text in `#8da4c4`. On hover, the container inverts: background becomes `#8da4c4` with `#131316` text.
- **Text Link:** Warm ivory (`#ece8e1`) with an understated hairline underline offset by 4px (`#26262b`). On hover, both the text and underline transition to `#8da4c4`.

### Lists & Archival Indexes
- Entries are arranged in horizontal hairline rows bordered by top and bottom 1px lines (`#26262b`).
- Row content is spaced with project title on the left, taxonomy tag in the center (`#9e9a93`), and completion year on the far right (`#9e9a93`).
- On hover, the row text tints subtly to `#ece8e1` with an optional leading arrow (`→`) in `#8da4c4`.

### Checkboxes & Radio Controls
- Crisp 14px squares (checkbox) or nested squares (radio).
- 1px border in `#9e9a93` resting on an empty `#131316` ground.
- Checked state: Interior solid fill in `#8da4c4` with a 2px inset gap.

### Input Fields
- Understated baseline-only or full 1px wireframe box with `#26262b` border.
- Background remains pure `#131316`.
- Placeholder text set in `#9e9a93`.
- Focus state: Border transitions smoothly to `#8da4c4` without an outer glow or ring.

### Cards (Anti-Card Approach)
- Traditional boxed "cards" with rounded corners, drop shadows, or contrasting solid backgrounds are not permitted.
- Work is presented as flat monograph plates: a full-bleed or bordered media container sitting directly on the canvas, followed by title, date, and narrative text delineated purely by typographic hierarchy and hairlines.

### Navigation & Header
- Quiet top or bottom bar framed by a single 1px divider (`#26262b`).
- Active navigation item denoted with an understated text color shift to `#8da4c4` accompanied by a small non-intrusive monospaced index number or dot marker.