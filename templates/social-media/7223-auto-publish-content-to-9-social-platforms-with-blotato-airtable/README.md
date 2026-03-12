# 📱 Auto-publish content to 9 social platforms with Blotato & Airtable

> ⚡ **1,412 views** · 📱 [Social Media & Email Marketing](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**How it works**
• Publishes content to 9 social platforms (Instagram, YouTube, TikTok, Facebook, LinkedIn, Threads, Twitter/X, Bluesky, Pinterest) from a single Airtable base
• Automatically uploads media to Blotato, handles platform-specific requirements (YouTube titles, Pinterest boards), and tracks success/failure for each post
• Includes smart features like GPT-powered YouTube title optimization, Pinterest Board ID finder tool, and random delays to avoid rate limits

**Set up steps**  
• Takes ~20–35 minutes to configure all 9 platforms (or less if you only need specific ones)
• Requires Airtable personal access token, Blotato API key, and connecting your social accounts in Blotato dashboard
• Workflow includes comprehensive sticky notes with step-by-step Airtable base setup, credential configuration, platform ID locations, and quick debugging links for each social network

**Pro tip**: The workflow is modular - you can disable any platforms you don't use by deactivating their respective nodes, making it flexible for any social media strategy from single-platform to full omnichannel publishing.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Telegram, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
