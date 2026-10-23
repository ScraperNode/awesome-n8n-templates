# 🧾 Log email receipt data to Google Sheets with Gmail and OpenAI

> ⚡ **38 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow logs Gmail receipt attachments to Google Sheets by extracting structured fields with OpenAI (including category selection from your list), prevents duplicates by checking the ledger, and sends a monthly spending summary email via Gmail based on last month’s rows.

## How it works
1. Triggers when a Gmail message matching `has:attachment subject:receipt` arrives or when a schedule runs on the 1st of the month at 8am.
2. For receipt emails, looks up the Gmail message ID in Google Sheets and stops if the receipt is already logged.
3. If the receipt is new, extracts text from PDF attachments or transcribes image receipts using OpenAI vision.
4. Sends the receipt text to OpenAI to extract `receipt_date`, `merchant`, `amount`, `currency`, and a `category` chosen only from your predefined category list.
5. Appends one cleaned expense row to Google Sheets with the extracted fields plus a processed timestamp, Gmail message ID, and the original email subject.
6. For the monthly run, reads the full Google Sheets ledger, totals last month’s expenses by category, and emails the summary to you via Gmail.

## Setup
1. Connect Gmail credentials for the Gmail Trigger and for sending the monthly summary email.
2. Connect Google Sheets credentials and select the target spreadsheet and sheet in the lookup, append, and read operations.
3. Add an OpenAI API key for the OpenAI vision transcription and the structured extraction steps, and confirm the chosen model (for example, `gpt-4o-mini`).
4. Create a Google Sheet with headers `processed_at, gmail_message_id, receipt_date, merchant, amount, currency, category, source_subject` so the lookup and append operations map correctly.
5. Update the settings values for your recipient email address, default currency, category list, and (optionally) the Gmail search query to match your labeling or subject conventions.

## Additional info
✅ Version 1.1 (2026-08-19) — the known issue reported on 2026-08-17 is fixed, along with three others.

What changed in this version:

1. Attachments now survive the duplicate check. The ledger is read once and matched in code, so a new receipt keeps its PDF or photo through to the extraction step. The "no binary field attachment_0" failure is gone.

2. Rows are written with automatic column mapping. Re-selecting your own spreadsheet can no longer silently clear the mapping and cause a receipt to be lost.

3. Month boundaries and receipt dates are now read in the workflow's own timezone. Receipts dated the 1st of a month no longer drop out of that month's summary in the Americas.

4. The monthly summary email no longer retries, so it cannot arrive twice.

5. If a receipt arrives that cannot be read, you now get an email telling you which one, instead of it being skipped in silence.

Honest limits that remain:

- Only PDF and JPG, PNG, GIF or WebP attachments are processed. HEIC, the iPhone default, is not — convert to JPEG or PDF first. You will be notified when a receipt is skipped for this reason.
- OpenAI extraction is billed to your own API key, per receipt processed.

This version was tested end to end on a live Gmail, Google Sheets and OpenAI account before publishing.

Need help getting this into production? A different spreadsheet layout, your own category list, multiple currencies, or receipts arriving in a shared inbox instead of your own — we adapt it to your setup and test it end to end before you rely on it. From $100 fixed. https://43sunsets.com/#work

Questions: hello@43sunsets.com

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
