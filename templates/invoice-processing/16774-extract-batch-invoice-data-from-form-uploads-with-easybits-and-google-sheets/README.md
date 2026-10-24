# 🧾 Extract batch invoice data from form uploads with easybits and Google Sheets

> ⚡ **60 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow collects one or more invoice files via an n8n Form, extracts structured invoice fields with the easybits Extractor, appends the results to Google Sheets, and returns an on-screen completion summary that flags any invoices missing critical fields.

## How it works
1. Receives invoice uploads (JPG, PNG, or PDF) through an n8n Form trigger.
2. Splits the submitted files into one item per file and prepares each file for processing while keeping the original filename.
3. Processes invoices one at a time and sends each file to the easybits Extractor to pull invoice fields into a structured `data` object.
4. Reattaches the original filename to the extracted result and checks whether critical fields (invoice number, invoice date, vendor name, total amount) are present.
5. Appends one row per invoice to Google Sheets with the extracted fields and the pass/fail status.
6. Builds a batch summary of all processed files and shows it as the form completion message.

## Setup
1. Install the easybits community node (@easybits/n8n-nodes-extractor) and add an easybits Extractor API credential.
2. Create/configure an extraction pipeline in easybits (with fields like invoice_number, invoice_date, vendor_name, total_amount, etc.) and copy its API key into n8n.
3. Connect Google Sheets OAuth credentials, then select your target spreadsheet and sheet tab in the Google Sheets append step and ensure the columns match the mapped field names.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
