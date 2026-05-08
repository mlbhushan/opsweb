# OpsFlo Design System — `design.md`
### The authoritative reference for every visual decision on the OpsFlo website.

---

## 1. DESIGN PHILOSOPHY

OpsFlo's website must feel like a **premium product** — not a software brochure. The design language draws from Apple's editorial precision, Linear's clean technical confidence, and Stripe's information density done right.

**Three words that define this design:** Precise. Confident. Refined.

**Light mode only.** No dark theme. The sophistication comes from typography, spacing, color restraint, and layered depth — not from a dark background.

---

## 2. COLOR SYSTEM

### 2.1 Brand Foundation

The entire palette derives from two logo colors:

| Token | Value | Usage |
|-------|-------|-------|
| `--navy-900` | `rgb(8, 65, 130)` | Primary brand navy — headlines, primary text, key UI elements |
| `--green-500` | `rgb(157, 212, 127)` | Primary brand green — accents, CTAs, highlights |

### 2.2 Extended Navy Scale

Generated from the brand navy, used for text hierarchy and backgrounds:

```css
--navy-950:  #032044;    /* Darkest — footer backgrounds, overlays */
--navy-900:  #084182;    /* Brand navy — headlines, nav text, primary actions */
--navy-800:  #0C5298;    /* Deep navy — secondary headings */
--navy-700:  #1266B0;    /* Rich navy — links, interactive elements */
--navy-600:  #1A7AC8;    /* Medium navy — hover states */
--navy-500:  #2E8FDB;    /* Light navy — decorative accents */
--navy-400:  #5EADE8;    /* Soft navy — icon fills on light backgrounds */
--navy-300:  #8FC8F0;    /* Pale navy — tag backgrounds, subtle highlights */
--navy-200:  #BDE0F7;    /* Very pale — section background tints */
--navy-100:  #E0F0FB;    /* Near-white blue — hover backgrounds */
--navy-50:   #F0F7FD;    /* Whisper blue — alternating section backgrounds */
```

### 2.3 Extended Green Scale

Generated from the brand green, refined for sophistication (avoid neon):

```css
--green-700:  #3D8A2A;   /* Dark green — text on light backgrounds (accessibility) */
--green-600:  #4FA33A;   /* Rich green — CTA hover state, active indicators */
--green-500:  #9DD47F;   /* Brand green — ONLY for small accents, badges, icons */
--green-450:  #6BBF54;   /* Balanced green — PRIMARY CTA BACKGROUND COLOR */
--green-400:  #8CCB6E;   /* Soft green — secondary accents, chart elements */
--green-300:  #B5E0A3;   /* Pale green — tag backgrounds, subtle highlights */
--green-200:  #D4EECA;   /* Very pale — success states, light backgrounds */
--green-100:  #E8F5E2;   /* Near-white green — hover tints */
--green-50:   #F3FAF0;   /* Whisper green — section background accents */
```

