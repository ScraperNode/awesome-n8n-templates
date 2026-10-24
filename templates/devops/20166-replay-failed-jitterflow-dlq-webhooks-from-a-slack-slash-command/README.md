# ⚙️ Replay failed Jitterflow DLQ webhooks from a Slack slash command

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow lets a Slack slash command trigger an n8n webhook that lists unresolved Jitterflow dead-letter queue (DLQ) entries, responds to Slack immediately with the count, and then replays each failed delivery via the Jitterflow API.

## How it works
1. Receives a POST request from a Slack slash command via an n8n webhook.
2. Calls the Jitterflow API to list unresolved DLQ entries (up to 100 items).
3. Responds to Slack within the 3-second timeout with a message indicating how many failed deliveries will be replayed (or that none exist).
4. Filters out any DLQ items that do not contain a job ID.
5. Replays each remaining DLQ job through the Jitterflow API, continuing even if replay errors occur.

## Setup
1. Install the verified community node `n8n-nodes-jitterflow` (on self-hosted n8n, install it from Settings → Community Nodes).
2. Create a Jitterflow API credential in n8n and select it in both Jitterflow steps (list DLQ and replay).
3. Activate the workflow, copy the production webhook URL, and configure your Slack app’s slash command to send POST requests to it.

## 🔗 Nodes Used

Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
