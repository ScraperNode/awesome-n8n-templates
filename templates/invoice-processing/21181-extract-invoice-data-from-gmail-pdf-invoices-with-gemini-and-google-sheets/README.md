# 🧾 Extract invoice data from Gmail PDF invoices with Gemini and Google Sheets

> ⚡ **15 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Gmail label for unread emails with PDF invoice attachments, extracts the PDF text, uses Google Gemini to parse key invoice fields into structured JSON, and appends the cleaned results to a Google Sheets tab before marking the email as read.

## How it works
1. Polls Gmail every minute for unread emails matching the query `has:attachment filename:pdf label:invoices` and downloads attachments.
2. Splits each matching email into separate items so each PDF attachment is processed individually.
3. Extracts text from each PDF attachment using n8n’s PDF text extraction.
4. Sends the email context and extracted text to Google Gemini with a predefined JSON schema to return structured invoice fields and a confidence score.
5. Normalizes dates and numbers, checks basic consistency (like subtotal + tax vs total), and flags low-confidence or incomplete results as `needs_review`.
6. Appends the final invoice row (including line items as JSON) to the `Invoices` sheet in Google Sheets and marks the source Gmail message as read.

## Setup
1. Create or choose a Gmail label (for example, `invoices`) and ensure invoice emails are labeled to match the workflow’s Gmail search query.
2. Add Gmail OAuth2 credentials for the Gmail Trigger and Gmail node.
3. Add a Google Gemini (Google AI Studio) API key/credentials for the Gemini Chat Model.
4. Add Google Sheets OAuth2 credentials and replace `REPLACE_WITH_YOUR_SPREADSHEET_ID`, ensuring your spreadsheet has a tab named `Invoices`.
5. Test with a text-based PDF invoice (not image-only) or add an OCR step upstream if your invoices are scanned images.

## Additional info
Need it installed? I set this up in your n8n on Fiverr, starting around $20: https://www.fiverr.com/mouwah/set-up-a-tested-n8n-invoice-approval-or-lead-routing-workflow-in-your-n8n
Pro version (vendor PAY/HOLD check against a Vendors tab, duplicate detection, approval flow): https://mohabaha0.gumroad.com/l/ap-invoice-triage-pro

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
