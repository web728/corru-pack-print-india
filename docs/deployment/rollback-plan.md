# Rollback Plan

## Quick Rollback

If a deployment causes issues, revert to the previous build:

```bash
cd /var/www/corru-pack-print-india

# If using git:
git log --oneline -5    # Find the last good commit
git checkout <commit>   # Revert to it
npm ci --production=false
npm run build
pm2 restart corrupack

# If using ZIP uploads:
# Keep the previous ZIP on the server
cd /var/www
mv corru-pack-print-india corru-pack-print-india-broken
unzip corru-pack-print-india-previous.zip
cd corru-pack-print-india
npm ci --production=false
cp ../corru-pack-print-india-broken/.env.local .env.local
npm run build
pm2 restart corrupack
```

## Database Rollback

MongoDB Atlas provides:

- **Point-in-Time Recovery** (M10+ clusters): Restore to any second in the last 24 hours
- **Snapshots**: Automatic daily snapshots

To restore from a snapshot:
1. Go to MongoDB Atlas → Clusters → your cluster
2. Click "..." → Restore
3. Choose the snapshot or point in time
4. Restore to a new cluster, verify, then swap connection strings

## DNS Rollback

If the new site has critical issues, point DNS back to the old server temporarily while fixing.

## Environment Variable Issues

If the app crashes due to env vars:
1. Check PM2 logs: `pm2 logs corrupack`
2. Fix `.env.local`
3. Restart: `pm2 restart corrupack`
