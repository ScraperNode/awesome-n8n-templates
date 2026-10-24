# 🎫 Send important Gmail alerts to Telegram with filters and Claude Haiku

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors your Gmail inbox and sends Telegram notifications only for important emails, using a deterministic keyword/sender filter first and Anthropic Claude only for unclear edge cases, with an inline button that opens the relevant thread in Gmail.

## How it works
1. Triggers every minute when a new email arrives in Gmail INBOX excluding messages sent from your own address.
2. Classifies each email by sender, subject, and snippet using a rule-based filter to mark it as alert, skip, or an edge case.
3. Sends only edge-case emails to Anthropic Claude for a JSON verdict that decides whether the email warrants an alert and how urgent it is.
4. Converts the final verdict into a short HTML-formatted Telegram message, includes the reason, and builds a direct Gmail thread link.
5. Sends the message to Telegram only for emails classified as alerts, with an inline “Open in Gmail” button.

## Setup
1. Connect your Gmail account in the Gmail Trigger and ensure it has access to read your INBOX.
2. Add an Anthropic API credential for the HTTP request to Claude (Anthropic Messages API).
3. Create a Telegram bot with @BotFather, add Telegram credentials in n8n, and replace YOUR_TELEGRAM_CHAT_ID with your target chat ID.
4. (Optional) Customize the sender/keyword rules and the Claude prompt in the pre-filter step to match what you consider important.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
