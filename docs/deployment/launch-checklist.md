# Launch Checklist

## Pre-Launch

- [ ] MongoDB Atlas cluster created and connection string tested
- [ ] Database user with least-privilege access created
- [ ] `.env.local` populated with all required variables
- [ ] Production build completes without errors (`npm run build`)
- [ ] Application starts and serves pages (`npm start`)
- [ ] Domain DNS points to server IP
- [ ] HTTPS certificate installed (Certbot/Let's Encrypt)
- [ ] Nginx configured as reverse proxy
- [ ] PM2 process running and set to restart on boot

## Integration Setup

- [ ] Resend account created and API key generated
- [ ] Sender domain verified in Resend
- [ ] Admin recipient emails configured
- [ ] Google Cloud service account created
- [ ] Spreadsheet created and shared with service account
- [ ] Private key base64-encoded and set in env
- [ ] hCaptcha account created (site key + secret key)
- [ ] Cron job configured for `/api/cron/process-integrations`

## Verification

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Visitor registration form submits successfully
- [ ] Exhibitor registration form submits successfully
- [ ] Contact form submits successfully
- [ ] Confirmation emails are received
- [ ] Admin notification emails are received
- [ ] Google Sheets rows appear after submission
- [ ] Mobile layout works correctly
- [ ] Dark mode renders correctly
- [ ] Legacy URLs redirect properly
- [ ] 404 page displays for invalid routes
- [ ] sitemap.xml is accessible
- [ ] robots.txt is accessible
- [ ] Security headers are present (check with securityheaders.com)

## Post-Launch

- [ ] Google Search Console verified and sitemap submitted
- [ ] Removal requests for old hacked/spam URLs
- [ ] MongoDB backups configured
- [ ] Monitoring/uptime check configured
- [ ] Error logging reviewed
