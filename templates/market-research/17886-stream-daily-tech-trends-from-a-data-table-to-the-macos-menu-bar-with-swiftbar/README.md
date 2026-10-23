# 📊 Stream daily tech trends from a Data Table to the macOS menu bar with SwiftBar

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow exposes a webhook endpoint that reads today’s tech trends from an n8n Data Table, formats the top items into SwiftBar menu-bar lines, and returns the result as a JSON response that SwiftBar can display.

## How it works
1. Receives a webhook request at the configured path and waits to respond via a dedicated response step.
2. Queries the n8n Data Table named `tech_trends` for rows matching the configured `date` filter.
3. Filters and sorts the returned trend rows by score, then builds a SwiftBar-compatible list limited to the top 10 items.
4. Returns the formatted SwiftBar output as an `application/json` response (with CORS enabled) to the original webhook request.

## Setup
1. Create/populate an n8n Data Table named `tech_trends` with fields such as `date`, `title`, `source`, and optionally `score`.
2. Update the Data Table query filter to use the correct date logic (the template currently filters for a fixed date value).
3. Copy the production webhook URL and configure SwiftBar (or your SwiftBar script) to call this endpoint on a schedule.
4. If desired, edit the formatting code to change the menu title, item limit, and how each trend is displayed.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
