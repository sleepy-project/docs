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
device_token_expires_days = 365

ws_refresh_interval = 10
```

将以上样例放到 `config.toml` 并按需修改。
