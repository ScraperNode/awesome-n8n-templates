# 📊 Summarize AI news from RSS, Reddit and HN with Claude to Discord and Slack

> ⚡ **94 views** · 📊 [Market Research & Insights](../)

## Description

**This n8n template builds an automated daily news digest powered by Claude AI.** 

It monitors RSS feeds, Reddit, and Hacker News, extracts full article text, analyzes each piece with AI, and delivers a polished briefing to Discord and Slack.

Stop drowning in newsletters -- Claude reads everything and surfaces only what matters, scored and ranked by importance.

**Good to know**
* Estimated cost is $0.03-0.10 per daily run using Claude Haiku + Sonnet. See [Anthropic pricing](https://www.anthropic.com/pricing) for current rates.
* Works without a database out of the box. Optionally enable PostgreSQL for article history and cross-day deduplication.

**How it works**
* Schedule trigger fires daily and fetches articles from 10 configurable sources (RSS, Atom, Reddit JSON, Hacker News API)
* Articles are deduplicated by URL hash and fuzzy title matching
* Jina Reader extracts full article text for deeper analysis
* Claude Haiku scores each article 1-10 for importance, assigns categories, and writes a "why it matters" summary
* Claude Sonnet compiles the top articles into a structured digest with lead story, top stories, quick hits, and trend detection
* Formatted output is delivered to Discord (rich embeds) and Slack (Block Kit)

**How to use**
* Add your Anthropic API key as an n8n credential and set your Discord webhook URL in the config node -- that's the minimum to get running
* Edit the feed list in "Build feed source list" to add your own sources

**Requirements**
* Anthropic API key ([setup guide](https://nxsi.io/guides/claude-api-setup))
* Discord webhook URL ([setup guide](https://nxsi.io/guides/discord-webhook)) and/or Slack credential

**Customizing this workflow**
* Swap feed sources for any topic -- finance, gaming, research papers, industry news
* Adjust topic importance weights to prioritize what you care about
* Modify the Claude system prompt to change the digest's tone and style

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
