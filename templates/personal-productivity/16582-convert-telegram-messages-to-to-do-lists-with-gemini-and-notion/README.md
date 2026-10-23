# ⚡ Convert Telegram messages to to-do lists with Gemini and Notion

> ⚡ **47 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns incoming Telegram bot text messages into a numbered to-do list using Google Gemini, saves the result as a new page in a Notion database, and replies to the user in Telegram with the same extracted task list.

## How it works
1. Triggers whenever your Telegram bot receives a new message.
2. Checks whether the incoming message contains text and ignores non-text updates.
3. Sends the message text to Google Gemini to extract a clean, numbered to-do list (or returns “No tasks found.”).
4. Creates a new page in a Notion database and stores the extracted to-do list.
5. Sends the extracted to-do list back to the user in the original Telegram chat.

## Setup
1. Create a Telegram bot with @BotFather, add your Telegram credentials in n8n, and use the trigger’s webhook/connection to start receiving updates.
2. Add a Google Gemini (PaLM) API credential for the AI extraction step.
3. Add a Notion credential, select the target database, and ensure it has suitable properties to store the page title and extracted to-do content.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Notion, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
