# 🎫 Categorize emails and draft Gmail replies with Groq and Google Sheets

> ⚡ **23 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors Gmail for new emails, uses Groq (via the LangChain Agent node) to categorize and summarize each message and draft a reply, sends an alert email for high-priority items, and logs the analysis and draft details to Google Sheets.

## How it works
1. Checks Gmail every minute for new incoming emails.
2. Skips processing if the email has no body content or snippet.
3. Extracts the sender, subject, received date, message ID, and a truncated body (up to 3000 characters) for analysis.
4. Sends the email content to Groq to return a JSON analysis with category, priority, summary, key asks, action items, suggested labels, and a draft reply.
5. Parses and validates the AI JSON output, stopping if it cannot be parsed.
6. Sends a Gmail alert to your chosen address when the email is marked HIGH priority, then continues.
7. Appends the parsed analysis fields to a Google Sheets “Email Log” sheet and creates a Gmail draft reply only when the analysis indicates a response is required.

## Setup
1. Connect a Gmail OAuth2 credential with permission to read emails and create drafts, and select it in the Gmail Trigger, Alert email, and Create Draft nodes.
2. Add a Groq API credential and select it in the Groq chat model node.
3. Replace the alert recipient address (YOUR_EMAIL@gmail.com) in the high-priority alert step.
4. Create a Google Sheet with an “Email Log” tab, add a Google Sheets OAuth2 credential, and replace YOUR_GOOGLE_SHEET_ID with your document ID (optional if you disable logging).

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
