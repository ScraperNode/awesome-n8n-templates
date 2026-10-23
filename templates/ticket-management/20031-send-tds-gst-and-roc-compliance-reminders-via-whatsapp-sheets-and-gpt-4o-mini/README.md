# 🎫 Send TDS, GST and ROC compliance reminders via WhatsApp, Sheets and GPT-4o-mini

> ⚡ **39 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow uses Google Sheets as a compliance tracker for CA firms, sending scheduled WhatsApp Business API reminders for upcoming TDS/GST/ROC deadlines and handling inbound WhatsApp messages to store client documents in Google Drive and classify them with OpenAI to update checklist status.

## How it works
1. Runs on the 1st and 15th of each month at 6 AM to read the client roster and existing Compliance_Tracker from Google Sheets.
2. Generates upcoming TDS, GST, and ROC tasks for active clients, skips tasks that already exist, and appends new rows to the Compliance_Tracker sheet in Google Sheets.
3. Runs daily at 9 AM to read the Compliance_Tracker sheet and group open tasks per client that need a reminder based on due dates and missing documents.
4. Sends one WhatsApp Business API message per client with a summary of upcoming/overdue items and missing documents, then updates the tracker rows with the reminder date and incremented reminder count.
5. Triggers on inbound WhatsApp messages, matches the sender to a client from the Clients sheet, and replies with the current checklist when the message is text.
6. For inbound files (documents or images), downloads the media via the WhatsApp Business API, uploads it to the client’s Google Drive folder, uses OpenAI (gpt-4o-mini) to match it to pending checklist items, updates the Compliance_Tracker and Upload_Log sheets in Google Sheets, and sends a confirmation message back on WhatsApp.

## Setup
1. Create a WhatsApp Business API (Meta Graph) setup, add an HTTP Header Auth credential with your access token, and replace REPLACE_WITH_PHONE_NUMBER_ID in both WhatsApp send request URLs.
2. Connect Google Sheets OAuth2 credentials and set the correct spreadsheet IDs for the Clients, Compliance_Tracker, and Upload_Log sheets.
3. Connect Google Drive OAuth2 credentials, ensure each client row has a drive_folder_id (or set a root folder ID fallback), and confirm the workflow has access to those folders.
4. Add an OpenAI credential with access to gpt-4o-mini for document classification.
5. Configure the WhatsApp Trigger webhook in your Meta app to point to the n8n webhook URL, then activate the schedule triggers and the WhatsApp trigger.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, OpenAI, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
