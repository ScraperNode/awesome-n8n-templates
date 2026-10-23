# 🎫 Classify Gmail with Google Gemini, label messages, and log triage to Sheets

> ⚡ **11 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Bie6K1odgrEhttps://youtu.be/Bie6K1odgrE
This workflow monitors unread Gmail inbox messages, uses Google Gemini to classify and score each email, applies a corresponding Gmail label, logs the triage details to Google Sheets, and optionally drafts a reply in Gmail when a response is needed.

## How it works
1. Triggers every 5 minutes when a new unread email arrives in the Gmail inbox.
2. Loads the existing triage log from Google Sheets and continues only when the incoming message has a message ID.
3. Sends the sender, subject, and body text to Google Gemini to classify the email (URGENT, CAN_WAIT, NEWSLETTER, SPAM) and return structured fields like sentiment, priority score, and reply guidance.
4. Maps the classification into a Gmail label ID and prepares a normalized record containing message metadata and the AI analysis.
5. Adds the selected label to the email in Gmail and appends the triage record to a Google Sheets log.
6. If the AI indicates a reply is needed, uses Google Gemini to draft a reply and creates a Gmail draft in the original thread.

## Setup
1. Connect a Gmail OAuth2 account with permission to read messages, apply labels, and create drafts.
2. Connect Google Sheets using a Google service account (or update to your preferred auth method) and set the target spreadsheet and sheet for the triage log.
3. Add Google Gemini (Google PaLM) API credentials and ensure the Gemini 3.1 Flash Lite model is available to your project.
4. Ensure the Google Sheet has columns that match the appended fields (for example: timestamp, messageId, from, subject, category, needsReply, priorityScore, sentiment, summary, replyGuidance).

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
