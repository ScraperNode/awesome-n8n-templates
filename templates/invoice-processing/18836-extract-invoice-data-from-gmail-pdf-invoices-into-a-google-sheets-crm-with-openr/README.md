# 🧾 Extract invoice data from Gmail PDF invoices into a Google Sheets CRM with OpenRouter

> ⚡ **47 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow polls Gmail for new invoice emails, extracts text from PDF attachments, uses OpenRouter to parse key invoice fields, and appends the results to a Google Sheets “Invoice” tab, while sending non-PDFs or unreadable PDFs to a “Review” tab for manual handling.

## How it works
1. Polls Gmail every minute for new emails and downloads any attachments.
2. Splits each email into one item per attachment so multiple invoices in a single email are processed separately.
3. Checks whether each attachment is a PDF and sends non-PDF attachments to a Google Sheets “Review” tab.
4. Extracts text from each PDF and routes files with no extracted text (for example, scanned/image-only PDFs) to the “Review” tab.
5. Sends the extracted invoice text to an OpenRouter chat model and parses the response into structured fields like vendor, invoice number, dates, and totals.
6. Adds metadata such as received date, source email address, and a “New” status, then appends the final record to a Google Sheets “Invoice” tab.

## Setup
1. Connect your Gmail OAuth2 credentials and choose which mailbox/filters to monitor in the Gmail trigger.
2. Add an OpenRouter API credential and select a model in the OpenRouter node.
3. Connect your Google Sheets OAuth2 credential and select the target spreadsheet and sheet tabs in both Google Sheets append actions.
4. Create a Google Sheets file with an “Invoice” tab and a “Review” tab using headers that match the extracted fields (for example: vendor_name, invoice_number, invoice_date, due_date, subtotal, tax, total_amount, currency, line_items_summary, source_email, received_date, status).

## Requirements
- An OpenRouter account (free signup, no card required) — or swap in any other AI provider node (Open AI or Claude)

## Customization
- Swap the OpenRouter model for any model you prefer (Claude, GPT, Gemini, Llama, etc.), its a customizable template
- Add or remove fields extracted from each invoice by editing the "Invoice Fields Parser" schema
- Replace Google Sheets with Airtable, a database (Postgres/MySQL), or a CRM if you'd rather log invoices there
- Adjust the Gmail filter (label, sender, subject) to narrow which emails get scanned
- Add a Slack/email notification step after a new invoice is logged

## Additional info
This workflow only processes emails that actually have a PDF attachment — emails with no attachment are skipped entirely before anything runs, so you're never charged for AI calls on spam or plain-text emails. It also handles multiple invoices sent in a single email (each PDF attachment is processed separately), and routes anything that fails text extraction (e.g. scanned/image-only PDFs) to a separate "Review" sheet instead of guessing at the data.

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, AI Agent, Structured Output Parser, Extract from File, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
