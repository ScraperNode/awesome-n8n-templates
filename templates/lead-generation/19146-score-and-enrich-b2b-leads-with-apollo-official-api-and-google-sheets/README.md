# 🎣 Score and enrich B2B leads with Apollo Official API and Google Sheets

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on demand to search for B2B prospects using the Apollo Official API, scores and shortlists results, optionally enriches the top candidates, and appends deduplicated leads to a Google Sheets spreadsheet.

## How it works
1. Runs manually to start an Apollo People Search using the configured titles, locations, and paging settings.
2. Sends a POST request to the Apollo Official API People Search endpoint and retrieves matching people.
3. Scores each prospect based on title fit, seniority signals, email availability, and company data, then filters out blocked companies and low-scoring leads.
4. Produces a “preview only” list of the qualified, scored search results for review without using enrichment credits.
5. If enrichment is enabled, selects only the top candidates (up to the configured maximum) and calls the Apollo Official API People Enrichment endpoint without revealing personal emails or phone numbers.
6. Normalizes the enrichment responses into a consistent lead schema, removes duplicates across prior workflow executions, and appends the new leads to Google Sheets.

## Setup
1. Add your Apollo API key and adjust the search filters, scoring threshold, and enrichment controls (enable_enrichment and max_enrichments) in the configuration step.
2. Connect your Google Sheets credentials and set the target spreadsheet ID and sheet name for the append step.
3. Ensure your Google Sheet has columns that match the fields being appended (for example: Name, Email, Company, Title, LinkedIn, Website, Lead Score, and Source ID).

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
