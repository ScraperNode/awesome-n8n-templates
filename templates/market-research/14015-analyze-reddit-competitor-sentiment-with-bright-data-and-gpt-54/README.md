# 📊 Analyze Reddit competitor sentiment with Bright Data and GPT-5.4

> ⚡ **67 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Analyze Reddit sentiment around competitor brands using Bright Data URL-based scraping and GPT-5.4.

This workflow Reads competitor post URLs from Google Sheets, scrapes Reddit posts via URL using Bright Data's Reddit Posts API, and uses GPT-5.4 to map sentiment distribution. The AI calculates positive, neutral, and negative sentiment percentages, extracts top complaints and praises, identifies vulnerability areas, and scores the competitive opportunity (0-100). High-opportunity brands trigger alerts to the strategy team.

How it works:
1. Weekly schedule trigger runs on Monday at 8 AM.
2. Reads the 'competitor_brands' sheet (columns: brand_name, url, industry).
3. Sends each URL to Bright Data for Reddit post discovery.
4. Validates the Bright Data API response.
5. GPT-5.4 analyzes sentiment distribution and identifies competitive opportunities.
6. Parses AI output and merges with original brand data.
7. Filters by AI confidence (&gt;= 0.7).
8. Brands with competitive_opportunity_score &gt;= 70 trigger email alerts and go to 'high_opportunity_brands'.
9. Lower-scoring brands go to 'competitor_sentiment'.
10. Low-confidence results go to 'low_confidence_sentiment'.

Setup:
- Create a Google Sheet with a 'competitor_brands' tab containing columns: brand_name, url, industry.
- Create output tabs: high_opportunity_brands, competitor_sentiment, low_confidence_sentiment.
- Configure Bright Data API credentials as HTTP Header Auth (Bearer token).
- Connect OpenAI, Google Sheets, and Gmail OAuth2 credentials.

Requirements:
- Bright Data API account (~$0.003-0.005 per URL scrape).
- OpenAI API account (GPT-5.4 costs ~$0.003-0.008 per call).
- Google Sheets OAuth2 credentials.
- Gmail OAuth2 credentials.

Notes:
- Track competitive_opportunity_score over time to spot widening vulnerabilities.
- Use the vulnerability_areas field to inform your product positioning and messaging.
- Combine with your own product monitoring (Template 21) for a complete competitive picture.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
