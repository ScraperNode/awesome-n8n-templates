# 🔬 Extract verified company data from website Impressum pages with OpenAI

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This webhook-based workflow takes a website URL, finds and fetches the site’s Impressum/imprint page, extracts structured company details with OpenAI, verifies each value against the page text, and returns a JSON response with the verified company data.

## How it works
1. Receives a POST webhook request containing a `website` URL (and optionally `organization` and `reference_id`).
2. Validates and normalizes the URL, blocks private/local addresses, and returns a 400 response if the input is invalid.
3. Fetches the website homepage and locates an Impressum/imprint URL from links or embedded content, falling back to `/impressum` when needed.
4. Fetches the Impressum page, converts the HTML into cleaned plain text, and stops extraction when the page has no usable content.
5. Sends the cleaned Impressum text to OpenAI Chat Completions to extract company fields as strict JSON.
6. Verifies the extracted fields by checking they literally appear in the Impressum text, drops unverified values, and returns the verified `data` plus `dropped_fields` and the detected `impressum_url` in the webhook response.

## Setup
1. Add an OpenAI API credential in n8n and attach it to the HTTP request that calls `https://api.openai.com/v1/chat/completions`.
2. Copy the production webhook URL and configure your source system to POST JSON like `{"website":"https://example.com","organization":"Example GmbH","reference_id":"123"}` to it.
3. If you plan to expose the webhook publicly, add authentication (for example, header-based auth) to protect the endpoint.
4. Update the OpenAI model/endpoint settings if you want to use a different model or an OpenAI-compatible provider.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
