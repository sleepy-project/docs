# 快速开始

欢迎使用 Sleepy Project！本指南将帮助你在几分钟内启动并运行你的个人状态页。

本文档将会指导你部署标准的 sleepy 实例，包含以下插件：

```json
[
    "main-status",
    "device-auth",
    "device-status",
    "frontend",
    "custom-background-img"
]
```

## 环境要求

 - [uv](https://docs.astral.sh/uv/getting-started/installation)
 - [pnpm](https://pnpm.io/installation) with [Node.js](https://nodejs.org/zh-cn/download)

### 普通安装

1. 获取代码：
```bash
git clone https://github.com/sleepy-project/sleepy
cd sleepy
git checkout fastapi-dev
```

2. 安装依赖
```bash
uv sync
```

3. 首次运行

```bash
uv run main.py
```

此时 plugins-manager 将会安装 `data/auto_install.json` 中的插件。

按 `Ctrl+C` 退出，并重新运行 `uv run main.py`。此时 `frontend` 插件将会自动下载前端源码并构建。如果失败，将会回滚到使用预构建的发行版。

按 `Ctrl+C` 退出。

你现在已经有了一个 sleepy 环境，请查看[配置文件](configuration)章节以编辑配置文件，或直接运行 `uv run main.py` 使用默认配置启动服务器。

### 一键脚本安装

运行：

```bash
curl -sSL http://getsleepy.siiway.org/v6.sh | bash
```

此脚本应处理好一切。
