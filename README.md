# Tampa Tire Rescue — rebuild

A premium scroll-animated rebuild of [tampatirerescue.com](https://tampatirerescue.com/), grounded in a full competitive review of Tampa Bay mobile-tire sites.

## What's in here

```
.
├── netlify.toml            # Pins publish dir to site/
├── vercel.json             # Same pin for Vercel
├── README.md
├── research/
│   ├── 01-client-brand.md
│   ├── 02-competitor-analysis.md
│   ├── 03-build-brief.md
│   └── 04-quality-audit.md
└── site/                   # ← deploy this folder
    ├── index.html
    ├── 404.html
    ├── competitive-analysis.html   (noindex; client-only)
    ├── robots.txt
    ├── sitemap.xml
    ├── css/styles.css
    ├── js/main.js
    └── assets/
        ├── logo-nav.png
        ├── logo-icon.png
        ├── founders/
        └── portfolio/      (10 self-hosted images)
```

## Stack

- Vanilla HTML5, CSS3, JS — no framework
- GSAP 3.12 + ScrollTrigger via CDN (deferred)
- Google Fonts: Bangers (display), Inter (body), JetBrains Mono (numbers)
- Schema markup: AutomotiveBusiness + FAQPage + AggregateRating

## Local preview

```bash
cd site
python -m http.server 8765
# visit http://localhost:8765/
```

## Deploying

### Netlify
Drop the repo on Netlify. `netlify.toml` already points the publish dir to `site/` and adds cache + security headers.

### Vercel
Drop the repo on Vercel. `vercel.json` already pins `outputDirectory: site` and sets cache headers.

### Anywhere else
The `site/` folder is fully static — drop it into S3 + CloudFront, GitHub Pages, Cloudflare Pages, etc.

## Where the 3D scroll asset goes

Look for `<!-- 3D SCROLL ASSET HERE -->` near the hero in `index.html`. Drop a 1280×720 video, Spline canvas, or Lottie there. The hero already has the surrounding gradient and lighting tuned for a dark asset.

## Replacing stock photos with real ones

Drop replacements into `site/assets/portfolio/` keeping the same filenames:

- `hero-tires.jpg` — wide hero background
- `wheel-closeup.jpg`, `tire-tread.jpg` — macro detail
- `roadside-night.jpg`, `highway-night.jpg` — urgency/night scenes
- `mechanic-tools.jpg`, `jack-up.jpg` — work-in-progress
- `tire-stack.jpg`, `truck-tire.jpg`, `new-tire.jpg` — inventory

When the client sends real van/team photos, swap them in for the hero and add a real founder photo at `site/assets/founders/`.

## Phone numbers

Two numbers live in the page:

- Primary dispatch: **(813) 603-6643** — used for all tap-to-call CTAs
- Secondary / SMS: **(816) 456-5620** — used for the "Text for tire quote" button

Update both in `index.html` if numbers change. Search for `1813603` and `1816456` to find the `tel:` and `sms:` links.

## Pricing

Pricing tiers in the Pricing section ($89 / $129 / $79) are placeholders informed by competitor benchmarks (LP Mobile Tire publishes $125 flat). Confirm with the client and update before launch.
