# Environment Variables

## Required

| Variable | Type | Description |
|---|---|---|
| `MONGODB_URI` | Runtime, Required | MongoDB Atlas connection string |
| `MONGODB_DATABASE` | Runtime, Required | Database name (e.g. `corrupack_2028`) |
| `NEXT_PUBLIC_SITE_URL` | Build-time, Required | Production URL (e.g. `https://corrupackprintindia.org`) |

## Email Integration

| Variable | Type | Description |
|---|---|---|
| `RESEND_API_KEY` | Runtime, Integration | Resend API key. Emails disabled when missing. |
| `EMAIL_FROM` | Runtime, Optional | Sender address (default: `Corru Pack Print India <noreply@corrupackprintindia.org>`) |
| `EMAIL_ADMIN_RECIPIENTS` | Runtime, Optional | Comma-separated admin email addresses |

## Google Sheets Integration

| Variable | Type | Description |
|---|---|---|
| `GOOGLE_PROJECT_ID` | Runtime, Integration | GCP project ID |
| `GOOGLE_CLIENT_EMAIL` | Runtime, Integration | Service account email |
| `GOOGLE_PRIVATE_KEY_BASE64` | Runtime, Integration | Base64-encoded private key |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Runtime, Integration | Target spreadsheet ID |

### Encoding the Private Key

```bash
cat service-account-key.json | jq -r '.private_key' | base64 -w 0
```

## Bot Protection

| Variable | Type | Description |
|---|---|---|
| `NEXT_PUBLIC_BOT_PROTECTION_SITE_KEY` | Build-time, Optional | hCaptcha site key |
| `BOT_PROTECTION_SECRET` | Runtime, Optional | hCaptcha secret key. Fails closed in production when missing. |
| `BOT_PROTECTION_VERIFY_URL` | Runtime, Optional | Override verification URL (default: hCaptcha) |

## Cron Security

| Variable | Type | Description |
|---|---|---|
| `CRON_SECRET` | Runtime, Optional | Bearer token for cron endpoint auth |

## Runtime

| Variable | Type | Description |
|---|---|---|
| `NODE_ENV` | Runtime, Auto | Set by Next.js (`development` or `production`) |