> **CRITICAL:** The raw brand green `#9DD47F` is too bright/saturated for large surfaces like buttons. Always use `--green-450` (#6BBF54) for CTAs and buttons. Use `--green-500` only for small elements: icons, badges, underlines, dots.

### 2.4 Neutral Scale (Warm Grays)

NOT cool grays. These have a warm/olive undertone that harmonizes with the navy and green:

```css
--gray-950:  #1A1D1F;   /* Near-black — almost never used (prefer navy-900) */
--gray-900:  #2C3034;   /* Darkest text — avoid, use navy-900 instead */
--gray-800:  #3D4248;   /* — */
--gray-700:  #515860;   /* Body text alternative — secondary paragraphs */
--gray-600:  #6B7280;   /* Muted text — meta info, captions, timestamps */
--gray-500:  #8B929B;   /* Placeholder text, disabled states */
--gray-400:  #A8AEB6;   /* Borders (when shadow isn't enough) */
--gray-300:  #C5CAD0;   /* Divider lines, input borders */
--gray-200:  #E2E5E9;   /* Subtle borders, table lines */
--gray-100:  #F0F1F3;   /* Card backgrounds on white, input backgrounds */
--gray-50:   #F7F7F5;   /* Page section backgrounds (warm off-white) */
--white:     #FFFFFF;   /* Pure white — card surfaces, primary background */
```

### 2.5 Semantic Colors

```css
--color-success:    #22C55E;
--color-warning:    #F59E0B;
--color-error:      #EF4444;
--color-info:       var(--navy-600);
```

### 2.6 Background Tinting System

Sections alternate between these backgrounds to create rhythm without hard dividers:

```css
--bg-primary:       #FFFFFF;              /* Default white */
--bg-secondary:     #F7F7F5;              /* Warm off-white (gray-50) */
--bg-navy-tint:     #F0F7FD;              /* Whisper blue (navy-50) */
--bg-green-tint:    #F3FAF0;              /* Whisper green (green-50) */
--bg-navy-deep:     #084182;              /* Full navy — CTA banners, hero accents */
--bg-navy-dark:     #032044;              /* Darkest — footer */
```

**Section alternation pattern on homepage:**
```
Hero          → white + subtle radial gradient
Pain Stats    → navy-tint (#F0F7FD)
Execution Flow → white
Outcomes      → gray-50 (#F7F7F5)
Modules Grid  → white
AI Section    → navy-tint (#F0F7FD)
Exec Layer    → white
Testimonials  → gray-50 (#F7F7F5)
Final CTA     → navy-deep (#084182) with gradient
Footer        → navy-dark (#032044) or gray-50
```

---

## 3. TYPOGRAPHY

### 3.1 Font Stack

```css
/* PRIMARY — Used for all headings and body text */
--font-primary: 'General Sans', -apple-system, BlinkMacSystemFont, sans-serif;

/* DISPLAY — Used ONLY for hero headlines and major section titles */
/* Option A: Serif contrast (Apple editorial style) */
--font-display: 'Instrument Serif', 'Georgia', serif;

/* Option B: If you prefer all sans-serif (Linear style), use: */
/* --font-display: 'Cabinet Grotesk', 'General Sans', sans-serif; */

/* MONO — Used for stats, numbers, code, and data-heavy elements */
--font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
```

**Font loading (add to `<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=instrument-serif@400,400i&f[]=cabinet-grotesk@700,800,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### 3.2 Type Scale

Based on a 1.250 (Major Third) ratio with manual adjustments for visual harmony:

| Token | Desktop | Mobile | Weight | Font | Letter Spacing | Line Height |
|-------|---------|--------|--------|------|---------------|-------------|
| `--text-hero` | 76px | 40px | 400 | Display | -0.035em | 1.05 |
| `--text-h1` | 56px | 34px | 700 | Primary | -0.03em | 1.1 |
| `--text-h2` | 44px | 28px | 700 | Primary | -0.025em | 1.15 |
| `--text-h3` | 32px | 24px | 600 | Primary | -0.02em | 1.2 |
| `--text-h4` | 24px | 20px | 600 | Primary | -0.015em | 1.3 |
| `--text-h5` | 20px | 18px | 600 | Primary | -0.01em | 1.4 |
| `--text-body-lg` | 18px | 17px | 400 | Primary | -0.005em | 1.65 |
| `--text-body` | 16px | 16px | 400 | Primary | 0 | 1.65 |
| `--text-body-sm` | 14px | 14px | 400 | Primary | 0 | 1.55 |
| `--text-caption` | 13px | 12px | 500 | Primary | 0.02em | 1.45 |
| `--text-overline` | 12px | 11px | 600 | Primary | 0.1em | 1.4 |
| `--text-stat` | 64px | 40px | 700 | Mono | -0.03em | 1.0 |

### 3.3 Text Color Rules

```css
--text-primary:     var(--navy-900);    /* #084182 — Headlines, primary body text */
--text-secondary:   var(--gray-700);    /* #515860 — Secondary paragraphs, descriptions */
--text-muted:       var(--gray-600);    /* #6B7280 — Meta info, timestamps, captions */
--text-disabled:    var(--gray-500);    /* #8B929B — Disabled states, placeholders */
--text-on-navy:     #FFFFFF;            /* White text on navy backgrounds */
--text-on-navy-muted: rgba(255,255,255,0.7); /* Muted white on navy backgrounds */
--text-accent:      var(--green-700);   /* #3D8A2A — Green text (accessible on white) */
--text-link:        var(--navy-700);    /* #1266B0 — Links */
--text-link-hover:  var(--navy-900);    /* #084182 — Link hover */
```

> **RULE:** NEVER use pure black (#000000) for text. Always use `--navy-900` or `--gray-700`.

### 3.4 Overline Style (Section Labels)

The small label above section titles (e.g., "WHAT CHANGES AFTER OPSFLO"):

```css
.overline {
  font-family: var(--font-primary);
  font-size: var(--text-overline);      /* 12px */
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green-700);              /* Green for accent */
}
```

---

## 4. SPACING SYSTEM

### 4.1 Base Grid

All spacing is based on an **8px grid**:

```css
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   20px;
--space-6:   24px;
--space-7:   32px;
--space-8:   40px;
--space-9:   48px;
--space-10:  56px;
--space-11:  64px;
--space-12:  80px;
--space-13:  96px;
--space-14:  120px;
--space-15:  160px;
```

### 4.2 Section Spacing

```css
--section-padding-y:        120px;  /* Desktop vertical padding per section */
--section-padding-y-mobile: 64px;   /* Mobile vertical padding */
--section-gap:              0px;    /* Sections are flush — backgrounds create separation */
```

### 4.3 Container

```css
--container-max:    1200px;  /* Maximum content width */
--container-wide:   1400px;  /* Full-bleed images/sections that still need constraint */
--container-narrow: 720px;   /* Blog posts, focused content */
--container-px:     24px;    /* Horizontal padding on mobile */
--container-px-lg:  40px;    /* Horizontal padding on tablet+ */
```

### 4.4 Component Spacing

```css
/* Headline to subheadline */        16px  (--space-4)
/* Subheadline to CTA */             32px  (--space-7)
/* Section title to content */       48px  (--space-9)
/* Between cards in a grid */        24px  (--space-6)
/* Card internal padding */          32px  (--space-7)
/* Between list items */             16px  (--space-4)
/* Between paragraphs */             24px  (--space-6)
```

---

## 5. ELEVATION & DEPTH

### 5.1 Shadow Scale

Shadows use navy tint (NOT pure black) for harmony with the brand:

```css
--shadow-xs:    0 1px 2px rgba(8, 65, 130, 0.04);
--shadow-sm:    0 2px 4px rgba(8, 65, 130, 0.06);
--shadow-md:    0 4px 12px rgba(8, 65, 130, 0.08);
--shadow-lg:    0 8px 24px rgba(8, 65, 130, 0.10);
--shadow-xl:    0 16px 48px rgba(8, 65, 130, 0.12);
--shadow-2xl:   0 24px 64px rgba(8, 65, 130, 0.14);
--shadow-glow:  0 0 40px rgba(157, 212, 127, 0.15); /* Green glow for emphasis */
```

### 5.2 Shadow Usage Rules

| Element | Resting State | Hover State |
|---------|--------------|-------------|
| Card (default) | `--shadow-sm` | `--shadow-lg` + `translateY(-4px)` |
| Card (featured/large) | `--shadow-md` | `--shadow-xl` + `translateY(-6px)` |
| Navbar (scrolled) | `--shadow-xs` | — |
| Dropdown/Mega menu | `--shadow-xl` | — |
| Image frame | `--shadow-lg` | — |
| Modal/Dialog | `--shadow-2xl` | — |
| Button | none | `--shadow-sm` |

> **RULE:** Never use `border` for card separation. Always use shadows. The only acceptable borders are divider lines inside cards or table rows, using `--gray-200`.

### 5.3 Border Radius

```css
--radius-sm:   8px;    /* Buttons, input fields, tags */
--radius-md:   12px;   /* Small cards, thumbnails */
--radius-lg:   16px;   /* Cards, image frames, dropdowns */
--radius-xl:   24px;   /* Large cards, hero images, CTAs */
--radius-full: 9999px; /* Pills, avatars, rounded badges */
```

---

## 6. COMPONENT SPECIFICATIONS

### 6.1 Buttons

**Primary Button (Green CTA):**
```css
.btn-primary {
  background: var(--green-450);         /* #6BBF54 — NOT the raw brand green */
  color: white;
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: var(--radius-sm);      /* 8px */
  border: none;
  cursor: pointer;
  transition: all 200ms ease;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}
.btn-primary:hover {
  background: var(--green-600);         /* #4FA33A — darker on hover */
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}
```

**Secondary Button (Ghost/Outline):**
```css
.btn-secondary {
  background: transparent;
  color: var(--navy-900);
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--gray-300);
  cursor: pointer;
  transition: all 200ms ease;
}
.btn-secondary:hover {
  background: var(--navy-50);
  border-color: var(--navy-300);
  color: var(--navy-900);
}
```

**Ghost Button (Text + Arrow):**
```css
.btn-ghost {
  background: none;
  border: none;
  color: var(--navy-700);
  font-weight: 600;
  font-size: 15px;
  padding: 8px 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 200ms ease;
}
.btn-ghost:hover {
  color: var(--navy-900);
}
.btn-ghost:hover .arrow {
  transform: translateX(4px);
}
```

### 6.2 Cards

**Standard Card:**
```css
.card {
  background: var(--white);
  border-radius: var(--radius-lg);       /* 16px */
  padding: 32px;
  box-shadow: var(--shadow-sm);
  transition: all 300ms ease-out;
  border: 1px solid rgba(8, 65, 130, 0.04); /* Nearly invisible border for definition */
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

**Featured Card (for bento grid large items):**
```css
.card-featured {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(8, 65, 130, 0.06);
  transition: all 300ms ease-out;
}
.card-featured:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-6px);
  border-color: rgba(157, 212, 127, 0.3); /* Subtle green border glow */
}
```

**Stat Card:**
```css
.stat-card {
  text-align: center;
  padding: 40px 24px;
}
.stat-card .number {
  font-family: var(--font-mono);
  font-size: var(--text-stat);          /* 64px */
  font-weight: 700;
  color: var(--navy-900);
  line-height: 1;
  margin-bottom: 12px;
}
.stat-card .label {
  font-size: var(--text-body-sm);
  color: var(--gray-600);
  font-weight: 500;
}
```

### 6.3 Navbar

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 0;
  transition: all 300ms ease;
}

