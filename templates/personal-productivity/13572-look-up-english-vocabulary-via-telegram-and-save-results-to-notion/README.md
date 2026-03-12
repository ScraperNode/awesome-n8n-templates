# ⚡ Look up English vocabulary via Telegram and save results to Notion

> ⚡ **76 views** · ⚡ [Personal Productivity](../)

## Description

Build a personal Telegram bot that looks up English vocabulary and saves every entry to Notion — supporting text, voice, and photo input.

Send a word by typing, voice message, or photo. The bot auto-detects the input type: voice is transcribed via Whisper, photos are scanned via GPT-4o-mini Vision OCR. A GPT-4.1-mini agent spell-checks and returns the word's definition, translation, part of speech, and an example sentence. The translation language is fully configurable — just set TARGET_LANGUAGE in the Config node (e.g. Traditional Chinese, Japanese, Spanish).

Nodes used: Telegram Trigger, HTTP Request (Telegram file API), OpenAI (Whisper + GPT-4o-mini Vision + GPT-4.1-mini), Structured Output Parser, Notion.

💡 Want more AI automation templates? Check out the Content Automation Bundle:
👉 https://jasonchuang0818.gumroad.com/l/n8n-content-automation-bundle

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
