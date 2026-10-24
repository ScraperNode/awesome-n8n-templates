# 📊 Send a curated daily X tech digest to Telegram with Claude and DeepSeek

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every weekday morning, pulls the last 24 hours of original posts from a list of X (Twitter) accounts via TwitterAPI.io, uses Anthropic Claude (with a Fireworks DeepSeek fallback) to curate a tech digest, and sends the formatted Markdown summary to Telegram.

## How it works
1. Runs on a cron schedule every weekday at 07:25.
2. Builds a timezone-aware 24‑hour window and expands the configured X account list into one item per username.
3. Queries TwitterAPI.io advanced search for each account (excluding replies) with throttling and captures any failed account lookups.
4. Flattens and filters the results to keep only original tweets within the last 24 hours, then deduplicates and sorts them into a single digest payload.
5. If there are tweets, sends them to an LLM (Anthropic Claude Haiku 4.5 with a Fireworks DeepSeek fallback) to remove noise and write a Telegram‑compatible Markdown digest.
6. If there are no tweets, creates a “nothing to report” message that can also list any accounts that could not be read.
7. Sends the resulting message to the configured Telegram chat.

## Setup
1. Create a TwitterAPI.io API key and add it as an n8n Header Auth credential (header name `X-API-Key`), then select it in the TwitterAPI.io request step.
2. Add Anthropic API credentials for the primary model and an OpenAI-compatible Fireworks credential for the DeepSeek fallback.
3. Create a Telegram bot, add the Telegram API credentials in n8n, and set your target `telegram_chat_id` in the Settings step.
4. Update the `x_accounts` list and `timezone` (IANA name) in the Settings step, and adjust the cron schedule time if needed.

## Requirements
- A TwitterAPI.io account and API key (paid per request; the workflow makes one request per monitored account per run).
- A LLM API key for the AI Agent (Like an Anthropic API key for Claude Haiku 4.5).
- A Telegram bot token and the numeric chat ID of the chat or channel that will receive the digest.

## Customization
- Edit the `x_accounts` array in the Settings node to monitor any list of X usernames (no @ symbol).
- Change the cron expression in the trigger to run daily instead of weekdays, or at a different hour, and set `timezone` to your IANA zone.
- Swap the curation model: any chat model node can replace Claude Haiku 4.5, and the fallback can be removed entirely.
- Edit the system message in the Curate daily digest node to change the topics kept, the output language, or the digest length.
- Replace the Telegram node with Slack, Discord or email; the message is plain Markdown text produced by Format digest message.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, Anthropic Chat Model, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
