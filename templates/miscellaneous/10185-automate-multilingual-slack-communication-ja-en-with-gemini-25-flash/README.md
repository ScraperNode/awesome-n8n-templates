# 🔧 Automate multilingual Slack communication (JA ⇄ EN) with Gemini 2.5 Flash

> ⚡ **361 views** · 🔧 [Miscellaneous](../)

## Description

## 🧠 How it works  
This workflow automatically translates messages between **Japanese** and **English** inside Slack — perfect for mixed-language teams.  
In our real-world use case, our 8-person team includes **Arif**, an English-speaking teammate from Indonesia, while the rest mainly speak Japanese.  

Before using this workflow, our daily chat often included:  
- “Can someone translate this for Arif?”  
- “I don’t understand what Arif wrote — can someone summarize it in Japanese?”  
- “I need to post this announcement in both languages, but I don’t know the English phrasing.”  

This workflow fixes that communication gap **without forcing anyone to change how they talk**.  
Built with **n8n** and **Google Gemini 2.5 Flash**, it automatically detects the input language, translates to the opposite one, and posts the result **in the same thread**, keeping every channel clear and contextual.


## ⚙️ Features  
- Unified translation system with **three Slack triggers**:  
  1️⃣ **Slash Command `/trans`** – bilingual posts for announcements.  
  2️⃣ **Mention Trigger `@trans`** – real-time thread translation for team discussions.  
  3️⃣ **Reaction 🇯🇵 / 🇺🇸** – personal translation view for readers.  
- Automatic JA ↔ EN detection and translation via **Gemini 2.5 Flash**  
- 3-second instant **ACK** to satisfy Slack’s response timeout  
- Shared **Gemini translation core** across all three modes  
- Clean thread replies using `chat.postMessage`  


## 💼 Use Cases  
- **Global teams** – Keep Japanese and English speakers in sync without switching tools.  
- **Project coordination** – Use mentions for mixed-language stand-ups and updates.  
- **Announcements** – Auto-generate bilingual company posts with `/trans`.  
- **Cross-cultural communication** – Help one-language teammates follow along instantly.  


## 💡 Perfect for  
- **Global companies** with bilingual or multilingual teams  
- **Startups** collaborating across Japan and Southeast Asia  
- **Developers** exploring Slack + Gemini + n8n automation patterns  


## 🧩 Notes  
- You can **force a specific translation direction** (JA→EN or EN→JA) inside the *Code* node.  
- Adjust the system prompt to match tone (“business-polite”, “casual”, etc.).  
- Add glossary replacements for consistent terminology.  
- If the bot doesn’t respond, ensure your app includes the following scopes:  
  `app_mentions:read`, `chat:write`, `reactions:read`, `channels:history`, and `groups:history`.  
- Always export your workflow with **credentials OFF** before sharing or publishing.  


### ✨ Powered by  
**Google Gemini 2.5 Flash** × **n8n** × **Slack API**  
A complete multilingual layer for your workspace — all in one workflow. 🌍

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
