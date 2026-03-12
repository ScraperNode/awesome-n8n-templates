# 🤖 Chat with GPT-5 on Telegram: AI-powered conversational bot

> ⚡ **1,947 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# 💬 GPT-5 Powered Telegram Bot — AI/ML API + n8n

This n8n workflow lets users chat with **GPT-5** directly in Telegram.
It simulates typing for a natural UX, sends messages to GPT-5 via AI/ML API, and replies back in the same chat.
Optionally, each interaction can be logged in Google Sheets.

---

## 🚀 Features

* 📩 Telegram-based chat input
* 💬 Typing indicator before reply
* 🧠 High-quality AI responses via `openai/gpt-5-chat-latest` (AI/ML API)
* 📤 Replies sent back in Telegram with formatting
* 📝 Optional logging to Google Sheets
* 🔒 Secure credential handling in n8n

---
![image.png](fileId:2272)
---
![image.png](fileId:2274)
---
![image.png](fileId:2273)
---
## 🛠 Setup Guide

### 1. 📲 Create Telegram Bot

* Open [@BotFather](https://t.me/BotFather)
* Use `/newbot`, choose name + username
* Save the **API token**

### 2. 🔐 Set Up Credentials in n8n

* `Telegram API`: paste the BotFather token
* `AI/ML API`: create a key from [aimlapi.com](https://aimlapi.com/?utm_source=aimlapi-n8n-readme&utm_medium=github&utm_campaign=integration)
* (Optional) `Google Sheets`: connect via OAuth2/Service Account

### 3. 📗 Prepare Google Sheet (optional logging)

* Name: e.g., `GPT5 Bot Logs`
* Sheet: `Sheet1`
* Columns:

```
user_id | date | query | response
```

### 4. 🔧 Configure Workflow

* Import the JSON into n8n
* Attach your credentials to the Telegram + AI/ML API nodes
* (Optional) update Google Sheets node with Sheet ID

---

## ⚙️ Flow Summary

| Node                            | Function                               |
| ------------------------------- | -------------------------------------- |
| `📩 Receive Telegram Message`   | Trigger on user message                |
| `💬 Simulate Typing`            | Sends "typing…" action to Telegram     |
| `🧠 Process with GPT-5`         | Calls AI/ML API with message text      |
| `📤 Send Response to Telegram`  | Replies back to user with model output |
| `📝 Log Interaction` (optional) | Appends log row to Google Sheets       |

---

## 💡 Example User Flow

1. User sends:

```
What’s the capital of Japan?
```

2. Bot replies after "typing…":

```
The capital of Japan is Tokyo.
```

3. Conversation continues naturally.

---

## 🧪 Testing

* Use a test chat with your bot
* Trigger via `/execute workflow` (not “Execute Node”)
* Add `Set` or `Console` nodes for debugging

---

## 📎 Resources

* 🔗 [AI/ML API Docs](https://docs.aimlapi.com/?utm_source=aimlapi-n8n-readme&utm_medium=github&utm_campaign=integration)
* 🤖 [GPT-5 Models](https://aimlapi.com/models?utm_source=aimlapi-n8n-readme&utm_medium=github&utm_campaign=integration)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
