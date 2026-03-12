# 📖 Slack auto translator (JA ⇄ EN) with GPT-4o-mini

> ⚡ **148 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## 🧠 How it works
This workflow enables automatic translation in Slack using **n8n** and **OpenAI**.  
When a user types `/trans` followed by text, n8n detects the language and replies with the translated version via Slack.

## ⚙️ Features
- Detects the input language automatically  
- Translates between **Japanese ↔ English** using **GPT-4o-mini** (temperature 0.2 for stability)  
- Sends a quick “Translating...” acknowledgement to avoid Slack’s 3s timeout  
- Posts the translated text back to Slack (public or private selectable)  
- Supports overrides like `en: こんにちは` or `ja: hello`  

## 💡 Perfect for
- Global teams communicating in Japanese and English  
- Developers learning how to connect **Slack + OpenAI + n8n**  

## 🧩 Notes
Use sticky notes inside the workflow for setup details.  
Duplicate and modify it to support mentions, group messages, or other language pairs.

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
