# 🎫 Triage and reply to Gmail emails with GPT-4.1 mini and Telegram

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors unread Gmail inbox messages, uses OpenAI GPT-4.1 mini to classify and summarize each email and decide a reply strategy, then either sends an automatic Gmail reply, labels messages for human review and notifies via Telegram, or applies a spam label.

## How it works
1. Triggers every minute when a new unread email arrives in a selected Gmail inbox label.
2. Fetches the full email details from Gmail (headers and body) for analysis.
3. Sends the email content to OpenAI (GPT-4.1 Mini) to classify category, priority, sentiment, and reply_type, and to draft a reply when appropriate.
4. Validates and normalizes the AI response into a consistent JSON structure with safe fallbacks.
5. If the AI chooses “Auto Reply,” replies to the original message in Gmail with the suggested draft.
6. If the AI chooses “Human Review,” applies a Gmail label to the message and sends the analysis summary to Telegram.
7. If the AI chooses “No Reply,” applies a Gmail label to mark the message as spam/unwanted.

## Setup
1. Connect a Gmail OAuth2 credential and ensure the trigger monitors the correct label (default: INBOX) for unread emails.
2. Connect an OpenAI API credential and keep or change the model selection used for email analysis (default: gpt-4.1-mini).
3. Create/select a Gmail label for human-review messages and choose the label in the Gmail “addLabels” action.
4. Connect a Telegram Bot credential and set the Telegram chat ID in the notification step if you want human-review alerts.

## Requirements
- Gmail account with OAuth2 credentials
- OpenAI API key
- Telegram Bot (optional, for review notifications)

## Customization
- Modify the AI prompt to fit your business.
- Adjust routing rules for Auto Reply, Human Review, and Spam.
- Customize Gmail labels and AI response templates.
- Replace Telegram with Slack, Discord, or another notification service if preferred.

## Additional info
This workflow is designed as a starting point for AI-powered email automation. It uses structured JSON validation to ensure reliable routing decisions and can be extended with CRM integrations, approval workflows, or additional notification channels.

## 🔗 Nodes Used

Telegram, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
