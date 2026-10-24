# 📊 Analyze Seoul air pollution with MotherDuck and Ollama Qwen2.5

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow exposes a webhook that queries PM10 air pollution data from a MotherDuck database, sends the results to a local Ollama (qwen2.5:3b) model for analysis, and returns an HTML report showing the top polluted Seoul districts and the AI-generated findings.

## How it works
1. Receives a request on a webhook endpoint.
2. Queries MotherDuck via its MCP API to calculate the top 10 Seoul monitoring districts by average PM10, including maximum PM10 values.
3. Sends the summarized PM10 results to a local Ollama `/api/generate` endpoint to produce a four-sentence air-quality analysis against the WHO PM10 guideline (50 μg/m³).
4. Extracts the model’s response text and injects it into a preformatted HTML page.
5. Returns the HTML report to the webhook caller as the HTTP response.

## Setup
1. Create a MotherDuck API bearer token in n8n and ensure the `air_pollution` database and referenced tables/columns exist for the provided SQL query.
2. Run Ollama where n8n can reach `http://ollama:11434` and pull the `qwen2.5:3b` model (or update the model name and URL in the request).
3. Copy the webhook URL from n8n and call the `/air-quality` endpoint from your browser or monitoring system to render the report.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
