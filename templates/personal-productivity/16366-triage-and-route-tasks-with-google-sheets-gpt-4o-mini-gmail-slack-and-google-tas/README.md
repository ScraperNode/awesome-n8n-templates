# ⚡ Triage and route tasks with Google Sheets, GPT-4o-mini, Gmail, Slack, and Google Tasks

> ⚡ **29 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow collects tasks via a webhook, stores validated tasks in Google Sheets, and runs a daily prioritization routine that creates urgent items in Google Tasks with Slack alerts while summarizing medium/low tasks with OpenAI and emailing the digest via Gmail.

## How it works
1. Receives a POST webhook request containing task details and normalizes fields like priority and due date.
2. Validates required fields (including allowed priority values) and rejects invalid submissions with an error.
3. Appends valid tasks to Google Sheets with a pending status and returns a success response to the webhook caller.
4. Runs daily on a schedule, reads tasks from Google Sheets, keeps only pending items, removes duplicates, and sorts them by priority.
5. For high-priority tasks, creates a Google Tasks item and sends a Slack alert.
6. For medium and low-priority tasks, compiles a digest, generates an email-ready summary with OpenAI, and sends it via Gmail.
7. Updates each handled task in Google Sheets with a Processed status and a processed timestamp.

## Setup
1. Create a Google Sheet with columns for taskName, priority, category, dueDate, status, createdAt, and processedAt, and update the spreadsheet and sheet IDs in the Google Sheets steps.
2. Add Google Sheets OAuth2 credentials for both reading and updating/appending rows.
3. Add credentials for Google Tasks, Slack (OAuth2), Gmail, and OpenAI, and set the target Google Task list, Slack destination, and email recipients/subject as needed.
4. Copy the webhook URL from the webhook trigger and configure your task intake source to send POST requests with fields like "Task Name", "Priority", "Category", and "Due Date".
5. Adjust the schedule time and any validation rules (required fields and accepted priority values) to match your process.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Tasks, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
