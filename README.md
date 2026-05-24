# Marketing UI kit — FillChair.io

A pixel-fidelity recreation of the FillChair.io marketing surface. Dark-first, modern SaaS aesthetic, optimized for converting private-practice dentists.

## Run

Open `index.html`. Click the in-page nav to scroll between sections. The "Book a demo" button opens a (fake) modal.

## Components

| File | What it is |
|---|---|
| `SiteHeader.jsx` | Sticky top bar — logo lockup, nav, "Book a demo" CTA |
| `Hero.jsx` | Display headline + sub + dual CTA + animated "chairs filling" visual |
| `LogoStrip.jsx` | "Used by N+ practices" row of clinic name marks |
| `Pillars.jsx` | The three product pillars: no-shows / dormant / reviews |
| `HowItWorks.jsx` | Three-step "we set it up → it runs → you see the chairs fill" sequence |
| `Metrics.jsx` | ROI grid — three big numbers with claim copy |
| `Testimonial.jsx` | Single-quote card from a practice owner |
| `Pricing.jsx` | Two-tier pricing (Practice / Group) with feature checklist |
| `Faq.jsx` | Accordion of common objections |
| `Footer.jsx` | Wordmark, tiny nav, fine print |
| `App.jsx` | Composes everything in order |

## Coverage notes

This kit covers the **homepage / landing surface only**. It is the entire site in a single scrollable page — typical for SaaS in this category. Features / pricing / FAQ exist as anchors on the same page rather than as separate routes.

A practice-facing dashboard ("the back-end clinics log into") and patient-facing SMS/email templates are not yet built — request them and they'll layer on top of the same tokens.
