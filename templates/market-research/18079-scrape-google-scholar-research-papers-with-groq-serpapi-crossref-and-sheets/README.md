# 📊 Scrape Google Scholar research papers with Groq, SerpApi, CrossRef and Sheets

> ⚡ **10 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a research topic from an n8n chat message, uses Groq to generate optimized Google Scholar queries, fetches paper results via SerpApi, enriches missing DOIs using the Crossref API, deduplicates the results, and appends the final paper list to Google Sheets.

## How it works
1. Receives a research title/description as an n8n chat message.
2. Uses Groq (Llama 3.1) to generate multiple optimized Google Scholar search queries and parses them into structured JSON.
3. Runs each query against Google Scholar via SerpApi with a publication date filter (2018–2025) and flattens the returned organic results into one list.
4. Extracts DOI and year from the Scholar result when possible, and for items without a DOI it looks up the DOI in Crossref by title (with a short wait between requests).
5. Merges the enriched items back into a single dataset and removes duplicate entries based on the paper link.
6. Appends the final fields (query, title, authors, year, link, abstract/snippet, DOI, and DOI URL) to a target Google Sheets worksheet.

## Setup
1. Add Groq API credentials for the Groq Chat Model used to generate and parse Google Scholar queries.
2. Add SerpApi credentials and ensure your SerpApi plan supports the Google Scholar engine.
3. Ensure Crossref requests use a valid User-Agent email by updating the `mailto:your@email.com` value in the Crossref HTTP request headers.
4. Add Google Sheets OAuth2 credentials and update the spreadsheet ID and sheet/tab in the Google Sheets append step.
5. Create the target Google Sheet with matching columns (Query, Title, Link, Abstract, Authors, DOI-URL, DOI, Year) or adjust the column mapping to your schema.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, Chat Trigger, Groq Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
