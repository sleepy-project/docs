# 插件开发文档

> [!TIP]
> 这些文档使用了 AI 帮助撰写，并经过人工审核和修改。请注意甄别内容真实性。

Sleepy Project 提供了一套强大的插件系统，允许开发者扩展路由、注入 HTML、监听事件以及存储数据。

## 插件结构

在 `plugins/` 目录下创建一个新文件夹（例如 `my_plugin`），并在其中创建 `__init__.py`。

目录结构：
```text
plugins/
└── my_plugin/
    ├── __init__.py      # 插件入口代码
    ├── pyproject.toml   # (可选) 插件元数据和版本依赖
    └── templates/       # (可选) 插件模板
```

## 最小示例 (`__init__.py`)

```python
from plugin import Plugin, PluginInit
import logging

# 1. 初始化插件实例 (name 必须与文件夹名一致)
plugin = Plugin(
    name=__name__,
    config={
        'default_msg': 'Hello from Plugin!'
    }
)

# 2. 注册路由 /plugin/my_plugin/hello
@plugin.route('/hello')
def hello():
    return plugin.config['default_msg']

# 3. 插件初始化逻辑
def init():
    logging.info("My Plugin Initialized!")

# 覆盖默认的 init 方法
plugin.init = init
```

## 核心功能

### 1. 路由注册

- **插件专属路由**: `@plugin.route('/path')` -> 访问地址 `/plugin/<name>/path`
- **全局路由**: `@plugin.global_route('/path')` -> 访问地址 `/path`

```python
@plugin.global_route('/my-tool')
def my_tool():
    return "This is a global tool page"
```

### 2. UI 注入

你可以将内容注入到主页 (`index.html`) 或管理面板 (`panel.html`)。

- **添加主页卡片**: `@plugin.index_card`
- **添加管理面板卡片**: `@plugin.panel_card`
- **直接注入 HTML (如脚本/样式)**: `@plugin.index_inject`, `@plugin.panel_inject`

```python
@plugin.index_card(card_id='weather')
def show_weather():
    return "<div>今日天气: 晴</div>"

@plugin.index_inject()
def custom_css():
    return "<style>body { background-color: #f0f0f0; }</style>"
```

### 3. 数据持久化

每个插件都有独立的 JSON 数据存储空间，保存在数据库中。

```python
# 读取数据
count = plugin.get_data('visit_count', 0)

# 写入数据
plugin.set_data('visit_count', count + 1)

# 使用上下文管理器 (推荐，自动保存)
with plugin.data_context() as data:
    data['last_visit'] = 1234567890
```

### 4. 事件监听

通过 `@plugin.event_handler` 监听系统事件。

**可用事件**:
- `AppInitializedEvent`, `AppStartedEvent`, `AppStoppedEvent`
- `BeforeRequestHook`, `AfterRequestHook`
- `StatusUpdatedEvent` (状态改变时)
- `DeviceSetEvent` (设备更新时)
- `IndexAccessEvent` (主页被访问时，可拦截修改返回内容)

示例：监听状态改变并打印日志
```python
import plugin as pl  # 导入事件类

@plugin.event_handler(pl.StatusUpdatedEvent)
def on_status_change(event: pl.StatusUpdatedEvent, request):
    old = event.old_status.name if event.old_exists else "None"
    new = event.new_status.name
    print(f"Status changed from {old} to {new}")
```

### 5. 版本控制 (`pyproject.toml`)

在插件目录下创建 `pyproject.toml` 来声明依赖的 Sleepy 版本。

```toml
[tool.sleepy]
# 最低兼容版本 (包含)
require_version_min = [2025, 1, 1]
# 最高兼容版本 (不包含)
require_version_max = [2026, 1, 1]
```

## 调试

在 `config.yaml` 中设置 `main.debug: true`。
