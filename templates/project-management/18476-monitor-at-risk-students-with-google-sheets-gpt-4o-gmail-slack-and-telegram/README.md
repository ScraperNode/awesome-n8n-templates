# 📋 Monitor at-risk students with Google Sheets, GPT-4o, Gmail, Slack and Telegram

> ⚡ **71 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs weekly to read student performance data from Google Sheets, calculates a risk index and trend, generates personalised nudge messages with OpenAI for high-risk students, posts a teacher digest to Slack and Telegram, and logs weekly snapshots back to Google Sheets.

## How it works
1. Runs every week on a schedule trigger.
2. Reads all student records from a Google Sheets “Student Data” worksheet.
3. Calculates attendance, assignment completion, average test score, risk index, risk level (HIGH/MEDIUM/LOW), and a week-to-week score trend for each student.
4. Sends HIGH-risk students to OpenAI (GPT-4o mini) to generate a short, encouraging WhatsApp-style nudge message and emails the generated message via Gmail.
5. Builds a weekly digest of all HIGH and MEDIUM risk students and posts it to a Slack channel and a Telegram chat.
6. Appends a dated snapshot of each student’s metrics and risk label to a Google Sheets “Log Trend” worksheet for historical tracking.
7. If the workflow fails, an error trigger posts an alert to Slack with a basic failure message.

## Setup
1. Connect Google Sheets OAuth2 credentials and replace the spreadsheet ID and worksheet names/IDs used for “Student Data” and “Log Trend.”
2. Add an OpenAI credential for the OpenAI node (GPT-4o mini) and adjust the prompt text if you want different message tone or constraints.
3. Connect Gmail OAuth2 credentials and set the email recipient(s) for the student nudge emails.
4. Connect Slack OAuth2 credentials and set the target channel(s) for both the teacher digest and error alerts.
5. Add Telegram bot credentials and set the target chat ID for the Telegram digest message.
6. Update the schedule trigger to match your reporting cadence (the default runs weekly at 7:00).

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
