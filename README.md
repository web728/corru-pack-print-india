# Corru Pack Print India Expo 2028

Official website for the 3rd Edition of ICPMA Corru Pack Print India Expo — India's premier B2B trade exhibition for corrugated packaging, converting, and print technology.

**Event:** 9–12 February 2028 | **Venue:** Yashobhoomi, Dwarka, New Delhi

## Quick Start

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run typecheck` | TypeScript type check |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:e2e` | Run Playwright e2e tests |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Forms:** React Hook Form + Zod validation
- **Database:** MongoDB Atlas (native driver)
- **Email:** Resend
- **Spreadsheet:** Google Sheets API
- **Bot Protection:** hCaptcha
- **Deployment:** Hostinger VPS (PM2 + Nginx)

## Project Structure

```
src/
  app/            # Next.js App Router pages and API routes
  components/     # React components (ui/, forms/, layout/, sections/)
  config/         # Central event configuration
  hooks/          # Custom React hooks
  lib/            # Server-side utilities (MongoDB, email, jobs, etc.)
  schemas/        # Zod validation schemas
  styles/         # Global styles and design tokens
docs/
  deployment/     # Deployment guides and checklists
```

## Documentation

- [Developer Handoff](DEVELOPER-HANDOFF.md) — Architecture and technical details
- [Owner Action Required](OWNER-ACTION-REQUIRED.md) — Setup tasks before launch
- [Final Validation Report](FINAL-VALIDATION-REPORT.md) — Build and test results
- [Deployment Guide](docs/deployment/hostinger-deployment.md) — VPS setup instructions
- [Environment Variables](docs/deployment/environment-variables.md) — All configuration options
- [Launch Checklist](docs/deployment/launch-checklist.md) — Pre/post launch tasks

## Environment Variables

See `.env.example` for all variables. Required:

- `MONGODB_URI` — MongoDB Atlas connection string
- `MONGODB_DATABASE` — Database name
- `NEXT_PUBLIC_SITE_URL` — Production URL

See [docs/deployment/environment-variables.md](docs/deployment/environment-variables.md) for the full list.

## License

Proprietary. All rights reserved by the Indian Paper Corrugated & Packaging Machinery Manufacturers Association (ICPMA).
