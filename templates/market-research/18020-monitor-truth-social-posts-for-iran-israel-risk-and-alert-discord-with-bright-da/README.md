# 📊 Monitor Truth Social posts for Iran-Israel risk and alert Discord with Bright Data and OpenAI

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow polls a Truth Social account every minute via Bright Data, tracks the newest processed post ID in an n8n Data Table, uses OpenAI (GPT-4o-mini) to classify posts about Iran–Israel–US tensions, and sends relevant alerts to a Discord channel.

## How it works
1. Runs every minute on a cron schedule.
2. Reads the stored `last_id` cursor from an n8n Data Table and requests newer Truth Social statuses through the Bright Data API.
3. If new statuses are returned, extracts key fields (content and timestamp) and updates `last_id` to the highest status ID in the batch.
4. Prefilters posts with a keyword/regex check to avoid sending obviously irrelevant content to OpenAI.
5. Sends remaining posts to OpenAI (GPT-4o-mini) to extract a relevance flag, severity level, and one-sentence reason.
6. Posts a formatted alert to Discord for items OpenAI marks as relevant.

## Setup
1. Create or select a Bright Data HTTP Bearer credential and ensure the `fetch_truths` zone exists in your Bright Data account.
2. Add an OpenAI API credential and confirm the selected model (for example, `gpt-4o-mini`) is available to your account.
3. Add a Discord Webhook credential and set it to the channel where alerts should be posted.
4. Run the included one-time setup path to create the `workflow_state` Data Table and initialize `last_id` (rerunning it resets the cursor to 0).

## 🔗 Nodes Used

Cron, HTTP Request, Discord, OpenAI Chat Model, Information Extractor, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