/* Default state (at top of page) */
.navbar--default {
  background: transparent;
}

/* Scrolled state */
.navbar--scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(8, 65, 130, 0.06);
  padding: 12px 0;
  box-shadow: var(--shadow-xs);
}
```

**Nav CTA Button (in navbar):**
```css
.nav-cta {
  background: var(--green-450);
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  transition: all 200ms ease;
}
```

**Mega Menu Dropdown:**
```css
.mega-menu {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(8, 65, 130, 0.06);
  padding: 32px;
  margin-top: 8px;
}

.mega-menu__category-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray-500);
  margin-bottom: 16px;
}

.mega-menu__item {
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  transition: background 150ms ease;
  cursor: pointer;
}
.mega-menu__item:hover {
  background: var(--navy-50);
}
.mega-menu__item-title {
  font-weight: 600;
  color: var(--navy-900);
  font-size: 15px;
}
.mega-menu__item-desc {
  font-size: 13px;
  color: var(--gray-600);
  margin-top: 2px;
}
```

### 6.4 Section Header

```css
.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
  margin-bottom: var(--space-9);        /* 48px */
}

.section-header .overline {
  /* See overline style in §3.4 */
  margin-bottom: var(--space-4);        /* 16px */
}

.section-header h2 {
  font-family: var(--font-primary);
  font-size: var(--text-h2);            /* 44px */
  font-weight: 700;
  color: var(--navy-900);
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.section-header p {
  font-size: var(--text-body-lg);       /* 18px */
  color: var(--gray-600);
  margin-top: var(--space-4);
  line-height: 1.65;
}
```

### 6.5 Image Treatment

All images on the site follow this treatment:

```css
.image-frame {
  border-radius: var(--radius-lg);      /* 16px */
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(8, 65, 130, 0.06);
  overflow: hidden;
}

/* For hero/featured images — slightly elevated */
.image-frame--hero {
  border-radius: var(--radius-xl);      /* 24px */
  box-shadow: var(--shadow-xl);
}

/* Subtle hover for interactive images */
.image-frame--interactive {
  transition: all 400ms ease-out;
}
.image-frame--interactive:hover {
  transform: scale(1.01);
  box-shadow: var(--shadow-2xl);
}
```

### 6.6 Testimonial Card

```css
.testimonial {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-sm);
  border-top: 3px solid var(--green-400);
  position: relative;
}

