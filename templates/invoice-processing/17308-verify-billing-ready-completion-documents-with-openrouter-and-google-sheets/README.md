# 🧾 Verify billing-ready completion documents with OpenRouter and Google Sheets

> ⚡ **34 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow ingests proof-of-delivery and completion documents from Gmail or a webhook, extracts key fields with an OpenRouter vision model, reconciles them against Google Sheets dispatch data, archives evidence to Google Drive, and routes items to an automatic Billing Ready queue or a human Review Queue.

## How it works
1. Triggers when a new unread Gmail message with attachments arrives or when a document is posted to a webhook endpoint.
2. Splits incoming attachments into individual PDF/image items, generates a traceable document key, and sends each file to OpenRouter (e.g., Gemini) to extract structured POD fields as strict JSON.
3. Normalizes the AI response and reconciles the extracted dispatch reference against the Dispatches, POD Register, and Billing Ready tabs in Google Sheets to detect matches and duplicates.
4. Scores the evidence (readability, confidence, signature presence, and dispatch match), assigns a status of Billing ready, Needs review, or Duplicate, and uploads the original document to Google Drive for archiving.
5. Appends a full audit record to the POD Register in Google Sheets, then either adds billing-ready items to the Billing Ready tab or logs exceptions to the Review Queue and emails the reviewer via Gmail.
6. Runs every 15 minutes to read Review Queue decisions in Google Sheets, appends approved items to Billing Ready once, and updates the Review Queue row with the final review status.
7. Runs every weekday morning to compare Dispatches to Billing Ready and emails each owner (or the reviewer) a cash-risk digest of late jobs that still lack billable evidence.

## Setup
1. Add credentials for Google Sheets, Google Drive, and Gmail, and configure an HTTP Header Auth credential for the OpenRouter API request.
2. Update the configuration values in the workflow (Google Sheet ID, Drive folder ID, reviewer email, thresholds, and the review queue URL) to match your environment.
3. Create the required Google Sheets tabs named Dispatches, POD Register, Review Queue, and Billing Ready with the expected headers (including Dispatch Reference, Scheduled Delivery Date, and Invoice Amount).
4. In Gmail, create and apply a dedicated label/filter for POD intake and ensure the trigger monitors only that label and downloads attachments.
5. If using the webhook intake, copy the webhook URL from n8n and configure your source app to POST PDF or image files to it.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
