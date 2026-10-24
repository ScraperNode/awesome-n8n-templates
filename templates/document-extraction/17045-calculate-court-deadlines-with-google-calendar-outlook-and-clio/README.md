# 🔬 Calculate court deadlines with Google Calendar, Outlook, and Clio

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a webhook with a trigger date and deadline rules, calculates court deadlines (skipping weekends and US federal holidays for business-day rules), then creates matching events in Google Calendar or Microsoft Outlook, creates high-priority tasks in Clio, logs each deadline to a Google Sheets audit sheet.

## How it works
1. Receives a POST webhook request containing a matter ID, trigger date, optional rule set, and the target calendar platform.
2. Validates the payload and stops early if the matter ID is missing or the trigger date is not in YYYY-MM-DD format.
3. Calculates one deadline per rule using calendar-day or business-day offsets that skip weekends and US federal holidays.
4. Creates a calendar entry for each deadline in Google Calendar (all-day) or Microsoft Outlook via Microsoft Graph (timed), depending on the requested platform.
5. Creates a high-priority pending task in Clio for each deadline and links it to the provided Clio matter ID.
6. Appends one audit row per deadline to the “Audit Log” tab in the OPS1 Compliance Log Google Sheet.

## Setup
1. Configure the webhook URL in the system that triggers deadline creation and ensure it sends at least matter_id and trigger_date (YYYY-MM-DD), plus clio_matter_id if you want tasks linked to a Clio matter.
2. Edit the DEFAULT_RULES in the Calculate Deadlines step (or pass a rules array in the webhook payload) to match your firm-approved deadline rules.
3. Set n8n Variables for FIRM_NAME, FIRM_EMAIL, FIRM_TIMEZONE, OPS1_SHEET_ID, and FIRM_OUTLOOK_TIMEZONE (required only if you use Outlook).
4. Add credentials for Clio (HTTP Header Auth bearer token), Google Sheets (OAuth2) for the audit log, and either Google Calendar OAuth2 or Microsoft Outlook OAuth2 depending on your chosen calendar platform.
5. In the calendar step, update the target calendar ID if you want to write to a shared calendar instead of the user’s primary calendar.

## Additional info
## Who we are

We're Protomated. We build the operational systems that carry a law firm through the whole client lifecycle: getting clients, converting them into signed matters, and keeping them through deadlines, updates, and follow-up. More at protomated.com.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