.testimonial__quote-mark {
  font-family: var(--font-display);
  font-size: 80px;
  color: var(--green-200);
  position: absolute;
  top: 16px;
  left: 32px;
  line-height: 1;
  user-select: none;
}

.testimonial__text {
  font-size: var(--text-body-lg);
  font-weight: 500;
  color: var(--navy-900);
  line-height: 1.6;
  font-style: italic;
}

.testimonial__author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}
.testimonial__avatar {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
}
.testimonial__name {
  font-weight: 600;
  font-size: 15px;
  color: var(--navy-900);
}
.testimonial__role {
  font-size: 13px;
  color: var(--gray-600);
}
```

### 6.7 FAQ Accordion

```css
.faq-item {
  border-bottom: 1px solid var(--gray-200);
  padding: 24px 0;
}

.faq-question {
  font-weight: 600;
  font-size: var(--text-h5);
  color: var(--navy-900);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question .icon {
  transition: transform 300ms ease;
  color: var(--gray-500);
}
.faq-item--open .faq-question .icon {
  transform: rotate(45deg);
}

.faq-answer {
  font-size: var(--text-body);
  color: var(--gray-700);
  line-height: 1.65;
  padding-top: 16px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease, padding 300ms ease;
}
.faq-item--open .faq-answer {
  max-height: 500px;
  padding-top: 16px;
}
```

### 6.8 Tag / Badge

```css
.tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  background: var(--green-100);
  color: var(--green-700);
}

