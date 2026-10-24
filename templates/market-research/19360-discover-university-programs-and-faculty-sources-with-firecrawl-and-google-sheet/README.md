# 📊 Discover university programs and faculty sources with Firecrawl and Google Sheets

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a university homepage URL and a target field, country, and degree level, then uses Firecrawl to verify the official site, find and validate a matching program page and faculty/staff directory URL on the same domain, and logs the outcome to Google Sheets.

## How it works
1. Receives submissions from an n8n form with the university homepage URL, target field, country, and degree level.
2. Normalizes the homepage URL, extracts the official domain, and validates that all required inputs are present.
3. Uses Firecrawl Scrape to analyze the homepage and confirm it is an official degree-granting university site in the selected country.
4. Uses Firecrawl Search to query the official domain for program/department pages, then deduplicates and ranks candidates to pick the best match.
5. Uses Firecrawl Scrape to extract content from the best candidate page and verifies the target field and requested degree level appear in the page evidence.
6. Uses Firecrawl Search to find and score a faculty/staff directory page on the same official domain and selects the best directory URL.
7. Appends either a verified result (program URL + faculty source URL) or a failure status to a Google Sheets spreadsheet.

## Setup
1. Create a Firecrawl API credential using HTTP Header Auth and ensure it can access the Firecrawl Scrape and Search endpoints.
2. Connect Google Sheets OAuth credentials and select the target spreadsheet and worksheet used to append results.
3. Ensure the Google Sheet has columns for University Name, Target Field, Degree, Country, Program URL, Faculty Source URL, and Status.
4. Enable the form trigger and share the generated form link with users who will submit discovery requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
