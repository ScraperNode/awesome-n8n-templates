# 📱 Publish LinkedIn posts from RSS using Ollama, PostgreSQL and Telegram approval

> ⚡ **123 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically converts incoming RSS/news articles into structured, AI-enriched content records. It uses a local AI model to summarize articles, extract metadata, and classify content before storing it in PostgreSQL. A human-in-the-loop approval step via Telegram ensures only validated content is published to LinkedIn, maintaining quality and brand safety.

⚙️ How it works
Fetch RSS feed articles → AI summarizes content using Ollama → Extracts category, keywords, sentiment, and key points → Stores structured data in PostgreSQL → Sends content to Telegram for human approval → User approves or rejects → Approved content is marked in database → Automatically publishes approved posts to LinkedIn

📦 Requirements

n8n (latest version)
PostgreSQL database
Telegram Bot API credentials
LinkedIn Developer App (OAuth2)
Ollama (local AI runtime) with model like qwen2.5:3b
RSS feed source (e.g., Ars Technica or any news feed)

📊 Database Table Required: rss_feed_articles

Stores AI-processed articles, metadata, and approval status for controlled publishing workflow.

## 🔗 Nodes Used

Postgres, RSS Read, Telegram, Telegram Trigger, LinkedIn, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
