# 快速开始

> [!TIP]
> 这些文档使用了 AI 帮助撰写，并经过人工审核和修改。请注意甄别内容真实性。

欢迎使用 Sleepy Project！本指南将帮助你在几分钟内启动并运行你的个人状态页。

## 环境要求

- [uv](https://docs.astral.sh/uv/getting-started/installation/)

## 1. 获取代码

```bash
git clone https://github.com/sleepy-project/sleepy.git
cd sleepy
```

## 2. 安装依赖

请确保你的环境中有 `requirements.txt` (基于源码推断的依赖列表如下)，运行以下命令安装：

```bash
uv pip install -r requirements.txt
```

## 3. 首次运行

直接运行主程序：

```bash
uv run main.py
```

如果一切正常，你将看到类似以下的输出：

```text
[INFO] Listening service on: http://0.0.0.0:9010
```

## 4. 访问页面

打开浏览器访问 `http://localhost:9010`。
你应该能看到默认的 Sleepy 页面。

## 5. 基础设置

1.  在 `data/` 目录下创建一个名为 `config.yaml` 的文件。
2.  写入以下最基础的配置以修改用户名：

```yaml
page:
  name: "你的名字"
  title: "我的状态页"

main:
  secret: "请修改为一个复杂的密码" # 重要：用于更新状态的密钥
```

3.  重启程序使配置生效。

## 6. 更新状态

使用浏览器或 HTTP 工具测试状态更新（假设密钥为上面设置的值）：

- **设置主状态**: `http://localhost:9010/api/status/set?status=1&secret=请修改为一个复杂的密码`
- **设置设备状态**: `http://localhost:9010/api/device/set?id=pc&show_name=我的电脑&using=true&status=Coding&secret=请修改为一个复杂的密码`

---
**下一步**：查看 [配置指南](configuration) 进行深度定制，或查看 [部署指南](deployment) 将其部署到服务器。
