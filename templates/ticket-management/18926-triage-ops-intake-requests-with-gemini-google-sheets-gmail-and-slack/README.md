# 🎫 Triage ops intake requests with Gemini, Google Sheets, Gmail, and Slack

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives ops requests via a webhook, uses Google Gemini to classify and summarize them, prevents duplicates using Google Sheets, then logs the task, emails the requester via Gmail, and alerts the ops team in Slack.

## How it works
1. Receives a POST request on a webhook with requester details, department, subject, and message.
2. Normalizes the payload, validates required fields, and returns an error response if key fields are missing.
3. Combines the subject, department, and message into a single text block and sends it to Google Gemini to produce structured JSON (request type, summary, urgency, owner suggestion, and checklist).
4. Parses the Gemini response, calculates a priority score and priority level, and generates a task ID and task metadata.
5. Checks Google Sheets for an existing task with the same requester email and derived channel ID, returning a duplicate error if one is found.
6. Appends the new task record to a Google Sheets task register, sends an acknowledgement email via Gmail, posts an internal alert to Slack, and returns the structured task details to the webhook caller.

## Setup
1. Configure the source form/app to POST to the workflow’s webhook URL and include name, email, department, subject, and message fields in the JSON body.
2. Add credentials for Google Gemini (PaLM/Google AI), Google Sheets, Gmail, and Slack in n8n.
3. Create or select a Google Sheets “Task Register” with columns matching the fields the workflow writes (for example task_id, requester_email, department, summary, priority, priority_score, owner_suggestion, checklist, status, and raw text), and update the spreadsheet and sheet IDs if needed.
4. Set the target Slack channel and confirm the Gmail account used for sending acknowledgements is allowed to email your requesters.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
