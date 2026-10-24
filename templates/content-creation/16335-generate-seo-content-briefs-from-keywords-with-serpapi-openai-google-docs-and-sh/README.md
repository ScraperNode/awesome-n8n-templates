# 🎬 Generate SEO content briefs from keywords with SerpAPI, OpenAI, Google Docs and Sheets

> ⚡ **53 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a keyword via an n8n form, pulls the top Google results using SerpApi, scrapes headings from competitor pages, and uses OpenAI to generate a structured SEO content brief, which it saves to Google Docs and logs to Google Sheets.

## How it works
1. Receives a keyword, target country, and search intent from an n8n form submission.
2. Queries SerpApi’s Google Search API to fetch organic search results for the keyword and keeps the top 10 listings.
3. Visits each competitor URL and extracts the page title plus H1/H2/H3 headings from the HTML.
4. Aggregates the scraped competitor signals and stops if fewer than three competitor pages were successfully collected.
5. Sends the competitor headings and the original inputs to OpenAI (GPT-4o) to generate a structured SEO content brief (titles, meta description, outline, keywords, gaps, and link ideas).
6. Formats the brief as markdown, creates a new Google Doc, inserts the brief content, and appends the result to a Google Sheets tab for tracking.

## Setup
1. Add a SerpApi credential (query-string auth) and ensure your SerpApi plan allows Google search queries.
2. Add an OpenAI API credential and confirm the workflow can access the GPT-4o model.
3. Connect Google Docs and Google Sheets credentials with permission to create documents and append rows.
4. Replace the Google Sheets spreadsheet URL/ID in the append step and ensure a sheet/tab named “Briefs” exists (or update the target sheet name).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
