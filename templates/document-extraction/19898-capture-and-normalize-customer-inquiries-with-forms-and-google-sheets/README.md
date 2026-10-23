# 🔬 Capture and normalize customer inquiries with forms and Google Sheets

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects customer inquiries via an n8n form and appends each submission as a new row in Google Sheets, normalizing key fields (timestamp, trimmed text, lowercased email) and returning a confirmation message to the submitter.

## How it works
1. Receives a new customer inquiry submission via an n8n Form trigger.
2. Normalizes the submission by adding a Europe/Berlin timestamp, trimming text fields, lowercasing the email address, and setting the status to “NEU”.
3. Appends the normalized inquiry data as a new row in a specified Google Sheets tab.
4. Returns a confirmation message indicating the request was saved.

## Setup
1. Create or select a Google Sheet with columns: Datum, Name, E-Mail, Telefon, Ort, Anliegen, Status.
2. Add a Google Sheets credential in n8n and select it in the Google Sheets node.
3. Replace YOUR_GOOGLE_SHEET_ID and YOUR_SHEET_TAB_GID with your target spreadsheet ID and sheet tab GID.
4. Test the complete workflow with a sample inquiry using the Form trigger Test URL and verify the new row in your own Google Sheet.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
