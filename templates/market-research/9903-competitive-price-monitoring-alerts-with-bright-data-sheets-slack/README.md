# 📊 Competitive price monitoring & alerts with Bright Data, Sheets & Slack

> ⚡ **169 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![image.png](fileId:3017)

## How it Works

This workflow automates competitive price intelligence using Bright Data's enterprise web scraping API. On a scheduled basis (default: daily at 9 AM), the system loops through configured competitor product URLs, triggers Bright Data's web scraper to extract real-time pricing data from each site, and intelligently compares competitor prices against your current pricing.

The workflow handles the full scraping lifecycle: it sends scraping requests to Bright Data, waits for completion, fetches the scraped product data, and parses prices from various formats and website structures. All pricing data is automatically logged to Google Sheets for historical tracking and trend analysis. When a competitor's price drops below yours by more than the configured threshold (e.g., 10% cheaper), the system immediately sends detailed alerts via Slack and email to your pricing team with actionable intelligence.

At the end of each monitoring run, the workflow generates a comprehensive daily summary report that aggregates all competitor data, calculates average price differences, identifies the lowest and highest competitors, and provides a complete competitive landscape view. This eliminates hours of manual competitor research and enables data-driven pricing decisions in real-time.

---

## Who is this for?

- E-commerce businesses and online retailers needing automated competitive price monitoring
- Product managers and pricing strategists requiring real-time competitive intelligence
- Revenue operations teams managing dynamic pricing strategies across multiple products
- Marketplaces competing in price-sensitive categories where margins matter
- Any business that needs to track competitor pricing without manual daily checks

---

## Setup Steps

- Setup time: Approx. 30-40 minutes (Bright Data configuration, credential setup, competitor URL configuration)
- Requirements:
    - Bright Data account with Web Scraper API access
    - Bright Data API token (from dashboard)
    - Google account with a spreadsheet for price tracking
    - Slack workspace with pricing channels
    - SMTP email provider for alerts

- Sign up for Bright Data and create a web scraping dataset (use e-commerce template for product data)
- Obtain your Bright Data API token and dataset ID from the dashboard
- Configure these nodes:
    - **Schedule Daily Check:** Set monitoring frequency using cron expression (default: 9 AM daily)
    - **Load Competitor URLs:** Add competitor product URLs array, configure your current price, set alert threshold percentage
    - **Loop Through Competitors:** Automatically handles multiple URLs (no configuration needed)
    - **Scrape with Bright Data:** Add Bright Data

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
