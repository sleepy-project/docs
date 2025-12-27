# Update

- [Update](#update)
  - [Manual Deployment](#manual-deployment)
  - [Huggingface Deployment](#huggingface-deployment)
  - [Vercel Deployment](#vercel-deployment)

## Manual Deployment

Just run these two commands:

```bash
git pull # Pull latest code
pip install -r requirements.txt # Install dependencies (if there are new ones, can also use uv sync)
```

Update complete, restart to apply.

## Huggingface Deployment

1. `Settings` ==> `Variables and secrets` ==> **Modify corresponding new configuration items**
2. `Settings` ==> `Factory rebuild` ==> **Complete redeployment**

![huggingface-1](https://ghimg.siiway.top/sleepy/update/huggingface-1.1.png)

## Vercel Deployment

Just open your forked repository, click `Sync fork` in the upper right corner -> `Update branch` to sync upstream repository

![vercel-1](https://ghimg.siiway.top/sleepy/update/vercel-1.1.png)

> _The image uses my another Fork repository for demonstration, steps are the same_
> Vercel will automatically redeploy when repository updates are detected
