# 🔬 Track grant deadlines and spend down with OpenAI, Google Sheets, Gmail and Telegram

> ⚡ **56 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Grant deadlines and budgets that chase you instead of the other way around. This workflow logs awards and spend-downs in Google Sheets, turns award terms into a reporting calendar, drafts reminders and finance notes with AI, and keeps the grant lead in the loop through Gmail and Telegram.

*Last updated: September 2026.*

## Quick Overview
This workflow tracks grant awards and drawdowns in Google Sheets, uses OpenAI to generate reporting calendars and reminder drafts, and sends updates via Gmail and Telegram, with scheduled weekly deadline reminders and a monthly portfolio review for high-burn or near spend-by awards.

## How it works
1. Receives a new grant award via a POST webhook and normalizes the payload into consistent fields like funder, program, amount, term, reporting cadence, and key contacts.
2. Validates that required award fields are present, then uses OpenAI to convert the award terms into a JSON reporting calendar with milestones, due dates, buffer days, and a compliance risk note.
3. Appends the award to the Google Sheets “Awards” tab, writes each milestone as a row in the “Deadlines” tab, emails the calendar to the grant lead via Gmail, and posts a new-award alert to Telegram.
4. If an award payload is invalid, emails an admin via Gmail, alerts the team in Telegram, and logs the rejection to the Google Sheets “Errors” tab.
5. Receives a grant spend entry via a POST webhook, validates it, looks up the matching award in Google Sheets, logs the spend in “SpendLog,” and updates the award’s running spend total in “Awards.”
6. When burn is at least 80% or the spend-by date is within 45 days, uses OpenAI to draft a short finance note, emails it to the grant lead via Gmail, and posts an alert to Telegram.
7. Runs every Monday morning to find pending deadlines due within 30 days, uses OpenAI to draft reminder emails with a data checklist, emails the grant lead, alerts Telegram, logs the reminder in “ReminderLog,” and marks the deadline as “reminder sent” in Google Sheets.
8. Runs on the first of each month to review the full awards portfolio for items needing attention (burn ≥80% or spend-by within 45 days), then uses OpenAI to create a digest and emails it to the finance lead via Gmail.

## Setup
1. Create a Google Sheets document with tabs named Awards, Deadlines, SpendLog, ReminderLog, and Errors, and update the workflow’s Google Sheets document ID if you use a different file.
2. Add credentials for OpenAI, Google Sheets, Gmail, and Telegram, and update the Telegram chat ID and admin/finance email addresses used for alerts.
3. Copy the two webhook URLs (grant-award and grant-spend) and configure your award intake source and finance/spend system to POST the expected fields to them.
4. Ensure the Awards tab includes an award_id column (used for matching) and a spent_to_date column (used for burn calculations).
5. Adjust the alert thresholds (80% burn, 45 days to spend-by, 30-day reminder window) in the workflow conditions to match your compliance policy.

### Quick Answers
**What happens when a new grant award comes in?**
A webhook receives it, OpenAI converts the award terms into a reporting calendar with milestones and due dates, the award is appended to the “Awards” tab and each milestone to “Deadlines,” the calendar is emailed to the grant lead, and a new-award alert is posted to Telegram.

**When does a grant start getting attention from AI?**
When burn reaches at least 80% or the spend-by date is within 45 days, the workflow drafts a short finance note, emails it to the grant lead, and posts a Telegram alert.

**What does the Monday morning run do?**
It finds deadlines due within 30 days, drafts reminder emails with a data checklist, emails the grant lead, alerts Telegram, logs the reminder, and marks the deadline as “reminder sent” in Google Sheets.

**What is reviewed on the first of each month?**
The full awards portfolio is scanned for items needing attention (burn ≥80% or spend-by within 45 days), then an AI digest is created and emailed to the finance lead.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
