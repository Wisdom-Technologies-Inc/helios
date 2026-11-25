# HELIOS Customer Operations — Next.js site

A Next.js (App Router, TypeScript) port of the approved HELIOS one-page
marketing site. Same sections, same order, same copy and styling as the
HTML version — hero, tools marquee, pain points, decision matrix,
services, story & leadership, why HELIOS, process, Kigali hub,
governance, FAQ, booking, policies, final CTA, footer — including the
official logo, the embedded hub video, and all colour/contrast fixes.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start      # serves the production build
```

Deploy anywhere that runs Node (Vercel is the one-command option:
`npx vercel`). All images/video are plain files in `public/assets/`,
so the site also works behind a static export if ever needed.

## Contact — Cal.com only

Cal.com booking is the site's **only** contact method. There is no
contact form and no email address published anywhere on the page —
every Schedule / Book button scrolls to the Cal.com embed in the
booking section (`components/Booking.tsx`). LinkedIn is the only other
outbound contact link.

The embed is rendered by `components/CalEmbed.tsx` using
`@calcom/embed-react`, following Cal.com's React embed snippet:

- `getCalApi({ namespace })` initialises the embed, then
  `cal("ui", { hideEventTypeDetails: false, layout: "month_view" })`.
- The `<Cal>` component takes `namespace`, `calLink`, and
  `config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}`.

To point the site at a different Cal.com event, change **one place** —
`lib/config.ts`:

| Setting | Current value |
| --- | --- |
| `CAL_NAMESPACE` | `helios-customer-operations` |
| `CAL_LINK` | `heliosrw/helios-customer-operations` |
| `CAL_BOOKING_PAGE_URL` | derived: `https://cal.com/` + `CAL_LINK` (the "open in a new tab" fallback link under the embed) |

No environment variables are needed for booking.

## Where things live

| What | Where |
| --- | --- |
| Cal.com namespace + link, LinkedIn URL | `lib/config.ts` |
| Cal.com embed component | `components/CalEmbed.tsx` |
| Services data / FAQ questions & answers | `lib/data.ts` |
| One component per section | `components/` (Header, Hero, Marquee, PainPoints, Comparison, Services, Story, Why, Process, Hub, Governance, Faq, Booking, Policies, FinalCta, Footer) |
| Global behaviours (clocks, counters, reveal, booking-button scroll) | `components/SiteEffects.tsx` |
| Design system / all styling | `app/globals.css` |
| Page metadata, title, favicon, fonts | `app/layout.tsx` |
| Images, logo, hub video | `public/assets/` |

To add a leader or team profile, copy a `lead-card` block in
`components/Story.tsx`. To change FAQ content, edit `FAQS` in
`lib/data.ts` — search, topic filters and counts update automatically.
