# 📊 Turn weekly competitor ads into one creative brief with Apify and Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scrape active competitor ads from the Meta Ads Library via Apify, summarizes recurring angles and hooks with OpenAI, and appends the resulting creative brief to Google Sheets.

## How it works
1. Runs every Monday at 09:00 on a schedule.
2. Sets the competitor research parameters (search terms, country, and max results).
3. Uses Apify to run the Meta Ads Library Scraper actor and retrieve currently active ads for the configured search terms.
4. Filters out ads with too little readable copy and removes ads already seen in previous executions.
5. Bundles the remaining ad copy into a single prompt and sends it to an OpenAI chat model to generate a JSON creative brief (angles with counts, offers, hooks, proof, and gaps).
6. Appends the weekly brief output as a new row in Google Sheets.

## Setup
1. Add an Apify API token credential and ensure you can run the `dami_studio~meta-ads-library-scraper` actor in your Apify account.
2. Add an OpenAI API key credential and confirm the selected model (gpt-5-mini) is available to your account.
3. Add a Google Sheets OAuth credential, then select the target spreadsheet and sheet name in the append step.
4. Update the search terms, country, and max results values to match the competitors and market you want to monitor.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
