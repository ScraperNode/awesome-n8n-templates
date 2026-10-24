# 🎬 Review AI ad copy with Claude and route outcomes to HubSpot and Slack

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives AI-generated ad copy variants via a webhook, validates and deduplicates them, then uses Anthropic Claude to approve, review, or block each variant and (in live mode) creates a HubSpot task and posts a Slack alert while logging outcomes to an n8n Data Table.

## How it works
1. Receives an ad variant via a webhook secured with header authentication.
2. Validates and normalizes the payload (including required fields and upstream quality checks) and rejects invalid requests with an HTTP 422 response.
3. Checks the n8n Data Table to prevent reprocessing the same brief and variant combination and returns a “duplicate” response when found.
4. Sends the variant and campaign context to Anthropic Claude to return a strict JSON routing decision, and falls back to deterministic rules if the AI response is unusable.
5. In live mode, creates a HubSpot task and posts a formatted Slack message to the appropriate channel based on the decision and priority.
6. Logs the final outcome (including AI/fallback status, costs, latency, and delivery results) to an n8n Data Table and responds to the webhook caller.
7. On a daily schedule (or manual run), reads the last 24 hours from the Data Table, uses Anthropic Claude to generate insights, then sends an HTML report via Gmail, posts a Slack digest, and appends decision rows to Google Sheets.

## Setup
1. Create and connect credentials for Header Auth (webhook), Anthropic, HubSpot private app token, Slack (chat.postMessage), Gmail, and Google Sheets.
2. Run the reporting flow once (via the manual trigger) to create the `ad_copy_review_log` n8n Data Table.
3. Update routing values such as the Claude model and Slack channel names, and set the report recipient email address and digest channel.
4. Select the target Google Sheets spreadsheet and sheet in the Google Sheets append step.
5. Copy the production webhook URL into your ad-generation system and send requests in `dry_run` mode first, then switch to `live` to enable HubSpot and Slack actions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
