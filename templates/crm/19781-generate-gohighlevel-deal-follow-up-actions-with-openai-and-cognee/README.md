# 🤝 Generate GoHighLevel deal follow-up actions with OpenAI and Cognee

> ⚡ **5 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow triggers from a GoHighLevel webhook, schedule, or manual run to pull open opportunity and pipeline details, generate deal-specific follow-up actions using an OpenAI GPT-4o-mini agent with Cognee knowledge search, then posts results to Slack, sends an email via Gmail, logs the deal to Sheets.

## How it works
1. Triggers when a GoHighLevel webhook is received, on a schedule, or from a manual run to start processing open opportunities.
2. Searches GoHighLevel for open opportunities and fetches the current pipeline and stage metadata via the LeadConnector (GoHighLevel) API.
3. Normalizes the opportunity payload into structured fields (deal, pipeline, stage, contact, owner, value) and prepares it for downstream processing.
4. Uses an OpenAI GPT-4o-mini agent that first queries Cognee to retrieve relevant SOPs/playbooks from your company knowledge base and then generates a 3–6 item follow-up checklist.
5. Formats the agent output into Slack text, an HTML email body, and a Google Sheets row.
6. Posts the follow-up checklist to Slack, emails the follow-up actions via Gmail, and appends the deal and actions to a Google Sheets log.
7. On any error, formats the failure details and posts an alert to Slack.

## Setup
1. Add your GoHighLevel (LeadConnector) Private Integration token and locationId query values in the two HTTP requests for pipelines and opportunity search.
2. Connect OpenAI credentials for the GPT-4o-mini chat model and connect Cognee credentials, then set the correct Cognee dataset ID for knowledge search.
3. Connect Slack credentials and choose the target channel for both the follow-up message and error alerts.
4. Connect Gmail OAuth2 credentials and replace the recipient address (for example, sales@yourcompany.com).
5. Connect Google Sheets OAuth2 credentials and update the spreadsheet/document ID and sheet/tab used to append deal follow-up rows.
6. If using the webhook trigger, copy the n8n webhook URL into your GoHighLevel workflow/action that fires on deal creation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
