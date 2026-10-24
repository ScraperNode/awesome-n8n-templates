# 📋 Delegate and track WhatsApp tasks with WhatsApp, Google Sheets and OpenAI

> ⚡ **61 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow receives WhatsApp messages via a WAHA webhook and uses OpenAI agents to create, query, and update tasks stored in Google Sheets, while assignee replies (optionally with photo proof saved to Google Drive) are summarized and forwarded to one or two supervisors.

## How it works
1. Receives an incoming WhatsApp message through a webhook endpoint exposed by n8n.
2. Checks whether the message comes from a configured supervisor chat ID; supervisor messages are handled by an OpenAI agent that reads/writes tasks and contacts in Google Sheets and replies back in WhatsApp via the WAHA API.
3. For non-supervisor messages, ignores bot/status broadcasts and then verifies the message is a reply quoting an original task message.
4. If the user did not quote a task, sends a WhatsApp prompt via the WAHA API asking them to use a quoted message.
5. If the user quoted a task, an OpenAI agent extracts the Task ID from the quoted text, interprets the assignee’s update (status, due date, and summary), and updates the matching row in Google Sheets.
6. Sends the formatted task update to the supervisor via WhatsApp, and if a photo is attached it downloads it, uploads it to Google Drive, and forwards the update with the image to both supervisors.

## Setup
1. Add credentials for OpenAI, Google Sheets, Google Drive, and Postgres (used to store chat history for both the supervisor and assignee conversations).
2. In the configuration values, set your WAHA server URL, WAHA API key, session name, supervisor and second supervisor chat IDs, and the bot’s own chat ID.
3. Replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID and ensure it contains a "Task" sheet with columns like Task ID, Assigned_To, Task_Details, Status, Due_Date, Reply_Summary, and Last_User_Reply.
4. Add a Google Drive folder and set YOUR_DRIVE_FOLDER_ID for storing assignee photo proof uploads.
5. Copy the production webhook URL for the workflow and configure WAHA to send incoming WhatsApp messages to this endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, OpenAI Chat Model, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
