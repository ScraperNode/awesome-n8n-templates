# 🎣 Research and score crowdfunding leads with Google Sheets, DeepSeek, Lemlist, and more

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs two daily schedules to research crowdfunding campaign leads from Google Sheets using Firecrawl, DeepSeek/OpenAI, Jina AI, Perplexity, Hunter, and Lemlist, then verifies emails and scores each enriched lead with a 0–100 rating and priority label.

## How it works
1. Runs daily at 1am, reads unresearched rows from a Google Sheets “Leads” tab, and processes each product one at a time.
2. Scrapes each campaign page with Firecrawl, cleans the markdown, and uses DeepSeek to extract key campaign details like amount raised, backers, and campaign dates.
3. Uses a LangChain research agent (DeepSeek with OpenAI fallback) to research the company and decision maker, calling Jina AI, Perplexity, and Hunter as needed.
4. Extracts structured contact signals (name, LinkedIn, domain) and enriches the person in Lemlist to find/verify email and phone, then waits and fetches the enrichment results.
5. Combines research and Lemlist data into a fixed schema (converting non-USD amounts via a currency conversion API), verifies the email with QuickEmailVerification when present, and updates the matching row in Google Sheets.
6. Aggregates the research run results and appends a summary row to the Google Sheets “Dashboard & Reports” tab.
7. Runs daily at 5am, reads enriched leads from Google Sheets, scores each lead with DeepSeek into a 0–100 score and TOP/HIGH/MEDIUM/LOW priority, saves the results back to the sheet, and logs a scoring summary to “Dashboard & Reports”.

## Setup
1. Add credentials for Google Sheets, DeepSeek, OpenAI (fallback), Perplexity, and Lemlist.
2. Replace YOUR_GOOGLE_SHEET_ID and ensure your spreadsheet has a “Leads” tab (with columns like Product Name, Product URL, Score, Priority) and a “Dashboard & Reports” tab for run logs.
3. Set API keys for Firecrawl, Jina AI, Hunter, QuickEmailVerification, and the currency conversion API in the HTTP request/tool nodes.
4. In the scoring prompt, replace the placeholders for your company name and business model to match how you want leads evaluated.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Lemlist, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
