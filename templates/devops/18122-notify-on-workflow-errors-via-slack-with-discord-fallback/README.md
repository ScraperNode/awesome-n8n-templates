# ⚙️ Notify on workflow errors via Slack with Discord fallback

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow catches failures from any other n8n workflow via the built-in Error Trigger, posts a readable summary to Slack, and automatically falls back to Discord if the Slack notification itself fails.

## How it works
1. Receives failure details from n8n's Error Trigger: workflow name, failing node, error message, and execution URL.
2.  Checks whether this exact execution was already notified, and skips duplicate notifications from multi-failure scenarios.
3. Builds a readable error summary and posts it to Slack via an Incoming Webhook.
4. If the Slack request fails for any reason, builds the same summary and posts it to Discord via an Incoming Webhook instead of the notification being silently lost.

## Setup
1. Create a Slack Incoming Webhook (no Slack app or OAuth required) and paste its URL into the "Set: Slack webhook URL" node.
2. Create a Discord Incoming Webhook (Channel Settings → Integrations → Webhooks) and paste its URL into the "Set: Discord webhook URL" node.
3. Activate this workflow, then on any workflow you want monitored, go to Settings → Error Workflow and select this workflow.

## Requirements
- An n8n instance (Cloud or self-hosted)
- A Slack Incoming Webhook URL (no Slack app or OAuth required)
- A Discord Incoming Webhook URL (no Discord app or OAuth required)

## Customization
- Swap Slack and/or Discord for email, Microsoft Teams, or any other webhook-based channel by editing the two HTTP Request nodes.
- Change how long deduplication remembers past executions by adjusting the 200-entry limit in the "Check duplicate & summarize error" node.
- Add a second fallback step (e.g. writing to a Google Sheet or Notion page) after the Discord notification for a three-tier alerting chain.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
