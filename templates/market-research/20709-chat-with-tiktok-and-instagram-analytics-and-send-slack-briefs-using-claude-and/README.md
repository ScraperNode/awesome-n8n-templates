# 📊 Chat with TikTok and Instagram analytics and send Slack briefs using Claude and Postdom

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Ask plain questions like "Which TikTok did best this week?" or "Why did views drop on Instagram?" and an AI agent answers from your real Postdom numbers. The agent reads accounts, best posts, account performance, the weekly digest and your brand brief through the Postdom node's tools.

## How it works
1. A Chat Trigger opens a chat window in n8n, and a schedule runs the same agent every Monday at 9am to post a weekly briefing to Slack.
2. An AI Agent running Claude (the Anthropic chat model) with memory picks the right Postdom tools.
3. Seven read-only Postdom tools: accounts, best posts, account performance, a post, the weekly digest, workspace status and your brand brief.
4. When a platform does not report a metric, the agent says so instead of guessing zero.

## Setup
1. In Postdom (https://postdom.com), connect your accounts and create an agent key under Accounts > Agent keys. A read-only key is enough.
2. In n8n, create a Postdom API credential with that key and select it on every Postdom tool.
3. Add an Anthropic credential on the Claude chat model, then a Slack credential and channel on Post briefing to Slack.
4. Open the chat and ask a question.

## Requirements
- A Postdom account (the Free plan covers 1 post a month on 2 accounts on any platform, no card needed)
- An Anthropic API key (or swap in any chat model n8n supports), plus Slack for the Monday briefing

## Customization
- Edit the system message to match how your team reports.
- Swap the Chat Trigger for Slack or Telegram.

## Additional info
Who it is for: marketers, founders and agencies who want quick answers about short-form results without opening nine platform dashboards.

Postdom is an AI social media tool that turns your website into short videos, slideshows and posts, then publishes them.

Uses the Postdom community node, verified by n8n. It works on n8n Cloud and on self-hosted n8n (install n8n-nodes-postdom under Settings > Community nodes).

Postdom API reference: https://postdom.com/docs

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, Anthropic Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
