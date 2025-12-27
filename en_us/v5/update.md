# Update Guide

> [!WARNING]
> This document is 100% AI-generated. Accuracy is not guaranteed.

This guide explains how to update Sleepy to the latest version.

## Before Updating

1. **Backup your data**: Always backup your database and configuration files before updating
2. **Check release notes**: Review the changelog for breaking changes
3. **Test in staging**: If possible, test the update in a staging environment first

## Update Methods

### Method 1: Using Git (Recommended)

If you installed Sleepy using Git:

```bash
# Navigate to Sleepy directory
cd /path/to/sleepy

# Stop the service
./scripts/panel.sh stop
# or
pm2 stop sleepy

# Backup data
cp -r data data.backup

# Pull latest changes
git pull origin main

# Install dependencies
npm install
# or
pnpm install

# Rebuild
npm run build

# Start the service
./scripts/panel.sh start
# or
pm2 start sleepy
```

### Method 2: Manual Update

1. Download the latest release from GitHub
2. Stop Sleepy service
3. Backup your `data/` directory
4. Extract the new version
5. Copy your `data/` directory to the new installation
6. Install dependencies and rebuild
7. Start the service

```bash
# Stop service
./scripts/panel.sh stop

# Backup
cp -r data data.backup

# Extract new version
tar -xzf sleepy-v5.x.x.tar.gz
cd sleepy-v5.x.x

# Copy data
cp -r ../old-sleepy/data ./

# Install and build
npm install
npm run build

# Start
./scripts/panel.sh start
```

## Database Migration

Some updates may require database migrations. Sleepy will automatically run migrations on startup.

Check logs for migration status:

```bash
# PM2
pm2 logs sleepy

# systemd
journalctl -u sleepy -n 50
```

## Rollback

If you encounter issues after updating, you can rollback:

```bash
# Stop service
./scripts/panel.sh stop

# Restore backup
rm -rf data
cp -r data.backup data

# Checkout previous version
git checkout v5.x.x  # Replace with your previous version

# Rebuild
npm install
npm run build

# Start
./scripts/panel.sh start
```

## Version Check

To check your current Sleepy version:

```bash
npm run version
# or check the web interface footer
```

## Common Issues

### Update Failed

If `git pull` fails due to local changes:

```bash
# Stash local changes
git stash

# Pull updates
git pull origin main

# Reapply your changes if needed
git stash pop
```

### Dependencies Error

Try cleaning and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Error

Ensure you're using a compatible Node.js version:

```bash
node --version  # Should be 18 or higher
```

## Staying Updated

### Check for Updates

Check the GitHub repository regularly:
- [Releases](https://github.com/sleepy-project/sleepy/releases)
- [Changelog](https://github.com/sleepy-project/sleepy/blob/main/CHANGELOG.md)

### Update Notifications

Enable update notifications in the Sleepy admin panel (if available).

## Next Steps

- [Configuration Guide](config.md)
- [Deployment Guide](deploy.md)

