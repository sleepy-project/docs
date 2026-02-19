# 配置文件

```toml
host = "0.0.0.0" # 或 `::1` 以允许 v6 访问
port = 9010

[log]
level = "INFO"
file = "logs/{time:YYYY-MM-DD}.log"
file_level = "INFO"
rotation = "1 days"
retention = "7 days"

# SQLite 示例，其他数据库请参考 SQLAlchemy URL 规则
# SQLite (相对路径)
database = "sqlite:///data.db"
# MySQL 样例: "mysql://user:password@127.0.0.1:3306/sleepy"

ping_interval = 20
auth_access_token_expires_minutes = 60
auth_refresh_token_expires_days = 30

ws_refresh_interval = 10
```

将以上样例放到 `config.toml` 并按需修改。

## 插件配置

插件可以注册自己的配置项。插件的配置统一写在主配置文件的 `plugin.<插件id>` 下。

### 配置文件写法

**TOML** (`config.toml`)：

```toml
[plugin.my-plugin]
some_option = "value"
timeout = 30

[plugin.another-plugin]
enabled = true
```

**YAML** (`config.yaml`)：

```yaml
plugin:
  my-plugin:
    some_option: value
    timeout: 30
```

**JSON** (`config.json`)：

```json
{
  "plugin": {
    "my-plugin": {
      "some_option": "value",
      "timeout": 30
    }
  }
}
```

### 环境变量写法

格式为 `SLEEPY_PLUGIN_<插件ID>_<配置项>=值`，其中插件 ID 为文件夹名全大写并将连字符替换为下划线。

```
SLEEPY_PLUGIN_MY_PLUGIN_SOME_OPTION=value
SLEEPY_PLUGIN_MY_PLUGIN_TIMEOUT=30
```

嵌套配置项用下划线继续分隔：

```
# 对应 { "log": { "level": "DEBUG" } }
SLEEPY_PLUGIN_MY_PLUGIN_LOG_LEVEL=DEBUG
```

环境变量的优先级高于配置文件。

### 优先级顺序

```
环境变量 > config.yaml > config.toml > config.json
```

## 内置插件配置参考

### device-auth

设备鉴权插件。配置项写在 `[plugin.device-auth]` 下。

| 配置项 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `access_token_expires_minutes` | int | `60` | 设备 Access Token 过期时间（分钟） |
| `refresh_token_expires_days` | int | `30` | 设备 Refresh Token 过期时间（天） |

```toml
[plugin.device-auth]
access_token_expires_minutes = 60
refresh_token_expires_days = 30
```

环境变量写法：

```
SLEEPY_PLUGIN_DEVICE_AUTH_ACCESS_TOKEN_EXPIRES_MINUTES=60
SLEEPY_PLUGIN_DEVICE_AUTH_REFRESH_TOKEN_EXPIRES_DAYS=30
```
