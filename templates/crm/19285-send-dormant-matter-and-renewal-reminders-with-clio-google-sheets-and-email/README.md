# 🤝 Send dormant matter and renewal reminders with Clio, Google Sheets, and email

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs two daily schedules to flag dormant matters from Clio and upcoming/overdue renewal dates from Google Sheets, logs each notification via a separate audit workflow, and sends internal reminder emails to the responsible attorneys.

## How it works
1. Runs every morning at 8am to fetch all Open matters from the Clio API.
2. Checks each matter’s last updated date against a configurable dormancy threshold and deduplicates repeat alerts using workflow static data.
3. Builds a dormant-matter notification email, logs the message details by calling a separate compliance/audit workflow, and emails the responsible attorney.
4. Runs every morning at 8am to read renewal-date rows from a Google Sheets “Renewal Dates” ledger.
5. Calculates days remaining to each renewal date, keeps only items inside the reminder window (or overdue), and deduplicates non-overdue reminders using workflow static data.
6. Builds a renewal reminder email, logs it via the same compliance/audit workflow, and emails the assigned attorney (or a firm fallback address).

## Setup
1. Add Clio OAuth2 credentials, set the CLIO_BASE_URL variable, and ensure the Clio token has access to read matters.
2. Add Google Sheets credentials, set RENEWAL_DATES_SHEET_ID, and ensure the “Renewal Dates” sheet exists with columns like matter_ref, client_name, description, renewal_date, and attorney_email.
3. Configure email sending (SMTP/Email credentials) and set FIRM_FROM_EMAIL (and optionally FIRM_EMAIL) for the sender and fallback recipient.
4. Set GUARDRAIL_WORKFLOW_ID to an existing audit/logging workflow that accepts the provided inputs (channel, message, matter_id, recipient, template_id).
5. Optionally set DORMANT_THRESHOLD_DAYS and RENEWAL_REMINDER_DAYS to match your firm’s dormancy and reminder policies.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