.tag--navy {
  background: var(--navy-50);
  color: var(--navy-700);
}
```

### 6.9 Input Fields

```css
.input {
  font-family: var(--font-primary);
  font-size: 15px;
  color: var(--navy-900);
  background: var(--white);
  border: 1.5px solid var(--gray-300);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  width: 100%;
  transition: all 200ms ease;
}
.input:focus {
  outline: none;
  border-color: var(--navy-500);
  box-shadow: 0 0 0 3px rgba(8, 65, 130, 0.08);
}
.input::placeholder {
  color: var(--gray-500);
}

.input-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy-900);
  margin-bottom: 6px;
  display: block;
}
```

---

## 7. GRID & LAYOUT PATTERNS

### 7.1 Bento Grid (Module Showcase)

Use CSS Grid with intentional size variation:

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Featured items span 2 columns */
.bento-grid .card--2col {
  grid-column: span 2;
}

/* On tablet (≤1024px) */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .bento-grid .card--2col {
    grid-column: span 2;
  }
}

/* On mobile (≤640px) */
@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-grid .card--2col {
    grid-column: span 1;
  }
}
```

### 7.2 Split Layout (Text + Image)

```css
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 768px) {
  .split {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
```

### 7.3 Stats Row

```css
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0;
}

.stats-row .stat-card {
  border-right: 1px solid var(--gray-200);
}
.stats-row .stat-card:last-child {
  border-right: none;
}

@media (max-width: 640px) {
  .stats-row .stat-card {
    border-right: none;
    border-bottom: 1px solid var(--gray-200);
  }
}
```

---

## 8. ANIMATION SYSTEM

### 8.1 CSS Custom Properties for Motion

```css
--ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);
--duration-fast:  150ms;
--duration-base:  200ms;
--duration-slow:  300ms;
--duration-enter: 500ms;
```

### 8.2 Scroll-Triggered Entry Animations

```css
/* Base state — element is hidden */
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-enter) var(--ease-out),
              transform var(--duration-enter) var(--ease-out);
}

/* Visible state — element is revealed */
[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
[data-animate-stagger] > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-enter) var(--ease-out),
              transform var(--duration-enter) var(--ease-out);
}
[data-animate-stagger].is-visible > *:nth-child(1) { transition-delay: 0ms; opacity: 1; transform: translateY(0); }
[data-animate-stagger].is-visible > *:nth-child(2) { transition-delay: 80ms; opacity: 1; transform: translateY(0); }
[data-animate-stagger].is-visible > *:nth-child(3) { transition-delay: 160ms; opacity: 1; transform: translateY(0); }
[data-animate-stagger].is-visible > *:nth-child(4) { transition-delay: 240ms; opacity: 1; transform: translateY(0); }
[data-animate-stagger].is-visible > *:nth-child(5) { transition-delay: 320ms; opacity: 1; transform: translateY(0); }
[data-animate-stagger].is-visible > *:nth-child(6) { transition-delay: 400ms; opacity: 1; transform: translateY(0); }
```

### 8.3 Intersection Observer (JavaScript)

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('[data-animate], [data-animate-stagger]')
  .forEach(el => observer.observe(el));
