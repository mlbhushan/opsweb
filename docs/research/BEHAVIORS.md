# Behavior Bible — renvo Oil & Gas

## Global / Page-Level Behaviors

### Lenis smooth scroll
- Library: `lenis.min.js` (v1.x). Wrapper element gets `.lenis` class.
- Default Lenis options apply (duration ~1.2s, easeOutExpo). Wheel multiplier ~1.
- **Implementation in clone:** Wrap `<body>` content in a Lenis provider (use `lenis` npm package). Initialize on mount, run RAF loop. Disable on touch / mobile if jank occurs.

### GSAP scroll-triggered widget animations
- `gsap-widget-animation.js` adds `.gsap-section-animation` and reveals child elements with stagger as the section enters viewport.
- Typical reveal: `opacity 0 → 1`, `y 60 → 0`, duration 0.8s, ease "power2.out", stagger 0.08s.
- **Implementation:** Use Framer Motion's `whileInView` with viewport `{ once: true, margin: "-15%" }`, or GSAP ScrollTrigger.

### Sticky header
- `#header-sticky` is `position: sticky; top: 0` — visible at scroll position 0 with transparent background.
- **State change:** When `window.scrollY > ~50px`, header gains a solid white-ish background and a subtle box-shadow. Class `.is-sticky` (or similar) toggled by JS.
- Transition: `background-color 0.3s ease, box-shadow 0.3s ease`.

### Number counters (stats section)
- `jquery-numerator` animates `25+`, `15K`, `99%` from 0 → final value when section enters viewport.
- Duration ~2s, ease easeOutQuad.
- **Implementation:** Framer Motion + `useInView` + animated count, or `react-countup`.

### Marquee strips
- Two marquee strips: between Services & Stats, and inside footer area.
- Continuous infinite horizontal scroll. CSS keyframe `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }` with duplicated content.
- Speed: ~30s linear infinite.
- Dot separator (•) or icon between words.

### Off-canvas navigation
- Burger button in sticky header → opens `#ht-main-nav` panel from the right.
- Panel: width 480px, dark navy `#07001a`, slides in `transform: translateX(100%) → 0`, duration 0.5s ease-out.
- Backdrop overlay fades in (rgba(0,0,0,0.5)).
- Body scroll locks while open.

## Per-Section Behaviors

### Hero
- Heading "Comprehensive Solutions for the Oil & Gas **[ROTATING WORD]**":
  - The last line ("Industry") cycles through words in a script/handwriting font (Playfair Display italic).
  - Possibly multiple words rotating: e.g., "Industry / Solutions / Excellence" — to be confirmed by re-inspection. From topology preview the second heading text shows "Powering the Oil & Gas Solutions Industry" suggesting a typewriter-style rotation.
  - Effect: fade/slide each word in/out every ~3s.
- Right-side photo: subtle floating mini-cards (rating badge "4.8" etc., experience badge) absolutely positioned over the image.

### Service cards (dark services section)
- Default: dark card with shape-icon SVG curve in corner, image, title, description, lime arrow CTA.
- **Hover:** card transforms (likely `translateY(-8px)`) + arrow button background changes from lime → white (or vice versa). Transition 0.4s ease.
- Swiper carousel with custom navigation (prev/next pills below).

### Team cards
- Image hover: scale up subtly + overlay reveals social icons or extra info.
- Cards arranged in Swiper.

### Pricing cards
- "Professional" tier is highlighted (lime bg `#bdc91a` instead of white). Likely scales slightly larger than Basic/Premium.
- Hover on Basic/Premium: card lifts (`translateY(-6px)`), shadow increases, CTA arrow animates.

### Testimonials
- Swiper with auto-play (likely 5s interval), pagination dots, prev/next arrows.

### Blog cards
- Hover: image scales (~1.05) inside fixed-aspect mask, title color shifts to lime, arrow translates right.

### Form inputs (Appointment & Newsletter)
- Custom select dropdown uses `down-arrow.svg` background image (from `/wp-content/themes/renvo/assets/images/down-arrow.svg`).
- Focus state: border becomes navy or lime.
- Submit button: pill-shaped lime button with arrow icon, hover swaps to dark navy.

### Scroll-to-top button (`.scroll-top`)
- Fixed bottom-right circle with progress ring (4 SVG `<line>` elements that animate around the perimeter as the user scrolls).
- Appears (fade-in + scale) once `scrollY > 300px`. Click smoothly scrolls to top via Lenis.

## Responsive Breakpoints (observed)

- **Desktop ≥ 1200px:** Full multi-column layouts.
- **Tablet 768–1199px:** Most 4-up grids → 2-up. Hero stacks vertically. Stats stay 3-up.
- **Mobile < 768px:** All multi-column layouts stack to single column. Hamburger replaces inline menu (already hidden — burger is always shown on this template). Marquee text scales smaller. Carousels show 1 card per slide. Hero rating badges may be hidden or repositioned below image.

## What to Watch / Risks for the Clone

1. **Word rotation in hero** — must catch the exact list of cycling words and timing (need to dwell on hero with browser MCP).
2. **Lenis feel** — without it the page will feel "wrong" even if every CSS value is correct.
3. **Service-card SVG curve** — `shape-item-icon` is a custom path. Extract once, reuse 13× as a React component.
4. **Marquee duplication** — content must repeat seamlessly; render the items twice in the DOM and use `translateX(-50%)` keyframe.
5. **Number counters** — must trigger exactly once when in view; do NOT re-animate on scroll back.
