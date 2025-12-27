# Configuration Guide

> [!WARNING]
> This document is 100% AI-generated. Accuracy is not guaranteed.

This guide explains how to configure Sleepy v5.

## Configuration Files

Sleepy v5 uses two main configuration files:

1. **`data/config.yaml`** - Main configuration file
2. **`.env`** - Environment variables (optional, overrides config.yaml)

## Basic Configuration

### Server Settings

```yaml
main:
  port: 9010          # Server port
  host: "0.0.0.0"     # Listen address
  https: false        # Enable HTTPS
```

### Database Configuration

```yaml
database:
  type: "sqlite"      # Database type: sqlite, mysql, postgresql
  path: "data/db.sqlite"  # SQLite database path
```

For MySQL/PostgreSQL:

```yaml
database:
  type: "mysql"
  host: "localhost"
  port: 3306
  database: "sleepy"
  username: "root"
  password: "password"
```

## Advanced Configuration

### Session Settings

```yaml
session:
  secret: "your-secret-key"  # Session secret key
  maxAge: 604800000          # Session duration (7 days in ms)
```

### CORS Configuration

```yaml
cors:
  enabled: true
  origins:
    - "https://yourdomain.com"
```

## Environment Variables

You can also use `.env` file to override configuration:

```
sleepy_main_port=9010
sleepy_main_https=false
sleepy_database_type=sqlite
```

Environment variable format: `sleepy_<section>_<key>`

## Configuration Priority

1. Environment variables (highest priority)
2. `.env` file
3. `config.yaml` (lowest priority)

## Common Issues

### Port Already in Use

Change the port in configuration:

```yaml
main:
  port: 9011  # Use a different port
```

### Database Connection Failed

Check your database credentials and ensure the database server is running.

## Next Steps

- [Deploy to production](deploy.md)
- [Configure HTTPS](https.md)

