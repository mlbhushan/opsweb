# Page Topology — renvo.themeht.com/oil-and-gas

**Source:** https://renvo.themeht.com/oil-and-gas/
**Captured:** desktop 1440×900, mobile 390×844
**Total page height:** 10,357 px (desktop), 16,193 px (mobile)
**Built with:** WordPress + Elementor + custom Renvo theme

## Global / Page-Level

- **Smooth scroll:** Lenis is active (`<script src=".../lenis.min.js">`). The page wrapper gets `.lenis` class. Default browser scroll is overridden — the OpsFlo clone MUST also wrap content in a Lenis provider or the feel will be noticeably different.
- **Animation lib:** GSAP is loaded with `gsap-widget-animation.js` and `gsap-script.js`. Sections fade/slide in on scroll.
- **Carousels:** Swiper v8 (services, team, testimonials, blog).
- **Marquee:** Custom CSS infinite-scroll text strip (between Services and Stats sections, plus a duplicate above the footer).
- **Off-canvas nav:** Hidden by default at `#ht-main-nav`, slides in from the right when the burger button in the sticky header is clicked.

## Section Order (top → bottom, desktop)

| # | Top (px) | Height | Section | Notes |
|---|---:|---:|---|---|
| 0 | 0 | 62 | Top utility bar | Date + social icons, light bg |
| 1 | 62 | 106 | **Sticky header** | Logo, "Get In Touch" pill, hamburger. Sticky on scroll. |
| 2 | 168 | 872 | **Hero** | Left: kicker "Safety. Reliability. Excellence.", H1 "Comprehensive Solutions for the Oil & Gas [Industry]" with rotating word in lime/script font, body, search panel ("What service are you looking for?" + dropdown + lime arrow button). Right: refinery photo with overlay rating/badge cards. |
| 3 | 1040 | 370 | **Mission strip** | Centered intro paragraph, light bg. |
| 4 | 1410 | 372 | **3 Info cards** | Support Hours (dark navy), Global Footprint (cream), Request Consultation (lime). 3-up grid. |
| 5 | 1782 | 653 | **About / Driving Excellence** | 2-col: left = kicker + H2 + body + 2 feature pills + photo collage with badge; right = large equipment photo. |
| 6 | 2434 | 1105 | **Services (dark)** | Dark navy bg `#07001a`. H2 "Reliable and Efficient Oil & Gas Industry Services". 4 service cards in a Swiper (Refining & Processing, Oilfield Services, Pipelines & Logistics, Petrochemicals etc.). Each card has shape-item-icon SVG curve, photo, title, description, lime arrow button. |
| 7 | 3539 | 200 | **Marquee strip** | Infinite scroll: `Refining · Pipelines · Petrochemicals · Offshore · Reservoirs · Drilling`. Large Playfair Display text, very pale color. |
| 8 | 3739 | 517 | **Why Choose Us heading** | Kicker "Why Choose Us", H2 "Your Trusted Source for High-Performance Energy Services", sub-card "Powering Energy Safely" + body. |
| 9 | 4257 | 584 | **Stats + photo** | 3 stats (25+ Years, 15K Projects, 99% Safety) on left, large photo right. Numbers animated with jquery-numerator. |
| 10 | 4841 | 944 | **Team** | Kicker "Skilled Engineers", H2 "Meet Our Skilled Engineering Professionals". Swiper of team cards (image, name, role). 5 members visible. |
| 11 | 5785 | 791 | **Appointment** | Left: refinery flame photo. Right (lime bg `#bdc91a`): "Make an Appointment / Book Appointment" form (Service select, Name, Email, Phone, Message, Submit). |
| 12 | 6575 | 475 | **Pricing heading** | Centered: "Flexible Pricing Plan Rates" with tiny icon between words. |
| 13 | 7050 | 582 | **Pricing cards** | 3 tiers (Basic $100, Professional highlighted in lime, Enterprise/Premium). Each: title, description, price, feature list, CTA. |
| 14 | 7633 | 986 | **Testimonials** | Swiper of testimonial cards. Each card has avatar, name, role, quote, 5-star rating. ~24 images = ~6 visible cards × multiple states. |
| 15 | 8619 | 955 | **Blog / News** | Kicker "Latest Articles", H2 "News, Ideas & Updates from the Energy World". 3 post cards (image, date, title, excerpt, read-more arrow). |
| 16 | 9573 | 783 | **Footer** | Dark navy `#07001a`. Logo + about, Quick Links, Contact, Newsletter signup. Bottom marquee strip with industry words. |
| — | hidden | 900 | **Off-canvas nav** | Slides in from right. Logo, full menu list, contact info. |

## Layout Notes

- **Container max-width:** ~1320px (Elementor default with side gutters).
- **Stack order:** Header is sticky at top with `z-index: 99`. Off-canvas overlay sits above (z-index higher when open). Scroll-to-top button bottom-right `.scroll-top`.
- **Section spacing:** Most sections have ~80–120px vertical padding. Dark sections bleed full-width.
