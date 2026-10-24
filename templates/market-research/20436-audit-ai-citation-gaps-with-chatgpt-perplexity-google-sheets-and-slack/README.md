# 📊 Audit AI citation gaps with ChatGPT, Perplexity, Google Sheets, and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This weekly workflow audits how often your brand is named versus cited by link in ChatGPT (with web search) and Perplexity, then identifies which external pages win those citations, classifies them with OpenAI, and logs a trend report plus a content-gap backlog in Google Sheets.

## How it works
1. Runs weekly on a schedule and reads one brand’s settings from Google Sheets (domain, sitemap path, competitors, sampling and notification settings).
2. Fetches the site sitemap, follows a sitemap index one level down when needed, and scores URLs to select the most commercial pages to sample.
3. Uses OpenAI to turn the selected page themes into buyer-style questions without naming the brand, then expands each question into multiple repeat runs.
4. Sends every repeated question to Perplexity and to the OpenAI Responses API with web search, then normalizes both outputs into a single record with answer text and cited URLs.
5. Calculates mention rate, citation rate, and stability per question/engine, and ranks the external cited URLs that are not on your own domain.
6. Fetches the top cited external pages and uses OpenAI to classify each page’s format, topic, and why it earns citations.
7. Builds a week-over-week HTML report, logs the run to Google Sheets History, emails the report via Gmail, optionally alerts Slack on large drops, and writes each citation gap as its own row in a Google Sheets Content Gaps backlog.

## Setup
1. Create a Google Sheets file with tabs named Settings, History, and Content Gaps, and add the columns referenced in the Google Sheets nodes (including Settings fields like Domain, Sitemap Path, Competitors, Pages To Sample, Repeats Per Question, Report Email, and Slack Channel).
2. Add Google Sheets credentials and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes with your spreadsheet ID.
3. Add OpenAI API credentials (used for question generation, page classification, and the ChatGPT web-search calls).
4. Add a Perplexity API credential for the Perplexity chat completions request.
5. Add Gmail credentials for sending the report email, and set the Slack channel name (and Slack credentials) for the optional alert message.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
