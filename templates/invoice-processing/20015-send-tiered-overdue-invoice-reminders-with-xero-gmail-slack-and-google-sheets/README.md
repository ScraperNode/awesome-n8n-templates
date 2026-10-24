# 🧾 Send tiered overdue invoice reminders with Xero, Gmail, Slack, and Google Sheets

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily to pull unpaid invoices from Xero, calculates how overdue they are, sends tiered Gmail reminders and Slack alerts, and logs each invoice-tier reminder in Google Sheets to prevent duplicate follow-ups.

## How it works
1. Runs every day at 08:00 using a scheduled trigger.
2. Loads reminder thresholds (7/14/30 days) and then fetches unpaid invoices from Xero for the selected organisation.
3. Calculates each invoice’s days overdue, assigns it to a 7-, 14-, or 30-day tier, and prepares key fields like contact email, amount due, and a unique `invoiceId_tier` identifier.
4. Checks a Google Sheets log to see whether that `invoiceId_tier` reminder has already been sent and skips any that are already recorded.
5. For 7-day overdue invoices, sends a friendly reminder email to the customer via Gmail.
6. For 14-day overdue invoices, sends a firmer Gmail reminder and posts an internal Slack alert about the overdue invoice.
7. For 30-day overdue invoices, posts a Slack escalation message that includes a call task, then writes the processed `invoiceId_tier` entries back to Google Sheets.

## Setup
1. Add Xero OAuth credentials and set the correct Organisation/Tenant ID in the Xero node.
2. Add Gmail OAuth credentials and ensure your Xero contacts have an email address populated so reminders have a valid recipient.
3. Add Google Sheets OAuth credentials and point both Google Sheets nodes to a spreadsheet tab that includes an `invoiceId_tier` column for deduplication.
4. Add Slack credentials, set the target channel IDs in both Slack nodes, and invite the Slack app/bot to those channels.
5. Review and adjust the tier day thresholds and message text (email and Slack) to match your collections process before activating the workflow.

## Requirements
- ## Quick troubleshooting
- 403 AuthenticationUnsuccessful on Xero → usually Return All on, or wrong/expired org auth.
- Empty Calculate output → invoices not ≥ tier1 days overdue, or date parse issue (workflow already handles /Date(...)/ + DueDateString).
- Slack shows {{ $... }} text → message field missing leading =.
- No email → contactEmail null (Xero contact has no email).

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Google Sheets, Slack, Xero, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
