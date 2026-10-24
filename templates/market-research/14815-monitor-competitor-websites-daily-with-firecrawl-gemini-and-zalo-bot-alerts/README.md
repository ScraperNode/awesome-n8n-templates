# 📊 Monitor competitor websites daily with Firecrawl, Gemini, and Zalo Bot alerts

> ⚡ **77 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?
Vietnamese businesses, marketers, and product managers who need daily competitive intelligence about competitor websites without manually checking them every day.

## How it works
This template combines two custom community nodes (Firecrawl + Zalo Bot) to automate competitor monitoring with AI-powered Vietnamese summaries.

1. **Schedule Trigger** runs daily at 9 AM
2. **Set Configuration** holds competitor URL, brand name, and Zalo Chat ID
3. **Firecrawl Scrape** fetches the competitor page (handles JS, anti-bot, content cleaning)
4. **OpenAI Summarize** generates a concise Vietnamese summary of key updates
5. **Format Alert** prepares the notification text with timestamp and source
6. **Zalo Bot Send** delivers the alert via Zalo Bot Platform

## Why this combination is unique
- Firecrawl handles modern JavaScript-heavy websites that traditional scrapers fail on
- Zalo Bot is the dominant messaging platform in Vietnam (75M+ users)
- Vietnamese AI summarization removes the language barrier for local teams
- No other template combines web scraping with Zalo Bot alerts

## Set up steps
1. Install community nodes `n8n-nodes-firecrawl-v2` and `n8n-nodes-zalo-platform`
2. Get Firecrawl API key from firecrawl.dev (or use self-hosted)
3. Create a Zalo Bot via Zalo Bot Manager in the Zalo app to get your Bot Token
4. Add OpenAI credentials (or swap with Claude/Gemini)
5. Update Set Configuration with competitor URL and Zalo Chat ID
6. Activate and let it run daily

## Requirements
- Self-hosted n8n (community nodes cannot be installed on n8n Cloud)
- Firecrawl API key (Cloud or self-hosted)
- Zalo Bot Token from Zalo Bot Manager
- OpenAI API key

## How to customize
- Loop over multiple competitors
- Replace OpenAI with Claude, Gemini, or local LLM
- Save history to Google Sheets to track changes
- Add diff detection to alert only on actual changes
- Send to multiple Zalo recipients or groups

## 🔗 Nodes Used

Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
