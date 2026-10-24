# 📊 Map local pack rankings across a geo grid with Bright Data, GPT-5.6, Slack and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday to map your Google local pack presence across a grid of nearby coordinates using Bright Data SERP requests, summarizes the results with OpenAI (GPT-5.6), stores weekly metrics in an n8n Data Table, and shares the report to Slack and via Gmail.

## How it works
1. Runs every Monday morning on a schedule and loads your business name, keyword, center coordinates, grid size, and reporting destinations.
2. Generates a square geo grid around the center point and builds a Google search URL for each coordinate using a uule location parameter.
3. Queries Google from each grid point one at a time via the Bright Data SERP API and extracts the local pack entries, your position (or absence), and which competitors rank above you.
4. Aggregates all points into coverage and average-rank metrics, stops the run if Google does not resolve a location for any point, and looks up the most recent prior result for the same business+keyword in an n8n Data Table.
5. Stores the current week’s metrics back to the Data Table and tallies the competitors that outrank you most often across the grid.
6. Draws an ASCII map of rankings laid out in grid order, asks OpenAI to write a two-sentence plain-language owner summary, and builds Slack and HTML email versions of the report.
7. Posts the report to the configured Slack channel and emails the same report via Gmail.

## Setup
1. Create a Bright Data SERP zone and add an HTTP Header Auth credential in n8n that the workflow uses to call the Bright Data request API.
2. Add OpenAI credentials (for the GPT-5.6 model), a Slack credential, and a Gmail credential.
3. Create an n8n Data Table named `local_grid` with columns `watch_key`, `business`, `keyword`, `run_on`, `coverage_pct`, `avg_rank`, and `in_pack`.
4. Update the Settings values for `business_name`, `keyword`, `centre_lat`, `centre_lng`, `serp_zone`, `slack_channel`, and `report_to`, then start with a small `grid_size` (for example 3) and adjust spacing/radius as needed.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
