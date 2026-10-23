# 👥 Send weekly timesheet reminders to active agents with Gmail and Google Sheets

> ⚡ **5 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs every Friday at 16:00, reads an agent roster from Google Sheets, emails each active agent a personalized timesheet reminder via Gmail, and writes the date the reminder was sent back to the sheet.

## How it works
1. Runs every Friday at 16:00 on a schedule trigger.
2. Reads all agent rows from a Google Sheets roster using the configured spreadsheet URL.
3. Adds a row number to each record so the correct sheet row can be updated later.
4. Filters the list to only agents whose Status equals "Active".
5. Sends each active agent an HTML timesheet reminder email through Gmail, addressed to the agent and referencing the manager email.
6. Updates Google Sheets to record today’s date in the Last_Reminded column for each agent who was emailed.

## Setup
1. Connect Google Sheets OAuth2 credentials with access to the roster spreadsheet.
2. Connect Gmail OAuth2 credentials for the mailbox that sends the reminder emails.
3. Update the spreadsheet URL and manager email address in the workflow’s configuration values.
4. Ensure your Google Sheet contains the columns Agent_Name, Email, Status, and Last_Reminded, and that Status is set to "Active" for agents who should be reminded.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
