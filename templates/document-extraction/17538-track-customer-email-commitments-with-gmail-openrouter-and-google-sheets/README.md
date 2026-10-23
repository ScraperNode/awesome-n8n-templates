# 🔬 Track customer email commitments with Gmail, OpenRouter and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow scans sent Gmail messages on a schedule, uses OpenRouter (LLM via HTTP) to extract explicit customer commitments, and logs them to Google Sheets with status and traceability links, then emails daily due-soon/overdue reminders and escalation notices via Gmail.

## How it works
1. Runs on an hourly schedule (or manually) to search Gmail Sent Mail for unprocessed messages matching your query.
2. Filters out internal/automated recipients and empty messages, then prepares the email content and metadata for analysis.
3. Sends each eligible message to OpenRouter’s chat completions API to extract a structured commitment (action, exact promise, owner, due date, and confidence).
4. Labels each assessed Gmail message with a processed label to prevent re-scanning.
5. If a commitment is detected, appends a row to a Google Sheets “Commitments” register with the extracted fields, confidence, status, and source message links.
6. Emails either the reviewer (for low-confidence/unclear due dates) or the owner (for open commitments) using Gmail.
7. Runs every weekday morning to read open/rescheduled rows in Google Sheets and emails each owner a due-soon/overdue action list, escalating overdue items to the manager after the configured delay.

## Setup
1. Connect Gmail credentials (for reading sent messages, applying labels, and sending internal notifications).
2. Connect Google Sheets credentials and set the target spreadsheet ID and tab name for the commitment register.
3. Add an OpenRouter HTTP Header Auth credential and select a supported model name in the template fields.
4. Create a Gmail label (default: `n8n-commitment-tracked`) and ensure your Gmail search query excludes it to avoid duplicate processing.
5. Create the commitment register headers in Google Sheets to match the fields the workflow appends (for example Commitment ID, Status, Due Date/Time, Owner Email, Customer Email, Commitment Action, Exact Commitment, Confidence, Source Link).
6. Update the template fields for internal domains, default owner/reviewer/manager emails, confidence threshold, reminder window, escalation delay, and timezone.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
