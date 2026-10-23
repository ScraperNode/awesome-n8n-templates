# 🧾 Collect and reconcile rent with Google Sheets, Gmail, Twilio, and OpenAI

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs hourly to calculate rent due from Google Sheets leases, match incoming bank statement lines to tenants, and automatically chase arrears via Twilio SMS and Gmail email, using OpenAI to classify tenant replies and pause, escalate, or route cases to a manager.

## How it works
1. Runs every hour on a schedule, and also triggers when an inbound Twilio SMS or Gmail inbox email arrives.
2. Loads lease, owner, index, bank, and log data from Google Sheets to rebuild the current rent ledger and previous actions.
3. Calculates rent charges (including proration and optional late fees), matches bank statement credits/returns to leases, and decides which reminders, escalations, rent reviews, digests, and owner statements are due.
4. Appends every decision (charges, matched payments, reminders, holds, reviews, and alerts) as new rows in the Google Sheets Log tab.
5. Sends queued outbound messages via Twilio (SMS) or Gmail (email) based on each log entry’s target channel and contact.
6. When a tenant or manager replies, normalizes the message, uses OpenAI to extract intent and evidence, updates the log with holds/promises/opt-outs or review approvals, and sends acknowledgements or forwards items to the manager by email.
7. If the workflow errors, sends an alert email via Gmail with the execution details.

## Setup
1. Create a Google Sheets spreadsheet with tabs named Leases, Owners, Index, Bank, and Log, and provide a Google Sheets credential with access to it.
2. Add Gmail credentials for sending emails and for the Gmail trigger, then set the manager email and failure alert recipient email in the workflow.
3. Add Twilio credentials, configure a Twilio phone number for outbound SMS, and set the number in the rent settings.
4. Add an OpenAI credential for the information extraction step used to classify replies.
5. Update the Set Rent Settings node with your Google Sheet ID, business/manager details, bank payment details, timezone/locale/currency, and chasing/review rules, and edit Set Message Texts to match your wording and language.
6. Paste or sync your bank statement data into the Bank tab using the expected columns (date/amount/reference/payer and optional lease_id) so payments can be matched reliably.

## 🔗 Nodes Used

Google Sheets, Twilio, Gmail, Gmail Trigger, Schedule Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
