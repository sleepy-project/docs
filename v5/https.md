# HTTPS 配置指南

> [!WARNING]
> 本文 100% 由 AI 编写，不保证以下内容的准确性

本文档介绍如何为 Sleepy 配置 HTTPS，以便通过安全连接访问您的状态页面。

## 为什么使用 HTTPS？

HTTPS 提供了以下好处：

- **加密通信**：保护数据在传输过程中不被窃取或篡改
- **身份验证**：确保用户连接到的是真实的服务器
- **数据完整性**：确保数据在传输过程中不被修改
- **SEO 优势**：搜索引擎更喜欢 HTTPS 网站
- **现代浏览器兼容性**：许多现代浏览器功能需要 HTTPS

## 配置步骤

### 1. 获取 SSL 证书

您需要一个 SSL 证书才能启用 HTTPS。有几种方式可以获取证书：

#### 使用 Let's Encrypt（推荐）

[Let's Encrypt](https://letsencrypt.org/) 提供免费的 SSL 证书。您可以使用 [Certbot](https://certbot.eff.org/) 工具自动获取和更新证书。

```bash
# 安装 Certbot（Ubuntu/Debian）
sudo apt-get update
sudo apt-get install certbot

# 获取证书（独立模式）
sudo certbot certonly --standalone -d your-domain.com

# 证书将保存在 /etc/letsencrypt/live/your-domain.com/ 目录下
```

#### 自签名证书（仅用于测试）

对于测试环境，您可以创建自签名证书：

```bash
# 生成私钥和证书
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

注意：自签名证书会导致浏览器显示安全警告，不建议在生产环境中使用。

### 2. 配置 Sleepy 使用 HTTPS

Sleepy 提供两种 HTTPS 部署方案：

#### 方案一：使用内置 HTTPS 支持（推荐用于简单部署）

Sleepy 可以直接加载证书并开启 HTTPS 监听。

编辑 `data/config.yaml`：

```yaml
main:
  https: true # 开启 HTTPS 模式
  ssl_cert: "data/cert.pem" # 证书文件路径
  ssl_key: "data/key.pem" # 密钥文件路径
  port: 443 # 建议将端口设为 443
```

或者在 `.env` 中配置：

```
sleepy_main_https = true
sleepy_main_ssl_cert = "/path/to/your/cert.pem"
sleepy_main_ssl_key = "/path/to/your/key.pem"
sleepy_main_port = 443
```

#### 方案二：使用 Nginx 反向代理（推荐用于复杂生产环境）

在此方案下，Sleepy 保持运行在 HTTP 模式（`https: false`），由 Nginx 处理 SSL。

Nginx 配置示例：

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location / {
        proxy_pass http://localhost:9010; # 指向 Sleepy 的监听端口
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 3. 重启 Sleepy 服务

配置完成后，重启服务以应用更改：

```bash
./scripts/panel.sh restart
```

## 故障排除

### 证书权限问题

如果 Sleepy 无法启动并报错无法读取证书，请确保运行用户拥有权限：

```bash
sudo chmod 644 /path/to/your/cert.pem
sudo chmod 640 /path/to/your/key.pem
```

### 证书路径错误

Sleepy 默认会尝试在 `data/` 目录下查找 `cert.pem` 和 `key.pem`。如果使用自定义路径，请务必在配置文件中写明完整路径。

## 安全最佳实践

1. **保护私钥**：确保 `.key` 文件不被公开访问
2. **启用 HSTS**：在反向代理中添加 HSTS 标头，强制浏览器使用 HTTPS
3. **定期检查有效期**：使用 Let's Encrypt 时建议设置 crontab 自动续期
