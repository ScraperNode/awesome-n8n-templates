# 📊 Discover and save niche web content to Google Sheets with Kagi and OpenRouter AI

> ⚡ **27 views** · 📊 [Market Research & Insights](../)

## Description

## Discover and save niche web content to Google Sheets with Kagi and AI

### How it works

1. A webhook trigger receives a request.
2. The Kagi API token is set and a request is made to Kagi’s enrich endpoint.
3. Raw search results are extracted and split into individual items.
4. Each item is sent to an AI agent for categorisation and scoring, then merged with metadata.
5. The combined data is appended to a Google Sheet and a response is sent back to the webhook caller.

### Setup steps

- - [ ] Add your webhook URL to the service that will call this workflow.
- - [ ] Store your Kagi API token in the workflow’s credentials or set it in the “Set Kagi Token” node.
- - [ ] Configure the OpenRouter chat model credentials inside the AI Agent sub‑node.
- - [ ] Connect a Google Sheets credential and specify the target spreadsheet and worksheet in the “Append Row to Sheet” node.

### Customization

Adjust the prompt in the AI Agent node to change how content is categorized or scored, and modify the sheet columns in the Merge Data code if additional fields are needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
