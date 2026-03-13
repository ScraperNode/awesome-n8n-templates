# 📊 Analyze competitor strategy from YouTube & RSS with Gemini AI to Notion & Telegram

> ⚡ **359 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

#### Description:

Turn your n8n workflow into an automated competitive intelligence unit. This template monitors competitor activities across blog feeds and YouTube channels to detect strategic shifts. Instead of simply aggregating links, it uses **Apify** to fetch full video transcripts and **Google Gemini** to analyze the content's underlying message, tone, and positioning. The final output is a structured strategic briefing sent to Telegram and archived in Notion for long-term research.

## Who is this for
This workflow is designed for **market researchers, founders,** and **content strategists** who need deep insights into competitor activities without manually scrubbing video timelines or reading daily blog posts.

## How it works
1. **Ingest:** The workflow pulls the latest articles from configured RSS feeds and searches for new videos on specific YouTube channels.

2. **Deep Dive:** It automatically triggers an Apify actor to scrape the full transcript of any new video, ensuring the AI analyzes the spoken content rather than just metadata.

3. **Analyze:** Google Gemini processes the consolidated text to identify core messages, hidden strategies, and suggests potential counter-tactics.

4. **Report:**

- **Telegram:** Delivers a concise HTML executive summary with direct source links.

- **Notion:** Appends a comprehensive report to a database using formatted Notion Blocks (Headings, Toggles, and Bullet points).

## Requirements
- **Apify Account:** A free account is sufficient to run the `youtube-transcript-scraper`.

- **Services:** Google Gemini (PaLM), YouTube Data API, Telegram, Notion.

## How to set up
1. **Credentials:** Configure your API keys for YouTube, Apify, Google Gemini, Telegram, and Notion.

2. **Notion Setup:** Create a new Database with two properties: Name (Title) and date (Date). Copy the Database ID from the URL into the Notion node.

3. **Data Sources:**

- Update the **Channel ID** in the YouTube nodes to track your target competitors.
- Update the **Feed URL** in the RSS nodes.

## How to customize the workflow
- **Scale Up:** To monitor more competitors, duplicate the YouTube or RSS nodes in the "Data Sources" section and connect them to the Merge node.

- **Adjust Analysis:** Modify the system prompt in the **Google Gemini** node to focus on specific intelligence needs (e.g., "Focus on pricing changes" or "Identify new feature releases").

- **Token Optimization:** Use the configuration in the `Code - Data Prep` node to limit the number of items processed daily if you are using free-tier API limits.
## Need Help or Want to Customize This?
Contact me for consulting and support:
**Email:** cuongnguyen@aiops.vn

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, YouTube, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
