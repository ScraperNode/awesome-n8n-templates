# 🎣 Research and score crowdfunding leads in Google Sheets with DeepSeek AI

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs two daily schedules to research crowdfunding campaigns from Google Sheets using Firecrawl, DeepSeek/OpenAI, Jina AI, Perplexity, Hunter, Lemlist, and an email verification API, then writes enriched contact details and a 0–100 score with priority back into the same spreadsheet.

## How it works
1. Runs daily at 1am, reads unresearched campaign rows from a Google Sheets “Leads” tab, and processes them in batches.
2. Scrapes each campaign page with Firecrawl, cleans the markdown, and uses a DeepSeek model to extract key campaign metrics like amount raised, backers, and dates.
3. Uses an AI research agent (DeepSeek with OpenAI fallback) plus Jina AI, Perplexity, and Hunter to identify the company, website, key contact, and supporting details.
4. Extracts contact fields from the research output and enriches the person in Lemlist to find/verify email, phone, and LinkedIn details, then waits and fetches the enrichment result.
5. Combines research and Lemlist data into a structured lead record (including optional currency conversion to USD), verifies the email via QuickEmailVerification when present, and updates the matching lead row in Google Sheets.
6. Runs daily at 5am, pulls enriched leads from Google Sheets, skips rows without descriptions, and uses a DeepSeek scoring agent to assign a 0–100 score and priority label, then saves results back to the sheet.
7. Aggregates the number of processed items for both runs and appends a completion summary row to the Google Sheets “Dashboard & Reports” tab.

## Setup
1. Connect credentials for Google Sheets, DeepSeek, OpenAI (fallback), Perplexity, and Lemlist.
2. Replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID and ensure it has a “Leads” tab and a “Dashboard & Reports” tab with the columns referenced in the update/append steps.
3. Add API keys for Firecrawl, Jina AI, Hunter, QuickEmailVerification, and the Corenexis currency conversion endpoint in the HTTP request nodes.
4. Review the “Score the lead” prompt placeholders (your company name and business model) and adjust scoring bands/criteria to match your qualification rules.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Lemlist, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
