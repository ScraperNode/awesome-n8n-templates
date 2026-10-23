# 🎫 Classify Gmail emails with OpenAI and send urgent Telegram alerts

> ⚡ **69 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Gmail for unread messages, uses OpenAI to classify each email into one of six categories based on content and prior sender history, applies the matching Gmail label, and sends a Telegram alert when an email is classified as requiring a reply.

## How it works
1. Polls Gmail every minute for new unread messages.
2. Retrieves all Gmail labels and builds a lookup list so categories can be matched to label IDs by name.
3. Fetches the full email content, headers, and sender/recipient details for each triggered message.
4. Uses OpenAI (with Gmail search tools) to check prior inbox and sent history with the sender and return a single category, confidence score, and brief reasoning.
5. Maps the returned category to the corresponding Gmail label ID and applies the label when a matching label exists.
6. Sends a Telegram message when the email is classified as “To Respond” and Telegram alerts are enabled, or sends an “unclassified” alert if no matching Gmail label is found.

## Setup
1. Connect a Gmail OAuth2 account for the Gmail Trigger, Gmail label lookup, message fetch, and label application steps.
2. Add an OpenAI API credential and set the model name in the Configuration (for example, gpt-4o-mini).
3. In Gmail, create six labels with these exact names: To Respond, FYI, Notification, Marketing, Meeting Update, Comment.
4. In the Configuration step, set your owner_email and (if alerts are enabled) your telegram_chat_id.
5. Create a Telegram bot, connect a Telegram API credential, and set the workflow to send messages to your target chat ID.

## Additional info
# Classify Gmail messages with AI and alert urgent emails via Telegram
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Classify-Gmail-messages-with-AI-and-alert-urgent-emails-via-Telegram-39e3d6550fd9814ea2c3cb1642e4b15f)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Telegram, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
