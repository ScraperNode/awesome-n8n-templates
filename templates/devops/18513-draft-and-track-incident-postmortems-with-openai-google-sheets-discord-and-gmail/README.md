# ⚙️ Draft and track incident postmortems with OpenAI, Google Sheets, Discord and Gmail

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Incidents become lessons automatically. This workflow takes incident reports from a form, has AI draft a structured postmortem with root cause and action items, logs everything to Sheets, and keeps stakeholders posted. Overdue actions get chased weekly, trends get summarized monthly.

*Last updated: September 2026.*

## Quick Overview
This workflow collects incident reports via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form, uses OpenAI (DeepSeek) to draft a structured postmortem, logs postmortems and action items to Google Sheets, and notifies stakeholders through Gmail and Discord, with weekly overdue reminders and a monthly RCA trend summary sent to Telegram.

## How it works
1. Receives an incident report submission through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) hosted form.
2. Normalizes the input, generates an incident ID and timestamp, and validates that required fields (title, summary, severity) are present.
3. If the report is incomplete, posts an alert to Discord and emails the reporter to resubmit with the missing details.
4. If the report is valid, sends an acknowledgment email via Gmail and uses OpenAI (DeepSeek) to generate a JSON postmortem draft with overview, timeline, root cause classification, impact, SLA hours, and action items.
5. Parses the AI output, appends the postmortem to a Google Sheets “Postmortems” log, extracts action items, and appends them to a Google Sheets “ActionItems” tracker.
6. Emails the full postmortem draft to the reporter via Gmail and posts a digest to Discord, escalating high or critical incidents with an on-call alert that includes SLA hours.
7. Runs weekly to read open action items from Google Sheets and, if any are overdue, emails reminders and posts overdue alerts to Discord (or posts an all-clear message if none are open).
8. Runs monthly to read this month’s postmortems from Google Sheets, summarizes RCA trends with OpenAI (DeepSeek), and sends the trend report to a Telegram chat.

## Setup
1. Add credentials for Gmail, Google Sheets, Discord Bot, OpenAI, and Telegram.
2. Create a Google Sheets spreadsheet with “Postmortems” and “ActionItems” tabs (with matching columns), then update the spreadsheet ID and sheet names in the Google Sheets nodes.
3. Configure your Discord server (guild) and target channel IDs in the Discord message steps.
4. Update recipient addresses in the Gmail steps (acknowledgment, invalid report notice, and stakeholder postmortem email) to match your escalation and notification list.
5. Set the Telegram chat ID for where monthly RCA reports should be delivered.
6. Review and adjust the weekly and monthly cron schedules and timezone to match your team’s follow-up cadence.

### Quick Answers
**What if a report is incomplete?**  
Discord gets an alert and the reporter gets an email asking to resubmit with the missing details.  
**How are overdue actions chased?**  
Weekly reminders via email and Discord, or an all-clear message when nothing is open.  
**Is there trend analysis?**  
Yes. Monthly RCA trend summaries go to Telegram.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Discord, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
