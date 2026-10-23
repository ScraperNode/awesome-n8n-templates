# 🎫 Triage Gmail emails, draft AI replies, and log to Google Sheets with GPT-4o

> ⚡ **202 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Automatically triage your Gmail inbox using OpenAI GPT-4o. Each new email is classified as Urgent or Not Urgent. Urgent emails get an AI-drafted reply saved to Gmail Drafts. All emails are logged to Google Sheets for tracking.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Extracts the sender, subject, body text, message ID, and thread ID from the email.
3. Sends the email details to OpenAI GPT-4o to classify the message as URGENT or NOT_URGENT.
4. If the email is urgent, OpenAI GPT-4o generates a concise reply and the workflow saves it as a Gmail draft in the original thread.
5. Appends a row to Google Sheets for each email, marking the urgency and whether a draft was created.

## Setup
1. Connect a Gmail OAuth2 credential and adjust any trigger filters (such as labels) to control which emails are processed.
2. Add an OpenAI API credential with access to the gpt-4o model for both the classification and reply-drafting steps.
3. Connect a Google Sheets OAuth2 credential, set the target spreadsheet ID and sheet name, and create the columns Timestamp, Sender, Subject, Urgency, and Draft Created.

## Requirements
- Gmail account connected via OAuth2
- OpenAI API key with GPT-4o access
- Google account with Google Sheets OAuth2 connected
- A Google Sheet with headers: Timestamp | Sender | Subject | Urgency | Draft Created

## Customization
- Change the Gmail Trigger to watch a specific label (e.g. "Clients" or "Support") instead of the full inbox to narrow the scope
- Edit the urgency classification prompt in the Classify Email Urgency node to add a MEDIUM priority tier and add a third IF branch
- Modify the reply tone in the Draft Urgent Reply node prompt — change "professional" to "friendly", "concise", or "formal"
- Add a Slack or Telegram node after the IF node to send yourself an instant notification when an urgent email is detected
- Replace the Google Sheets log with Notion, Airtable, or a CRM of your choice

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
