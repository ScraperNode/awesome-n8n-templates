# 🎣 Score and route inbound web leads with OpenAI, Gmail and Google Sheets

> ⚡ **203 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives web form submissions via webhook, uses OpenAI to score and classify each lead, then emails hot leads through Gmail and logs them to separate Google Sheets tabs for hot versus cold review.

## How it works
1. Receives a POST webhook request containing lead details (name, email, company, role, message).
2. Normalizes the incoming fields and adds a timestamp.
3. Sends the lead details to OpenAI Chat Completions to return a JSON score (1–10), intent label, and one-sentence rationale.
4. Parses and validates the AI JSON output and merges it back into the lead record.
5. If the score is 7 or higher, sends a Gmail alert and appends the lead to the “Hot Leads” tab in Google Sheets.
6. If the score is below 7, appends the lead to the “Cold Review” tab in Google Sheets.
7. Responds to the webhook caller with a JSON payload including ok, score, and intent.

## Setup
1. Add an OpenAI API key (used via HTTP Header Auth) and ensure the Authorization header is set for requests to https://api.openai.com/v1/chat/completions.
2. Connect a Gmail OAuth2 credential and set the recipient email (update the workflow variable `alertInbox` or replace the default `you@example.com`).
3. Create a Google Sheet with two tabs named exactly “Hot Leads” and “Cold Review”, add the expected header columns, and replace `REPLACE_WITH_YOUR_SHEET_ID` in both Google Sheets nodes.
4. Activate the workflow, copy the production webhook URL for the `lead-qualifier` endpoint, and configure your form tool to POST submissions to it as JSON.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
