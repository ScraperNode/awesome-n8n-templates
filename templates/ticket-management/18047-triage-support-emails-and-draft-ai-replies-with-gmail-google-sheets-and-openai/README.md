# 🎫 Triage support emails and draft AI replies with Gmail, Google Sheets and OpenAI

> ⚡ **60 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls a Gmail support inbox, uses OpenAI to classify each email, logs non-spam requests to Google Sheets, drafts FAQ-grounded replies back into the original Gmail thread, and sends urgent-complaint alerts to Slack via an incoming webhook.

## How it works
1. When a Support Email Arrives polls your Gmail inbox every minute.
2. Classify the Request With AI reads the sender, subject and preview and sorts the email into one of four categories: product question, billing issue, urgent complaint, or spam/notification.
3. Real requests are logged as a ticket row in Google Sheets. Urgent complaints additionally ping your team in Slack the moment they arrive, so an angry customer never waits until someone checks the inbox. Spam and automated notifications are filtered out before they waste anyone's attention.
4. Draft a Reply With AI writes a reply grounded only in your own FAQ and saves it as a draft in the original Gmail thread — never sent automatically, so a human always presses Send.

## Setup
1. Connect your Gmail account in When a Support Email Arrives and Create the Draft in Gmail (one click on n8n Cloud).
2. Open Load Your FAQ and Policies and replace the placeholder text with your actual FAQ, refund policy, business hours and anything else replies should be based on.
3. Connect an OpenAI (or compatible) credential in Support AI Model.
4. Create a spreadsheet with columns Date, From, Subject, Category and select it in Log the Ticket to Google Sheets.
5. Optional: paste a Slack incoming-webhook URL into Alert the Team in Slack (api.slack.com/apps → Incoming Webhooks). Delete the node if you don't use Slack.
6. Activate the workflow. It polls your inbox every minute.

## Requirements
- Gmail account; OpenAI (or compatible) API key; a Google Sheet with columns Date, From, Subject, Category; optional Slack incoming webhook.

## Customization
- Edit the categories directly in Classify the Request With AI — add "feature request" or "partnership", give each a one-line description, and wire the new output to whichever action you like. Change draft tone in the system message of Draft a Reply With AI. Switch draft→send in Create the Draft in Gmail once you trust the FAQ coverage. Swap Slack for a Discord webhook or Telegram bot call — it's a plain HTTP request. The same pattern works with any IMAP trigger, or swap the Sheets log for Airtable/Notion.

## Additional info
The FAQ lives in a plain text field inside the workflow — no knowledge base, vector store or extra service to set up. Drafts are grounded only in your FAQ; when the FAQ doesn't cover it, the AI writes a polite holding reply instead of inventing an answer.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
