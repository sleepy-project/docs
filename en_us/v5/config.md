# Configuration Guide

There are multiple ways to modify configuration _(priority from top to bottom)_:

1. Environment Variables & `data/.env`
2. `data/config.yaml` **(Recommended)**
3. `data/config.toml` **(Recommended)**
4. `data/config.json`

> [!IMPORTANT]
> _(Especially for Windows users)_ Please ensure all configuration files **are saved with `UTF-8` encoding**, otherwise it will cause **incorrect comment parsing / Chinese character corruption** and other issues <br/>
> For Huggingface / Vercel and other container platform deployments, environment variables need to be placed in **`Environment Variables`** _(see [Deployment Guide](./deploy.md))_ <br/>
> _Changes to configuration require service restart to take effect_

## Format Conversion for Multiple Configuration Files

> Using `main.host` _(str)_, `main.port` _(int)_, `main.debug` _(bool)_, `metrics.allow_list` _(list)_ as examples

### Environment Variables

```bat
:: Windows
set SLEEPY_MAIN_HOST=0.0.0.0
set SLEEPY_MAIN_PORT=9010
set SLEEPY_MAIN_DEBUG=false
```

```bash
# non-Windows
export sleepy_main_host=0.0.0.0
export sleepy_main_port=9010
export sleepy_main_debug=false
```

### `data/.env`

```ini
sleepy_main_host = "0.0.0.0"
sleepy_main_port = 9010
sleepy_main_debug = false
```

### `data/config.yaml`

```yaml
# Can be configured this way
main:
  host: "0.0.0.0"
  port: 9010
  debug: false
metrics:
  allow_list:
    - /
    - /api/status/query
    - /api/metrics

# Or configured this way
main.host: "0.0.0.0"
main.port: 9010
main.debug: false
metrics.allow_list: ["/", "/api/status/query", "/api/metrics"]
```

### `data/config.toml`

```toml
[main]
host = "0.0.0.0"
port = 9010
debug = false

[metrics]
allow_list = ["/", "/api/status/query", "/api/metrics"]
```

### `data/config.json`

```json
{
  "main": {
    "host": "0.0.0.0",
    "port": 9010,
    "debug": false
  },
  "metrics": {
    "allow_list": ["/", "/query", "/api/metrics"]
  }
}
```

---

## Available Configuration Items

> - `str`: String
> - `int`: Integer
> - `PositiveInt`: Positive integer _(must be greater than 0)_
> - `bool`: Boolean value, options are `true` _(yes)_ / `false` _(no)_
> - `list`: List
> - `dict`: Dictionary

The complete list of configuration item definitions can be found in [`models.py`](../models.py)

### (Beginner-Friendly) How to Read Configuration Item Definitions

First, the configuration item definition range is between `User Configuration Start` and `User Configuration End` in [`models.py`](../models.py)

That is:

```py

# ========== User Configuration Start ==========

# ...
# Configuration item definitions
# ...

# ========== User Configuration End ==========

```

Where:

- `class ...(...):` can be understood as the configuration category, you don't need to worry about it
- `name: type = ...` is the configuration item definition

A configuration item definition looks like this:

```py
host: str = '0.0.0.0'
'''
`main.host`
Listen address
- ipv4: `0.0.0.0` means listen on all interfaces
- ipv6: `::` means listen on all interfaces
'''
```

Where:

- `host` is the local name of the configuration item in the code
- `str` is the **type** of the configuration item _(string in this case)_
- `"0.0.0.0"` is the **default value** of the configuration item _(this value will be used if you don't configure it yourself)_
- The part enclosed by a pair of `'''` is the **comment** for the configuration item
  - The first line of the comment `main.host` is its **name in the configuration file** (see [How to Convert Formats](#format-conversion-for-multiple-configuration-files))
  - The rest of the comment content is the **description** of the configuration item _(purpose / examples / notes)_
