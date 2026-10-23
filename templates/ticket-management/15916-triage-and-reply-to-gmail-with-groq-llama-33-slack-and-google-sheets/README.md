# 🎫 Triage and reply to Gmail with Groq Llama 3.3, Slack and Google Sheets

> ⚡ **40 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors unread Gmail messages, uses Groq’s Chat Completions API (LLama 3.3) to classify and draft replies, routes key emails to Slack or Gmail labels, logs triage details to Google Sheets, and sends a separate Gmail alert when an email is marked Critical.

## How it works
1. Triggers every minute when a new unread Gmail message arrives that does not already have the AI-Processed label.
2. Extracts and normalizes key email fields (sender, subject, snippet, message ID, and thread ID) for consistent processing.
3. Sends the email content to Groq’s Chat Completions API to return a JSON triage result (urgency, category, intent, summary, action, route, and an optional reply draft).
4. Routes the message based on the AI-selected destination by posting a summary to Slack (#incidents or #sales) or applying predefined Gmail labels.
5. If the AI provides a draft and the route indicates replying directly, sends a reply via Gmail.
6. Appends the triage outcome (classification fields, summary, action, routing, and IDs) to a Google Sheets “Triage Log” worksheet.
7. If the logged urgency is Critical, sends a separate critical alert email via Gmail to a configured address.

## Setup
1. Connect your Gmail OAuth2 account and confirm/create the Gmail label used by the trigger query (AI-Processed) and the label IDs used for Gmail label application.
2. Add an HTTP Header Auth credential containing your Groq API key (Authorization header) and confirm the model endpoint settings.
3. Connect your Slack OAuth credential and ensure the target channels (#incidents and #sales) exist or update the workflow to use your channel names.
4. Connect your Google Sheets OAuth credential and update the spreadsheet ID and sheet tab used for the “Triage Log”, ensuring the expected columns exist.
5. Update the recipient address for the critical alert email and verify the “reply to” target mapping matches how your Gmail trigger exposes the sender address.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
