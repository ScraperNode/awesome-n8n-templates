# 📊 Scrape Google Maps business listings into Google Sheets with Apify

> ⚡ **157 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for

This workflow is for sales teams, marketers, and local SEO professionals who need to quickly collect and store business listings from Google Maps without manual copy-pasting.

## How it works

1. A user submits a web form with a city, country, and search query (e.g. "restaurants in Lyon, France").
2. The inputs are normalized into structured fields (City, Country, Query) using a Set node.
3. A new Google Spreadsheet is automatically created and named after the search parameters, and existing records are read.
4. A POST request is sent to the Apify Google Maps scraper actor, returning up to 50 business listings matching the query.
5. Key fields (title, price, category, address, phone, website, open/closed status) are extracted and mapped.
6. Results are appended or updated in the Google Sheet, ready for use in outreach or analysis.

## How to set up

- [ ] Configure the **When Search Form Submitted** node with your desired form fields.
- [ ] Connect your Google Sheets OAuth2 credentials in both Sheets nodes.
- [ ] Add your Apify API credentials to the **Scrape Google Maps via Apify** HTTP Request node.
- [ ] Verify the Apify actor ID in the POST URL matches your intended Google Maps scraper actor.

## Requirements

- Google account with Google Sheets access
- Apify account with a Google Maps scraper actor

## How to customize

- Extend the **Build Listing Fields** node to capture additional Apify fields such as ratings, review count, or opening hours.
- Adjust `maxCrawledPlacesPerSearch` in the Apify request body to control the number of results returned.
- Replace the form trigger with a scheduled trigger to run recurring scrapes automatically.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
