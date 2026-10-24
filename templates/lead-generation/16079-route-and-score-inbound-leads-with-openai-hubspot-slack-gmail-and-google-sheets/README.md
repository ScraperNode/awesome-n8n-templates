# 🎣 Route and score inbound leads with OpenAI, HubSpot, Slack, Gmail, and Google Sheets

> ⚡ **80 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound leads via webhook, validates and normalizes the data, scores and routes the lead to a sales rep, checks for duplicates and upserts the contact in HubSpot, drafts an outreach email with OpenAI, notifies the rep via Slack and Gmail, and logs the result to Google Sheets.

## How it works
1. Receives a POST webhook request with inbound lead details.
2. Validates required fields (like name and email) and returns a 400 JSON response if the payload is invalid.
3. Normalizes lead fields (name, email, company, region, source, and company size), calculates a lead score and tier, and assigns the lead to a rep based on region and tier.
4. Searches HubSpot for an existing contact by the lead data and flags the lead as a duplicate when a match is found.
5. If the lead is new, requests an outreach email draft from the OpenAI Chat Completions API; otherwise, posts a duplicate warning to Slack.
6. Upserts the contact in HubSpot for hot/warm leads or logs the cold lead to HubSpot, then notifies the assigned rep in Slack and emails them the AI draft via Gmail.
7. Appends a routing log row to Google Sheets and returns a JSON webhook response with the assigned rep, tier, and duplicate status.

## Setup
1. Configure the Webhook trigger URL (POST `/inbound-lead`) in your form, landing page, or source system to send the required lead fields.
2. Add HubSpot OAuth2 credentials for searching and creating/updating contacts.
3. Add Slack OAuth2 credentials and set the target channel/workspace used by the Slack notification and duplicate warning steps.
4. Add Gmail OAuth2 credentials for sending the outreach draft to the assigned rep.
5. Add an OpenAI API key via HTTP Header Auth (Bearer token) and confirm the model name in the OpenAI request.
6. Add a Google Sheets Service Account credential, replace `REPLACE_WITH_YOUR_SHEET_ID`, and ensure the target sheet (e.g. `Sheet1`) has matching columns for the appended log fields.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
