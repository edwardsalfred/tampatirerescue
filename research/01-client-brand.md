## Brand Snapshot
- **Company:** Tampa Tire Rescue
- **Primary Color:** `#0B0B0D` (near-black — wordmark color)
- **Secondary Color:** `#FFC400` (amber yellow — emergency/safety, classic roadside-rescue cue)
- **Accent Color:** `#E63946` (rescue red — high-urgency CTAs, "Call Now" energy)
- **Fonts:** `Bangers` (display, italic-feel like the existing wordmark) / `Inter` (body)
- **Tone:** Urgent, reassuring, blue-collar honest
- **Core Message:** Flat tire? They come to you, fast — 24/7 mobile tire repair across Tampa Bay.

---

## 1. Identity

| Element | Value |
|---|---|
| Legal/brand name | Tampa Tire Rescue |
| Existing tagline | 24/7 Mobile Tire Service in Tampa |
| Wordmark sub-tag (printed in logo) | "FAST, RELIABLE, MOBILE TIRE HELP." |
| Headline | Flat Tire? We Come to You — Fast. |
| Address | 5901 N Nebraska Ave, Tampa, FL 33604 |
| Primary phone | (813) 603-6643 |
| Secondary phone | (816) 456-5620 |
| Hours | 24/7 |
| Response time claim | Within 20 minutes |

## 2. Logo

The downloaded logo (`site/assets/logo-nav.png`) is a bold italic display wordmark in pure black on transparent. The font is in the same family as **Bangers / Komika Display** — slanted, condensed, all-caps, comic/action vibe. Beneath the main wordmark sits a smaller printed tagline: *"FAST, RELIABLE, MOBILE TIRE HELP."*

A second logo asset (`logo-icon.png`) is the same wordmark cropped tighter for app icons / OG images.

**Implication for rebuild:** Use the existing PNG as-is in the nav (it has the wordmark baked in — no separate `<span>` text). Pair it with `Bangers` from Google Fonts for any additional display headlines so the rest of the site feels of a piece with the wordmark.

## 3. Color system (extracted)

The original Zyro-built site leans on a near-black background with bright amber/yellow accent panels and white type — a recognizable roadside-rescue palette. There are no published hex values in the source, so the rebuild standardizes them:

| Role | Hex | Use |
|---|---|---|
| Asphalt (primary) | `#0B0B0D` | Backgrounds, body text on light panels |
| Hazard amber (secondary) | `#FFC400` | Section accents, hover states, "rescue" panels |
| Rescue red (accent) | `#E63946` | Primary CTA buttons, urgency badges, dial-pad icon |
| Bone (neutral light) | `#F4F1EC` | Light section backgrounds, card surfaces |
| Steel (neutral dark) | `#1B1D22` | Footer, secondary dark blocks |
| Hairline | `rgba(255,255,255,0.08)` on dark / `rgba(11,11,13,0.08)` on light | Dividers |

## 4. Typography pairing

| Slot | Font | Why |
|---|---|---|
| Display / hero / section H2 | **Bangers** (Google Fonts) | Mirrors the existing logo wordmark — keeps the brand voice loud and on-brand. |
| Body / paragraph / nav | **Inter** (Google Fonts, 400/500/700) | Clean, modern, very readable on small screens — handles long service-list copy without fatigue. |
| Numbers / phone displays | **JetBrains Mono** (Google Fonts) | Phone numbers and response-time stats read sharper in mono — telegraphs "dispatch" feel. |

## 5. Tone of voice

- **Urgent** without being shouty. Short sentences. Direct verbs.
- **Reassuring** — language like *"no worries"* and *"saved the day"* shows up in their copy.
- **Blue-collar honest** — they list both new AND used tires; they say *"if you don't have a spare, no worries—we can bring a tire to you."* That trust angle is core.
- **Local pride** — explicitly names every Tampa Bay city served.

Avoid: corporate marketing speak, em-dash overuse, ornate adjectives. The voice is "the guy you'd actually want answering the phone at 2am."

## 6. Existing copy (verbatim, for reuse)

**Hero band**
> 24/7 Mobile Tire Service in Tampa.
> Flat Tire? We Come to You — Fast.
> We repair your tire on the spot, or replace it with new or used if needed.

**New & Used Tires**
> Whether you need brand-new tires or high-quality used ones, Tampa Tire Rescue has you covered. We offer a wide selection of tires to fit your vehicle's needs and budget.

**Tire Change**
> Got a flat tire? We are here to help put your spare tire on quickly and safely. And if you don't have a spare, no worries — we can bring a tire to you.

**Comprehensive Services**
> Experiencing a flat tire can be a frustrating and unexpected inconvenience. At Tampa Tire Rescue, we specialize in providing fast and reliable mobile tire repair service.

**Why Choose Us**
- 24/7 Availability — around the clock for emergency tire and roadside assistance.
- Experienced Technicians — skilled and certified, top-quality service.
- Fast Response — our rapid response team aims to reach you within 20 minutes.

**Testimonial — Sara T.**
> Quick response and excellent service! Tampa Tire Rescue saved the day when I had a flat tire.

**Closing band**
> We service Tampa Bay and the surrounding area. We are open 24/7. Call us now.

## 7. Service offerings (full list, for the Services page)

**Tire services**
- Mobile tire repair
- Tire plug / patch
- Tire replacement (on-site)
- New tire sales & installation
- Used tire sales & installation
- Spare tire installation
- Tire delivery
- Tire rotation
- Tire balancing
- Mobile truck tire repair
- Roadside tire repair

**Wheel & rim**
- Rim repair
- Stripped lug removal
- Wheel lock removal

**Roadside**
- Battery replacement
- Jump starts
- Lockouts
- Fuel delivery

## 8. Service area (verbatim)

Tampa, Temple Terrace, St. Petersburg, Clearwater, Brandon, Riverview, Largo, Wesley Chapel, Palm Harbor, Pinellas Park, Dunedin, Safety Harbor, Oldsmar, Seminole.

## 9. Site architecture (existing)

Existing site is single-page (Zyrosite/Hostinger Website Builder). No internal links to about/services/contact pages — the site scrolls as one long page.

**Implication:** Rebuild has room to expand into a real multi-page architecture (Home, Services, Service Area, About, Contact) — that on its own creates SEO surface area the original lacks.

## 10. Assets self-hosted

- `site/assets/logo-nav.png` — main wordmark (used in nav and hero)
- `site/assets/logo-icon.png` — square crop for OG / app icon
- `site/assets/portfolio/hero-tires.jpg` — wall of tires (hero background option)
- `site/assets/portfolio/wheel-closeup.jpg` — alloy wheel macro
- `site/assets/portfolio/roadside-night.jpg` — night roadside scene (urgency)
- `site/assets/portfolio/tire-stack.jpg` — stacked tires (inventory feel)
- `site/assets/portfolio/tire-tread.jpg` — tread macro
- `site/assets/portfolio/highway-night.jpg` — highway at night
- `site/assets/portfolio/jack-up.jpg` — vehicle on jack
- `site/assets/portfolio/mechanic-tools.jpg` — tools laid out
- `site/assets/portfolio/truck-tire.jpg` — commercial truck tire
- `site/assets/portfolio/new-tire.jpg` — new tire
