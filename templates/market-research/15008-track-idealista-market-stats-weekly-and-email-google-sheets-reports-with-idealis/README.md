# 📊 Track Idealista market stats weekly and email Google Sheets reports with Idealista Scraper

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Screenshot 20260413 at 15.59.08.png](fileId:5459)
## Who is this for

Real estate investors comparing markets across cities, agencies generating market reports for clients, property consultants doing due diligence, or analysts tracking price trends in Southern European property markets.

## What this workflow does

Every Monday at 8am, this workflow scrapes property listings from multiple Idealista markets, calculates key statistics, builds an HTML comparison report, emails it to you, and logs data to Google Sheets for long-term trend tracking.

1. The Schedule Trigger fires every Monday at 8am
2. Two Idealista Scraper nodes fetch Madrid and Barcelona listings in parallel via API-based extraction (never breaks)
3. Code nodes calculate per-market statistics: average/median price, price range, price per m², average size, average rooms
4. The Merge node combines both market analyses into one dataset
5. A Code node builds a professionally formatted HTML comparison table
6. The report is emailed via Gmail and weekly stats are logged to Google Sheets

Idealista has no official API and no built-in market analytics. This workflow turns raw listing data into actionable market intelligence, automatically, every week.

## Setup

1. Install **n8n-nodes-idealista-scraper** via Settings &gt; Community Nodes (self-hosted n8n only)
2. Add your **Apify API** credential ([get token](https://console.apify.com/account/integrations))
3. Add your **Gmail** credential (OAuth2)
4. Create a Google Sheet with a tab named "MarketHistory"
5. Update the email recipient in the Gmail node
6. Activate the workflow

## Requirements

- Self-hosted n8n instance (community node not available on n8n Cloud)
- Apify account with API token
- Gmail account with OAuth2 credential configured in n8n
- Google Sheets account with OAuth2 credential configured in n8n

## How to customize this workflow

- Add more cities by duplicating a Scraper + Analysis pair (Valencia, Rome, Lisbon, Milan)
- Switch `operation` from `sale` to `rent` to analyze rental markets
- Add price filters to focus on specific segments (luxury above 1M EUR, budget below 200K EUR)
- Calculate rental yield by scraping both sale and rent for the same area
- Add an IF node after analysis to send alerts when average price drops below a threshold
- Cost: ~$0.50/week (2 markets x 3 pages x ~40 properties each)

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
