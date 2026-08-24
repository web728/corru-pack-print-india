# Post-Deployment Checklist

## Immediate (Day 1)

- [ ] Verify all pages load without errors
- [ ] Submit a test form on each form type
- [ ] Verify test submissions appear in MongoDB
- [ ] Verify test submissions appear in Google Sheets
- [ ] Verify confirmation emails are received
- [ ] Verify admin notification emails are received
- [ ] Check PM2 logs for errors: `pm2 logs corrupack --lines 100`
- [ ] Test mobile responsiveness on a real device
- [ ] Verify HTTPS is working (no mixed content warnings)

## First Week

- [ ] Submit sitemap.xml to Google Search Console
- [ ] Request removal of any indexed spam/hacked URLs
- [ ] Monitor error rates in PM2 logs
- [ ] Review MongoDB Atlas metrics (connections, operations)
- [ ] Verify cron job runs successfully (check integration_jobs collection)
- [ ] Test from different browsers (Chrome, Firefox, Safari, Edge)

## Ongoing

- [ ] Monitor uptime (UptimeRobot, Pingdom, or similar)
- [ ] Review MongoDB backups are running
- [ ] Check for failed integration jobs periodically
- [ ] Update Node.js and dependencies quarterly
- [ ] Review and rotate secrets annually
- [ ] Check `npm audit` for security vulnerabilities monthly
