# ⚙️ Automate UniFi controller updates via SSH with Telegram notifications

> ⚡ **489 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
Automate UniFi Controller updates on self-hosted instances. This workflow checks the official UniFi Debian repo for a **fresh release in the last 24 hours** and, if found, upgrades the `unifi` package via SSH. It can also summarize changes and ping you on Telegram. Sticky notes are included to guide setup.

## How it works
- **Schedule** runs daily (default **13:13**).
- **HTTP Request** fetches `InRelease` and parses `Codename` + `Date`.
- **IF gate** continues only if the repo changed within 24h.
- **SSH** runs:
  ```bash
  apt-get --allow-releaseinfo-change update
  apt-get upgrade -y unifi
  ```
- **(Optional) LLM** creates a short summary → **Telegram** sends it.

## Setup
- Bind credentials: **SSH** (required), **OpenAI** (optional), **Telegram** (optional).
- Set env var **`TELEGRAM_CHAT_ID`** for notifications.
- Adjust the **Schedule Trigger** to your maintenance window.
- Import inactive, test once, then **activate**.

## Customize
- Change the 24h freshness window in the Code node.
- Swap Telegram for Slack/Email if preferred.
- Add pre/post steps (backups, restarts) around the upgrade.

## Safety
Test on a non-production controller first. No hardcoded secrets—uses n8n credentials and environment variables. If you want approval before upgrades, stop after the IF gate and notify only.

## 🔗 Nodes Used

HTTP Request, Telegram, SSH, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
