# 📊 Extract ecommerce product data with Google Sheets, ScrapingBee and Gemini

> ⚡ **28 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow manually runs to read a list of webpage URLs from Google Sheets, scrape each page with ScrapingBee, and use Google Gemini to extract structured product data from screenshots with an HTML fallback, then append the results back into a Google Sheets sheet.

## How it works
1. Runs when you manually trigger the workflow.
2. Reads the list of URLs to scrape from a Google Sheets spreadsheet.
3. Fetches a full-page screenshot for each URL using the ScrapingBee API.
4. Sends the screenshot (and the URL for context) to a Google Gemini model to extract product details into a structured JSON format, calling a ScrapingBee HTML fetch tool when screenshot extraction is incomplete.
5. Converts any fetched HTML to Markdown and returns it to the Gemini agent to complete the extraction.
6. Splits the extracted product array into individual items and appends them as new rows in the Google Sheets “Results” sheet.

## Setup
1. Create a Google Sheets service account connection in n8n and set the target spreadsheet and the “List of URLs” and “Results” sheet selections.
2. Add a Google Gemini (PaLM) API credential in n8n and ensure the selected model (gemini-1.5-pro-latest) is available for your account.
3. Add your ScrapingBee API key in both ScrapingBee HTTP requests (screenshot and HTML) and confirm the target URLs are reachable from your n8n environment.
4. Ensure the “Results” sheet columns match the structured output fields (for example: product_title, product_price, product_brand, promo, promo_percentage/promo_percent) or update the output schema and column mappings accordingly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, Execute Workflow Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
