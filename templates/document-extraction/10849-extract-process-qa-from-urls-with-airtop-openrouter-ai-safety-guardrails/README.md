# 🔬 Extract & process Q&A from URLs with Airtop, OpenRouter AI & Safety Guardrails

> ⚡ **85 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Transform your Telegram bot into a secure content analyzer: send any URL, and get safe, structured Q&A extractions with AI-powered safety checks and web search capabilities.

## 📋 What This Template Does
This workflow activates when a user sends a valid URL to your Telegram bot. It extracts questions and answers from the webpage using Airtop, applies NSFW and PII guardrails to ensure safe content, then uses an OpenRouter AI agent (with optional Tavily search) to generate and send a concise response. If guardrails fail, it alerts the user instead.
- Filters for valid URLs only to prevent unnecessary processing
- Extracts structured Q&A from documents or forms
- Enforces safety checks for harmful or private content
- Supports web searches for enhanced responses when needed

## 🔧 Prerequisites
- A Telegram bot created via @BotFather
- Accounts with Airtop, OpenRouter, and Tavily

## 🔑 Required Credentials

### Telegram API Setup
1. Open Telegram → Search @BotFather → Use /newbot command
2. Follow prompts to create bot and obtain API token
3. Add to n8n as **Telegram API** credential type

### Airtop API Setup
1. Visit https://airtop.ai → Sign up or log in → Navigate to Dashboard → API Keys
2. Generate a new API key with extraction permissions
3. Add to n8n as **Airtop API** credential type

### OpenRouter API Setup
1. Go to https://openrouter.ai → Sign up or log in → Navigate to API Keys section
2. Generate and copy your API key (free tier sufficient for basic use)
3. Add to n8n as **OpenRouter API** credential type

### Tavily API Setup
1. Visit https://app.tavily.com → Sign up or log in → Go to API Keys
2. Generate and copy your API key
3. Add to n8n as **Tavily API** credential type

## ⚙️ Configuration Steps
1. Import the workflow JSON into n8n
2. Assign your Telegram, Airtop, OpenRouter, and Tavily credentials to the respective nodes
3. Activate the workflow to register the Telegram trigger
4. Test by sending a plain URL (no extra text) to your bot in Telegram
5. Monitor the first execution and adjust guardrail thresholds if needed

## 🎯 Use Cases
- Researchers summarizing academic papers or reports while ensuring no sensitive data leaks
- Support teams extracting info from customer-submitted docs/forms with automatic safety filtering
- Content creators pulling Q&A from articles for bots, blocking inappropriate responses
- Educators analyzing educational resources safely for student-facing chat tools

## ⚠️ Troubleshooting
- No response from bot: Verify the message contains only a valid URL; adjust regex in Filter Only URLs node if needed
- Guardrail failures: Lower NSFW threshold (e.g., from 0.7 to 0.5) or disable PII checks in Apply Safety Guardrails node
- Extraction errors: Test with public, text-heavy URLs; some JS-heavy sites may require alternative extractors
- Rate limits hit: Check OpenRouter/Tavily dashboards for usage; upgrade to paid tiers for heavy traffic

## 🔗 Nodes Used

Telegram, Telegram Trigger, Filter, AI Agent, OpenRouter Chat Model, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
