# ⚙️ Notify on server restarts with Discord, Telegram, and Slack alerts

> ⚡ **23 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow triggers when the n8n instance starts, checks recent executions via the n8n API for unfinished runs, summarizes which workflows are affected, and posts a restart and incident summary to Discord and Telegram (with an optional Slack message).

## How it works
1. Triggers when the n8n instance initializes (server restart/startup).
2. Sets runtime variables (restart timestamp, lookback window, and maximum executions to fetch) and retrieves recent executions from the n8n API.
3. Filters executions to those that are still unfinished and started within the configured lookback window.
4. Groups the filtered executions by workflow ID, counts how many are affected per workflow, and sorts them by highest count.
5. Builds formatted Discord, Slack, and Telegram messages that include the restart time, an estimated downtime/gap, and links to the affected workflows’ execution pages.
6. Sends the message to a Discord channel via a Discord webhook and to a Telegram chat via the Telegram Bot API (Slack posting is present but disabled).

## Setup
1. Create and add an n8n API credential with permission to read executions.
2. Create a Discord incoming webhook for your target channel and add it as a Discord webhook credential.
3. Create a Telegram bot, add the Telegram API credential, and set the target chat ID.
4. Update the fallback n8n base URL (and optional mention IDs) in the JavaScript configuration so the generated workflow links and tags are correct.
5. If you want Slack notifications, enable the Slack step and configure Slack credentials and the target channel.

## 🔗 Nodes Used

Slack, Telegram, Discord, n8n Trigger, n8n, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
