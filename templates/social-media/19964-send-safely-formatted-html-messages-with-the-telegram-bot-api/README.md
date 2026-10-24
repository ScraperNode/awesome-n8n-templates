# 📱 Send safely formatted HTML messages with the Telegram bot API

> ⚡ **20 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs on demand to build a Telegram message in safe HTML by escaping dynamic values and enforcing Telegram’s 4096-character limit, then sends the formatted result to a specified chat using the Telegram bot API.

## How it works
1. Runs when you manually execute the workflow to send a test message.
2. Defines the target Telegram chat ID, message title, field values, optional link, and per-field length limits.
3. Escapes special characters in all field values, formats them with HTML (bold labels and an optional hyperlink), and truncates the message safely to stay under Telegram’s 4096-character limit.
4. Sends the generated HTML message to Telegram with parse mode set to HTML, attribution disabled, and automatic retries enabled.

## Setup
1. Create a Telegram bot with @BotFather and add Telegram credentials in n8n.
2. Send /start to your bot, then set your Telegram chat ID in the message settings.
3. Click Execute workflow: the sample message arrives formatted, with every special character intact. Then update the title, fields, optional link and length limits to match your data before you reuse the workflow.

## Requirements
- A Telegram bot token (free, from @BotFather).

## Customization
- Copy Build safe HTML message after any node and pass title, fields (label and value) and link. New fields are escaped the same way, so product names, AI answers and e-mail addresses cannot break the message.

## 🔗 Nodes Used

Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
