# 🔒 Collect and escalate security patrol reports with gpt-6-luna, Google Sheets, and Gmail

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

Patrol reports that reach the right person before the shift ends. This workflow takes guard reports from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, has gpt-6-luna grade the severity and write a summary a supervisor can read in ten seconds, logs every report to Google Sheets, and emails the ops supervisor and the site client the moment a report is urgent.

*Last updated: October 2026.*

## Quick Overview
This workflow collects security patrol and incident reports through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form, uses gpt-6-luna to classify each report as urgent, normal or informational and write a supervisor-ready summary, logs every report to Google Sheets, and escalates urgent incidents by email to the ops supervisor and the site client. A daily 06:00 digest covers the last 24 hours, and a monthly AI review summarizes the last 30 days.

## How it works
1. Receives a patrol log or incident report through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and normalizes the officer, site, shift, report type and event time fields while generating a unique report ID (SEC-yyyyMMdd-###) and a submission timestamp.
2. Validates that officer name, officer email, site or client, and the description are present. If anything is missing the report is not saved and the officer gets an email listing what was missing and the values that were posted.
3. Sends the report to gpt-6-luna, which classifies severity as urgent (immediate threat to people or property), normal (needs attention but not an emergency) or informational, and writes a plain-text summary under 60 words with one suggested action for urgent items.
4. Merges the AI severity, summary and suggested action back onto the report, flags it as urgent or not, and appends the full record including the supervisor and client addresses to the "Security Log" tab in Google Sheets.
5. For urgent reports, emails the ops supervisor an URGENT alert with the summary and suggested action, then emails the site client an urgent incident notice confirming the supervisor is coordinating the response.
6. Runs daily at 06:00, reads the log, keeps the last 24 hours of reports and emails a daily activity report to the ops manager, one line per report, with "(INCLUDES URGENT ITEM)" in the subject when the window holds an urgent report.
7. Runs on the 1st of the month at 08:00, collates the last 30 days into totals, incident and urgent counts and reports by site, and has gpt-6-luna draft the monthly review email (subject plus body) for the ops manager.

## Setup
1. Create a Google Sheets file with a tab named "Security Log" and make sure the columns match the fields written by the Google Sheets nodes, then paste the spreadsheet id into those nodes.
2. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and an [OI] chat model, and select the correct accounts in the respective nodes.
3. Set the supervisor and client email addresses in the Normalize Report node, and review the fallback addresses used by the alert nodes.
4. Publish the patrol report form and share its URL with the guards.
5. Confirm the daily (06:00) and monthly (1st, 08:00) schedule times match your timezone, then activate the workflow.

### Quick Answers
**How does a guard report get escalated?**
The guard submits the form, the report is normalized and validated, gpt-6-luna grades the severity, and the record is appended to the Security Log. When the severity is urgent the ops supervisor gets an email alert and the site client gets an urgent incident notice in the same run.

**What does gpt-6-luna actually do?**
Two things. On intake it classifies the report as urgent, normal or informational, writes a summary a supervisor can read in ten seconds and adds one suggested action for urgent items. On the 1st of the month it drafts the monthly site review email from the collated totals.

**What happens if a guard leaves something out?**
The report is not saved. The officer gets an email listing the required fields (officer name, officer email, site or client, and what happened) plus the values that were posted, and can fix the form and resubmit.

**How do I know what happened overnight?**
A daily activity report runs at 06:00 with the last 24 hours of reports, one line per report, and the subject is flagged when the window includes an urgent item.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
