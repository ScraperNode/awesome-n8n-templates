# ⚙️ Draft and track incident postmortems with OpenAI, Google Sheets, Discord, and Gmail

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Postmortems written while the incident is still fresh. File an incident through a form and the workflow drafts a blameless postmortem, logs it and its action items to Google Sheets, and keeps the team posted on Discord and Gmail until every item is closed.

*Last updated: September 2026.*

## Quick Overview
This workflow captures incident reports via an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form, uses OpenAI (DeepSeek) to draft a blameless postmortem, logs results and action items to Google Sheets, and notifies the team through Discord and Gmail, including weekly follow-ups for open and overdue action items.

## How it works
1. Receives an incident report submission through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form trigger.
2. Normalizes the submitted fields, assigns an incident ID and timestamps, and validates that title, summary, and severity are present.
3. If required fields are missing, posts an alert to Discord and emails the reporter via Gmail to resubmit the incident report.
4. If the report is valid, sends the incident details to OpenAI (DeepSeek) to generate a JSON postmortem draft containing an overview, timeline, root cause, impact, action items, and a short digest.
5. Parses the AI output, appends the postmortem to a Google Sheets “Postmortems” tab, extracts and appends action items to a Google Sheets “ActionItems” tab, and emails the full postmortem to the reporter via Gmail.
6. Posts the digest to Discord, and if severity is high or critical, sends an additional on-call alert to Discord.
7. Every Monday at 09:00 (Asia/Jakarta), reads open action items from Google Sheets, emails and posts Discord alerts for overdue items, and sends a weekly digest (AI-written via OpenAI) to Gmail and Discord or posts an “all clear” message if none are open.

## Setup
1. Connect your OpenAI API credentials and select the DeepSeek model used for both postmortem drafting and weekly digest generation.
2. Connect your Google Sheets OAuth credentials and update the spreadsheet ID and ensure it contains “Postmortems” and “ActionItems” sheets with the expected columns.
3. Connect your Gmail OAuth2 credentials and update the recipient addresses used for the postmortem email and the weekly digest email.
4. Connect your Discord bot credentials and set the target server (guild) and channel IDs for invalid-report alerts, postmortem digests, overdue alerts, and weekly digest posts.
5. Review the weekly schedule (cron) and timezone settings and adjust them to match when you want follow-up reminders to run.

### Quick Answers
**What if the report is incomplete?**
If title, summary, or severity is missing, the workflow posts a Discord alert and emails the reporter via Gmail asking them to resubmit.

**What does the postmortem draft include?**
An overview, timeline, root cause, impact, action items, and a short digest, written in a blameless tone.

**Where do action items live?**
They are extracted from the draft and appended to the ActionItems tab in Google Sheets, alongside the postmortem in the Postmortems tab.

**How are open items followed up?**
Every Monday at 09:00 (Asia/Jakarta) open action items are read from Google Sheets, overdue ones trigger Gmail and Discord alerts, and a weekly digest goes out or an all-clear message is posted.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Discord, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
