# 🧾 Extract invoice data from PDFs with Claude and a Google Sheets review queue

> ⚡ **12 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow collects invoice PDFs via an n8n form, converts them to text, extracts invoice fields using the Anthropic Claude API, and then logs high-confidence results to Google Sheets while routing low-confidence or incomplete extractions to a separate review queue tab.

## How it works
1. Receives an invoice PDF upload through an n8n Form trigger.
2. Extracts raw text from the uploaded PDF.
3. Sends the invoice text to the Anthropic Claude Messages API and requests strict JSON for key invoice fields and an overall confidence score.
4. Parses and validates Claude’s JSON output, then flags the item for review if confidence is below the threshold or key fields are unknown.
5. Appends trusted extractions to the “Extracted” tab in Google Sheets.
6. Appends uncertain or invalid extractions to the “Review Queue” tab in Google Sheets.

## Setup
1. Create an Anthropic API key and add it to the HTTP Header Auth credentials used by the Claude request (x-api-key), keeping the required Anthropic headers.
2. Connect a Google Sheets account and replace REPLACE_WITH_YOUR_SPREADSHEET_ID with your spreadsheet ID in both Google Sheets append steps.
3. Create two tabs in the target spreadsheet named “Extracted” and “Review Queue” (or update the sheet names in the workflow to match).
4. Test the form with a clear invoice and a low-quality invoice and adjust the confidence threshold logic in the validation step if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
