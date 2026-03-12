# 🔧 Real-time gaming strategy coach with Telegram & GPT-4o Vision

> ⚡ **609 views** · 🔧 [Miscellaneous](../)

## Description

**Play smarter, not harder.**

This AI-powered Telegram bot acts as your **real-time gaming coach**, giving you instant move recommendations for turn-based strategy games like **poker**, **dominoes**, **mahjong**, and more—based on screenshots, voice notes, or text prompts.

Powered by **GPT-4o (Vision + Language)**, the agent helps casual gamers improve decision-making, strategy, and pattern recognition in friendly games.

🧠 Whether you're at the table or playing online, this agent reads the board and suggests your best next move.

---

## 🔧 Key Features

* 🧠 **GPT-4o Vision**: Analyzes images (e.g. poker hands, domino boards)
* 🎙️ **Voice-to-Text Coaching**: Transcribe audio and analyze intent
* ✍️ **Smart Text Input**: Ask for help directly in chat
* 📩 **Telegram-Powered**: Easy to use via a simple bot

---

## 🛠 Setup Instructions

### 1. **Import the Workflow**

* Upload the JSON file into your n8n instance.

### 2. **Create a Telegram Bot**

* Use [@BotFather](https://t.me/BotFather) and connect your token under Telegram credentials.

### 3. **Configure OpenAI API**

* Add your GPT-4o credentials
* Enable both **chat model** and **image vision model** access

### 4. **Secure Access**

* Replace the `Telegram ID` in the **User Authentication** node to limit access to your account only.

### 5. **Test It**

* Send a screenshot or voice message to your Telegram bot
* Example: “Texas Hold’em – my turn – suggest move” + upload an image

---

## 💡 What Can You Ask?

* “Poker – flop: A♠️ Q♠️ 10♠️ – I have K♠️ J♠️ – what now?”
* “Dominoes – screenshot attached – should I play this tile?”
* “Mahjong – what’s the best discard move right now?”

---

## 🧠 System Behavior (Prompt Logic)

GPT-4o is guided by a focused system prompt that makes it act as a gaming strategist, not a rulebook. It returns results like:

```
🧠 Best Move Suggestion: [e.g. Raise with K♠️ J♠️]  
🎯 Why This Move Works: [based on probability & game state]  
📈 Confidence Level: High / Medium / Low
```

If input lacks clarity, the agent will ask for better context or a new screenshot.

---

## 🎮 Supported Input Modes

* 🖼️ **Image-based**: e.g. a poker or domino board screenshot
* 🎤 **Voice prompts**: e.g. “My turn in blackjack, I have 16…”
* 💬 **Plain text**: typed strategy questions

---

## 📌 Sticky Notes (Included)

* Telegram Trigger + Access Control
* Image & Voice Input Routes
* GPT-4o Vision Integration
* Short-Term Memory
* LangChain Agent
* Structured Output Format
* Telegram Response Node
* Disclaimer + Licensing Note

---

## ⚠️ Disclaimer & Licensing

This tool is provided by **Treasurium Capital** under an educational, entertainment-focused license.

**Do not use for gambling, cheating, or violating game platform terms of use.**
Treasurium Capital and its creators are not liable for any game outcomes.

---

## 👤 Author & Support

Built by [Don Jayamaha](https://linkedin.com/in/donjayamahajr)
View more AI agents: [https://n8n.io/creators/don-the-gem-dealer/](https://n8n.io/creators/don-the-gem-dealer/)

---

🎯 **Level up your gameplay with AI—one move at a time.**

🎥 **Watch the Live Demo:**
[![Watch the Live Demo](https://img.youtube.com/vi/bqW57vQ9kAM/hqdefault.jpg)](https://youtu.be/bqW57vQ9kAM)

## 🔗 Nodes Used

Edit Image, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
