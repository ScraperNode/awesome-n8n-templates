# 🧾 Send monthly consolidated customer statements from Google Sheets with Gmail

> ⚡ **10 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs on the 1st of every month, reads open invoices from Google Sheets, builds one consolidated account statement per customer with ageing totals, emails it via Gmail, and appends a send log back to Google Sheets to prevent duplicate sends and retry failures.

## How it works
1. Runs on a schedule at 09:00 on the 1st day of each month.
2. Loads configuration values (sheet URL, business details, currency symbol, and minimum balance threshold) used to generate the statements.
3. Reads invoice rows from the Google Sheets `invoices` tab and reads prior send history from the `statement_log` tab.
4. Filters out invoices that are closed, have invalid emails, unreadable due dates, non-positive amounts, or duplicate invoice IDs, then groups the remaining open invoices by customer email.
5. Skips customers already logged as `sent` for the current statement period, generates an HTML statement with invoice lines and ageing buckets, and emails one message per customer via Gmail.
6. Builds a log entry for each attempted send (marking it as `sent` when a Gmail message ID is returned, otherwise `failed`) and appends the results to the `statement_log` sheet.

## Setup
1. Create Google Sheets and Gmail credentials in n8n and connect them to the Google Sheets and Gmail nodes.
2. Update the `sheetUrl`, business name, your name, reply-to email, currency symbol, and optional `minBalanceToSend` in the Settings step.
3. Ensure your spreadsheet has an `invoices` sheet with headers `customer_name, customer_email, invoice_id, invoice_date, due_date, amount, status`, and store `due_date` as plain text in `YYYY-MM-DD` format.
4. Create a `statement_log` sheet with headers `sent_at, customer_name, customer_email, statement_period, invoice_count, total_due, skipped_rows, send_status, message_id, thread_id` so the workflow can prevent duplicates and retry failed sends.
5. Set the workflow timezone in n8n so the monthly send time and ageing calculations match your local time.

## Requirements
- A Gmail account and a Google Sheets spreadsheet. No AI key, no paid APIs.

## Customization
- Change the send day and hour on the schedule trigger; set `minBalanceToSend` in Settings to hold statements below a chosen amount.

## Additional info
Honest note: live-tested end to end on self-hosted n8n 2.32.6 (standard nodes only - no Cloud-specific features). Real executions covered consolidation (six invoices into one email), every ageing boundary (30/31/90/91 days), the resend guard across repeated runs, a failed send that did not stop the other customers and went out after the address was fixed, the empty-month quiet run, timezone-driven ageing, and a real schedule activation. n8n Cloud was not part of the test environment.

Format notes, honestly: slash dates are read US-style (month/day/year) - the reliable path is a plain-text due_date column written as YYYY-MM-DD. Text amounts understand 1,250.00 / $1,250.00 / 9.500,50 / 2,5. Zero and negative amounts (credit notes) are never billed and are counted instead - this template lists open invoices, it does not offset credits. skipped_rows is a whole-run count stamped on every log row, not a per-customer figure. And one honest edge: if a run is interrupted after an email goes out but before its log row is written, that customer could be emailed again on a re-run - the guard is only as strong as the log.

This statement tells each customer where they stand. The paid pack "Quote-to-Cash Follow-up Pro" ($19) works the upstream side of the same job: it chases each open quote until it is answered — up to five follow-up touches that stop the moment the customer replies, automatic invoice rows when you mark a quote won, and polite dunning counted from the due date. https://43sunsets.com/go/f7-pro-01/

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
