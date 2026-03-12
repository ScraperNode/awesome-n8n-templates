# ⚡ Generate structured article summaries with Telegram, Claude AI & Jina Reader

> ⚡ **94 views** · ⚡ [Personal Productivity](../)

## Description

## Article summarizer bot

Send any URL to your Telegram bot and get an AI summary instantly.

What it does

- Receives URLs via Telegram
- Fetches clean article content (removes ads, navbars)
- Generates AI summary 
- Sends formatted summary back to Telegram


How to set up

1. **Create Telegram bot**
   - Message @BotFather on Telegram
   - Run /newbot and follow prompts
   - Copy your bot token
   - Add credentials to n8n

2. **Get API keys** (optional but recommended)
   - Jina AI: Sign up at jina.ai/reader  
   - Add keys to nodes

3. **Configure AI model and output parser format**


Requirements

- Telegram bot token
- OpenRouter API key or any other LLM you have


How to customize

- Change summary format: Edit prompt in "Summarize Article" node
- Update Output Parser schema (title, tags, etc)
- Save to database: Enable Google Sheets node or add Notion/Airtable
- Different language: Modify prompt to force specific language

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
