# Deployment Guide

> [!WARNING]
> This document is 100% AI-generated. Accuracy is not guaranteed.

This guide explains how to deploy Sleepy v5 to production.

## Prerequisites

- Node.js 18 or higher
- A domain name (optional, but recommended)
- SSL certificate (for HTTPS)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/sleepy-project/sleepy.git
cd sleepy
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure

Copy the example configuration:

```bash
cp data/config.example.yaml data/config.yaml
```

Edit `data/config.yaml` according to your needs.

### 4. Build

```bash
npm run build
```

### 5. Start

```bash
npm start
```

## Production Deployment

### Using PM2 (Recommended)

PM2 is a production process manager for Node.js applications.

```bash
# Install PM2
npm install -g pm2

# Start Sleepy
pm2 start npm --name "sleepy" -- start

# Enable auto-start on system boot
pm2 startup
pm2 save
```

Common PM2 commands:

```bash
pm2 list          # List all processes
pm2 logs sleepy   # View logs
pm2 restart sleepy # Restart
pm2 stop sleepy   # Stop
```

### Using systemd

Create a systemd service file at `/etc/systemd/system/sleepy.service`:

```ini
[Unit]
Description=Sleepy Status Service
After=network.target

[Service]
Type=simple
User=sleepy
WorkingDirectory=/path/to/sleepy
ExecStart=/usr/bin/node dist/index.js
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable sleepy
sudo systemctl start sleepy
```

### Using Docker

```bash
# Build image
docker build -t sleepy:latest .

# Run container
docker run -d \
  --name sleepy \
  -p 9010:9010 \
  -v $(pwd)/data:/app/data \
  sleepy:latest
```

## Reverse Proxy Setup

### Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:9010;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Apache

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:9010/
    ProxyPassReverse / http://localhost:9010/
</VirtualHost>
```

## Security Considerations

1. **Use HTTPS**: Always use HTTPS in production
2. **Firewall**: Only expose necessary ports
3. **Regular Updates**: Keep Sleepy and dependencies up to date
4. **Strong Passwords**: Use strong passwords for admin accounts
5. **Backup**: Regularly backup your database

## Monitoring

### Health Check

Sleepy provides a health check endpoint:

```bash
curl http://localhost:9010/health
```

### Logs

- PM2: `pm2 logs sleepy`
- systemd: `journalctl -u sleepy -f`
- Docker: `docker logs sleepy`

## Troubleshooting

### Service Won't Start

Check logs for errors:

```bash
# PM2
pm2 logs sleepy --err

# systemd
journalctl -u sleepy -n 50
```

### Port Already in Use

Change the port in `data/config.yaml` or find and kill the process:

```bash
# Find process
lsof -i :9010

# Kill process
kill -9 <PID>
```

## Next Steps

- [Configure HTTPS](https.md)
- [Update Guide](update.md)

