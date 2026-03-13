# 📊 Discover daily business opportunities with Google Gemini, Sheets and Telegram

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who’s it for
This template is built for **founders, sales teams, agencies, consultants, and growth operators** who want a fully automated way to discover high-intent companies showing buying signals such as funding, hiring, launches, or expansion — without manual research.

It’s ideal for outbound sales, partnership scouting, market intelligence, and lead generation.

---

### What it does / How it works
This workflow automates daily business signal monitoring and opportunity detection.

It runs on a daily schedule and collects data from multiple sources:
- **LinkedIn**
- **X**
- **Product Hunt**
- **CrunchBase**
- **Google News**

All incoming data is:
- Merged and normalized into a single unified feed
- Cleaned and deduplicated
- Passed to an AI agent powered by **Google Gemini**

The AI agent:
- Filters only relevant events (Funding, Launch, Expansion, Hiring)
- Generates a concise summary
- Explains why the event represents a business opportunity

Based on the AI classification:
- Relevant opportunities continue through the workflow
- Irrelevant noise is automatically discarded

For each qualified opportunity:
- Company/contact data is enriched via an external API
- The opportunity is saved to **Google Sheets**
- A real-time alert is sent via **Telegram**

All logic runs automatically end-to-end.

---

### Requirements
- Google News (NewsAPI) API key
- Twitter/X API credentials
- Product Hunt API credentials
- Crunchbase RSS feed access
- Google Sheets OAuth2 credentials
- Telegram Bot credentials
- Google Gemini (PaLM) API credentials
- (Optional) Contact enrichment API

---

### How to set up
1. Import the workflow into n8n.
2. Connect all required credentials:
   - Google Gemini
   - Google Sheets
   - Telegram
   - External APIs (News, X, Product Hunt)
3. Replace placeholders:
   - Google Sheet ID and range
   - Telegram Chat ID
   - Enrichment API URL (if used)
4. Adjust search queries if needed.
5. Run the workflow once manually to test.
6. Enable the Daily Trigger to activate automation.

---

### How to customize the workflow
- Modify AI prompts to refine opportunity criteria
- Add new data sources (LinkedIn, Reddit, Hacker News)
- Change schedule frequency (hourly, weekly)
- Log opportunities into a CRM instead of Sheets
- Add email or Slack alerts
- Expand enrichment logic for deeper company insights

This workflow transforms scattered startup news into a **clean, daily stream of actionable business opportunities — fully automated**.

## 🔗 Nodes Used

Cron, Function, Google Sheets, HTTP Request, Telegram, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
