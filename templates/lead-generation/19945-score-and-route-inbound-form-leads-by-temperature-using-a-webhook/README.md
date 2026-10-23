# 🎣 Score and route inbound form leads by temperature using a webhook

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound form submissions via a webhook, normalizes common lead fields, scores each lead using a configurable Hot/Warm/Cold rubric, returns the score to the caller, and routes the lead to separate branches based on temperature.

## How it works
1. Receives a POST request on a webhook endpoint containing a form lead payload.
2. Normalizes incoming data by mapping common field names into a consistent lead structure (name, email, company, message, budget, timeline, and company size).
3. Scores the lead with a transparent points-based rubric (budget, timeline, service fit keywords, and company size) and applies disqualifier rules that can cap the score.
4. Responds to the webhook request with a JSON payload containing the temperature, numeric score, priority, and plain-English scoring reasons.
5. Routes the lead into Hot, Warm, or Cold paths based on the calculated temperature for downstream handling.

## Setup
1. Activate the workflow and copy the production webhook URL, then paste it into your form tool’s webhook settings (or POST JSON directly to the endpoint).
2. Update the field mappings in the normalization step if your form uses different property names.
3. Edit the scoring configuration (keywords, disqualifiers, and Hot/Warm thresholds) to match your services and qualification criteria.
4. Replace the Hot/Warm/Cold placeholder steps with your own actions (for example Slack notifications, CRM creation, or tagging in your marketing tool).

## Requirements
- An n8n instance (Cloud or self-hosted). Tested on n8n 2.40.7.
- A form tool or app that can POST JSON to a webhook (Typeform, Tally, Webflow, Jotform, a website form, etc.).
- No credentials or AI API keys are needed for the scoring itself.

## Customization
- Change the service keywords, budget bands, timeline rules and Hot/Warm thresholds in the CONFIG block of the scoring Code node.
- Add disqualifier phrases (spam, job seekers, vendors) that cap the score.
- Replace the three placeholder nodes with Slack, Notion, HubSpot, Google Sheets or email actions.

## Additional info
Tested end-to-end on self-hosted n8n 2.40.7 with four sample leads (Hot 94, Warm 65, Cold 19, and a spam lead capped to Cold by a disqualifier). The workflow responds to the webhook caller with the temperature, score, priority and plain-English reasons, so you can also call it from other workflows or apps.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
