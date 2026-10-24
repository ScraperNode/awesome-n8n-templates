# 📊 Serve tech trends for desktop widgets via JSON webhook from Data Table

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow exposes a webhook endpoint that returns today’s tech trends as JSON for a desktop widget by reading records from an n8n Data Table, splitting items into news and YouTube lists, and responding with a CORS-enabled JSON payload.

## How it works
1. Receives an HTTP request via a webhook trigger.
2. Queries the n8n Data Table named `tech_trends` for rows matching the configured `date` filter.
3. Separates results by `source` (YouTube vs. non-YouTube), sorts by `rank`, and builds two top-3 lists of titles.
4. Returns an HTTP 200 response with `Content-Type: application/json` and `Access-Control-Allow-Origin: *` containing the formatted JSON payload.

## Setup
1. Activate the workflow and copy the production webhook URL into your desktop widget or any client that will request the data.
2. Populate the n8n Data Table `tech_trends` with at least `date`, `rank`, `title`, and `source` fields, and update the `date` filter value in the Data Table query to match your desired “today” logic.
3. If your client expects a different JSON schema, adjust the Code step that builds the `news` and `youtube` arrays and ensure the response body maps to the formatted output.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
