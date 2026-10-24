# 📊 Analyze keywords from top Upwork talent profiles with Apify and Google Sheets

> ⚡ **90 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Find out exactly which keywords top-rated Upwork freelancers use in their profiles — so you can optimize yours for search visibility and client trust.

## Who's it for
Freelancers on Upwork who want data-driven insights into how top earners in their niche write their profiles, rather than guessing which skills and phrases to highlight.

## How it works
The workflow scrapes up to 20 top-rated Upwork profiles for any search term using the Apify talent scraper. It normalizes each profile with field-weighted scoring — title text counts 3× more than bio text, and skills count 2× — because those fields carry more weight in Upwork's own search algorithm. It then calculates keyword coverage across all profiles, tracking how many individual profiles contain each keyword rather than just total occurrences. Single words, two-word phrases, and three-word phrases are all analyzed. Each keyword is scored using a composite formula and grouped into tiers: Essential, High Demand, Targeted, or Niche. Results are exported to Google Sheets with coverage stats and placement tips.

## How to set up
1. Add your Apify API token to the `Run Apify Actor` node URL
2. Add your Google Sheets OAuth2 credential in n8n
3. Paste your Google Sheet ID into the `Save to Google Sheets` node
4. In `Configure Search`, update the `searchUrl` to your target niche

## Requirements
- Apify account (free tier)
- Google Sheets account
- n8n (cloud or self-hosted)

## How to customize
Change `maxResults` in `Configure Search` from 20 to 50+ for a larger keyword sample. Filter results in Google Sheets by the `Tier` column to focus on Essential and High Demand keywords first.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
