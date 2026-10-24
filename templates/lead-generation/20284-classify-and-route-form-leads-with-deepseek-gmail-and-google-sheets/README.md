# 🎣 Classify and route form leads with DeepSeek, Gmail, and Google Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
A webhook captures form leads, a Data Table blocks duplicates, and DeepSeek scores each lead from 1 to 100. A three-way switch routes high scores to an approval email, mid scores to a fast-track approval, and low scores to a polite decline.

## How it works
1. Receives a lead submission via a POST webhook.
2. Normalizes the submitted fields and generates a deterministic lead_unique_id, then checks an n8n Data Table to skip leads that were already processed.
3. Upserts the lead into the Data Table as an audit record and sends the submission to the DeepSeek Chat Completions API to return structured fields and a 1–100 priority score.
4. Routes the lead based on priority_score, sending high-priority and medium-priority leads to different Gmail approval emails and sending low-priority leads a polite decline email.
5. Receives an approval click via a second webhook, validates the decision, appends the approved lead to a Google Sheets fulfillment spreadsheet, and returns an HTML confirmation page.
6. If the DeepSeek request fails, sends a critical alert email via Gmail for troubleshooting.

## Setup
1. Point your lead form at the lead-intake webhook URL and ensure it POSTs raw_client_input plus selected_service.
2. Create a Data Table with a lead_unique_id text column, then select it in both Data Table nodes and paste the column id into the Mark Processed node.
3. Create a Header Auth credential for the DeepSeek API with Authorization as the header name, then select it in the Classify and Score Lead node.
4. Connect Gmail credentials for approval, fast-track, decline and alert emails, and replace YOUR_EMAIL@example.com in all four email nodes.
5. Connect Google Sheets, replace YOUR_SPREADSHEET_ID, and replace YOUR_N8N_WEBHOOK_DOMAIN in the approval emails with your n8n instance base URL.

## Requirements
- Any form builder that can POST to a webhook (raw_client_input, selected_service, email, company_name) | A Data Table with a lead_unique_id text column | A DeepSeek API key (Header Auth credential) | Google Sheets with a fulfillment queue sheet | Gmail credential for approval, fast-track, decline and alert emails | n8n instance reachable from your inbox (for the approval button)

## Customization
- Adjust the priority thresholds in the Route by Lead Priority switch (default bands: 85+ high, 60-89 qualified, below 60 declined). | Edit the DeepSeek prompt to score on the criteria your fulfillment process actually cares about. | Swap Google Sheets for Airtable, a CRM node or a Data Table - the approval-gate pattern is identical. | Reuse the dedup + score + route pattern alone for any intake flow that needs priority triage.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
