# 部署指南

> [!TIP]
> 这些文档使用了 AI 帮助撰写，并经过人工审核和修改。请注意甄别内容真实性。

## 前置条件

1、3 需要安装 `uv`。详见 [uv docs](https://docs.astral.sh/uv/getting-started/installation/)。

## 目录结构说明

Sleepy Project 运行时会生成/读取以下目录：

- `data/`: **(重要)** 存放配置文件 (`config.yaml`)、SQLite 数据库 (`data.db`)、日志和证书。**部署时需持久化此目录。**
- `plugins/`: 存放插件。
- `theme/`: 存放主题文件。

## 方式一：使用 Python 直接运行 (Linux/Windows)

适用于简单的 VPS 或本地运行。

1. **安装 Python 3.10+**
2. **克隆代码**

   ```bash
   git clone https://github.com/sleepy-project/sleepy.git
   cd sleepy
   ```

3. **后台运行 (使用 nohup)**

   ```bash
   nohup uv run main.py >/dev/null 2>&1 &
   ```

   或者使用 `screen` / `tmux`。

## 方式二：使用 Docker (推荐)

Docker 可以隔离环境，方便管理。

1. 克隆仓库：

   ```bash
   git clone https://github.com/sleepy-project/sleepy
   cd sleepy
   ```

2. 运行 Docker 命令：

   ```bash
   sudo docker compose up -d
   ```

> **注意**: 首次运行后，请在宿主机的 `./data` 目录中创建 `config.yaml` 并重启容器。

## 方式三：使用 Systemd (Linux 服务)

将 sleepy clone 到 `/opt/sleepy`：

```bash
sudo git clone https://github.com/sleepy-project/sleepy /opt/sleepy
```

创建服务文件 `/etc/systemd/system/sleepy.service`（注意将 `yourusername` 替换为你安装uv的用户名）：

```ini
[Unit]
Description=Sleepy Project Service
After=network.target

[Service]
WorkingDirectory=/opt/sleepy
ExecStart=/home/yourusername/.local/bin/uv run /opt/sleepy/main.py
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```

启用并启动：

```bash
systemctl enable sleepy
systemctl start sleepy
```
