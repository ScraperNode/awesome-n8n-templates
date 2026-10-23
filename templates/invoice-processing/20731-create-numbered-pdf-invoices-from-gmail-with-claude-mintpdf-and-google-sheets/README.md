# 🧾 Create numbered PDF invoices from Gmail with Claude, MintPDF, and Google Sheets

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow polls Gmail for invoice or order request emails, uses Anthropic Claude to extract structured billing details, validates totals, assigns a sequential invoice number from Google Sheets, generates a PDF with MintPDF, replies to the customer via Gmail, archives the PDF in Google Drive, and logs the invoice.

## How it works
1. Polls Gmail every minute for unread emails with subjects matching invoice or order requests.
2. Uses Anthropic Claude to extract the customer, billing details, and line items from the email into structured data.
3. Validates required fields, currency, and calculates subtotal, tax, and total in integer cents, sending invalid or over-limit requests to a Google Sheets review tab and emailing the owner.
4. Reads the existing invoice log in Google Sheets to skip already-invoiced emails, assign the next yearly invoice number, and generate escaped HTML for the invoice.
5. Converts the HTML into an A4 PDF using MintPDF and emails the owner if rendering fails.
6. Archives the PDF to Google Drive, replies to the original Gmail thread with the PDF attached, and appends the invoice details and Drive link to the Google Sheets invoice log.

## Setup
1. Install the community node `n8n-nodes-mintpdf` and add a MintPDF API credential.
2. Add credentials for Gmail, Google Sheets, Google Drive, and Anthropic (Claude) in n8n.
3. Create a Google Sheets spreadsheet with `Invoices` and `Review` tabs and columns matching the fields appended by the workflow.
4. In the Invoice settings, set your seller details, owner email, currency, tax rate, approval limit, payment terms, and update the Google Sheet ID and Google Drive folder ID.

## Requirements
- A MintPDF API key (free plan: 100 PDFs a month)
- Gmail, Google Sheets and Google Drive accounts
- An Anthropic API key (or swap in another chat model)

## Customization
- Change the invoice design in the "Number invoice and build HTML" node
- Set your tax rate, currency and approval limit in "Invoice settings"
- Replace Claude with OpenAI or Gemini

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Gmail Trigger, Anthropic Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
