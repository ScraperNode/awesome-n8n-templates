# 📊 Stream daily tech trends from an n8n Data Table to SwiftBar via webhook

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow exposes an n8n webhook that reads today’s tech trends from an n8n Data Table, formats the top items into a SwiftBar menu payload, and returns the result as a JSON response for display in the macOS menu bar.

## How it works
1. Receives a webhook request and waits to respond via a dedicated response step.
2. Queries the n8n Data Table named `tech_trends` for rows matching the configured `date` filter.
3. Filters and sorts the results by `score`, selects the top 10 items, and formats them into SwiftBar menu lines.
4. Returns the formatted SwiftBar output as an `application/json` response (with CORS enabled) to the original webhook request.

## Setup
1. Create and populate an n8n Data Table named `tech_trends` with fields such as `date`, `title`, `source`, and optional `score` (typically filled by a separate “collector” workflow).
2. Update the Data Table filter value for `date` so it matches your desired “today” logic (the template currently uses a fixed date).
3. Copy the production webhook URL from the webhook trigger and configure SwiftBar (or your SwiftBar script) to call it on its refresh interval.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
