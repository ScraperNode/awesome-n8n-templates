# 📱 Send Google review request and reminder emails via Gmail and Google Sheets

> ⚡ **106 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs daily and reads a Google Sheets job ledger to send Google review request and reminder emails via Gmail, then updates the sheet with sent dates to prevent duplicate messages.

## How it works
1. Runs every day at 9am on a schedule.
2. Loads your email templates and timing settings, then reads all rows from the selected Google Sheets document.
3. Keeps only rows with status set to `open`, a valid `job_date`, and a customer email, and decides whether a first request (2+ days after the job) or a reminder (7+ days after the request) is due.
4. Personalizes the subject and body with the customer details and your Google review link.
5. Sends the appropriate plain-text email to each customer through Gmail.
6. Updates the matching row in Google Sheets (by `job_id`) to stamp `request_sent` or `reminder_sent` with today’s date so the workflow never sends the same email twice.

## Setup
1. Connect Google Sheets credentials and select the target spreadsheet and sheet in both Google Sheets nodes.
2. Connect Gmail credentials for the mailbox you want to send from.
3. Ensure your sheet has headers `job_id, customer_name, customer_email, job_description, job_date, status, request_sent, reminder_sent` and uses `status = open` plus `job_date` in `YYYY-MM-DD` format.
4. In the settings step, set your business name, sender name, and Google review link, and adjust the email templates and timing offsets if needed.

## Requirements
- A Google account with access to Gmail and Google Sheets

## Additional info
⚠️ Known issue (honest note): in timezones west of UTC (the Americas), the review request and the reminder can fire one day earlier than the configured delays. A timezone-safe fix will be included in the next update.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
