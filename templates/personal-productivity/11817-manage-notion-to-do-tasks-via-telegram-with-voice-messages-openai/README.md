# ⚡ Manage Notion to-do tasks via Telegram with voice messages & OpenAI

> ⚡ **246 views** · ⚡ [Personal Productivity](../)

## Description

# Your Own Personal Assistant

This workflow turns a Telegram bot into a simple Notion To-Do assistant.

Send a message in Telegram (text or voice). If it’s a voice message, the workflow downloads the audio and uses OpenAI to transcribe it into text. Then an AI agent (“Tard”) uses the latest message + a short memory of the recent chat to understand what you want and perform the right action in Notion (search your pages or create a new task/page in your To-Do list). The result is sent back to you in Telegram in a clean, readable format.

&gt; Email and Calendar nodes are included for future expansion but are disabled by default. The assistant is designed to work with Notion only.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
