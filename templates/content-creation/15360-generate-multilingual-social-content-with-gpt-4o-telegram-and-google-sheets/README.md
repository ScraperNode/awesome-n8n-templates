# 🎬 Generate multilingual social content with GPT-4o, Telegram and Google Sheets

> ⚡ **121 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

1. Triggers when a message is received on Telegram.
2. Checks conditions and either sends a default message or processes the message for content generation.
3. Uses an AI agent to generate rich content including images and text.
4. Formats and sends generated text in multiple languages (English, Polish, Spanish) over Telegram.
5. Saves generated image data and logs it into a Google Sheet.
6. Sends back image content to Telegram as a photo message.

## Setup steps

- Configure Telegram credentials in the Telegram Trigger and other Telegram nodes.
- Set up OpenAI API access for content generation.
- Connect to Google Sheets with appropriate API credentials.

## Customization

Language options for text messages can be extended by adding more language nodes.

## Part of the AI Content Master system

This workflow works together with the Moderator workflow:
- 👉 AI Content Master — Content Moderator with Telegram and Social Media Posting: https://n8n.io/workflows/15361

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
