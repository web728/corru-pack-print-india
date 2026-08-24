# Developer Handoff — Corru Pack Print India Expo 2028

## Overview

Production-ready Next.js website for the 3rd Edition of Corru Pack Print India Expo (Feb 9–12, 2028, Yashobhoomi, New Delhi). Built for Hostinger VPS deployment with PM2 + Nginx.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Forms | React Hook Form + Zod |
| Animation | Framer Motion |
| Database | MongoDB Atlas (native driver) |
| Email | Resend |
| Spreadsheet | Google Sheets API |
| Bot Protection | hCaptcha |
| Testing | Vitest (unit) + Playwright (e2e) |

## Architecture

### Pages (26 routes)

All pages live in `src/app/` as `page.tsx` files. The site has:
- Homepage + 7 informational pages (about, organizers, venue, travel, conference, gallery, past-editions)
- 2 past edition sub-pages (2024, 2026)
- 2 exhibitor pages (information, logistics) + exhibitor registration
- 1 visitor page (information) + visitor registration
- 2 partner pages (advertising, branding)
- Contact, brochure download, FAQ, downloads
- Legal pages (privacy-policy, terms, cookie-policy)
- 404 custom page

### API Routes (9 endpoints)

- `POST /api/forms/{visitor,exhibitor,contact,sponsor,brochure,newsletter,media,conference}` — Form submission handlers
- `POST /api/cron/process-integrations` — Retry queue processor for failed downstream integrations

### Form Submission Flow

1. Client-side validation (Zod via React Hook Form)
2. `POST` to API route
3. Server-side: rate limit → bot protection → Zod validation → sanitization → reference number generation → duplicate check → MongoDB save → Google Sheets sync → admin email → confirmation email
4. MongoDB save is authoritative — downstream failures (Sheets, email) create retry jobs
5. Retry jobs processed by cron endpoint with exponential backoff

### Key Modules (`src/lib/`)

| Module | Purpose |
|---|---|
| `mongodb.ts` | Connection singleton, `getCollection()` |
| `submission.ts` | 12-step form processor |
| `reference.ts` | `CPP28-{TYPE}-{XXXXXXXX}` generator |
| `rate-limit.ts` | In-memory sliding window |
| `bot-protection.ts` | hCaptcha verification |
| `sanitize.ts` | Input sanitization |
| `email.ts` | Resend transactional email |
| `google-sheets.ts` | Downstream sync |
| `jobs.ts` | MongoDB-backed retry queue |
| `env.ts` | Environment validation |
| `utm.ts` | UTM parameter extraction |

### Configuration

Central event config lives in `src/config/event.ts`. All event-specific data (name, dates, venue, categories, editions) is sourced from this single file.

### Schemas (`src/schemas/`)

One Zod schema per form type, plus a barrel export with `FORM_SCHEMAS` map keyed by `FormType`.

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run typecheck    # TypeScript check
npm run test         # Unit tests (Vitest)
npm run test:watch   # Unit tests in watch mode
npm run test:e2e     # E2E tests (Playwright)
npm run lint         # ESLint
```

## MongoDB Collections

| Collection | Purpose |
|---|---|
| `visitor_registrations` | Visitor form submissions |
| `exhibitor_enquiries` | Exhibitor form submissions |
| `contact_enquiries` | Contact form submissions |
| `sponsorship_enquiries` | Sponsorship form submissions |
| `brochure_requests` | Brochure download submissions |
| `newsletter_subscriptions` | Newsletter sign-ups |
| `media_accreditations` | Media accreditation submissions |
| `conference_enquiries` | Conference enquiry submissions |
| `integration_jobs` | Retry queue for failed downstream ops |

## Deployment

See `docs/deployment/` for:
- `hostinger-deployment.md` — Full VPS setup guide
- `environment-variables.md` — All env vars documented
- `launch-checklist.md` — Pre/post launch tasks
- `rollback-plan.md` — Recovery procedures
- `post-deployment-checklist.md` — Ongoing maintenance
