# 🔧 Accounting Deadline Alerts Automations

> ⚡ **201 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This is the free DIY version of Deadline Autopilot: Automatically track Companies House filing deadlines for every client in your UK accounting practice. Daily API checks, colour-coded email alerts, and Google Sheets audit trail — so no filing ever slips. https://ihsanops.ai/deadline-management 

## How it works
1. A schedule trigger runs the workflow automatically every weekday at 5 PM, so deadline checks happen without anyone remembering to run them.
2. The workflow reads your full client list from Google Sheets, then queries the Companies House API for each company to pull its live accounts and confirmation-statement filing deadlines.
3. Latest deadline dates are written straight back to the tracking sheet, keeping your single source of truth current.
4. An HTML email is built with colour-coded urgency (Red/Orange/Yellow/Green by days remaining), a table sortable by due date, and a Yes/No confirmation button per company, then sent to your team via Gmail.
5. When a recipient clicks Yes or No, a webhook records that response and a timestamp back into Google Sheets and shows a confirmation page — giving you a full audit trail of who confirmed what and when.

## Setup
1. Create a Google Sheet with these columns: company_number, company_name, accounts_due, confirmation_due, confirmation_submitted, last_updated. Manually enter company_number and company_name for each client; the rest auto-populate.
2. Get a free Companies House API key from api.company-information.service.gov.uk and add it as a credential in n8n.
3. Connect your Google Sheets OAuth (read/write) and Gmail OAuth (sending) credentials.
4. Open the Build Interactive Email node and update the webhook URL to match your own n8n instance.
5. Activate the workflow. The daily check now runs Monday to Friday at 5 PM. Total setup time is roughly 15 minutes once credentials are ready.

## Requirements
- Companies House API key (free from api.company-information.service.gov.uk)
- Google Sheets OAuth credential (read/write access)
- Gmail OAuth credential (for sending alerts)
- A Google Sheet with the columns listed in Setup

## Customization
- Change the run schedule in the trigger node (e.g. a morning send instead of 5 PM)
- Adjust the colour-coding thresholds to match how far ahead your practice likes to work
- Swap Gmail for Outlook or SMTP, or route alerts to Slack instead of email
- Extend the sheet to track additional filing types beyond accounts and confirmation statements

## Additional info
Saves 2–3 hours per week per firm and eliminates manual tracking errors across 10–50+ companies — no filing falls through the cracks. Built by Ali Amin, founder of Ihsan Ops, practical automation for UK accounting practices and SMEs. Want it installed and tuned for your firm, or a custom workflow built? ihsanops.ai — Less admin. More growth.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
