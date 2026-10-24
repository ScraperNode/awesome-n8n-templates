# 🔬 Extract purchase order line items from PDFs with easybits and Google Sheets

> ⚡ **12 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects purchase order PDFs through an n8n form, extracts header fields and line-item tables with easybits Extractor, appends one row per article to Google Sheets, and shows a completion summary highlighting any missing or incomplete extracted fields.

## How it works
1. Receives a form submission with one or more uploaded purchase order PDF files.
2. Splits the upload into one workflow item per PDF and processes the PDFs one at a time.
3. Sends each PDF to easybits Extractor to extract purchase order header details and the articles table.
4. Flattens the extracted articles into one row per line item, repeats the PO header fields on each row, and records per-document flags for missing header values or incomplete article fields.
5. Appends the generated rows to a Google Sheets worksheet.
6. After all PDFs are processed, builds a summary of any flagged documents and displays it on the n8n form completion screen.

## Setup
1. Create an easybits Extractor account, generate an API key, add it as an easybits Extractor credential, and configure the extractor fields (mark_for, po_number, po_date, delivery_date, pr_number, reference_no, and an articles array with article/unit/quantity).
2. Add a Google Sheets OAuth2 credential and set the target Google Sheets document ID and worksheet name in the append step.
3. Create a Google Sheet with a header row that matches the workflow’s column names exactly (Document Name, PO Number, PO Date, Delivery Date, Mark For, PR Number, Reference No., Article, Unit, Quantity).

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
