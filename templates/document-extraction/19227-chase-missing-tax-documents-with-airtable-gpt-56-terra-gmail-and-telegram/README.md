# 🔬 Chase missing tax documents with Airtable, gpt-5.6-terra, Gmail and Telegram

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Tax documents without the awkward chase. This workflow watches your Airtable client checklist every weekday morning, has AI draft polite reminder emails, sends them via Gmail, and escalates silent cases to the owner on Telegram. A webhook lane also logs incoming documents instantly.

*Last updated: September 2026.*

## Quick overview
This workflow uses Airtable as a client document checklist, OpenAI (gpt-5.6-terra) to draft reminder emails, Gmail to send them, and Telegram for alerts. It runs on weekday mornings to chase missing tax documents and also accepts a webhook to record documents received and notify the team.

## How it works
1. Runs every weekday at 9:00 AM and loads firm settings before searching the Airtable Clients table for the current document status per client.
2. Compares each client's required_docs and received_docs and decides whether to send a reminder, escalate to the firm owner, stay quiet, or report an all-clear.
3. For clients due a reminder, uses OpenAI (gpt-5.6-terra) to draft a short email, sends it via Gmail, stamps last_reminded in Airtable, and logs the reminder to the Airtable DocLog table.
4. For clients silent for a week after a reminder, sends an escalation to the owner via Telegram and Gmail, updates last_reminded in Airtable, and logs the escalation to DocLog.
5. When no clients are missing documents, posts an all-clear message to Telegram and logs it to DocLog.
6. When the Doc Received webhook is called, validates the payload, looks up the client in Airtable, updates received_docs, logs the receipt to DocLog, and posts a confirmation to Telegram.
7. If the webhook payload is missing fields or does not match a known client/required document, sends an error alert to Telegram and emails the firm inbox without updating Airtable.

## Setup
1. Create an Airtable base with a Clients table (including client_id, client_name, email, required_docs, received_docs, last_reminded) and a DocLog table (ts, action, detail, channel, client_id, client_name), then update the base/table references if yours differ.
2. Add Airtable personal access token credentials with access to the base.
3. Add Gmail OAuth2 credentials for sending client reminders and internal escalation/error emails, and replace the firm_email/owner_email values in the firm settings steps.
4. Add Telegram bot credentials, set the target chat ID for notifications, and verify the bot can post to that chat.
5. Add an OpenAI API credential and confirm the selected model (gpt-5.6-terra) is available in your account.
6. Copy the Doc Received webhook URL from [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) and configure your intake source to POST client_id and doc (and optionally source) to it.

### Quick Answers
**When does the chase run?**
Every weekday at 9:00 AM, plus instantly whenever the Doc Received webhook gets a new document.

**When does the owner get involved?**
Only when a client stays silent for a week after a reminder, via Telegram and Gmail escalation.

**What if a webhook payload is invalid?**
It sends a Telegram alert and emails the firm inbox without touching Airtable.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Airtable, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
