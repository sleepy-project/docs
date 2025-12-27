# Deployment

1. **[Manual Deployment](#manual-deployment)** _(recommended if you have your own server / local deployment)_
2. **[Huggingface Deployment](#huggingface-deployment)** _(recommended for serverless)_
3. [Vercel Deployment](#vercel-deployment) _(has many limitations, not recommended)_
4. [One-Click Deployment](#one-click-deployment-untested) _(untested, not recommended)_
5. [Docker Deployment](#docker-deployment) _(recommended for server deployment)_

## Quick Navigation

- [Deployment](#deployment)
  - [Quick Navigation](#quick-navigation)
  - [Manual Deployment](#manual-deployment)
    - [Installation](#installation)
    - [Starting](#starting)
  - [Huggingface Deployment](#huggingface-deployment)
    - [Stuck at Deploying?](#stuck-at-deploying)
    - [How to Use Custom Domain](#how-to-use-custom-domain)
  - [Vercel Deployment](#vercel-deployment)
  - [Docker Deployment](#docker-deployment)
    - [Docker Compose](#docker-compose)

## Manual Deployment

This method is theoretically universal for all platforms, you just need Python **3.10+** installed

> Advantage: Data files (`data/data.json`) can be persisted and won't be deleted due to restart

### Installation

1. Clone this repository _(you can also Fork first)_

```shell
git clone --depth 1 -b main https://github.com/sleepy-project/sleepy.git
```

2. Install dependencies

```shell
pip install -r requirements.txt
```

> Recommended to use `uv` to manage environment:

```shell
uv sync
```

3. Edit configuration file

> _Configuration file evolution history_ <br/> > ~~`data.json`~~ <br/>
> -> ~~`config.json`~~ <br/>
> -> ~~`config.jsonc`~~ <br/>
> -> ~~Environment Variables & `.env`~~ <br/>
> -> ~~`config.yaml` & Environment Variables & `.env`~~ <br/>
> -> **Environment Variables & `data/.env` & `data/config.yaml` & `data/config.toml` & `data/config.json`**

Create **one** of the above configuration files in the `data` directory, and **edit the configuration according to the instructions [here](./config.md)**

### Starting

> [!WARNING] > **When deploying with Baota Panel (uwsgi) etc., please ensure only 1 process is allocated for this program. Setting multiple service processes may cause data synchronization issues!!!**

There are two startup methods:

```shell
# Direct start
python3 main.py
# Simple launcher
python3 start.py
# If using UV to manage environment, replace python3 with uv run
uv run main.py
```

Default service http port: **`9010`**

## Huggingface Deployment

> Suitable for those without a server <br/> > _~~Also recommended if you have a server, not afraid of being attacked~~_ <br/> > ~~Only disadvantage: cannot use custom domain~~ <br/> > **Can use Cloudflared Tunnel to use custom domain, see [How to Use Custom Domain](#how-to-use-custom-domain)**

Only three steps:

1. Duplicate Space `wyf9/sleepy` (**[Click to go](https://huggingface.co/spaces/wyf9/sleepy?duplicate=true&visibility=public)**)

> If no window pops up, manually click the three dots in the upper right corner -> `Duplicate this Space` (as shown)

![huggingface-5](https://ghimg.siiway.top/sleepy/deploy/huggingface-5.1.png)

2. On the duplication page, set secrets and page information environment variables **([Configuration Guide](./config.md))**
3. Click deploy, after completion click the three dots in the upper right corner -> `Embed this space`, to get your deployment address _(similar to: <https://wyf9-sleepy.hf.space>)_

> [!IMPORTANT] > **When creating, please make sure to select Space type as public (`Public`), otherwise the deployment address cannot be obtained (others cannot access)!** <br/> > _Hugging Face Space will sleep if not accessed for 48h. It's recommended to use a scheduled request platform (such as `cron-job.org`, `Uptime Kuma` etc.) to regularly request `(your deployment address)/none`_

### Stuck at Deploying?

> [!TIP]
> Applicable when the program has started in the logs, but the deployment status is still `Deploying` <br/> > _Effective for all Hugging Face repositories_

<details>

<summary>Solution</summary>

1. Click the three dots in the upper right corner -> `Duplicate this Space`, **duplicate** the Space and **fill in the same environment variables as before**
2. At the bottom of the `Settings` page at `Delete this Space`, **delete** the old Space
3. In `Settings` -> `Rename or transfer this space`, **rename** the new Space to the old Space's name

</details>

### How to Use Custom Domain

> [!WARNING] > **_Using Cloudflared in HF Space may result in account suspension, please bear the risk yourself._**

1. Go to [Zero Trust Dashboard](https://one.dash.cloudflare.com/?to=/:account/networks/tunnels/add/cfd_tunnel) to create a Tunnel

Fill in any name and proceed to `Install and run a connector`, copy the Token:

![huggingface-2](https://ghimg.siiway.top/sleepy/deploy/huggingface-2.1.png)

Go to `Route tunnel`, configure as shown in the image below and save:

![huggingface-3](https://ghimg.siiway.top/sleepy/deploy/huggingface-3.1.png)

2. Edit the Space's `Dockerfile`, delete `CMD python3 main.py` at the bottom, and add:

```dockerfile
# Install wget
RUN apt install wget -y

# Download Cloudflared script
RUN wget -O cfd.sh https://gist.github.com/wyf9/71ff358636154ab00d90602c3c818763/raw/cfd.sh

# Start
CMD bash cfd.sh
```

3. Create two new environment variables (`Settings` -> `Variables and secrets`):

- `CFD_COMMAND` _(`Variable`)_: `python3 main.py`
- `CFD_TOKEN`: Your Cloudflare Tunnel key

After setup, it should look like this:

![huggingface-4](https://ghimg.siiway.top/sleepy/deploy/huggingface-4.1.png)

4. Rebuild Space (`Factory rebuild`) and you're done

> Scheduled requests still need to use the subdomain provided by Huggingface <br/> > _See: [Gist](https://gist.github.com/wyf9/71ff358636154ab00d90602c3c818763)_

## Vercel Deployment

> Can use custom domain, but **has many limitations** (such as cannot use SSE, request count / request completion time limits etc.) <br/> > _When frontend detects Vercel deployment, it will fall back to polling method for updates_

1. Fork this project
2. Open [`vercel.com/new`](https://vercel.com/new), and follow prompts to authorize GitHub access _(register if not registered)_
3. Select your Fork, click `Import`

![vercel-1](https://ghimg.siiway.top/sleepy/deploy/vercel-1.1.png)

4. Set environment variables on the import page (keep other configurations as default), click `Deploy` to deploy **_([Configuration Guide](./config.md))_**

![vercel-2](https://ghimg.siiway.top/sleepy/deploy/vercel-2.1.png)

Deployment is complete, default `vercel.app` domain assigned

5. **_[Optional]_** Bind custom domain: `Settings` -> `Domains`

![vercel-3](https://ghimg.siiway.top/sleepy/deploy/vercel-3.1.png)

6. **_[Optional]_** Add more environment variables: `Settings` -> `Environment Variables`

![vercel-4](https://ghimg.siiway.top/sleepy/deploy/vercel-4.1.png)

> Re-deployment required after modifying environment variables

## Docker Deployment

### Docker Compose

1. Clone this repository

```bash
git clone --depth 1 -b main https://github.com/sleepy-project/sleepy.git ./sleepy
```

2. Modify environment variables and other configurations in [`docker-compose.yml`](../docker-compose.yml) file

3. Start

```bash
docker-compose up -d
```
