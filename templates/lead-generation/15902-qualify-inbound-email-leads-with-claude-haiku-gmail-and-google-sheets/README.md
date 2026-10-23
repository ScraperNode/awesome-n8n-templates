# 🎣 Qualify inbound email leads with Claude Haiku, Gmail, and Google Sheets

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound lead data via a webhook, uses Anthropic Claude to qualify it as HOT, WARM, or COLD, then routes HOT leads to Gmail and WARM leads to Google Sheets, and finally returns the score in the webhook response.

## How it works
1. Receives a POST webhook request containing lead details (nom, email, entreprise, message).
2. Normalizes the incoming fields into a consistent lead payload.
3. Sends the lead details to Anthropic Claude (via an n8n LangChain chain) to classify the lead as HOT, WARM, or COLD with a one-sentence justification.
4. Routes the result based on whether the model output contains HOT or WARM (everything else falls back to the default path).
5. Sends an HTML email via Gmail with the lead details and AI justification when the lead is HOT.
6. Appends the lead details, score, justification, and timestamp to a Google Sheets sheet when the lead is WARM.
7. Responds to the webhook caller with a JSON payload indicating success and the model’s classification text.

## Setup
1. Add an Anthropic API credential and select the Claude model in the Anthropic Chat Model configuration.
2. Add a Gmail OAuth2 credential and replace VOTRE_EMAIL@example.com with the inbox that should receive HOT lead alerts.
3. Add a Google Sheets OAuth2 credential, set VOTRE_SHEET_ID to your spreadsheet, and ensure the target sheet includes columns for nom, email, entreprise, message, score, justification, and date.
4. Copy the production webhook URL for the lead-qualifier endpoint and configure your form/website/app to POST lead data to it in the expected body fields.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
