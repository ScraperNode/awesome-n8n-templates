# 📊 Scrape AI news from multiple sources to Markdown & Google Drive with RSS.app

> ⚡ **3,838 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI News Scraping System

This n8n workflow automates the process of pulling in breaking AI-related headlines from curated RSS feeds, scraping their full content, and saving readable Markdown versions directly to Google Drive.

Use cases include:
- Creating a personal newsletter curation system
- Automating blog post research workflows
- Archiving news content for later summarization or AI use

---

## How it Works

1. **Scheduled Triggers**  
   The workflow runs every 3–4 hours using multiple `Schedule Trigger` nodes. Each trigger targets a different news source (e.g., Google News, OpenAI Blog, Hugging Face, etc.).

2. **Fetch and Parse Feeds**  
   RSS feeds are fetched via the `HTTP Request` node. Items from the feed are split into individual entries using the `Split Out` node.

3. **Scrape Article Content**  
   Each article URL is sent to the Firecrawl API with a prompt to extract only the main content in Markdown. The scraping skips navigation, headers, footers, and ads.

4. **Convert and Save**  
   The extracted Markdown is converted into a `.md` file using the `Convert to File` node. The file is then uploaded to a Google Drive folder.

---

## Good to Know

- This workflow uses the Firecrawl API for web scraping. Be sure to configure a Generic HTTP Header credential with your API key.
- Output files are saved in Markdown format
- You can add more `Schedule Trigger` + `HTTP Request` pairs to extend this workflow to additional feeds.

---

## Requirements

- Firecrawl API account for scraping
- Google Drive account (OAuth2 credentials must be configured in n8n)
- n8n instance (self-hosted or cloud)

---

## Customization Ideas

- Replace or extend RSS feeds with sources relevant to your niche
- Load up scraped news stories into a prompt to create new content like TikToks and Reels
- Add a summarization step using an LLM like GPT or Claude
- Send the Markdown files to Notion, Slack, or a blog CMS

---

## Example Feeds

| Feed Name        | URL                                                                 |
|------------------|----------------------------------------------------------------------|
| Google News (AI) | https://rss.app/feeds/v1.1/AkOariu1C7YyUUMv.json                    |
| OpenAI Blog      | https://rss.app/feeds/v1.1/xNVg2hbY14Z7Gpva.json                    |
| Hugging Face     | https://rss.app/feeds/v1.1/sgHcE2ehHQMTWhrL.json                    |

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
