# 🤝 Sync webhook and emailed records with Airtable, HubSpot, Gmail, OpenAI and Telegram

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow ingests business records from an authenticated webhook or PDF attachments in Gmail, then deduplicates, validates, and syncs changes to Airtable and HubSpot. It logs every outcome to Google Sheets, sends Telegram alerts for exceptions, and runs a daily Airtable/HubSpot count reconciliation.

## How it works
1. Triggers from a POST webhook, a Gmail label polling trigger that downloads PDF attachments, or a manual test run.
2. For Gmail intake, extracts PDF text and uses OpenAI (LangChain Information Extractor) to turn the document into a structured batch of records.
3. Splits the batch into individual records, removes duplicates by external_id, normalizes fields, and quarantines invalid records instead of writing them.
4. Computes a SHA-256 content hash per record, looks up the matching Airtable record by external_id, and skips records whose content hash has not changed.
5. Upserts new or changed records into Airtable, checks HubSpot for email opt-out, and upserts the contact into HubSpot unless the contact is suppressed.
6. Appends one audit row per record to a Google Sheets “Audit Log”, posts a Telegram alert for any non-success status, and appends a per-run summary row to the “Reconcile Report”.
7. Runs a daily scheduled scan that counts Airtable records and the first 100 HubSpot contacts, logs the counts to Google Sheets, and posts a Telegram reconcile message (silent when in sync).

## Setup
1. Create credentials for Header Auth (webhook), Airtable Personal Access Token, HubSpot private app token, Gmail, OpenAI, Google Sheets, and Telegram.
2. Configure the webhook sender to include the required header auth and post a body shaped as an array of records or { "records": [...] }.
3. In Airtable, create/select a table with fields external_id, name, email, company, amount, and content_hash, then set the base/table in the Airtable nodes and replace YOUR-AIRTABLE-BASE-ID and YOUR-AIRTABLE-TABLE-ID in the Airtable HTTP lookup.
4. In Google Sheets, create tabs named “Audit Log” and “Reconcile Report” and select the target spreadsheet in both Google Sheets append actions.
5. In Gmail, create and apply a label named “Intake” for messages with PDF attachments, and set the Telegram chat ID plus replace YOUR-N8N-HOST in the execution_url links.

## Requirements
- - A recent n8n version (Information Extractor v1.2, Merge v3.2, Remove Duplicates v2)
- - Airtable personal access token, HubSpot private app token, Gmail OAuth, OpenAI API key, Google Sheets OAuth and a Telegram bot

## Customization
- - Map your own fields in Set Normalized Record Fields and in the Generate Content Hash input.
- - Change the reconcile time in Scheduled Reconcile Trigger.
- - The daily scan counts only the first 100 HubSpot contacts. Narrow it to the contacts this sync creates before relying on it with a large portal.

## Additional info
Need this built and run for your business? See the data intake sync system: https://signalnine.io/systems/data-intake-sync?utm_source=n8n-template&utm_medium=template&utm_campaign=growth-listings&utm_content=reliable-data-intake-sync-main-desc

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Webhook, Telegram, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
