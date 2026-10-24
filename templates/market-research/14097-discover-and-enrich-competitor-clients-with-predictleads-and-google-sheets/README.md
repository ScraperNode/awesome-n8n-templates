# 📊 Discover and enrich competitor clients with PredictLeads and Google Sheets

> ⚡ **97 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Discover your competitor's clients through PredictLeads connections data, enrich each client with company details, and export everything to Google Sheets.

This workflow takes a list of competitor domains from Google Sheets, queries the PredictLeads Connections API to discover their client relationships, enriches each discovered client with company profile data (industry, employee count, location), and writes the results to a structured output sheet for competitive intelligence.

How it works:
1. Manual trigger starts the workflow on demand.
2. Reads competitor domains from the Google Sheets "Competitors" tab.
3. Loops through each competitor and fetches their connections from PredictLeads.
4. Extracts client/customer domains from the connections data.
5. Loops through each discovered client domain.
6. Enriches each client with PredictLeads company data (name, industry, employee count, location).
7. Formats the enriched data into a structured output row.
8. Appends the row to the "Client Discovery" tab in Google Sheets.
9. Continues until all competitors and their clients are processed.

Setup:
- Create a Google Sheet with two tabs:
  - "Competitors" with a column: domain (one competitor domain per row).
  - "Client Discovery" with columns: competitor_source, client_domain, client_name, industry, employee_count, location.
- Connect your Google Sheets account (OAuth2).
- Add your PredictLeads API credentials (X-Api-Key and X-Api-Token headers).

Requirements:
- Google Sheets OAuth2 credentials.
- PredictLeads API account (https://docs.predictleads.com).

Notes:
- This workflow uses a manual trigger since competitor analysis is typically run on demand rather than daily.
- The Connections API returns various relationship types -- the workflow filters for client, customer, and user relationships.
- Each output row links the discovered client back to the competitor source for easy analysis.
- PredictLeads Connections and Company API docs: https://docs.predictleads.com

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
