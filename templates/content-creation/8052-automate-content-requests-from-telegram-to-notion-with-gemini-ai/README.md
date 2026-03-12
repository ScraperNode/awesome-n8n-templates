# 🎬 Automate content requests from Telegram to Notion with Gemini AI

> ⚡ **204 views** · 🎬 [Content Creation & Video](../)

## Description

### ⚡ Overview
This workflow connects Telegram with an AI Agent (Gemini) and Notion to automate content requests.
Team members can request content ideas directly in Telegram. The AI processes the request, then automatically creates a new entry in your Notion Content database.

### 🛠️ Features
🤖 **AI-powered assistant**: Gemini AI with memory to understand context and generate better responses.
📲 **Telegram integration**: Accepts requests directly from your Telegram bot.
🗂️ **Notion automation**: Auto-creates records in your Notion database (title, content draft, channel, assignee, date, references, type).
🛡️ **Secure & flexible**: No hardcoded API keys, placeholders used for easy setup.

### 📝 Setup Instructions
Add your Telegram Bot Token, Google Gemini API Key, and Notion Integration Token in n8n credentials.
Steps:
Import this template JSON into your n8n instance.
Configure credentials in n8n (Telegram, Notion, Gemini API).

### 🎯 Use Cases
Content marketing teams managing requests via Telegram.
Automating idea collection from distributed teams.
Keeping Notion Content updated without manual entry.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
