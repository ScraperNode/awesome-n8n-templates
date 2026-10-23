# 🎣 Score inbound leads with OpenAI and log them to Google Sheets and Slack

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound leads via a webhook, scores and categorizes them with OpenAI, logs every lead to Google Sheets, and sends a Slack alert for leads that meet or exceed a configurable score threshold.

## How it works
1. Receives a lead submission via an HTTP POST webhook.
2. Normalizes the incoming payload to the expected lead fields (name, email, company, message) and applies workflow configuration values like the score threshold and target destinations.
3. Sends the lead details to the OpenAI Chat Completions API to generate a JSON score (0–100), tier (hot/warm/cold), and a short reason, continuing even if the API call fails.
4. Parses and validates the OpenAI response (or falls back to an unscored default), adds a timestamp, and prepares the final lead record.
5. Appends the lead record to a Google Sheets spreadsheet.
6. If the score meets the configured threshold, posts a hot-lead alert message to a Slack channel; otherwise, it ends without sending an alert.

## Setup
1. Create a Google Sheet with a tab (for example, “Leads”) that includes columns for name, email, company, message, score, tier, reason, and receivedAt.
2. Add credentials for OpenAI, Google Sheets (OAuth2), and Slack.
3. In the workflow configuration values, set your Google Sheet ID, sheet/tab name, Slack channel, OpenAI model, and the hot lead score threshold.
4. Copy the webhook URL from n8n and configure your form/tool to POST lead submissions to that endpoint.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
