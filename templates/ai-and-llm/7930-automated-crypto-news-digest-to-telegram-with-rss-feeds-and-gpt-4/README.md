# ✨ Automated crypto news digest to Telegram with RSS feeds and GPT-4

> ⚡ **1,625 views** · ✨ [AI & LLMs](../)

## Description

What this template does

Collects the latest crypto news from multiple RSS feeds, filters and deduplicates them, uses OpenAI GPT-4 to analyze and select the top stories, translates and formats them into Russian, and posts a digest to a Telegram channel or group. The workflow runs automatically on a schedule and ensures all messages fit Telegram’s 4096-character limit.

How it works (high level)

RSS Sources: Reads fresh items from CoinDesk, Cointelegraph, Decrypt, Cryptobriefing, and Nulltx.

Filter & Deduplicate: Keeps only unique items from the last 24 hours.

AI Analysis (Crypto Analyst): An OpenAI agent identifies the most important events and selects the best article for each.

AI Formatting (SMM Editor): Another OpenAI agent writes a styled digest in Russian with Telegram-compatible HTML formatting.

Message Preparation: Long texts are split into safe chunks ≤ 4096 characters.

Telegram Post: The digest is posted automatically to your configured Telegram channel or group.

Prerequisites

n8n Cloud or n8n &gt;= 1.107.4

Credentials:

OpenAI (gpt-4o-mini or gpt-4.1-mini)

Telegram Bot with rights to post in your target chat

Setup (5 minutes)

Import this workflow into n8n.

Open the Telegram node “Post to Group” and set your chatId (e.g., @your_channel or numeric ID).

Connect your OpenAI and Telegram credentials.

(Optional) Adjust the Scheduler interval (default: every 3 hours).

Run once manually to test, then activate.

Customization

Add or replace RSS sources.

Modify the prompts in Crypto Analyst and SMM Editor to adapt tone, style, or language.

Swap out the Telegram node to publish on other platforms (Slack, Discord, etc.).![Telegram News Templates.png](fileId:2209)

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
