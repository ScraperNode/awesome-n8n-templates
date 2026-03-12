# ⚡ Manage finances, tasks, tweets and Gmail with GPT‑4.1 on WhatsApp

> ⚡ **122 views** · ⚡ [Personal Productivity](../)

## Description

## n8n Wizard 🪄 – Your personal AI assistant inside WhatsApp

This workflow transforms WhatsApp into a powerful personal AI using n8n + Green-API. Send text or voice messages — the assistant understands intent and handles daily tasks automatically.

### Key features

- 💰 **Expense & income tracking** — record spending, view summaries & category breakdowns (Google Sheets, append-only)
- ✓ **Google Tasks management** — create, list, update, delete tasks & reminders
- 🐦 **Post to X/Twitter** — write and publish single tweets or short threads
- 📧 **Gmail search & summaries** — find recent/unread emails by sender, label, keyword (read-only)
- 🌐 **Real-time answers** — current weather, news, exchange rates, facts via web search
- 🧮 **Quick calculations** — math, percentages, currency conversions
- 🎤 **Full voice support** — incoming voice messages transcribed (Whisper), replies can be spoken (TTS)

### How it works

1. Green-API webhook receives message (text or audio)  
2. Voice → transcribed automatically  
3. Main intelligent router agent selects one sub-agent/tool  
4. Action executed → result sent back as text or voice (if input was voice)

### Setup requirements

- Green-API instance (webhook + send endpoints)  
- OpenAI API key (chat, Whisper, TTS)  
- Google Sheets, Google Tasks, Twitter/X, Gmail (read scope), SerpAPI credentials  

Strict routing rules prevent misuse — no deletions, no guessing values, one tool per clear intent.

Start commanding: “spent 3200 on groceries”, “remind dentist tomorrow”, “tweet: loving n8n!”, “weather in Lahore now”

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
