# 🎫 Route critical out-of-office emails with Gmail, Gemini, Slack and Sheets

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for new unread emails, uses Google Gemini to classify whether each message is critical during out-of-office coverage, and for critical items alerts a backup on Slack, replies to the sender via Gmail, logs the escalation to Google Sheets, and labels the email.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail (excluding Promotions and Social categories).
2. Extracts key fields from the email (sender, subject, snippet, message ID, and thread ID) and loads out-of-office routing settings.
3. Sends the email details to the Google Gemini API and parses the JSON response to determine whether the message is critical, along with a category, urgency reason, and Slack-ready summary.
4. If the email is critical, posts an escalation message to a specified Slack channel and mentions the designated backup person.
5. Replies to the sender in Gmail with an out-of-office message that loops in the backup contact.
6. Appends the escalation details to a Google Sheets log and adds a Gmail label to the original message.
7. If the email is not critical, it takes no further action.

## Setup
1. Connect Gmail OAuth2 credentials for both the inbox trigger and the Gmail reply/label actions.
2. Add Google Gemini (PaLM) API credentials for the HTTP request to the Gemini generateContent endpoint.
3. Connect Slack OAuth credentials and set the target Slack channel ID and backup Slack user ID used for mentions.
4. Connect Google Sheets credentials (service account) and update the spreadsheet document ID, sheet/tab, and column headers used for logging.
5. Update the workflow’s configuration values (backup name/email, company/product name, return date, and the Gmail label ID to apply to escalated emails).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
