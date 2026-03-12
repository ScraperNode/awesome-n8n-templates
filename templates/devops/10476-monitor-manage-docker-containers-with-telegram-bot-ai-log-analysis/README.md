# ⚙️ Monitor & manage Docker containers with Telegram bot & AI log analysis

> ⚡ **5,291 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Monitor and manage Docker containers from Telegram with AI log analysis

This workflow gives you a smart Telegram command center for your homelab. It lets you monitor Docker containers, get alerts the moment something fails, view logs, and restart services remotely. When you request logs, they're automatically analyzed by an LLM so you get a clear, structured breakdown instead of raw terminal output.

**Who it's for**

Anyone running a self-hosted environment who wants quick visibility and control without SSHing into a server. Perfect for homelab enthusiasts, self-hosters, and DevOps folks who want a lightweight on-call assistant.

**What it does**

Receives container heartbeat alerts via webhook

Sends Telegram notifications for status changes or failures

Lets you request logs or restart services from chat

Analyzes logs with GPT and summarizes them clearly

Supports manual “status” and “update all containers” commands

**Requirements**

- Telegram Bot API credentials

- SSH access to your Docker host

**How to set it up**

1. Create a Telegram bot and add its token as credentials
2. Enter your server SSH credentials in the SSH node
3. Deploy the workflow and set your webhook endpoint
4. Tailor container names or heartbeat logic to your environment

**Customize it**

Swap SSH commands for Kubernetes if you're on k8s

Change the AI model to another provider

Extend with health checks or auto-healing logic

## 🔗 Nodes Used

Webhook, Telegram, Telegram Trigger, SSH, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
