# 🔬 Match GAEB X83 tender positions to catalog SKUs with flinq.ai extract and rerank

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow downloads a sample product catalog and a GAEB X83 tender file, extracts tender positions with flinq.ai, and reranks catalog items against each position to return the best-matching SKU and relevance score.

## How it works
1. Starts manually when you execute the workflow.
2. Downloads a sample catalog CSV file and parses it into catalog item records.
3. Builds a list of catalog document texts (name + description) and keeps the corresponding SKU list for later lookup.
4. Downloads a sample GAEB X83 LV file and sends it to the flinq.ai /v1/extract endpoint to extract the tender structure.
5. Flattens the extracted tender tree into individual positions with quantity, unit, and combined short/long text.
6. For each position, calls flinq.ai /v1/rerank (paced to one request every 2 seconds) to find the top 3 matching catalog entries.
7. Selects the best rerank result and outputs the position details along with the matched SKU and a rounded relevance score.

## Setup
1. Create a flinq.ai account, generate an API key, and add it to an n8n HTTP Header Auth credential as `Authorization: Bearer <your_key>`.
2. Assign that HTTP Header Auth credential to the two requests that call `https://api.flinq.ai/v1/extract` and `https://api.flinq.ai/v1/rerank`.
3. Keep the custom `User-Agent` header on both file-download requests (catalog and LV), as the file host may reject n8n’s default agent.
4. Adjust the rerank pacing (batch interval) only if your flinq.ai rate limits allow it, since the template is configured for one request every 2 seconds.

## 🔗 Nodes Used

HTTP Request, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
