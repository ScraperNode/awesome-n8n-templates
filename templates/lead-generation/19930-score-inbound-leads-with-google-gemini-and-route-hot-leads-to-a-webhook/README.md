# 🎣 Score inbound leads with Google Gemini and route hot leads to a webhook

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound lead submissions via a webhook, uses Google Gemini to score purchase intent and fit, and sends hot leads to a destination webhook while routing lower-scoring leads to a cold-lead branch for further handling.

## How it works
1. Receives a lead submission as a JSON POST request via an n8n webhook.
2. Loads the hot-lead destination webhook URL and the score threshold from configured workflow values.
3. Sends the lead JSON to the Google Gemini API and requests a JSON-only response containing a numeric score (0–10) and a one-sentence reason.
4. Parses Gemini’s response into structured fields for the lead score and rationale.
5. Compares the score to the configured threshold and routes the lead accordingly.
6. Posts hot leads to your destination webhook with the score, reason, and original lead payload, while marking other leads as “cold-lead” for downstream processing.

## Setup
1. Create a Google Gemini API key and add it to an n8n HTTP Query Auth credential (for example, parameter name `key`) used by the Gemini request.
2. Update the destination URL for hot-lead alerts and set your desired score threshold in the workflow’s configuration values.
3. Copy the production webhook URL from the n8n webhook trigger and configure your form/CRM/app to POST lead JSON to it.

## Requirements
- A Google Gemini API key (the free tier is enough)
- A form, CRM or app that can POST JSON to a webhook
- A webhook to receive hot-lead alerts (Slack, Discord, Telegram or your own endpoint)

## Customization
- Describe your ideal customer in the scoring prompt; specific criteria give better scores
- Raise or lower the threshold to control how many alerts you get
- Connect the cold-lead branch to a spreadsheet or CRM to keep a log

## Additional info
The Gemini call retries up to five times, five seconds apart, if the API is briefly overloaded. More ready-made AI workflows: https://ruancody.gumroad.com/l/vlbne

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
