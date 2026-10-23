# 📊 Track macro regime shifts with FRED MCP, OpenAI, and Slack alerts

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to pull selected macroeconomic time series from a FRED MCP server, detect regime changes versus last week, and—when something shifts—uses OpenAI to write a business-specific interpretation and posts a formatted brief to Slack.

## How it works
1. Runs every Monday morning (or on manual run) and loads configuration like the MCP server URL, series list, and business context.
2. Calls the FRED MCP server to list available tools and stops if required endpoints are missing.
3. Reads last week’s saved values and regimes for each series from an n8n Data Table.
4. For each configured FRED series, fetches series metadata and recent observations from the MCP server in parallel and scores the series “shape” (streaks, quarter move, and z-score) into a regime label.
5. Adds derived macro signals that combine multiple series (10Y–2Y spread, Sahm rule gap, and real policy rate) and compares every current regime to last week’s regime.
6. Upserts this week’s readings into the Data Table and, if any regime changed, asks OpenAI for a short business-specific interpretation and posts the full brief to a Slack channel.

## Setup
1. Create a FRED API key and run the fred-economic-mcp server with it enabled, then set the workflow’s `mcp_url` to your server’s `/mcp` endpoint.
2. Create an n8n Data Table named `macro_watch` with columns `series_id`, `seen_on`, `value`, and `regime`.
3. Add an OpenAI credential (Chat model) and a Slack credential, then set the target Slack channel (for example `#macro`).
4. Update the `series` list and `business_context` in the Settings to match the indicators you want to track and the business you want the note written for.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
