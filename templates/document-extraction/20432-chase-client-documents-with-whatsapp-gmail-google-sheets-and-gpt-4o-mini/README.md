# 🔬 Chase client documents with WhatsApp, Gmail, Google Sheets and GPT-4o-mini

> ⚡ **53 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects client document requests for a CA firm, creates a Google Drive folder and Google Sheets tracker entry, and sends upload links via WhatsApp Cloud API and Gmail, then chases pending items with OpenAI-written reminders, logs activity, and serves a password-protected status board.

## How it works
1. Accepts a new document request either from a staff form submission or a POST webhook and normalizes the client details, due date, and required-document list.
2. Creates a dedicated client folder in Google Drive and appends a new tracking row in Google Sheets with the upload link and reminder schedule.
3. Sends the initial document request to the client via a WhatsApp Cloud API template message and a Gmail email containing the checklist and personal upload link, then logs the request in the Google Sheets activity log.
4. Receives client uploads through an n8n Form, looks up the matching request in Google Sheets, saves each uploaded file into the client’s Google Drive folder, and updates the received/pending checklist and status in the tracker.
5. Sends the client an upload receipt by WhatsApp and Gmail showing what is still missing, and emails the assigned CA when all required documents are received.
6. Runs every day at 10:00 (Mon–Sat) to pull open requests from Google Sheets, email a team digest, generate reminder email copy with OpenAI, send WhatsApp and Gmail reminders, update reminder counters/dates, and escalate to the assigned CA by email when required.
7. Serves a live HTML status board via a webhook that reads request data from Google Sheets and returns 401 unless the correct board key is provided.

## Setup
1. Create a Google Sheet with two tabs named “Document Requests” and “Activity Log”, and update the sheet ID and tab names in the three configuration steps used for intake, uploads, and the daily chaser.
2. Create a Google Drive root folder for client documents, connect Google Drive credentials, and set the root folder ID in the configuration steps.
3. Connect Gmail credentials for sending client emails, CA escalations, and the daily team digest, and set the team email address.
4. Add an OpenAI credential (model set to gpt-4o-mini) for drafting reminder emails.
5. Configure WhatsApp Cloud API header authentication, set your WhatsApp phone number ID and API version, and create/approve the message templates named document_request, document_reminder, and documents_received.
6. Set your public n8n base URL and change the board_key value, then use the generated upload link and status board URL (with ?key=…) in your internal process before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
