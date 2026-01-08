# Sleepy Project API Documentation

> [!TIP]
> 这些文档使用了 AI 帮助撰写，并经过人工审核和修改。请注意甄别内容真实性。

本文档描述了 Sleepy Project 服务端提供的 API 接口。

## 基础信息

- **Base URL**: `http(s)://<your-domain>:<port>`
- **响应格式**: JSON
- **鉴权方式**: 部分接口需要鉴权。通常通过 URL 查询参数 `secret=<your-secret>` 传递，或者通过 Cookie (`sleepy-secret`) 验证。

---

## 核心接口 (Status & Meta)

### 1. 获取站点元数据
获取站点的基本配置信息、版本号及页面设置。

- **Endpoint**: `/api/meta`
- **Method**: `GET`
- **Auth**: No

**Response Example:**
```json
{
  "success": true,
  "version": [2025, 1, 1],
  "version_str": "2025.1.1",
  "timezone": "Asia/Shanghai",
  "page": {
    "name": "User",
    "title": "Sleepy Page",
    "desc": "...",
    "favicon": "...",
    "background": "...",
    "theme": "default"
  },
  "status": {
    "device_slice": 3,
    "refresh_interval": 3000,
    "not_using": "Not Using",
    "sorted": true,
    "using_first": true
  },
  "metrics": true
}
```

### 2. 获取统计信息
获取访问统计数据（如果开启了 metrics）。

- **Endpoint**: `/api/metrics`
- **Method**: `GET`
- **Auth**: No

**Response Example:**
```json
{
  "success": true,
  "daily": 100,
  "weekly": 700,
  "monthly": 3000,
  "yearly": 36500,
  "total": 50000
}
```

### 3. 查询当前状态
获取当前的主状态、设备列表及最后更新时间。

- **Endpoint**: `/api/status/query`
- **Method**: `GET`
- **Auth**: No

**Query Parameters:**
| 参数 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| `meta` | bool | 否 | 设为 `true` 时，响应中将包含 `/api/meta` 的数据 |
| `metrics` | bool | 否 | 设为 `true` 时，响应中将包含 `/api/metrics` 的数据 |

**Response Example:**
```json
{
  "success": true,
  "time": 1704067200.0,
  "status": {
    "id": 0,
    "name": "Sleepy",
    "desc": "I am sleeping...",
    "color": "primary"
  },
  "device": [
    {
      "id": "pc",
      "show_name": "My PC",
      "using": true,
      "status": "Coding",
      "fields": {}
    }
  ],
  "last_updated": 1704067100.0
}
```

### 4. 获取状态列表
获取服务器配置中定义的所有可用状态。

- **Endpoint**: `/api/status/list`
- **Method**: `GET`
- **Auth**: No

**Response Example:**
```json
{
  "success": true,
  "status_list": [
    {
      "id": 0,
      "name": "Sleepy",
      "desc": "...",
      "color": "primary"
    },
    {
      "id": 1,
      "name": "Working",
      "desc": "...",
      "color": "success"
    }
  ]
}
```

### 5. SSE 事件流
通过 Server-Sent Events (SSE) 实时接收状态更新。

- **Endpoint**: `/api/status/events`
- **Method**: `GET`
- **Auth**: No
- **Headers**: 
    - `Last-Event-ID`: 上一次接收到的事件 ID (Integer)

**Events:**
- `update`: 数据有更新，payload 为 `/api/status/query` 的 JSON 数据。
- `heartbeat`: 心跳包（每 30 秒），无 payload。

---

## 控制接口 (Control & Action)

> ⚠️ 以下接口均需要鉴权 (Secret)。

### 1. 设置主状态
手动设置当前的用户状态 ID。

- **Endpoint**: `/api/status/set`
- **Method**: `GET`
- **Auth**: **Yes**

**Query Parameters:**
| 参数 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| `status` | int | **是** | 目标状态 ID |
| `secret` | string | **是** | 鉴权密钥 |

**Response Example:**
```json
{
  "success": true,
  "set_to": 1
}
```

### 2. 设置/更新设备状态
添加或更新单个设备的信息。支持 GET 和 POST。

- **Endpoint**: `/api/device/set`
- **Method**: `GET` / `POST`
- **Auth**: **Yes**

**GET Parameters (Query):**
| 参数 | 类型 | 描述 |
| :--- | :--- | :--- |
| `id` | string | 设备唯一标识符 |
| `show_name` | string | 显示名称 |
| `using` | bool | 是否正在使用 |
| `status` | string | 设备当前状态/应用名 (旧版参数为 `app_name`) |
| `secret` | string | 鉴权密钥 |
| `...` | any | 其他参数将作为 `fields` 存储 |

**POST Parameters (JSON Body):**
```json
{
  "id": "device_id",
  "show_name": "Display Name",
  "using": true,
  "status": "App Name",
  "fields": {
    "custom_field": "value"
  }
  // secret 通常放在 URL query 或 Header 中
}
```

**Response Example:**
```json
{
  "success": true
}
```

### 3. 移除设备
移除指定 ID 的设备状态。

- **Endpoint**: `/api/device/remove`
- **Method**: `GET`
- **Auth**: **Yes**

**Query Parameters:**
| 参数 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| `id` | string | **是** | 设备唯一标识符 |
| `secret` | string | **是** | 鉴权密钥 |

### 4. 清除所有设备
清空所有设备列表。

- **Endpoint**: `/api/device/clear`
- **Method**: `GET`
- **Auth**: **Yes**

### 5. 切换隐私模式
开启或关闭隐私模式（隐私模式下接口不返回设备具体信息）。

- **Endpoint**: `/api/device/private`
- **Method**: `GET`
- **Auth**: **Yes**

**Query Parameters:**
| 参数 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| `private` | bool | **是** | `true` 开启隐私模式，`false` 关闭 |
| `secret` | string | **是** | 鉴权密钥 |

### 6. 验证密钥
验证当前提供的 Secret 是否有效。

- **Endpoint**: `/panel/verify`
- **Method**: `GET` / `POST`
- **Auth**: **Yes**

**Response Example:**
```json
{
  "success": true,
  "code": "OK",
  "message": "Secret verified"
}
```

---

## 监控与工具接口

### 1. 存活检测 (Heartbeat)
返回 204 No Content，用于 Uptime Kuma 等监控工具检测服务是否在线。

- **Endpoint**: `/none`
- **Method**: `GET`
- **Response**: 204 No Content

### 2. 静态文件
访问 `data/public` 或 `public` 目录下的文件。

- **Endpoint**: `/<filename>`
- **Method**: `GET`
