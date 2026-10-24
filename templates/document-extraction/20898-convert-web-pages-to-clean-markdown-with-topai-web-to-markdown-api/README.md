# 🔬 Convert web pages to clean Markdown with TopAI Web-to-Markdown API

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually converts a specified webpage URL into cleaned, RAG-ready Markdown by calling TopAI Gateway’s Web-to-Markdown API over HTTP.

## How it works
1. Starts automatically when you trigger the workflow manually, via webhook, or through a recurring scheduled trigger in n8n.
2. Sends a high-speed POST request to TopAI Gateway's Anycast Edge Web-to-Markdown API with the target webpage URL and configuration options.
3. Cleans up HTML boilerplate, strips promotional ads, cookie popups, and scripts while preserving markdown tables and document metadata for RAG ingestion.

## Setup
1. Create a free TopAI Gateway developer account and generate your API key at https://topaigateway.com.
2. Replace the 'Authorization' header parameter value in the HTTP Request node with your personal token: 'Bearer <YOUR_TOPAI_API_KEY>'.
3. Update the JSON request body with the target website 'url' you want to convert and adjust cleanup options like 'strip_ads_and_scripts' and 'preserve_tables' as needed.

## Requirements
- TopAI Gateway API Key (Free tier available at https://topaigateway.com)

## Customization
- Set 'strip_ads_and_scripts' to true to eliminate noise, or set 'preserve_tables' to true to keep HTML tables formatted as markdown tables.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
