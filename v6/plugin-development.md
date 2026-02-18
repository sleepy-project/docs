# 插件开发指南

> [!TIP]
> 本文档由 Claude 撰写，并经过一定程度的人工审核。请谨慎阅读，遇到问题请对 [sleepy-project/docs](https://github.com/sleepy-project/docs) 提出 Issue 或私聊 [NtKrnl64](https://siiway.org/zh/members/nt-copy.html) / [NtKrnl32](https://siiway.org/zh/members/nt.html)

本文档介绍如何为 Sleepy v6 开发插件。

## 目录结构

每个插件是 `plugins/` 目录下的一个子文件夹，必须包含以下两个文件：

```
plugins/
└── my-plugin/
    ├── __init__.py      # 插件入口，必须定义 Plugin 类
    └── pyproject.toml   # 插件元数据
```

文件夹名即为插件 ID，建议使用小写字母和连字符（kebab-case），例如 `my-plugin`。

---

## pyproject.toml

插件的元数据和依赖关系在 `pyproject.toml` 中声明：

```toml
[project]
name = "my-plugin"
version = "1.0.0"
description = "我的第一个 Sleepy 插件"
authors = [{ name = "Your Name", email = "you@example.com" }]

[tool.sleepy]
enabled = true

# 声明对其他插件的依赖（插件文件夹名 -> 版本约束）
# "*" 表示不限版本
dependencies = { "another-plugin" = ">=1.2.0", "some-plugin" = "*" }
```

`[tool.sleepy]` 字段说明：

| 字段 | 类型 | 说明 |
|---|---|---|
| `enabled` | bool | 是否启用此插件，默认 `true` |
| `dependencies` | dict | 依赖的其他插件，格式为 `{ "插件ID" = "版本约束" }` |

---

## 插件类

`__init__.py` 中必须定义一个继承自 `PluginBase` 的 `Plugin` 类：

```python
from plugin import PluginBase, PluginMetadata

class Plugin(PluginBase):
    def __init__(self, metadata: PluginMetadata):
        super().__init__(metadata)
        # 在这里做初始化，如注册路由、配置 Schema 等
```

> `Plugin` 这个类名是固定的，插件管理器通过此名称加载插件。

---

## 生命周期

插件有以下生命周期钩子，按触发顺序排列：

```
PluginClass(metadata)   # __init__：插件实例化，注册路由/配置 Schema
  ↓
on_load()               # 插件加载完成（同步，无 EventLoop）
  ↓
[配置解析]              # PluginManager 自动读取并验证插件配置
  ↓
on_startup()            # 应用启动（异步，有 EventLoop，可创建后台任务）
  ↓
  ... 应用运行中 ...
  ↓
on_shutdown()           # 应用关闭（异步）
  ↓
on_unload()             # 插件卸载（同步）
```

```python
from loguru import logger as l

class Plugin(PluginBase):
    def __init__(self, metadata: PluginMetadata):
        super().__init__(metadata)

    def on_load(self):
        l.info(f"{self.metadata.name} v{self.metadata.version} 已加载")

    async def on_startup(self):
        l.info("服务启动，可以在这里启动后台任务")

    async def on_shutdown(self):
        l.info("服务正在关闭")

    def on_unload(self):
        l.info("插件已卸载")
```

---

## 注册 API 路由

使用 `self.add_route()` 注册 HTTP 路由。

```python
from pydantic import BaseModel
from fastapi import status as hc

class HelloResponse(BaseModel):
    message: str

class Plugin(PluginBase):
    def __init__(self, metadata: PluginMetadata):
        super().__init__(metadata)
        self._register_routes()

    def _register_routes(self):
        self.add_route(
            path='/api/plugin/my-plugin/hello',
            endpoint=self.hello,
            methods=['GET'],
            response_model=HelloResponse,
            tags=['my-plugin'],
            name='Hello'
        )

        self.add_route(
            path='/api/plugin/my-plugin/submit',
            endpoint=self.submit,
            methods=['POST'],
            status_code=hc.HTTP_204_NO_CONTENT,
            tags=['my-plugin'],
        )

    async def hello(self):
        return {'message': 'Hello from my-plugin!'}

    async def submit(self, req: SubmitRequest):
        ...
```

### 覆盖内置路由

设置 `override=True` 可以替换内置路由或其他插件已注册的路由：

```python
self.add_route(
    path='/api/query',
    endpoint=self.my_query,
    methods=['GET'],
    override=True,   # 覆盖内置 /api/query
)
```

### 鉴权

在路由中使用 `main.py` 导出的 `TokenDep` 进行鉴权：

```python
from typing import Annotated
from fastapi import Security
from main import SessionDep, TokenDep
import models as m

class Plugin(PluginBase):
    async def protected_endpoint(
        self,
        sess: SessionDep,
        _: Annotated[m.TokenData, Security(TokenDep(allowed_login_types=('web', 'dev')))]
    ):
        return {'ok': True}
```

---

## 挂载静态文件

使用 `self.mount()` 挂载静态目录或任意 ASGI 应用：

```python
from pathlib import Path
from fastapi.staticfiles import StaticFiles

class Plugin(PluginBase):
    def __init__(self, metadata: PluginMetadata):
        super().__init__(metadata)
        dist = Path(__file__).parent / 'dist'
        if dist.exists():
            self.mount('/', StaticFiles(directory=str(dist), html=True), name='my-plugin-ui')
```

---

## 插件配置

插件可以注册一个 Pydantic 模型作为自己的配置 Schema。PluginManager 会在 `on_load()` 结束后自动读取并验证配置，`on_startup()` 及之后均可通过 `get_config()` 获取。

### 定义 Schema 并注册

在 `__init__` 中调用 `self.register_config()`：

```python
from pydantic import BaseModel
from plugin import PluginBase, PluginMetadata

class MyPluginConfig(BaseModel):
    greeting: str = 'Hello'
    max_retries: int = 3
    debug: bool = False

class Plugin(PluginBase):
    def __init__(self, metadata: PluginMetadata):
        super().__init__(metadata)
        self.register_config(MyPluginConfig)

    async def on_startup(self):
        cfg: MyPluginConfig = self.get_config()  # type: ignore
        print(cfg.greeting)     # 'Hello'（或用户设置的值）
        print(cfg.max_retries)  # 3
```

### 在配置文件中设置

配置项写在主配置文件的 `plugin.<插件文件夹名>` 下。

**TOML** (`config.toml`)：

```toml
[plugin.my-plugin]
greeting = "你好"
max_retries = 5
debug = true
```

**YAML** (`config.yaml`)：

```yaml
plugin:
  my-plugin:
    greeting: 你好
    max_retries: 5
    debug: true
```

**JSON** (`config.json`)：

```json
{
  "plugin": {
    "my-plugin": {
      "greeting": "你好",
      "max_retries": 5,
      "debug": true
    }
  }
}
```

### 通过环境变量设置

格式为 `SLEEPY_PLUGIN_<插件ID>_<配置项>=值`，插件 ID 全大写、连字符替换为下划线：

```sh
SLEEPY_PLUGIN_MY_PLUGIN_GREETING=你好
SLEEPY_PLUGIN_MY_PLUGIN_MAX_RETRIES=5
SLEEPY_PLUGIN_MY_PLUGIN_DEBUG=true
```

嵌套字段继续用下划线分隔：

```sh
# 对应 Schema 中 log: LogConfig 的 log.level 字段
SLEEPY_PLUGIN_MY_PLUGIN_LOG_LEVEL=DEBUG
```

**优先级**：环境变量 > 配置文件。

### 注意事项

- `get_config()` 只能在 `on_load()` 完成之后调用（即 `on_startup`、路由 handler 等处）
- 若配置验证失败（如类型不匹配），会自动回退到 Schema 的默认值并记录错误日志
- 配置的 key 对应插件的**文件夹名**（如 `my-plugin`），而非 `pyproject.toml` 中的 `name` 字段

---

## CLI 命令

覆写 `on_register_cli()` 可为插件注册 CLI 子命令，供用户通过 `uv run main.py <命令>` 调用：

```python
import argparse

class Plugin(PluginBase):
    def on_register_cli(self, subparsers: argparse._SubParsersAction):
        parser = subparsers.add_parser('myplugin', help='My plugin CLI')
        sub = parser.add_subparsers(dest='action', required=True)

        # myplugin sync [--force]
        p_sync = sub.add_parser('sync', help='Sync data')
        p_sync.add_argument('--force', action='store_true', help='Force re-sync')
        p_sync.set_defaults(func=self.cmd_sync)

        # myplugin status
        sub.add_parser('status', help='Show status').set_defaults(func=self.cmd_status)

    def cmd_sync(self, args: argparse.Namespace):
        print('Force syncing...' if args.force else 'Syncing...')

    def cmd_status(self, args: argparse.Namespace):
        print('All good.')
```

用法：

```bash
uv run main.py myplugin sync --force
uv run main.py myplugin status
```

异步 handler 同样支持：

```python
async def cmd_sync(self, args: argparse.Namespace):
    await some_async_operation()
```

---

## 钩子（Hooks）

钩子允许插件之间通过事件名称进行解耦通信。

### 注册监听

在 `on_load()` 中注册：

```python
class Plugin(PluginBase):
    def on_load(self):
        self.register_hook('device_activity', self.on_device_activity)

    async def on_device_activity(self, device_id: str, data: dict):
        print(f'设备 {device_id} 上报: {data}')
```

### 触发事件

在任意能访问 `plugin_manager` 的地方触发：

```python
from plugin import plugin_manager

await plugin_manager.trigger_hook('device_activity', device_id='abc', data={'key': 'val'})
```

回调支持同步和异步，`trigger_hook` 会自动处理。

---

## 修改 HTTP 响应

覆写 `modify_response()` 可拦截并修改所有 HTTP 响应（类似全局中间件）：

```python
from fastapi import Request, Response

class Plugin(PluginBase):
    def modify_response(self, request: Request, response: Response, endpoint: str) -> Response:
        response.headers['X-My-Plugin'] = 'active'
        return response
```

`endpoint` 为请求路径字符串，如 `/api/query`。

---

## 访问其他插件实例

通过 `plugin_manager` 可以获取其他已加载的插件：

```python
from plugin import plugin_manager

other = plugin_manager.get_plugin('another-plugin')
if other:
    other.some_method()
```

---

## 依赖其他插件

在 `pyproject.toml` 中声明依赖后，PluginManager 会拓扑排序并保证被依赖的插件先加载，同时验证版本约束：

```toml
[tool.sleepy]
dependencies = { "device-auth" = ">=1.0.0", "frontend" = "*" }
```

若依赖的插件未安装或版本不满足约束，当前插件会被跳过并记录错误日志。

---

## 完整示例

下面是一个结合了路由、配置、CLI 和钩子的完整示例插件：

**`plugins/greeter/pyproject.toml`**

```toml
[project]
name = "greeter"
version = "1.0.0"
description = "一个示例 Sleepy 插件"
authors = [{ name = "Your Name", email = "you@example.com" }]

[tool.sleepy]
enabled = true
```

**`plugins/greeter/__init__.py`**

```python
import argparse
from pydantic import BaseModel
from loguru import logger as l

from plugin import PluginBase, PluginMetadata, plugin_manager


class GreeterConfig(BaseModel):
    message: str = 'Hello, world!'
    shout: bool = False


class GreetResponse(BaseModel):
    message: str


class Plugin(PluginBase):
    def __init__(self, metadata: PluginMetadata):
        super().__init__(metadata)
        self.register_config(GreeterConfig)
        self._register_routes()

    def _register_routes(self):
        self.add_route(
            path='/api/plugin/greeter/greet',
            endpoint=self.greet,
            methods=['GET'],
            response_model=GreetResponse,
            tags=['greeter'],
            name='Greet'
        )

    def _get_message(self) -> str:
        cfg: GreeterConfig = self.get_config()  # type: ignore
        return cfg.message.upper() if cfg.shout else cfg.message

    def on_load(self):
        l.info(f'{self.metadata.name} loaded')
        self.register_hook('status_changed', self.on_status_changed)

    async def on_startup(self):
        l.info(f'Greeter says: {self._get_message()}')

    async def greet(self):
        return {'message': self._get_message()}

    async def on_status_changed(self, status: int):
        l.info(f'[greeter] 状态变更为 {status}，{self._get_message()}')

    def on_register_cli(self, subparsers: argparse._SubParsersAction):
        parser = subparsers.add_parser('greeter', help='Greeter plugin CLI')
        sub = parser.add_subparsers(dest='action', required=True)
        sub.add_parser('say', help='Print the greeting').set_defaults(func=self.cmd_say)

    def cmd_say(self, args: argparse.Namespace):
        print(self._get_message())
```

配置（`config.toml`）：

```toml
[plugin.greeter]
message = "你好，世界！"
shout = true
```

或环境变量：

```sh
SLEEPY_PLUGIN_GREETER_MESSAGE=你好，世界！
SLEEPY_PLUGIN_GREETER_SHOUT=true
```

调用方式：

```bash
# CLI
uv run main.py greeter say
# 你好，世界！

# HTTP
# GET /api/plugin/greeter/greet
# → { "message": "你好，世界！" }
```
