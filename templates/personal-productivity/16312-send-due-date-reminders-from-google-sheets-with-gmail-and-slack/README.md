# ⚡ Send due-date reminders from Google Sheets with Gmail and Slack

> ⚡ **5 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs daily, reads deadline rows from Google Sheets, and sends due-soon, due-today, or overdue reminder emails via Gmail, escalating overdue items to Slack and updating the sheet to prevent duplicate reminders.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Reads all rows from a Google Sheets worksheet.
3. Filters out completed items and rows already reminded today, then classifies remaining rows as due soon, due today, or overdue based on the DueDate.
4. Sends an HTML reminder email through Gmail to the address in the Email column with a subject and message tailored to the urgency.
5. Posts an escalation message to a specified Slack channel for items that are overdue.
6. Updates each reminded row in Google Sheets by writing today’s date to the NotifiedOn column using the stored row number.

## Setup
1. Add Google Sheets credentials and replace the spreadsheet URL/ID and sheet name used for reading and updating.
2. Add a Gmail OAuth2 credential and ensure the Email column contains valid recipient addresses.
3. Add Slack credentials and set the target channel (for example, #deadlines) for overdue escalations.
4. Ensure your sheet includes the columns Title, DueDate (YYYY-MM-DD), Email, Status, and NotifiedOn, and uses Status = "Done" for completed items.
5. Adjust the reminder window by changing REMINDER_WINDOW_DAYS in the date-classification code if needed.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
