# 配置指南

> [!TIP]
> 这些文档使用了 AI 帮助撰写，并经过人工审核和修改。请注意甄别内容真实性。

Sleepy Project 支持多种配置方式，加载优先级从高到低依次为：
1. **环境变量** (以 `SLEEPY_` 开头)
2. `data/config.yaml`
3. `data/config.toml`
4. `data/config.json`

推荐使用 **YAML** 格式进行配置。

## 配置文件结构

配置文件主要包含四个部分：`main` (系统), `page` (页面), `status` (状态逻辑), `metrics` (统计)。

### 1. 系统配置 (main)

```yaml
main:
  # 服务监听地址 (0.0.0.0 代表监听所有网卡)
  host: "0.0.0.0"
  # 服务端口
  port: 9010
  # 是否开启调试模式 (生产环境建议关闭)
  debug: false
  # 鉴权密钥 (相当于密码，API 调用和后台登录都需要)
  secret: "your-super-secret-password"
  # 数据库连接字符串 (默认 SQLite)
  # MySQL 示例: "mysql://user:pass@localhost:3306/dbname"
  database: "sqlite:///../data/data.db"
  # 时区设置
  timezone: "Asia/Shanghai"
  # 静态文件缓存时间(秒)
  cache_age: 1200
  # 日志文件路径 (留空则不保存文件日志)
  log_file: "data/running.log"
```

### 2. 页面配置 (page)

```yaml
page:
  # 显示在页面上的名字 ([User]'s Status)
  name: "User"
  # 浏览器标题栏
  title: "User Alive?"
  # 页面描述 (Meta Description)
  desc: "User's Online Status Page"
  # 背景图片 URL
  background: "https://imgapi.siiway.top/image"
  # 页面 favicon
  favicon: "/favicon.ico"
  # 页面主题 (对应 theme/ 文件夹下的目录名)
  theme: "default"
  # 页面底部的额外文本 (支持 HTML)
  more_text: ""
  # "了解更多" 链接文字
  learn_more_text: "GitHub Repo"
  # "了解更多" 链接地址
  learn_more_link: "https://github.com/sleepy-project/sleepy"
```

### 3. 状态逻辑配置 (status)

```yaml
status:
  # 设备名称/状态过长时截断的长度 (0 为禁用)
  device_slice: 50
  # 网页轮询间隔 (毫秒)
  refresh_interval: 5000
  # 当设备 using=false 时显示的默认状态文本
  not_using: "未在使用"
  # 是否对设备列表进行排序 (A-Z)
  sorted: false
  # 是否将正在使用的设备排在前面
  using_first: true
  
  # 自定义主状态列表 (id 会自动根据顺序生成: 0, 1, 2...)
  status_list:
    - name: "活着"
      desc: "目前在线，可以通过任何可用的联系方式联系本人。"
      color: "awake"   # 对应 CSS 类: awake, sleeping
    - name: "似了"
      desc: "睡似了或其他原因不在线，紧急情况请使用电话联系。"
      color: "sleeping"
```

### 4. 统计配置 (metrics)

```yaml
metrics:
  # 是否启用访问统计
  enabled: true
  # 允许计入统计的路径
  allow_list:
    - "/"
    - "/api/status/query"
    - "[static]" # 特殊值，匹配所有静态资源
```

### 5. 插件配置

```yaml
# 启用的插件列表 (按顺序加载)
plugins_enabled:
  - "theme_detect"

# 插件的具体配置参数
plugin:
  theme_detect:
    auto_dark: true
```

## 环境变量配置

所有配置项均可通过环境变量覆盖，前缀为 `SLEEPY_`，层级用 `_` 分隔。

**示例：**
- `main.port` -> `SLEEPY_MAIN_PORT=9020`
- `page.name` -> `SLEEPY_PAGE_NAME=MyName`
- `status.status_list` (数组类型需传入 JSON 字符串) -> `SLEEPY_STATUS_STATUS_LIST='[{"name":"Busy",...}]'`
