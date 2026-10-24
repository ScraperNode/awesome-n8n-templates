# 🔬 Manage construction work permits with GPT-4o, Google Sheets and Gmail

> ⚡ **85 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow accepts construction work permit requests via webhook, logs them to Google Sheets, uses OpenAI (gpt-4o-mini) to detect conflicts against active permits, routes the request to a supervisor for approval via Gmail, then emails an approved permit document and monitors permits for expiry reminders.

## How it works
1. Receives a work permit request via a POST webhook.
2. Appends the submission to a Google Sheets “log permit” tab and retrieves current permits from the Google Sheets “Permit Register” tab.
3. Sends the new request plus active permit data to OpenAI (gpt-4o-mini) to evaluate location/time/work-type conflicts and parses the JSON result into a permit record with an ID and calculated expiry.
4. If a conflict is detected, sends a Gmail rejection email to the worker with the conflict details.
5. If no conflict is detected, emails the supervisor via Gmail with approve/reject links and waits for the supervisor’s decision.
6. Updates the Google Sheets log status to approved or rejected, and for approvals generates an HTML permit document and emails it to the worker via Gmail.
7. Runs every 15 minutes to read approved permits from Google Sheets, then sends a 30-minute reminder or an expiry stop-work email via Gmail based on each permit’s expiry time.

## Setup
1. Create Google Sheets OAuth2 credentials in n8n and replace `YOUR_GOOGLE_SHEET_ID_HERE` in all Google Sheets nodes, ensuring the sheet has tabs named “log permit” and “Permit Register” with the expected columns (including status and expiry fields).
2. Create Gmail OAuth2 credentials in n8n and replace the `[SUPERVISOR-EMAIL]` placeholder (and any hardcoded addresses) so supervisor and worker emails route correctly.
3. Add OpenAI API credentials in n8n and ensure the OpenAI node is configured to use an available model ID (set to `gpt-4o-mini` in this template).
4. Update `https://YOUR-N8N-DOMAIN/webhook/permit-decision` in the approval-link generator to your n8n base URL, then copy the live webhook URL for `work-permit-request` and configure it in your permit request form/app.
5. (Optional) Add Slack OAuth2 credentials and set the target channel to receive alerts from the workflow error trigger.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
