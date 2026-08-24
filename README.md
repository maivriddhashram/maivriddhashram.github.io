# Mai Vriddhashram (माई वृद्धाश्रम) — Website

A bilingual (Marathi / English) website for Mai Vriddhashram, run by Bodhi Tree
Educational Foundation. Built as a static, dependency-free HTML/CSS/JS site so
it can be hosted anywhere with zero build step, and can later be migrated into
Next.js if a CMS/database is needed.

## 1. What's inside

```
/index.html            Home
/about.html             About Us
/mothers.html           Our Mothers
/facilities.html        Facilities & Care
/activities.html        Activities
/gallery.html           Gallery (filterable, with lightbox)
/stories.html           Stories / Impact
/donate.html            Donate (primary conversion page)
/volunteer.html         Volunteer (with form)
/csr.html               CSR & Partners (with enquiry form)
/contact.html           Contact (with form)
/privacy.html           Privacy Policy
/terms.html             Terms & Conditions
/donation-policy.html   Donation Policy
/config.js              << single source of truth for all editable data
/css/style.css          Design system
/js/common.js           Shared header/footer, nav, language switcher
/js/main.js             Counters, gallery, forms, donation amount picker
/images/                Photos (organize by folder — see section 6)
/robots.txt, /sitemap.xml
```

## 2. Development

No build tools are required. Open `index.html` directly in a browser, or serve
the folder locally for the most accurate experience (some browsers restrict
`fetch`/relative paths on `file://`):

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## 3. Deployment

This is a static site — deploy the whole folder as-is to:

- **Netlify**: drag-and-drop the folder, or connect the repo (no build command needed; publish directory = `/`)
- **Vercel**: `vercel deploy` from this folder, framework preset = "Other"
- **GitHub Pages**: push to a repo and enable Pages on the root

## 4. Updating contact details, UPI/bank details, donation amounts

Open **`config.js`**. Every placeholder in the site (address, phone, WhatsApp,
email, UPI ID, bank details, registration number, social links, impact
numbers, donation amounts) is read from this one file — edit it there and the
change appears across every page automatically.

Replace values like `"[VERIFIED PHONE NUMBER]"` with the real, confirmed value.
Do not remove a key — leave the placeholder in place until the real value is
confirmed by the organization.

## 5. Updating Marathi / English content

Nearly every text element in the HTML carries two attributes:

```html
<h1 data-mr="मराठी मजकूर" data-en="English text">मराठी मजकूर</h1>
```

`js/common.js` swaps the visible text based on the selected language. To edit
copy, update both `data-mr` and `data-en` (and the text between the tags,
which is the initial/default Marathi render).

## 6. Adding images

Create the folders below under `/images/` and reference real files in each
page's `<img>` / hero `src` (currently placeholder blocks mark where a photo
belongs):

```
/images/hero/
/images/mothers/
/images/facilities/
/images/activities/
/images/gallery/
/images/team/
/images/qr/
```

Use descriptive file names (e.g. `mai-vriddhashram-kitchen.webp`) and always
add real `alt` text. Compress to WebP where possible for performance.

## 7. Connecting a payment gateway

In `config.js`, set `onlinePaymentGatewayUrl` to your gateway's hosted
checkout link (e.g. Razorpay Payment Page, Instamojo). On `donate.html`, wire
the amount buttons to redirect to that link with the selected amount as a
query parameter, or embed the gateway's checkout script per its own
documentation. Never hardcode API keys or secrets into these static files —
if you need server-side logic (webhooks, receipts), add a small backend or a
serverless function and call it from here.

## 8. Connecting WhatsApp

Set `whatsapp` in `config.js` to the verified number including country code,
digits only (e.g. `919999999999`). The site automatically builds
`https://wa.me/<number>` links in the header CTA, mobile sticky bar, and
contact page.

## 9. Connecting analytics

Add your Google Analytics (GA4) or Search Console verification snippet to the
`<head>` of each page (or centralize it by injecting it from `common.js`
before `</head>` if you prefer one place to manage it). Track: donation CTA
clicks, WhatsApp clicks, call clicks, volunteer submissions, CSR enquiries,
and language-switch events by adding `gtag('event', ...)` calls at the
relevant points in `js/main.js` and `js/common.js`.

## 10. Connecting a CMS later

`config.js` and the repeated card/list markup in each page (gallery items,
mother cards, activity items, story cards) are intentionally structured so
they can be swapped for data fetched from a CMS or database (e.g. rendering
the same cards from a JSON/API response instead of static HTML). Migrating to
Next.js + a headless CMS (Sanity, Contentful) or a simple admin-managed JSON
file is a natural next step without changing the visual design.

## 11. Verified-data checklist before going live

Search the codebase for `[VERIFIED` and `[XX]` and replace every instance with
confirmed information:

- Address, phone, WhatsApp, email, Google Maps link
- UPI ID, bank account details
- Registration number, 80G/12A/FCRA status (only if confirmed)
- Instagram / Facebook links
- Impact numbers (mothers supported, meals served, years of service, etc.)
- Canonical URLs in every page's `<link rel="canonical">` and in `sitemap.xml`/`robots.txt`
- Resident stories, photos, and testimonials (only after written consent)

## 12. Accessibility & performance notes

- Semantic headings, skip-to-content link, visible focus states, and
  `prefers-reduced-motion` support are already built in.
- Images use `loading="lazy"` and should be served as optimized WebP/AVIF.
- Replace Google Fonts with self-hosted fonts if you need to remove the
  external font request for stricter performance budgets.