```

### 8.4 Counter Animation (for Stats)

```javascript
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(start + (target - start) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```

---

## 9. RESPONSIVE BREAKPOINTS

```css
--bp-sm:   640px;    /* Mobile landscape */
--bp-md:   768px;    /* Tablet portrait */
--bp-lg:   1024px;   /* Tablet landscape / small desktop */
--bp-xl:   1280px;   /* Desktop */
--bp-2xl:  1536px;   /* Large desktop */
```

**Mobile-first approach:** Base styles target mobile. Use `min-width` media queries to add complexity.

### Key Responsive Rules:

| Property | Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|----------|-----------------|--------------------|--------------------|
| Container padding | 20px | 32px | 40px |
| Section padding-y | 64px | 80px | 120px |
| Hero headline | 40px | 52px | 76px |
| H2 | 28px | 36px | 44px |
| Grid columns | 1 | 2 | 3 |
| Split layout | stacked | stacked | side-by-side |
| Nav | hamburger menu | hamburger menu | full nav |
| Stats | stacked vertical | 2-column | single row |

---

## 10. ICONOGRAPHY

### Style
- Line icons, 1.5px stroke weight
- 24×24px default size (can scale to 20px or 32px)
- Color: `--navy-700` on light backgrounds, `--green-400` for accent states
- Source: Lucide Icons (open source, consistent style)

### Key Icons Needed

| Element | Icon | Source |
|---------|------|--------|
| Field Execution | `clipboard-check` | Lucide |
| Inspections | `search` | Lucide |
| Work Orders | `wrench` | Lucide |
| Scheduling | `calendar` | Lucide |
| Predictive Maintenance | `activity` | Lucide |
| AI Decision Engine | `brain` | Lucide |
| Analytics | `bar-chart-3` | Lucide |
| Asset Intelligence | `database` | Lucide |
| Field Ticketing | `file-text` | Lucide |
| Invoicing | `receipt` | Lucide |
| Inventory | `package` | Lucide |
| Safety | `shield-check` | Lucide |
| Compliance | `badge-check` | Lucide |
| Carbon | `leaf` | Lucide |
| Offline | `wifi-off` | Lucide |
| Arrow right | `arrow-right` | Lucide |
| Chevron down | `chevron-down` | Lucide |
| Plus (FAQ) | `plus` | Lucide |
| External link | `external-link` | Lucide |
| Check (lists) | `check` | Lucide |

---

## 11. DO / DON'T REFERENCE

### DO ✓
- Use navy-900 as the primary text color everywhere
- Use green-450 for CTA buttons (not the raw brand green)
- Use shadows for card depth — never borders alone
- Leave generous whitespace between sections (120px desktop)
- Make headlines dramatically larger than body text
- Round all corners: images (16px), cards (16px), buttons (8px)
- Tint section backgrounds subtly to create rhythm
- Animate elements on scroll entry (fade-up, stagger)
- Use the overline pattern (small green uppercase label) above section titles
- Treat every image with rounded corners + shadow

### DON'T ✗
- Use pure black (#000) for any text
- Use the raw brand green (#9DD47F) for buttons or large surfaces
- Use visible card borders as the primary depth mechanism
- Use generic stock photography (people in hard hats shaking hands)
- Use flat alternating white/gray backgrounds with no tinting
- Use default system fonts or fallback stacks without loading custom fonts
- Use more than 2 font families on any page (display + primary, or primary + mono)
- Use bouncy or spring-based animations — keep motion subtle and refined
- Use more than 3 colors on any single card or component
- Place multiple CTAs with equal visual weight next to each other (always have primary + secondary)

---

## 12. IMPLEMENTATION CHECKLIST

When building or reviewing any page:

```
□ Fonts loaded: General Sans, Instrument Serif/Cabinet Grotesk, JetBrains Mono
□ CSS variables declared for all colors, spacing, shadows, radii
□ Navbar: frosted glass on scroll, smooth transition
□ Section backgrounds follow the alternation pattern
□ All text uses --navy-900 or --gray-700, never #000
□ All buttons follow the specified styles (primary/secondary/ghost)
□ All cards use shadow-based depth with hover lift
□ All images have rounded corners (16px) and shadow
□ Scroll animations: fade-up on all sections and cards
□ Stats: counter animation on scroll
□ Hero: staggered fade-in on load
□ Mobile: all grids collapse properly, typography scales down
□ Lighthouse: Performance > 90, Accessibility > 90
□ No element feels "default" or "unstyled"
□ The page would not look out of place next to apple.com or linear.app
```
