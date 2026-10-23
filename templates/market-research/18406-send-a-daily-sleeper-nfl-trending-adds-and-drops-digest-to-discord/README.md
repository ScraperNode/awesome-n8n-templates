# 📊 Send a daily Sleeper NFL trending adds and drops digest to Discord

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily and pulls top trending fantasy football player adds and drops from Sleeper, enriches player IDs with the active player map, and posts a two-embed digest to a Discord channel via a webhook.

## How it works
1. Runs on a daily schedule at 9:00 AM (or can be started manually for testing).
2. Fetches the top 10 trending player adds from the Sleeper API.
3. Fetches the top 10 trending player drops from the Sleeper API.
4. Retrieves Sleeper’s active player map to convert player IDs into readable names and details.
5. Builds a Discord-ready digest with ranked add/drop lists, safe formatting to avoid accidental @mentions, and a generated timestamp.
6. Sends one Discord webhook message containing two embeds (Trending Adds and Trending Drops) with notifications suppressed.

## Setup
1. Install the community node package `n8n-nodes-sleeper` in your n8n instance.
2. Create a Discord incoming webhook for your target channel and add a Discord Webhook API credential in n8n using that webhook URL.
3. Select that Discord webhook credential in the Discord send step and adjust the schedule time/cron expression if needed for your timezone.

## 🔗 Nodes Used

Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
