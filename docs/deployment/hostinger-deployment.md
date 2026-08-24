# Hostinger Deployment Guide

## Prerequisites

- Hostinger VPS with Node.js 20+ support
- MongoDB Atlas cluster (free tier works for staging)
- Domain pointed to VPS IP
- SSH access to VPS

## Server Setup

### 1. Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Install PM2

```bash
sudo npm install -g pm2
```

### 3. Install Nginx

```bash
sudo apt-get install -y nginx
```

## Application Deployment

### 1. Upload and Extract

```bash
cd /var/www
unzip corru-pack-print-india-production-source.zip
cd corru-pack-print-india
```

### 2. Install Dependencies

```bash
npm ci --production=false
```

### 3. Create Environment File

```bash
cp .env.example .env.local
nano .env.local  # Fill in production values
```

### 4. Build

```bash
npm run build
```

### 5. Start with PM2

```bash
pm2 start npm --name "corrupack" -- start
pm2 save
pm2 startup
```

## Nginx Configuration

```nginx
server {
    listen 80;
    server_name corrupackprintindia.org www.corrupackprintindia.org;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Enable HTTPS with Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d corrupackprintindia.org -d www.corrupackprintindia.org
```

## Cron Job Setup

Add to crontab for integration retry processing:

```bash
crontab -e
```

Add:

```
*/5 * * * * curl -s -X POST -H "Authorization: Bearer YOUR_CRON_SECRET" http://localhost:3000/api/cron/process-integrations > /dev/null 2>&1
```

## Health Check

After deployment, verify:

```bash
curl -I https://corrupackprintindia.org
curl https://corrupackprintindia.org/sitemap.xml
curl https://corrupackprintindia.org/robots.txt
```

## Updates

```bash
cd /var/www/corru-pack-print-india
git pull  # or upload new ZIP
npm ci --production=false
npm run build
pm2 restart corrupack
```
