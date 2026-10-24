# 📊 Track weekly AI search visibility for your brand with Apify and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs weekly to measure how often your brand and competitors are mentioned across selected AI engines using Apify’s AI Share of Voice Actor, then appends per-engine visibility metrics (mention rate, share of voice, rank, citations) to Google Sheets.

## How it works
1. Runs every Monday at 08:00 (or manually) and loads your brand, competitors, prompts, and target engines from a configured JSON payload.
2. Starts an Apify Actor run (touchrock/ai-share-of-voice) with a maximum charge limit to check the prompts against the selected engines.
3. Polls the Apify run status every two minutes until it succeeds or exits the workflow with an error if the run ends in a non-success status.
4. Fetches the Actor OUTPUT report from the Apify key-value store once the run succeeds.
5. Converts the report into one row per brand and engine with metrics like mention rate, share of voice, average list rank, and citation rate.
6. Appends the generated rows to a Google Sheets worksheet for ongoing weekly tracking.

## Setup
1. Create an Apify account, generate an API token, and add an n8n HTTP Header Auth credential that sends `Authorization: Bearer <YOUR_APIFY_TOKEN>` for the Apify HTTP requests.
2. Edit the brand/competitor list, prompts, engines, country, language, and runs-per-prompt settings in the workflow’s input JSON.
3. Connect Google Sheets OAuth credentials and select the target spreadsheet and worksheet in the append step.
4. Ensure your sheet has columns matching the appended fields (for example: date, engine, brand, yourBrand, answers, mentionedIn, mentionRatePct, shareOfVoicePct, avgListRank, citationRatePct, runUrl).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
