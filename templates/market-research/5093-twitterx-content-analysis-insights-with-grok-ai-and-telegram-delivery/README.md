# 📊 Twitter/X content analysis & insights with Grok AI and Telegram delivery

> ⚡ **163 views** · 📊 [Market Research & Insights](../)

## Description

👉🏻  **[Tutorial Video](https://www.youtube.com/@b2brish)**

## 🔬 Introducing **X-Ray Pro**: Your Intelligent X (Twitter) & Web Insight Machine! 💡

Hey n8n community! 👋

Tired of sifting through endless feeds to find meaningful insights on X (formerly Twitter) and the web? We've got something special for you! I'm excited to unveil **X-Ray Pro**, a powerful n8n workflow designed to be your ultimate information curator. It cuts through the digital noise and delivers precise, actionable intelligence right to your fingertips. Say goodbye to information overload and hello to clarity! 🚀

---

# Step-by-Step Setup Instructions

## 1. Create Required Credentials

### Grok AI (xAI) Credentials
1. Visit the xAI platform and create an account
2. Generate an API key
3. In n8n, create a new credential:
  - **Type:** "Generic Credential"
  - **Name:** "Grok AI API"
  - **Add field:** `Authorization` with value `Bearer YOUR_API_KEY`

### Telegram Bot Credentials
1. Contact @BotFather on Telegram
2. Create a new bot with `/newbot`
3. Save the bot token
4. In n8n, create "Telegram" credential with your bot token
5. Get your chat ID by messaging your bot and checking the webhook

### OpenAI Credentials
1. Get your OpenAI API key from platform.openai.com
2. Create "OpenAI" credential in n8n with your API key

## 2. Import and Configure the Workflow

### Import the Workflow
1. Copy the provided workflow JSON
2. In n8n, go to "Workflows" → "Import from URL/File"
3. Paste the JSON content

### Update Node Names and Structure
The workflow includes these key components:

**Trigger Node:**
- `Telegram Trigger` - Receives messages from Telegram

**Analysis Nodes:** (Rename for clarity)
- `Tech Leaders Monitor` (was "Updates from Tech Leaders")
- `Breaking News Scanner` (was "Real-Time Breaking News")
- `Cross-Source Analyzer` (was "Multi-Source Analysis")
- `Historical Data Miner` (was "Historical Events")
- `Community Sentiment Tracker` (was "Community Pulse Check")
- `Viral Content Detector` (was "Find Memes and Trends")

**Core Processing:**
- `AI Agent Coordinator` (was "X-Ray Pro")
- `Language Model` (OpenAI Chat Model)

**Output Node:**
- `Telegram Response` (was "Telegram")

## 3. Secure API Key Configuration

**CRITICAL SECURITY UPDATE:**

Replace the hardcoded API keys in all HTTP Request nodes with credential references:

1. Select each HTTP Request node
2. Remove the hardcoded `Authorization` header
3. In "Headers" section, select "Credentials"
4. Choose your "Grok AI API" credential
5. Repeat for all 6 analysis nodes

Give **X-Ray Pro** a try and transform how you gather insights!

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
