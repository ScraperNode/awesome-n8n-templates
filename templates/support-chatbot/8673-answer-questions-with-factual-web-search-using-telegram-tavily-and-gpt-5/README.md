# 💬 Answer questions with factual web search using Telegram, Tavily and GPT-5

> ⚡ **523 views** · 💬 [Support Chatbots](../)

## Description

# 🧠 Telegram Search Assistant — Tavily + AI/ML API

This **n8n workflow** lets users ask questions in Telegram and receive concise, fact-based answers.  
It performs a **web search with Tavily**, then uses **AIMLAPI (GPT-5)** to summarize results into a clear 3–4 sentence reply.  
The flow ensures grounded, non-hallucinated answers.

---

## 🚀 Features
- 📩 **Telegram-based input**
- ⌨️ **Typing indicator** for better UX
- 🔎 **Web search** with Tavily (JSON results)
- 🧠 **Summarization** with AIMLAPI (`openai/gpt-5-chat-latest`)
- 📤 **Replies** in the same chat/thread
- ✅ **Guardrails** against hallucinations

---

## 🛠 Setup Guide

### 1. 📲 Create Telegram Bot
- Talk to **[@BotFather](https://t.me/BotFather)**
- Use `/newbot` → choose a name and username
- Save the **bot token**

### 2. 🔐 Set Up Credentials in n8n
- **Telegram API**: use your bot token  
- **Tavily**: add your Tavily API key  
- **AI/ML API**: add your API key  
  - Base URL: `https://api.aimlapi.com/v1`  

### 3. 🔧 Configure the Workflow
- Open the **n8n editor** and import the JSON  
- Update credentials for **Telegram**, **Tavily**, and **AIMLAPI**  

---

## ⚙️ Flow Summary

| Node                    | Function                                      |
|--------------------------|-----------------------------------------------|
| 📩 Receive Telegram Msg  | Triggered when user sends text                |
| ⌨️ Typing Indicator      | Shows “typing…” to user                       |
| 🔎 Web Search            | Queries Tavily with user’s message            |
| 🧠 LLM Summarize         | Summarizes search JSON into a factual answer  |
| 📤 Reply to Telegram     | Sends concise answer back to same thread      |

---

## 📁 Data Handling
- By default: **no data stored**  
- Optional: log queries & answers to **Google Sheets** or a **database**

---

## 💡 Example Prompt Flow

**User sends:**
```

When is the next solar eclipse in Europe?

```

**Bot replies:**
```
The next solar eclipse in Europe will occur on August 12, 2026.
It will be visible as a total eclipse across Spain, with partial views in much of Europe.
The maximum eclipse will occur around 17:46 UTC.
```

---

## 🔄 Customization
- Add commands: `/help`, `/sources`, `/news`  
- Apply **rate-limits** per user  
- Extend logging to Google Sheets / DB  
- Add **NSFW / profanity filters** before search  

---

## 🧪 Testing
- Test **end-to-end in Telegram** (not just “Execute Node”)  
- Add a fallback reply if Tavily returns empty results  
- Use sticky notes for debugging & best practices  

---

## 📎 Resources
- 🔗 [AI/ML API Docs](https://docs.aimlapi.com)  
- 🔗 [Tavily Search API](https://tavily.com)

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
