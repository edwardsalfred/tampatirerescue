# Tampa Tire Rescue — Website Build Brief

> Greenfield directive: this brief is the source of truth for the build.

## Design direction

**Palette (final).** Asphalt `#0B0B0D` · Hazard amber `#FFC400` · Rescue red `#E63946` · Bone `#F4F1EC` · Steel `#1B1D22`. Hairlines `rgba(255,255,255,.08)` on dark, `rgba(11,11,13,.08)` on light.

**Type pairing.** Bangers (display, all-caps italic vibe) for hero + section headlines. Inter for body, nav, captions. JetBrains Mono for phone numbers, response-time stat, opening-hours block.

**Photography.** Dark, contrasty, asphalt-and-tread aesthetic. Self-host the 10 stock images already pulled to `site/assets/portfolio/`. No carousel hero. Real authenticity beats stock — when the client sends real van photos, swap them in.

**Animation.** GSAP + ScrollTrigger.
- Hero: pinned panel with a clearly marked 3D scroll-stop placeholder, plus a count-up to "20" minutes and a live pulse dot.
- Service grid: stagger reveal as it enters viewport.
- Service-area map: cities animate in sequentially.
- Footer: parallax shift on hero-tires backdrop.
- All animations respect `prefers-reduced-motion`.

**Avoid:** carousel hero, generic blue palette, em-dash overuse, marketing-speak headlines, hidden phone behind forms.

## Site architecture

**Single comprehensive home page** with anchor-linked sections (matches the original's single-page intent and how mobile-tire customers actually browse — they're already in a panic):

1. **Hero** — phone CTA + "20 min" promise + 3D placeholder.
2. **Now-open status / sticky band** — pulse dot + "We're dispatching now."
3. **Services grid** — 12 service cards with icons.
4. **How it works** — 6-step diagram (call → dispatch → arrive → diagnose → repair/replace → drive away).
5. **Service area map** — visual map block + 14 city tags.
6. **Pricing transparency** — base service fee + tiered scenarios.
7. **Trust band** — 4 testimonials + Google reviews link.
8. **FAQ** — 6 questions, FAQPage schema.
9. **Final CTA** — full-bleed amber band, dial-pad icon, phone.
10. **Footer** — full service list, hours, address, phone, copyright.

**Sticky elements:** Top nav (transparent → solid on scroll). Mobile-only sticky `Call Now` bar fixed to bottom.

**Pages shipped:**
- `index.html` — primary
- `competitive-analysis.html` — already shipped (noindex)
- `404.html` — friendly fallback
- `robots.txt` + `sitemap.xml`

## Content framework

### Hero headline — 3 options (formula: specific promise + emotional payoff)

1. **Flat tire? We're 20 minutes out.** — direct, leads with the time promise that no competitor matches.
2. **Stuck on the side of the road? We come to you.** — empathy-led, mirrors the client's existing voice.
3. **Tampa's 24/7 mobile tire crew. Dispatching now.** — community-led, names the city.

**Pick #1.** It's the strongest because it converts the "fast" claim into a number and lands on a specific Tampa-defining metric.

### Section copy direction
- **Services** — one sentence per service, scannable. Reuse client's existing copy where strong.
- **How it works** — present-tense, six imperative steps. Each step = one verb headline + one supporting sentence.
- **Pricing** — honest baseline ($89 mobile service call, plus parts) with "no hidden fees" callout.
- **Service area** — list 14 cities, then "Don't see your city? Call us — we probably still come."
- **FAQ** — write to actually help, not to stuff keywords. Each answer 2–4 sentences.

### SEO keyword targets
- Primary H1: "Mobile Tire Repair in Tampa — 24/7 Roadside Service"
- Section H2s reflect long-tail terms: "Tire replacement," "Battery jump start," "Lockout service," "Service area," "Pricing," "FAQ"
- Per-city tags inside service-area block carry geo-keywords.
- Title: `Tampa Tire Rescue — 24/7 Mobile Tire Repair in Tampa, FL`
- Meta description: ~155 chars, lead with phone + 20-min promise.

## Conversion playbook
- **Primary goal:** phone call (`tel:` link).
- **Secondary goal:** SMS (`sms:` link) for less-urgent quotes.
- **Sticky mobile bar:** always-visible amber Call Now. Dial-pulse animation.
- **Social proof placement:** testimonials immediately after pricing (kills the "is this a scam" hesitation that comes after seeing a number).
- **Trust signals shipped:** licensed/insured badge, Google rating link, 24/7 status pulse, response-time stat, service-area map, transparent pricing, FAQ.

## Technical
- Vanilla HTML/CSS/JS — no framework. Faster TTFB than every competitor.
- GSAP + ScrollTrigger via CDN.
- Google Fonts via `<link>` with `display=swap`.
- Schema markup: `LocalBusiness`, `Service` (each), `FAQPage`, `AggregateRating`.
- All `<img>` carry descriptive alt text and `loading="lazy"` (except hero).
- `prefers-reduced-motion` disables ScrollTrigger and replaces with instant-reveal.

## Deploy
- `netlify.toml` at root pinning `publish = "site"` + cache headers.
- Also a `vercel.json` with `outputDirectory: "site"` so Vercel works out of the box.
- README with deploy instructions for both platforms.

---

## Approval checkpoint

Greenfield mode is active — proceeding directly to build. The brief above is the contract; deviations will be flagged in the audit doc.
