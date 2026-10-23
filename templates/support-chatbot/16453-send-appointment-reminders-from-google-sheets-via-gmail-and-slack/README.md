# 💬 Send appointment reminders from Google Sheets via Gmail and Slack

> ⚡ **40 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow runs daily at 9:00, reads appointments from Google Sheets, emails next-day patients reminders via Gmail, and posts a reminder count to a Slack channel.

## How it works
1. Runs every day at 9:00 using a schedule trigger.
2. Reads all appointment rows from a specified Google Sheets worksheet.
3. Filters the rows to keep only appointments whose Date matches tomorrow’s ISO date (YYYY-MM-DD).
4. Sends a personalized reminder email for each remaining appointment using Gmail.
5. Counts how many reminders are sent and generates a summary payload for tomorrow’s date.
6. Posts the reminder count summary to a selected Slack channel.

## Setup
1. Connect Google Sheets OAuth and set the target spreadsheet and sheet, ensuring columns like Patient, Email, Date, and Time exist.
2. Ensure the Date values in Google Sheets are stored in a format compatible with the filter logic (ISO-style YYYY-MM-DD at the start of the field).
3. Connect Gmail OAuth and update the sender account, subject, and message text as needed.
4. Connect Slack OAuth and select the channel where the front desk summary should be posted.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
