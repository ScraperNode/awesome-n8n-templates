# 🎬 Send daily AI news digests from RSS feeds with OpenAI, Telegram and Gmail

> ⚡ **180 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every morning at 8 AM, pulls articles from multiple RSS feeds, deduplicates and trims the list, uses OpenAI (GPT-5 Mini) to write a short plain-text news digest, and delivers the same digest to a Telegram chat and a Gmail inbox.

## How it works
1. Runs daily at 8:00 AM on a schedule.
2. Splits your configured RSS feed URL list into individual feeds and fetches the latest articles from each one, continuing even if a feed fails.
3. Removes duplicate articles by link, keeps only the newest items up to your maxArticles limit, and trims each item to title, link, publish date, and a short snippet.
4. Combines all cleaned articles into a single JSON list and sends it to OpenAI (GPT-5 Mini) to select 5–8 top stories and generate a single plain-text digest under 3,500 characters.
5. Sends the generated digest to your specified Telegram chat.
6. Emails the same digest as a plain-text message through Gmail.

## Setup
1. Add an OpenAI credential and ensure the GPT-5 Mini model is available in your account.
2. Create a Telegram bot with @BotFather, add the Telegram credential in n8n, and set your target telegramChatId (for example by using @get_id_bot).
3. Connect a Gmail account in n8n and set the recipient address to use for the digest.
4. In “Your Settings (EDIT ME)”, replace feedUrls, digestTopic, emailTo, telegramChatId, and maxArticles with your own values.

## 🔗 Nodes Used

RSS Read, Telegram, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
