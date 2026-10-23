# ⚡ Send a weekly digest of open quotes with Gmail and Google Sheets

> ⚡ **27 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every Monday morning, reads your quotes from Google Sheets, and emails you an HTML digest via Gmail of quotes still marked open, grouped by how long they have been unanswered, then logs a weekly snapshot back to Google Sheets to prevent duplicate sends.

## How it works
1. Runs every Monday at 8:00 AM based on the workflow timezone.
2. Reads all quote rows from a Google Sheets quotes worksheet and reads the existing weekly digest log from a Google Sheets log worksheet.
3. Filters quotes with status set to open, calculates days since sent_date, sorts by quote amount, and buckets items into fresh, needs a nudge, or going cold.
4. Checks the log data for the current week start date and stops if a digest was already sent this week.
5. Sends an HTML email digest to your own configured address using Gmail — nothing is ever sent to your customers.
6. Appends or updates a weekly snapshot row (week_start, counts, value at risk, and sent time) in the Google Sheets log worksheet.

## Setup
1. Connect Google Sheets credentials and select the spreadsheet and worksheet for both the quotes sheet and the digest log sheet in the Google Sheets nodes. Heads-up: after picking the log sheet in the last node, re-open it and restore Map Automatically, match on week_start, Cell Format = Let n8n format (n8n silently resets these when you change the sheet).
2. Connect Gmail credentials and set the recipient email address in the settings (yourEmail).
3. Ensure your quotes sheet has headers quote_id, customer_name, quote_amount, sent_date, and status, with sent_date in YYYY-MM-DD and status values like open/won/lost.
4. Ensure your log sheet has headers week_start, open_count, value_at_risk, needs_nudge, going_cold, and sent_at.
5. Set your nudgeDays, coldDays, and currencySymbol values in the settings and configure the workflow timezone so day counts and the Monday schedule match your locale.

## Requirements
- A Google account with access to Gmail and Google Sheets

## Additional info
This digest shows you which quotes are going cold. The paid pack "Quote-to-Cash Follow-up Pro" ($19) does the chasing for you, from the same quotes sheet this template reads — up to five follow-up touches that stop the moment a customer replies to your latest email, automatic invoice rows when you mark a quote won, and polite dunning counted from the due date. https://43sunsets.com/go/f6-pro-01/

Honest note: this template was live-tested end to end on self-hosted n8n 2.31.5 (standard nodes only — no Cloud-specific features). The weekly schedule, the once-per-week guard, month-boundary day counts and timezone handling were all verified with real executions, including a real scheduled production run. n8n Cloud was not part of the test environment.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
