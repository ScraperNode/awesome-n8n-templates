# 📊 Monitor Furusato Nozei market trends with Google News, AI analysis and Slack reporting

> ⚡ **93 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Analyze Furusato Nozei trends from Google News to Slack

This workflow acts as a specialized market analyst for Japan's "Furusato Nozei" (Hometown Tax) system. It automates the process of monitoring related news, validating keyword popularity via search trends, and delivering a concise, strategic report to Slack.

By combining RSS feeds, AI agents, and real-time search data, this template helps marketers and municipal researchers stay on top of the highly competitive Hometown Tax market without manual searching.

## 👥 Who is this for?
- **Municipal Government Planners:** To track trending return gifts and competitor strategies.
- **E-commerce Marketers:** To identify high-demand keywords for Furusato Nozei portals.
- **Content Creators:** To find trending topics for blogs or social media regarding tax deductions.
- **Market Researchers:** To monitor the seasonality and shifting interests in the Hometown Tax sector.

## ⚙️ How it works
1. **News Ingestion:** The workflow triggers on a schedule and fetches the latest "Furusato Nozei" articles from Google News via RSS.
2. **AI Analysis & Extraction:** An AI Agent (using OpenRouter) summarizes the news cluster and identifies the most viable search keyword (e.g., "Scallops," "Travel Vouchers," or specific municipalities).
3. **Data Validation:** The workflow queries the Google Trends API (via SerpApi) to retrieve search volume history for the extracted keyword in Japan.
4. **Strategic Reporting:** A second AI Agent analyzes the search trend data alongside the keyword to generate a market insight report.
5. **Delivery:** The final report is formatted and sent directly to a Slack channel.

## 🛠️ Requirements
To use this workflow, you will need:
- **n8n** (Version 1.0 or later recommended).
- **OpenRouter API Key** (or you can swap the model nodes for OpenAI/Anthropic).
- **SerpApi Key** (Required to fetch Google Trends data programmatically).
- **Slack Account** (with permissions to post to a channel).

## 🚀 How to set up
1. **Configure Credentials:**
   - Add your OpenRouter API key to the Chat Model nodes.
   - Add your SerpApi key to the `Google Trends API` node.
   - Connect your Slack account in the `Send a message` node.
2. **Check the RSS Feed:**
   - The `RSS Read` node is pre-configured for "Furusato Nozei" (ふるさと納税). You can leave this as is.
3. **Regional Settings:**
   - The workflow is pre-set for Japan (`jp` / `ja`). If you need to change this, check the `Workflow Configuration` and `Google Trends API` nodes.
4. **Schedule:**
   - Enable the `Schedule Trigger` node to run at your preferred time (default is 9:00 AM JST).

## 🎨 How to customize
- **Change the Topic:** While this is optimized for Furusato Nozei, you can change the RSS feed URL to track other Japanese market trends (e.g., NISA, Inbound Tourism).
- **Swap AI Models:** The template uses OpenRouter, but you can easily replace the "Chat Model" nodes with OpenAI (GPT-4) or Anthropic (Claude) depending on your preference.
- **Adjust AI Prompts:** The AI prompts are currently in Japanese to match the content. You can modify the system instructions in the `AI Agent` nodes if you prefer English reports.

## 🔗 Nodes Used

HTTP Request, RSS Read, Slack, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
