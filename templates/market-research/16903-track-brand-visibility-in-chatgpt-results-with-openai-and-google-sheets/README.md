# 📊 Track brand visibility in ChatGPT results with OpenAI and Google Sheets

> ⚡ **12 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly, reads buyer-style queries from Google Sheets, asks OpenAI Chat Completions (ChatGPT) each query three times, judges whether your brand is mentioned, and writes per-query visibility metrics and a 0–100 score back to a Google Sheets results tab.

## How it works
1. Runs every week on a schedule trigger.
2. Reads the query set (query, brand, and competitors) from a Google Sheets tab named `queries`.
3. Duplicates each query into three sample runs to account for variation in OpenAI responses.
4. Sends each sample query to OpenAI Chat Completions (gpt-4o-mini) to generate an answer at temperature 1.
5. Sends the generated answer to a separate OpenAI Chat Completions judge call (gpt-4o-mini) at temperature 0 to extract structured JSON about brand mention, rank, sentiment, recommendation, and competitors mentioned.
6. Aggregates the three judged samples per query to compute inclusion rate, average rank/sentiment, and a weighted 0–100 visibility score.
7. Appends the per-query results (including the run date and metrics) to the `results` tab in Google Sheets.

## Setup
1. Add an OpenAI credential for HTTP Header Auth using `Authorization: Bearer <YOUR_OPENAI_API_KEY>`.
2. Add a Google Sheets credential with access to the spreadsheet you want to use.
3. Create a Google Sheets document with `queries` and `results` tabs and the expected columns (for example: `queries`: query_id, query, brand, competitors; `results`: run_date, query_id, query, brand, runs, inclusion_rate, avg_rank, avg_sentiment, visibility_score, competitors_seen).
4. Replace `YOUR_GOOGLE_SHEET_ID` with your actual Google Sheets document ID in both Google Sheets nodes.
5. Adjust the weekly schedule (day/time) or sample count in the code if you want a different cadence or number of runs per query.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
