# ⚡ Send daily WhatsApp task reminders from Google Sheets via WAHA

> ⚡ **111 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every afternoon, reads Google Sheets tasks due today, groups unfinished tasks by assignee, and sends each person a single WhatsApp reminder via a WAHA API endpoint, then increments a follow-up counter in the sheet for each reminded task.

## How it works
1. Runs every afternoon on a schedule trigger.
2. Loads WhatsApp (WAHA) connection details and pulls rows from a Google Sheets “Task” sheet filtered to tasks with a Due_Date matching today.
3. Keeps only tasks whose Status is “Not Started” or “Ongoing”.
4. Groups the remaining tasks by Assigned_To and builds one WhatsApp message per assignee listing all their due-today tasks.
5. Sends each assignee’s message to WhatsApp via an HTTP POST to the WAHA `/api/sendText` endpoint.
6. Extracts the Task ID values included in each sent message and updates Google Sheets to increment `Count_no._of_FollowUp` for each task, pausing briefly between updates.

## Setup
1. Connect your Google Sheets credentials and replace `YOUR_GOOGLE_SHEET_ID` with your spreadsheet ID.
2. Ensure the “Task” sheet includes the columns `Task ID`, `Assigned_To`, `Assignee_WhatsApp`, `Task_Details`, `Due_Date`, `Status`, and `Count_no._of_FollowUp`.
3. Provide a WAHA server URL, API key, session name, and country code prefix in the workflow configuration values used by the WhatsApp HTTP request.
4. Store Due_Date values in the same format the workflow filters for (for example, `05 Apr 2026`) and make sure Status values match “Not Started”/“Ongoing” or adjust the filter accordingly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
