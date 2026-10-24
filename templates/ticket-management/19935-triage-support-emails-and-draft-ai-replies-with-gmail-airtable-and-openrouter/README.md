# 🎫 Triage support emails and draft AI replies with Gmail, Airtable and OpenRouter

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox, logs new support emails to Airtable, and uses OpenRouter (with an OpenAI fallback) to categorize, summarize, and draft replies as Gmail drafts, while alerting your team via Gmail when human review is needed or processing errors occur.

## How it works
1. Triggers every minute from Gmail to fetch inbox messages, and also runs every 15 minutes on a schedule to check for stuck Airtable records.
2. Normalizes each email body (converting HTML to text when needed) and skips newsletters, auto-replies, bulk mail, and messages from configured sender patterns.
3. Processes emails one at a time and searches Airtable by Gmail Message ID to skip messages that are already logged.
4. Creates an Airtable record with status Processing, then sends the email content to an OpenRouter chat model (falling back to an OpenAI chat model) to return structured JSON including category, confidence, summary, and a draft reply.
5. Validates the AI output, updates the Airtable record with the classification and draft, and creates a Gmail draft reply in the original thread without sending it.
6. Sends a review alert to the configured alert email address when confidence is below the threshold, the category requires review, or the AI requests human review, and marks the Airtable record as alerted.
7. On processing failures, upserts/updates the Airtable record as Error and emails the team with troubleshooting links, and the scheduled check marks long-running Processing records as Error and alerts the team.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail Trigger and the Gmail nodes that create drafts and send alert emails.
2. Connect an Airtable Personal Access Token and create a table with the fields used by the workflow (for example Message ID, Thread ID, From, Subject, Message, Status, Category, Confidence, Needs Review, AI Summary, Draft Response, Error Message, Alert Sent, Received At, Execution ID).
3. Add an OpenRouter credential and select a chat model that can return JSON, and add an OpenAI credential for the fallback model.
4. In the Settings values, set your alertEmail, airtableBaseId, airtableTableId, and adjust categories, confidenceThreshold, skipSenderPatterns/skipBulkEmail, and stuckAfterMinutes as needed.
5. Update the Gmail Trigger search filter to exclude your alert email address (the -to:… portion) to prevent alert loops.

## 🔗 Nodes Used

Airtable, Gmail, Gmail Trigger, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
