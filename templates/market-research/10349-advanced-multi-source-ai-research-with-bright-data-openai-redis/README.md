# 📊 Advanced multi-source AI research with Bright Data, OpenAI, Redis

> ⚡ **173 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it Works
This workflow transforms natural language queries into research reports through a five-stage AI pipeline. When triggered via webhook (typically from Google Sheets using the companion [`google-apps-script.js`](https://gist.github.com/danishashko/fb509b733aebf5538676ca80b19fa28b) (GitHub gist), it first checks Redis cache for instant results.

For new queries, GPT-4o breaks complex questions into focused sub-queries, optimizes them for search, then uses Bright Data's MCP Tool to find the top 5 credible sources (official sites, news, financial reports). URLs are scraped in parallel, bypassing bot detection.

GPT-4o extracts structured data from each source: answers, facts, entities, sentiment, quotes, and dates. GPT-4o-mini validates source credibility and filters unreliable content. Valid results aggregate into a final summary with confidence scores, key insights, and extended analysis.

Results cache for 1 hour and output via webhook, Slack, email, and DataTable—all in 30-90 seconds with 60 requests/minute rate limiting.

---

## Who is this for?
- Research teams needing automated multi-source intelligence
- Content creators and journalists requiring fact-checked information
- Due diligence professionals conducting competitive intelligence
- Google Sheets power users wanting AI research in spreadsheets
- Teams managing large research volumes needing caching and rate limiting

---

## Setup Steps
**Setup time:** 30-45 minutes

**Requirements:**
- Bright Data account (Web Scraping API + MCP token)
- OpenAI API key (GPT-4o and GPT-4o-mini access)
- Redis instance
- Slack workspace (optional)
- SMTP email provider (optional)
- Google account (optional for Sheets integration)

**Core Setup:**
1. Get Bright Data Web Scraping API token and MCP token
2. Get OpenAI API key
3. Set up Redis instance
4. Configure critical nodes:
   - **Webhook Entry:** Add Header Auth token
   - **Bright Data MCP Tool:** Add MCP endpoint with token
   - **Parallel Web Scraping:** Add Bright Data API credentials
   - **Redis Nodes:** Add connection credentials
   - **All GPT Nodes:** Add OpenAI API key (5 nodes)
   - **Slack/Email:** Add credentials if using

**Google Sheets Integration:**
1. Create Google Sheet
2. Open **Extensions → Apps Script**
3. **Paste the companion [`google-apps-script.js`](https://gist.github.com/danishashko/fb509b733aebf5538676ca80b19fa28b) code**
4. Update webhook URL and auth token
5. Save and authorize

**Test:** `{"prompt": "What is the population of Tokyo?", "source": "Test", "language": "English"}`

---

## Customization Guidance
- **Source Count:** Change from 5 to 3-10 URLs per query
- **Cache Duration:** Adjust from 1 hour to 24 hours for stable info
- **Rate Limits:** Modify 60/minute based on usage needs
- **Character Limits:** Adjust 400-char main answer to 200-1000
- **AI Models:** Swap GPT-4o for Claude or use GPT-4o-mini for all stages
- **Geographic Targeting:** Add more regions beyond us/il
- **Output Channels:** Add Notion, Airtable, Discord, Teams
- **Temperature:** Lower (0.1-0.2) for facts, higher (0.4-0.6) for analysis

---

Once configured, this workflow handles all web research, from fact-checking to complex analysis—delivering validated intelligence in seconds with automatic caching.

---

**Built by Daniel Shashko**  
[Connect on LinkedIn](https://www.linkedin.com/in/daniel-shashko/)

## 🔗 Nodes Used

Send Email, HTTP Request, Redis, Slack, Webhook, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
