# 📊 Send a daily AI news briefing from Hacker News, dev.to and Lobste.rs to Telegram with OpenAI

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Anyone who wants to stay current on AI without doomscrolling: developers, founders, researchers, and AI enthusiasts who live on Telegram and want one sharp briefing every morning.

## How it works
1. Every morning the workflow pulls recent AI stories from Hacker News through the public Algolia API, with no API key needed.
2. It keeps the freshest stories that have real links.
3. Stories are ranked by community points and the top 8 are taken.
4. OpenAI then writes a punchy plain-language summary of the headlines.
5. The workflow formats everything into a clean Markdown briefing, AI summary first.
6. Then the top stories follow as linked headlines with point counts.
7. The finished briefing is sent to your Telegram chat.

## Setup
1. Get an OpenAI API key from platform.openai.com and add it as credentials on the Summarize with AI node.
2. Create a Telegram bot with @BotFather and copy the API token. In n8n, add your Telegram credentials on the Send Telegram Briefing node.
3. Get your chat ID by messaging @userinfobot on Telegram. Open the Configuration node and paste your chat ID there.
4. Press Execute on the manual trigger to test, then activate the workflow.

## Requirements
- An OpenAI API key (used for the AI summary step).

## Customization
- Change the search query (try "open source LLM" or "AI agents"), the story count, the lookback window, or the schedule time in the Configuration node. Swap the Telegram node for Slack, Discord, or email to change how the briefing is delivered.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
