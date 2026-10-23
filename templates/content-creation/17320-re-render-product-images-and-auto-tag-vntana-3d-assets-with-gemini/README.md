# 🎬 Re-render product images and auto-tag VNTANA 3D assets with Gemini

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow receives a VNTANA product publish webhook, downloads the product’s renders, uses Google Gemini to create a studio-style re-render and generate catalog tags, then uploads the new render back to VNTANA and updates the product’s tags via the VNTANA API.

## How it works
1. Receives a POST webhook from VNTANA containing the published product UUID.
2. Downloads all existing renders for the product from VNTANA and filters out any files already named like previously generated studio renders.
3. Converts each remaining render to base64 and sends it to Google Gemini (gemini-2.5-flash) to generate 10–15 JSON-formatted e-commerce tags.
4. Creates missing tags (or searches for existing ones) in VNTANA and updates the product with up to 10 merged tag UUIDs.
5. Sends the render image to Google Gemini (gemini-2.5-flash-image) with a strict studio photography prompt to generate a new re-rendered image.
6. Extracts the returned image from the Gemini response and uploads it to VNTANA as a new render on the same product.

## Setup
1. Add a Google Gemini API key as an HTTP Query Auth credential and assign it to both Gemini HTTP Request steps.
2. Install and configure the VNTANA community node with a VNTANA API credential, and set your workspace UUID (YOUR_WORKSPACE_UUID) in the VNTANA download/upload steps.
3. In the tagging/update code step, set your org-scoped VNTANA API token (X-AUTH-TOKEN bearer) and workspace UUID, and confirm it can read and update products and manage tags.
4. Register the workflow’s webhook URL in VNTANA for product/asset publish events and send the product UUID in the request body as expected by the workflow.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
