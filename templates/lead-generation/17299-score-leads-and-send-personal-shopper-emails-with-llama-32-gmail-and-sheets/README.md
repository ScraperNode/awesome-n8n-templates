# 🎣 Score leads and send personal shopper emails with Llama 3.2, Gmail, and Sheets

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures shoe-shopping leads via a Tally form webhook, matches products from Google Sheets, uses a local Llama model (Ollama HTTP API) to score the lead and draft recommendations, then emails the customer with Gmail, alerts your team in Slack, and logs/follows up via Google Sheets.

## How it works
1. Receives a lead submission from a Tally form via a webhook.
2. Loads the product catalog from Google Sheets and selects up to three best-matching products based on gender, category, and budget proximity.
3. Sends the matched products and customer preferences to a local Llama chat endpoint (Ollama HTTP API) to generate a lead score plus an email subject and body.
4. Parses and cleans the AI response into a formatted HTML email and extracts the lead score and top product names.
5. Appends the lead details, score, and selected products to a Google Sheets “Leads” CRM and sends the personalized recommendation email via Gmail.
6. Posts a new-lead alert to a Slack channel, waits 24 hours, sends a first follow-up email, marks it in Google Sheets, waits another 24 hours, sends a final follow-up email, and marks it in Google Sheets.

## Setup
1. Create and publish a Tally form with fields that match the workflow’s expected order (name, email, phone, gender, category, budget, size, color) and configure it to POST to the n8n webhook URL.
2. Set up Google Sheets OAuth credentials, then update the Products spreadsheet ID/sheet and the Leads (CRM) spreadsheet ID/sheet used for append and update operations.
3. Provide a Gmail credential/connection for sending the initial and follow-up emails.
4. Provide a Slack credential and set the target channel ID for lead alerts.
5. Ensure an Ollama (or compatible) chat API is reachable at the configured URL (default `http://host.docker.internal:11434/api/chat`) and update the model name if needed.

## Requirements
- Google account with Sheets, Gmail, and Slack access
- Ollama running locally with Llama 3.2 (or any OpenAI-compatible chat API)
- Free Tally.so account for the lead capture form

## Customization
- Swap the local Llama model for GPT-4o or Claude by updating the HTTP Request node's endpoint and body
- Adjust the budget-matching logic in the Code node to fit other product categories beyond shoes

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
