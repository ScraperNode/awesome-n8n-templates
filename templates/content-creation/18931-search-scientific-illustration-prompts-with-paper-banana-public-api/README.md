# 🎬 Search scientific illustration prompts with Paper Banana public API

> ⚡ **10 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses the [paper banana](https://paperbanana.me/) public API to search curated scientific illustration prompts by category and keyword, then outputs one structured n8n item per prompt—including title, prompt text, image URL, and source links—for easy reuse in downstream tools.

## How it works
1. Starts when you click “Test workflow” in n8n.
2. Sets the search inputs (category and optional keyword query) used to filter the Paper Banana prompt library.
3. Calls the Paper Banana public API endpoint for research prompts with the configured query parameters.
4. Splits the API response so each returned prompt becomes its own item.
5. Normalizes each prompt into a consistent record containing the prompt metadata, image URL, citation (if present), and links back to Paper Banana.

## Setup
1. Open the search configuration step and set the category (for example, `all`, `biomedicine`, `model-explainers`, `data-visualization`, or `agent-systems`) and an optional keyword in `q`.
2. No credentials are required because the workflow uses Paper Banana’s public API.
3. Run the workflow manually and use the resulting prompt items in your next steps (for example, saving to Notion or Google Sheets).

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
