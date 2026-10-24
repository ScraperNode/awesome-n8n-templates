# 💬 Send 3-7-14 day quote follow-up emails with Gmail and Google Sheets

> ⚡ **321 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs daily to read open quotes from Google Sheets, calculates how many days have passed since each quote was sent, and sends the appropriate 3-, 7-, or 14-day follow-up email via Gmail, then writes a sent date back to the sheet to prevent duplicates.

## How it works
1. Runs every day at 9am on a schedule trigger.
2. Loads your business details, follow-up day offsets, and email subject/body templates from a preset configuration.
3. Reads all quote rows from a Google Sheets spreadsheet.
4. Keeps only quotes with status set to `open`, calculates days since `sent_date`, and selects the next due follow-up (day 3, 7, or 14) that has not been sent yet.
5. Sends a plain-text follow-up email through Gmail to each due quote’s customer using the filled template.
6. Updates the matching Google Sheets row (by `quote_id`) to stamp the corresponding `followup_1`, `followup_2`, or `followup_3` column with today’s date.

## Setup
1. Add Google Sheets credentials, select the target spreadsheet and sheet in both Google Sheets steps (read and update).
2. Add Gmail credentials for the mailbox you want to send follow-ups from.
3. Create a quotes sheet with headers `quote_id, customer_name, customer_email, quote_amount, sent_date, status, followup_1, followup_2, followup_3`, using `sent_date` in YYYY-MM-DD format and `status` set to `open/won/lost`.
4. Update the business details, day offsets (3/7/14), and email templates in the settings step to match your process and wording.

## Additional info
Need the full quote-to-cash machine? The paid pack "Quote-to-Cash Follow-up Pro" ($19) adds what this free template deliberately leaves out: reply detection that stops the chase the moment a customer answers your latest follow-up, automatic invoice rows when you mark a quote won, and polite dunning counted from the due date - until the money lands. https://43sunsets.com/go/f2-pro-01/

✅ What's fixed in v1.1 (this version — verified by live tests)

1. The "sent" stamp is now written back to your sheet reliably. A dedicated stamp-builder node replaces the dynamic column key that n8n silently ignored, so a quote that was already followed up is never picked again the next day.

2. Follow-up timing is timezone-safe. On instances running west of UTC (the Americas), follow-ups no longer fire one day earlier than the configured offsets.

If you imported the previous version (v1.0), re-import this template to pick up both fixes.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
