# 📊 Send weekly Databox paid ads performance reports to Slack and email

> ⚡ **718 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stop spending hours manually pulling paid ads data. This workflow connects to Databox via MCP, auto-discovers every connected paid platform, fetches 6 key metrics, and delivers a consolidated weekly report to Slack and email - every Monday at 9 AM, completely hands-free.

## Who's it for

- **Performance marketers** managing campaigns across multiple platforms
- **Marketing managers** who need a weekly cross-platform overview
- **Agencies** automating paid ads reporting for clients

## How it works

1. Schedule Trigger fires every Monday at 9 AM
2. AI Agent connects to Databox via MCP and discovers all connected paid platforms (*Google Ads, Facebook Ads, LinkedIn Ads, TikTok Ads, and 6 more*)
3. Fetches Spend, Clicks, CPC, CTR, Impressions, and Conversions for this week and last week
4. Calculates week-over-week changes and formats two outputs - a Slack summary and a color-coded HTML email
5. Delivers both simultaneously

## Requirements

- **[Databox account](https://databox.com/?ref=n8n)** with at least one paid ads platform connected (free plan works)
- OpenAI API key (or Anthropic)
- Slack account
- Gmail account

## How to set up

1. Click **Databox MCP Tool** - set Authentication to OAuth2 and authorize
2. Add your **OpenAI API key** to the Chat Model node
3. Connect **Slack** and update the channel ID in the Send to Slack node
4. Connect **Gmail** and set the recipient address in the Send Email node
5. Activate - your first report arrives next Monday

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
