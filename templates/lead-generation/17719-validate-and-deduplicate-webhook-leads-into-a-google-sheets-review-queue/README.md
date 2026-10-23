# 🎣 Validate and deduplicate webhook leads into a Google Sheets review queue

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead data via a webhook, normalizes and validates required fields, and then writes valid, de-duplicated leads to Google Sheets while routing invalid payloads to a separate Review Queue tab.

## How it works
1. Receives a POST request on a webhook endpoint with lead data in the JSON body.
2. Normalizes key fields (for example, trims and lowercases the email) and adds a received timestamp.
3. Validates the payload by checking for a correctly formatted email address and a non-empty source ID.
4. Appends invalid submissions to a Google Sheets “Review Queue” sheet with the failure reason and original values.
5. Looks up the source ID in a Google Sheets “Records” sheet to determine whether the lead already exists.
6. Appends a new row to the “Records” sheet only when no existing row with the same source ID is found, otherwise it skips creation.

## Setup
1. Create a Google Sheets OAuth credential in n8n.
2. Create a spreadsheet with two tabs named “Records” and “Review Queue”, and ensure the “Records” tab includes a “source_id” column for lookups.
3. Replace `REPLACE_WITH_YOUR_SPREADSHEET_ID` in the Settings step with your Google Sheets spreadsheet ID.
4. Copy the production webhook URL for the “intake” endpoint and configure your form/app to POST JSON containing at least `id` (source ID) and `email` (optionally `name`).

## Requirements
- A Google Sheets OAuth2 credential, and any source that can POST JSON to a webhook, such as a web form, CRM or app.

## Customization
- Swap Google Sheets for your own CRM or database. The routing logic is what matters, not the storage.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
