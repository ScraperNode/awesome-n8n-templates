# 📊 Scrape Reddit posts with BrowserAct, summarize with Gemini, and save to Google Sheets

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🕵️‍♂️ Reddit Intelligence Monitor: AI-Powered Scraping with BrowserAct

Automate your market research and competitor analysis with this powerful "Set and Forget" workflow. It monitors Reddit for specific keywords and competitor subreddits, uses **BrowserAct** for stealth scraping, analyzes the sentiment with AI, and delivers a daily intelligence digest to your Google Sheets.

## 💡 Key Features
- **Powered by BrowserAct**: Leverages cloud browser automation to stealthily scrape Reddit data without getting blocked.
- **Dual-Track Monitoring**: Simultaneously tracks "Brand Competitors" (Subreddits) and "Topic Keywords" (Search Results).
- **AI Analysis**: Summarizes the top 3 trending posts into a single concise daily report, filtering out noise.
- **Structured Archive**: Automatically cleans, formats, and archives intelligence with source links into Google Sheets.

## 🛠️ How it Works
1. **Config Read**: Reads a list of monitoring targets from a Google Sheet.
2. **Route**: Splits the task into two paths (Competitor vs. Keyword) based on input type.
3. **Scrape**: **BrowserAct** navigates to the target Reddit pages and extracts the latest posts.
4. **Process**: Custom Code nodes clean the data and merge top 3 posts into a single prompt.
5. **Analyze**: AI Agent generates an executive summary for each topic.
6. **Archive**: Final reports are appended to your "Report" Google Sheet.

## 📋 Setup Guide
1. **Google Sheets**: Create a sheet with two tabs:
   - `Config`: Columns `keywords` (for search terms) and `competitor` (for subreddit names).
   - `Report`: Columns `Date`, `Competitor/Keyword`, `Summary`, `Link`.
2. **BrowserAct**: Connect your BrowserAct credentials and ensure you have the Reddit scraping task template ready.
3. **AI Model**: Configure the Google Gemini Chat Model (or swap for OpenAI).
4. **Schedule**: Enable the Schedule Trigger for daily automated runs.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
