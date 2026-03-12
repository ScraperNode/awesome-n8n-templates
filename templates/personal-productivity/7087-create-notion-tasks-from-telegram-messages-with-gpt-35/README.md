# ⚡ Create Notion tasks from Telegram messages with GPT-3.5

> ⚡ **898 views** · ⚡ [Personal Productivity](../)

## Description

Using the power and ease of Telegram, send a simple text or audio message to a bot with a request to add a new Task to your Notion Tasks database.

## How it works
ChatGPT is used to transacribe the audio or text message, parse it, and determine the title to add as a new Notion Task. You can optionally include a "do date" as well and ChatGPT will include that when creating the task. Once complete you will receive a simple confirmation message back.

### Minimal Setup Required
Just follow n8n's instructions on how to connect to Telegram and create your own chatBot, provide the chatID in the 2 Telegram nodes, and you're finished! A few optional settings include tweaking the ChatGPT system prompt (unnecessary) and the timezone for your Notion Task(s).

## 🔗 Nodes Used

Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
