# 📊 Track buyer query citation sources with GPT-4o and Google Sheets

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow tracks which sources ChatGPT cites for buyer queries.vIt runs weekly to test buyer queries against OpenAI’s GPT-4o web search, extracts the cited URLs, and logs per-query citation counts and domain classifications to Google Sheets.

## How it works
1. Runs every week on a schedule trigger.
2. Reads a list of buyer queries (including brand and competitor context) from the `queries` tab in Google Sheets.
3. Sends each query to OpenAI’s `gpt-4o-mini-search-preview` three times with web search enabled and extracts the `url_citation` annotations from each response.
4. Aggregates citations per query and domain, calculating citation totals and a sample hit rate across the three runs.
5. Sends the unique cited domains to OpenAI’s `gpt-4o-mini` to classify each domain into a source taxonomy (brand site, competitor site, review platform, community, publisher, or docs/other).
6. Appends the aggregated rows with the domain classification and an example URL to the `citations` tab in Google Sheets.

## Setup
1. Add an OpenAI API key as an HTTP Header Auth credential (Authorization: Bearer YOUR_KEY) for both OpenAI HTTP requests.
2. Add a Google Sheets credential with access to the target spreadsheet.
3. Create a sheet with tabs `queries` and `citations`-->  queries: query_id | query | brand | competitors. citations--> run_date | query_id | query | domain | citations | sample_hit_rate | source_type | example_url
4. Replace `YOUR_GOOGLE_SHEET_ID` in both Google Sheets nodes and ensure the spreadsheet has `queries` and `citations` tabs with the expected columns.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
