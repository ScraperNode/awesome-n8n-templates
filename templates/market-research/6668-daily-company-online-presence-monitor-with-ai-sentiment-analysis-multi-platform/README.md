# 📊 Daily company online presence monitor with AI sentiment analysis & multi-platform tracking

> ⚡ **653 views** · 📊 [Market Research & Insights](../)

## Description

How it works

This workflow provides a comprehensive daily overview of your chosen company's online presence. It automatically:

- Scans diverse online sources including Google News, Reddit, and YouTube for mentions of your specified company and keywords.

- Leverages Artificial Intelligence to analyze the sentiment (positive, negative, neutral) and provide concise summaries for each new mention.

- Intelligently tracks and deduplicates content using a persistent local database, ensuring you only receive alerts for genuinely new discussions or articles, preventing redundant notifications.

- Compiles a structured, categorized daily report detailing new mentions by source and sentiment.

- Delivers this insightful report directly to your email inbox.

Gain unparalleled visibility into your company's online reputation and public perception across various digital channels!

**Set up steps**

Setting up this comprehensive workflow is more involved, typically taking around 25-50 minutes, due to multiple data sources, AI integration, and database management. You'll need to:

- Define your company's name and a comprehensive list of search keywords.

- Authenticate your preferred email service (e.g., Gmail).

- Obtain an API key for your chosen AI service (e.g., OpenAI).

- Authenticate your Reddit account.

- Authenticate your Google (YouTube) account (for YouTube API access).

- Understand the nuances of general internet monitoring, acknowledging that capturing "all" content is practically impossible without highly specialized (and expensive) enterprise tools.

All detailed setup instructions and specific configuration guidance are provided within the workflow itself using sticky notes.

## 🔗 Nodes Used

Cron, Function, Gmail, YouTube, Reddit, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
