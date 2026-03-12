# 📊 Daily news curation with Gemini AI: auto-filter & publish to Notion & Telegram

> ⚡ **49 views** · 📊 [Market Research & Insights](../)

## Description

## What this template does
This workflow creates a daily “n8n News Radar” briefing:
- Pulls the latest n8n ecosystem updates from Blog, Community, GitHub Releases, and Reddit.
- Filters to the last 24 hours + keyword relevance.
- Uses a Gemini “Editor-in-Chief” agent to semantically deduplicate topics and score them (only Score 3+ pass).
- Saves curated topics to a Notion database.
- Sends urgent alerts (Score 4+) to Telegram.

## How it works (high level)
1) Scheduled trigger (daily) or Manual trigger (testing)
2) Data ingestion from 4 sources (RSS + GitHub API)
3) Normalize + filter (24h)
4) Keyword pre-filter (reduce noise + LLM cost)
5) Batch items → Gemini agent (dedupe + scoring + Spanish strategic summary)
6) Parse JSON output + Notion-safe chunking
7) Save to Notion
8) If Score &gt;= 4 → send Telegram alert

## Setup steps (after import)
1) Connect these credentials in n8n:
- Google Gemini (AI Agent)
- Notion (Content DB)
- Telegram (alerts)

2) Replace placeholders inside nodes:
- **Add to Notion (Content DB)** → `databaseId.value` = `YOUR_NOTION_DATABASE_ID`
- **Telegram Notification** → `chatId` = `YOUR_TELEGRAM_CHAT_ID_OR_@channelusername`

## Requirements
- An n8n instance (Cloud or self-hosted)
- Google Gemini API access
- A Notion database with the properties used by the Notion node
- A Telegram bot + target chat/channel

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, Notion, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
