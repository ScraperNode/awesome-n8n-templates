# 📊 Scrape and score Amazon products with Apify, OpenAI, and Google Sheets

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually scrapes product results from an Amazon search URL via the Apify Amazon Crawler actor, uses OpenAI to generate a structured product analysis (category, key feature, verdict, value score), and appends the enriched results to a Google Sheets spreadsheet.

## How it works
1. Runs when you manually click “Test workflow” in n8n.
2. Sends the configured Amazon search URL and scraping limits to the **[apify](https://www.apify.com?fpr=udemy)** Amazon Crawler actor and retrieves the dataset items.
3. Filters out any scraper items that are missing a title or contain an error.
4. Uses OpenAI to analyze each product’s title, brand, price, rating, and review count and returns a structured category, key feature, buyer verdict, and 1–10 value score.
5. Combines the scraped fields and AI analysis into a single row format and adds a timestamp.
6. Appends each enriched product as a new row in Google Sheets.

## Setup
1. Create an **[apify](https://www.apify.com?fpr=udemy)** API token and add it as an HTTP Header Auth credential used by the Apify request.
2. Add an OpenAI API key as an OpenAI credential and choose the model to use in the configuration.
3. Connect a Google Sheets OAuth2 account and select the target spreadsheet, sheet tab, and columns for appending rows.
4. Update the configuration values (Amazon search URL, max products, proxy country, analysis language, and actor ID if needed) before running the workflow.

## Additional info
# Scrape Amazon products with Apify and enrich them with AI in Google Sheets

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Scrape-Amazon-products-with-Apify-and-enrich-them-with-AI-in-Google-Sheets-39d3d6550fd981c1b2a7e5c45c7adb12)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
