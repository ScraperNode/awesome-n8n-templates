# 👥 Send weekly shift reminders from Google Sheets with Gmail

> ⚡ **16 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs every Monday morning to read a shift schedule from Google Sheets, email each security agent a personalized reminder for confirmed shifts that have not been notified yet via Gmail, and then updates the sheet to mark each shift as notified.

## How it works
1. Runs every Monday at 07:00 on a schedule.
2. Reads all rows from your shift schedule in Google Sheets.
3. Keeps only shifts where Status is "Confirmed" and the Notified field is empty.
4. Sends each matching agent an HTML shift reminder email via Gmail using the row’s date, time, and site details.
5. Updates the corresponding Google Sheets row by setting Status to "Notified" and writing today’s date to the Notified column.

## Setup
1. Connect Google Sheets OAuth2 credentials and Gmail OAuth2 credentials.
2. Update the Google Sheets URL in the workflow’s configuration value (sheetUrl).
3. Ensure your sheet includes columns for Agent_Name, Email, Shift_Date, Shift_Start, Shift_End, Site, Status, and Notified, and that Status is set to "Confirmed" for shifts that should trigger reminders.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
