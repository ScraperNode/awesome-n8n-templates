# 🧾 Extract and validate Gmail invoice PDFs into Google Sheets with OpenAI

> ⚡ **56 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches a Gmail label for invoice emails with PDF attachments, extracts the PDF text, uses OpenAI to pull structured invoice fields, validates totals and VAT logic, and then appends clean invoices to an Invoices tab in Google Sheets while routing failures to an Exceptions tab.

## How it works
1. Triggers every minute when a new Gmail message arrives under a specified label and has attachments, downloading the attachments for processing.
2. Filters the message to keep only PDF attachments.
3. Converts the PDF attachment into plain text.
4. Sends the extracted text to OpenAI to extract structured invoice data (supplier, invoice number, dates, currency, totals, VAT, and line items) using a strict schema.
5. Validates the extracted values by checking required fields, total reconciliation (net + VAT ≈ gross), line-item sums, allowed VAT rates, and flags negative totals.
6. Appends validated invoices to the Invoices sheet in Google Sheets and sends any non-reconciling results (with problem details) to an Exceptions sheet.

## Setup
1. Add Gmail credentials and set the Gmail label ID used to identify supplier invoice emails.
2. Add an OpenAI API credential for the extraction model used by the workflow.
3. Add Google Sheets credentials and replace the spreadsheet URL, ensuring it contains Invoices and Exceptions tabs with columns that match the extracted fields.

## Additional info
I wrote a longer page on this one, with what it costs to run and when I would tell you not to build it: https://fractionalhq.uk/use-cases/invoice-data-entry

If your PDFs are reports with tables of figures rather than invoices, my paid template pulls those tables into Google Sheets and checks every total in code before it writes a row: https://n8n.io/workflows/19346

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, Filter, OpenAI Chat Model, Extract from File, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
