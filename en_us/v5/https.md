# HTTPS Configuration Guide

> [!WARNING]
> This document is 100% AI-generated. Accuracy of the following content is not guaranteed.

This document explains how to configure HTTPS for Sleepy to access your status page through a secure connection.

## Why Use HTTPS?

HTTPS provides the following benefits:

- **Encrypted Communication**: Protects data from being stolen or tampered with during transmission
- **Authentication**: Ensures users are connecting to the real server
- **Data Integrity**: Ensures data is not modified during transmission
- **SEO Advantages**: Search engines prefer HTTPS websites
- **Modern Browser Compatibility**: Many modern browser features require HTTPS

## Configuration Steps

### 1. Obtain SSL Certificate

You need an SSL certificate to enable HTTPS. There are several ways to obtain a certificate:

#### Using Let's Encrypt (Recommended)

[Let's Encrypt](https://letsencrypt.org/) provides free SSL certificates. You can use the [Certbot](https://certbot.eff.org/) tool to automatically obtain and renew certificates.

```bash
# Install Certbot (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install certbot

# Obtain certificate (standalone mode)
sudo certbot certonly --standalone -d your-domain.com

# Certificates will be saved in /etc/letsencrypt/live/your-domain.com/ directory
```

#### Self-Signed Certificate (Testing Only)

For testing environments, you can create a self-signed certificate:

```bash
# Generate private key and certificate
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

Note: Self-signed certificates will cause browser security warnings and are not recommended for production environments.

### 2. Configure Sleepy to Use HTTPS

Sleepy provides two HTTPS deployment options:

#### Option 1: Built-in HTTPS Support (Recommended for Simple Deployments)

Sleepy can directly load certificates and enable HTTPS listening.

Edit `data/config.yaml`:

```yaml
main:
  https: true # Enable HTTPS mode
  ssl_cert: "data/cert.pem" # Certificate file path
  ssl_key: "data/key.pem" # Key file path
  port: 443 # Recommended to set port to 443
```

Or configure in `.env`:

```
sleepy_main_https = true
sleepy_main_ssl_cert = "/path/to/your/cert.pem"
sleepy_main_ssl_key = "/path/to/your/key.pem"
sleepy_main_port = 443
```

#### Option 2: Nginx Reverse Proxy (Recommended for Complex Production Environments)

In this approach, Sleepy continues to run in HTTP mode (`https: false`), and Nginx handles SSL.

Nginx configuration example:

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location / {
        proxy_pass http://localhost:9010; # Point to Sleepy's listening port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 3. Restart Sleepy Service

After configuration is complete, restart the service to apply changes:

```bash
./scripts/panel.sh restart
```

## Troubleshooting

### Certificate Permission Issues

If Sleepy fails to start and reports an error about being unable to read certificates, ensure the running user has permissions:

```bash
sudo chmod 644 /path/to/your/cert.pem
sudo chmod 640 /path/to/your/key.pem
```

### Certificate Path Error

Sleepy will attempt to find `cert.pem` and `key.pem` in the `data/` directory by default. If using a custom path, make sure to specify the full path in the configuration file.

## Security Best Practices

1. **Protect Private Keys**: Ensure `.key` files are not publicly accessible
2. **Enable HSTS**: Add HSTS headers in reverse proxy to force browsers to use HTTPS
3. **Regular Validity Checks**: When using Let's Encrypt, it's recommended to set up crontab for automatic renewal
