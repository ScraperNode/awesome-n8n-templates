# 🔬 Extract structured JSON from web pages via a webhook API with Gaffa

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a secured webhook that accepts a URL and a field schema, then uses Gaffa to load the web page and return structured JSON for the requested fields, with caching support and clear 400/502 error responses.

## How it works
1. Receives a POST request on a webhook endpoint secured with Header Auth.
2. Validates the JSON body (url, optional selector, and a non-empty fields schema with supported types) and returns HTTP 400 with an error message if validation fails.
3. Builds a Gaffa `parse_json` extraction request, including a configurable `max_cache_age` to allow cached results.
4. Sends the request to Gaffa to render the page and extract the requested fields into structured JSON.
5. Returns HTTP 200 with the extracted data and a `from_cache` flag when extraction succeeds, or HTTP 502 with Gaffa’s error message when it fails.

## Setup
1. Install the community node `@gaffa-dev/n8n-nodes-gaffa` in your n8n instance.
2. Create a Gaffa account, generate an API key, and add it in n8n as a Gaffa API credential.
3. Create a Header Auth credential (for example, `X-API-Key`) and select it on the webhook so callers must include the secret header.
4. Deploy the workflow and configure your client to POST JSON to the production webhook URL with `Content-Type: application/json`, including `url`, `fields`, and optional `selector`.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
