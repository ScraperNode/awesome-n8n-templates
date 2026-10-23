# 📈 Send a daily AI crypto news digest from Brave Search to Telegram with GPT-4.1-mini

> ⚡ **106 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Crypto News Digest — Daily Telegram Bot

Automatically fetch the latest crypto headlines every morning and receive a clean AI-generated summary straight to your Telegram — fully hands-off once activated.

---

## What This Workflow Does

Every day at a scheduled time, this workflow pulls the freshest cryptocurrency news from Brave Search, processes the top 5 results, generates a concise digest using OpenAI, and delivers it directly to a Telegram chat. No manual input, no dashboards to check — the news comes to you.

---

## How It Works

1. **Schedule Trigger** fires automatically every day at 08:00 UTC
2. **Brave Search** queries the News API for the latest crypto headlines from the past 24 hours
3. **Format Top 5** cleans and normalizes the raw results into structured article objects
4. **Build Prompt** assembles the articles into a formatted input string for the language model
5. **Make Summary** sends the prompt to OpenAI (gpt-4.1-mini), which generates a structured digest with a headline and 2–3 sentence summary per story, plus a final Market Mood line
6. **Send to Telegram** delivers the completed digest to your configured chat or channel

---

## What You Get

A clean, plain-text daily message in Telegram containing:

- 5 headlines from the past 24 hours
- A concise 2–3 sentence summary per story
- A Market Mood line summarizing the overall sentiment of the day

---

## Customize for Any News Topic

This workflow is built to be easily repurposed. To switch from crypto to any other topic, simply update the **Query field in the Brave Search node**.

Examples:
- `artificial intelligence AI news today`
- `stock market nasdaq sp500 news`
- `tech industry startup funding news`
- `real estate housing market news US`

If you change the topic, also update the system prompt inside the **Make Summary node** to reflect the new subject and audience.

---

## Requirements

- Brave Search API key (plan with News search enabled)
- OpenAI API key
- Telegram Bot token and target Chat ID

## 🔗 Nodes Used

Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
