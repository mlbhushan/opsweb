# OpsFlo Website Transformation Prompt

## CONTEXT

You are redesigning the OpsFlo marketing website. The current site has correct content and information architecture but looks like a generic SaaS template. The goal is to transform it into an Apple/Linear-tier website — refined, modern, editorial, and visually memorable — while staying in **light mode** and using OpsFlo's brand colors.

The attached `design.md` file is the authoritative design system. Every component, page, and section must follow it exactly. Read it fully before writing any code.

---

## CURRENT PROBLEMS TO FIX

### Typography
- Headlines use a standard sans-serif with no character or distinction
- Size hierarchy is too flat — headlines and body text don't have enough contrast
- No display font personality; everything feels "template"
- Line heights and letter spacing are default, not tuned

### Color
- The green (#9DD47F) is used at full saturation on CTAs, making them look cheap and neon
- The navy (#084182) is only used in small doses; it should anchor the entire visual identity
- No gradient usage, no color depth — everything is flat solid fills
- Background sections alternate between pure white and a dull gray with no sophistication
- No warm or cool tints to create atmosphere

### Layout & Spacing
- Cards have visible borders instead of shadow-based depth
- Sections feel cramped — not enough vertical padding between major sections
- The bento grid for modules is a flat grid with no visual hierarchy
- Hero sections are text-heavy with no visual anchor or dramatic element
- The stats strip is a row of plain boxes — no visual impact

### Visual Depth
- Zero shadows, zero layering, zero glassmorphism
- No background textures or subtle patterns
- Images sit flat on the page with no treatment (no rounded corners, no shadow, no frame)
- Cards are all the same visual weight — nothing draws the eye

### Motion & Interactivity
- No scroll-triggered animations
- No hover state transitions on cards or buttons
- No staggered reveal on section entry
- The execution flow (Inspect → Detect → Assign → Execute → Bill) is a static row of circles — needs to be an animated, interactive timeline
- Stats counters are static numbers — should animate on scroll

### Navigation
- The mega menu dropdown is functional but visually flat
- No blur/glass effect on the sticky navbar
- The green CTA button in the nav is too loud — clashes with the refined look

### Overall Feel
- The site reads as "competent template" not "category-defining platform"
- Nothing is memorable or would make someone screenshot and share it
- Lacks the editorial quality, precision, and quiet confidence of Apple or Linear

---

## TRANSFORMATION GOALS

After applying `design.md`, the website should:

1. **Feel like a premium product** — the site itself signals that OpsFlo is enterprise-grade
2. **Use typography as the primary design element** — large, bold, beautifully spaced headlines that command attention
3. **Create depth through layering** — soft shadows, subtle gradients, frosted glass surfaces
4. **Use the brand palette with sophistication** — navy as anchor, green as precise accent (never neon), warm grays for backgrounds
5. **Have motion that explains** — animations that guide the eye, reveal content progressively, and make the execution flow feel alive
6. **Look like nothing else in the oilfield software space** — when an ops manager sees this site, their first thought should be "this is different"

---

## PAGE-BY-PAGE TRANSFORMATION INSTRUCTIONS

### HOMEPAGE

**Navbar:**
- Make it sticky with a frosted glass blur effect (`backdrop-filter: blur(12px)`) on scroll
- Background: `rgba(255, 255, 255, 0.8)` when scrolled
- Reduce the green CTA button intensity — use the refined green from design.md
- Add a subtle 1px bottom border that only appears on scroll: `rgba(8, 65, 130, 0.08)`
- Logo + nav links in navy, not black
- Mega menu: add soft shadow (`0 24px 48px rgba(8, 65, 130, 0.12)`), rounded corners (16px), frosted glass background

**Hero Section:**
- Remove the current flat background
- Add a subtle radial gradient behind the headline area: from `rgba(157, 212, 127, 0.06)` at center to transparent
- Make the headline significantly larger: 72px on desktop, 40px on mobile
- Use the display font (Instrument Serif or similar) for the headline — this is the ONE place to use a serif for dramatic contrast
- OR use the primary sans-serif at heavy weight with tight letter-spacing (-0.03em)
- Add a subtle animated gradient orb or mesh behind the hero (very low opacity, 0.05–0.1)
- Logo strip: make logos more muted (opacity 0.3, hover to 0.6), increase spacing between them
- Add a soft fade-in animation on page load: headline first, subhead 100ms later, CTAs 200ms later, logos 300ms later

**Pain Stats Strip (5-15%, 23 days, $4.2M):**
- Remove the card borders entirely
- Use large display numbers in navy with the monospace/tabular font
- Add a very subtle background: `rgba(8, 65, 130, 0.02)` with top/bottom borders in `rgba(8, 65, 130, 0.06)`
- Animate numbers counting up when scrolled into view
- Add a subtle icon or visual accent to each stat

**Execution Flow Section:**
- This is the centerpiece — make it dramatic
- Replace the static numbered circles with an animated horizontal timeline
- Each step should have a card that lifts on hover with a soft shadow
- Add a connecting line/path between steps that animates (draws itself) on scroll
- Use color progression: each step gets a slightly different tint
- On mobile: vertical timeline with alternating left/right cards

**Outcomes Section (100%, 85%, 0, 50%):**
- Make the numbers HUGE: 80–96px, bold, navy
- Add the green accent as an underline or background highlight on each number
- Animate these counting up on scroll entry
- Remove card borders, use subtle background differentiation instead

**Platform Modules Grid (Built for How Operations Actually Work):**
- Transform from flat grid to a proper bento layout with varying card sizes
- Featured modules (Field Execution, AI Decision Engine) get 2x cards
- Add subtle hover: card lifts (translateY -4px), shadow increases, border gets a faint green glow
- Each card gets a custom icon in the refined green color
- Background for this section: very slight warm gray (`#FAFAF8`)

**AI Section:**
- The screenshot/image needs a proper frame: rounded corners (16px), soft shadow, slight rotation/perspective tilt
- Add a subtle glow around the image frame in green (`rgba(157, 212, 127, 0.15)`)
- Text on the left, image on the right, generous gap

**Missing Execution Layer Section:**
- Make the layered diagram interactive or at least visually striking
- Use depth: each layer (ERP, CMMS, FSM, OpsFlo) should be a card that overlaps slightly
- The OpsFlo layer should glow or be highlighted with the green accent
- Add the image treatment: rounded corners, shadow, slight overlap with the text area

**Testimonials (Results From the Field):**
- Use large quotation marks as a decorative element (in faded green)
- Bigger quote text, use a slightly different font weight or style (italic or medium)
- Author info below: small avatar, name, title, company
- Add a subtle card background with rounded corners and a thin top border in green

**Final CTA Section:**
- Full-width section with a refined navy background (not pure navy — add a subtle gradient)
- White text, green-accented CTA button
- Add a subtle pattern or texture overlay (dots, grid lines) at very low opacity

**Footer:**
- Light gray background (`#F7F7F5`)
- Clean 4-column layout
- Newsletter input: refined styling with rounded corners, subtle border
- Add the tagline and social icons
- Subtle top border

---

### PLATFORM MODULE PAGES (Field Execution example)

**Hero:**
- Breadcrumb in green: `PLATFORM / FIELD EXECUTION`
- Large headline in the display style
- Subheadline in muted gray
- Two CTAs: primary green + ghost navy
- Below: Full-width image with rounded corners (16px), dramatic shadow, slight upward perspective

**Problem Section (The Cost of Dropped Tasks):**
- Use a left-aligned layout with generous whitespace on the right
- Each pain point: red/amber dot indicator + text (not bullet points)
- Subtle background tint for this section

**How It Works (3-step):**
- Numbered cards (01, 02, 03) with large numbers in faded navy
- Each card: subtle shadow, rounded corners, hover lift
- Title in bold, description in regular weight
- Add a connecting visual element between cards

**Key Capabilities:**
- Two-column grid of capability items
- Each item: green checkmark + text
- Clean, minimal, generous spacing

**Offline Callout Banner:**
- Full-width banner with navy background
- White text, centered
- Subtle pattern overlay

---

### BLOG PAGE

**Hero:**
- Large serif or display headline: "Insights for Field Operations Leaders"
- Muted subheadline
- Clean, editorial feel

**Featured Post:**
- Large card spanning full width: image left (60%), text right (40%)
- Image: rounded corners, slight shadow
- Category tag in green
- Headline in bold navy
- Meta info (date, read time) in muted gray

**Post Grid:**
- 2-column grid (3-column on large screens)
- Each card: image top (rounded corners), category tag, headline, meta
- Subtle hover: image scales slightly (1.02), shadow appears
- No visible card borders — shadow-based depth

**Newsletter CTA:**
- Centered, clean design
- Green button

---

## GLOBAL COMPONENT SPECIFICATIONS

Every component must follow `design.md`. Key components to get right:

1. **Buttons** — No harsh green. Use the refined palette. Subtle hover transitions. Rounded corners (10px).
2. **Cards** — Shadow-based depth, not borders. Rounded corners (16px). Hover state with lift + shadow increase.
3. **Section transitions** — Subtle background color shifts between sections. No hard lines.
4. **Typography** — Headline/body contrast ratio must be dramatic. Use font size, weight, AND color to create hierarchy.
5. **Images** — Always rounded corners (12–16px). Always have a shadow. Optional: subtle border in `rgba(8, 65, 130, 0.06)`.
6. **Icons** — Line-style, 1.5px stroke, in navy or green. Consistent 24px grid.
7. **Spacing** — Use an 8px base grid. Sections: 120–160px vertical padding on desktop. Cards: 24–32px internal padding.

---

## ANIMATION SPECIFICATIONS

All animations should be subtle and purposeful. No bouncing, no spring physics, no flashy entrances.

**Page load:**
- Navbar: immediate
- Hero headline: fade-up + slight scale (0.98 → 1), 600ms, ease-out
- Hero subheadline: same, 100ms delay
- Hero CTAs: same, 200ms delay
- Logo strip: fade-in, 400ms delay

**Scroll-triggered (use Intersection Observer):**
- Sections: fade-up (translateY 30px → 0), 500ms, ease-out, triggered at 20% visibility
- Cards in grids: staggered fade-up, 80ms delay between each
- Stats numbers: count-up animation over 1.5s when visible
- Execution flow: progressive reveal left-to-right, connecting line draws on scroll

**Hover:**
- Buttons: background color shift (100ms), subtle shadow increase
- Cards: translateY(-4px) + shadow increase, 200ms ease-out
- Nav links: color transition to green, 150ms
- Images: slight scale (1.01), 300ms ease-out

**Transitions:**
- All color transitions: 200ms ease
- All transform transitions: 300ms ease-out
- All shadow transitions: 200ms ease

---

## QUALITY CHECKLIST

Before considering any page complete, verify:

- [ ] Headlines are in the display font/weight at the correct size from design.md
- [ ] No pure black (#000) text anywhere — use navy or dark gray from the palette
- [ ] No neon/saturated green — all green usage matches the refined palette
- [ ] All cards use shadows, not borders, for depth
- [ ] All images have rounded corners and shadow treatment
- [ ] Section backgrounds use the subtle tint system, not flat white/gray
- [ ] Scroll animations are implemented and trigger correctly
- [ ] Hover states exist on all interactive elements
- [ ] The navbar has frosted glass effect on scroll
- [ ] Mobile responsive with adjusted typography scale
- [ ] Lighthouse performance > 90
- [ ] No default system fonts visible anywhere
- [ ] Spacing follows the 8px grid
- [ ] The overall page feels like it belongs on an Apple or Linear product site
