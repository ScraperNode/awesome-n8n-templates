# 🎫 Classify Gmail intents with Google Gemini, Slack and Google Sheets

> ⚡ **51 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors Gmail for new unread emails, uses Google Gemini to classify each email’s intent, then creates Gmail draft replies and Slack alerts for questions/requests, escalates complaints with Slack and Google Tasks, and logs FYI and spam activity to Google Sheets.

## How it works
1. Triggers when a new unread email arrives in Gmail.
2. Extracts the sender, subject, body text, and message ID, then bundles incoming emails for batch processing.
3. Sends the bundled emails to Google Gemini to classify each message as Question, Request, Complaint, FYI, or Spam and to generate the required action payloads.
4. Parses Gemini’s JSON response, splits it back into one item per email, and routes each email by its classified intent.
5. For Question or Request emails, creates a Gmail draft reply, posts a Slack notification with a preview, and logs the action to Google Sheets.
6. For Complaint emails, posts an urgent Slack alert, creates a high-priority follow-up in Google Tasks, and logs the action to Google Sheets.
7. For FYI and Spam emails, skips external actions and logs the outcome to Google Sheets.

## Setup
1. Connect credentials for Gmail OAuth2, Google Gemini (PaLM) API, Slack OAuth2, Google Sheets OAuth2, and Google Tasks OAuth2.
2. Update the Gmail trigger settings and mailbox access to match the account and unread-email behavior you want to monitor.
3. Set the target Google Sheets document and ensure it has columns for Timestamp, Email ID, Sender, Subject, Intent, and Action.
4. Select the Slack channels for general notifications and urgent complaint alerts.
5. Choose the Google Tasks list and update the task list ID used for complaint follow-ups.

## 🔗 Nodes Used

Google Sheets, Slack, Google Tasks, Gmail, Gmail Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
