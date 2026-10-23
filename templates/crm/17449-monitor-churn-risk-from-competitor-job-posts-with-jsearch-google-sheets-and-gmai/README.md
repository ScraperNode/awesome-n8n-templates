# 🤝 Monitor churn risk from competitor job posts with JSearch, Google Sheets, and Gmail

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scan customer job postings via RapidAPI JSearch for competitor tool keywords, calculates renewal proximity from Google Sheets, and alerts the assigned CSM by Gmail while logging high-risk accounts back to Google Sheets.

## How it works
1. Runs every Monday at 8 AM on a schedule.
2. Reads the customer list from a Google Sheets tab, including company name, renewal date, and CSM email.
3. Searches recent job postings for each customer using the RapidAPI JSearch API with a query that includes competitor tool terms.
4. Scans the returned postings for competitor keyword matches (excluding postings from competitor employers) and calculates days remaining until renewal.
5. Filters to accounts marked high risk when a competitor is detected and the renewal date is within the next 90 days.
6. Appends the high-risk match details to a Google Sheets log tab and sends a formatted Gmail alert to the customer’s CSM.

## Setup
1. Create a Google Sheet with a customers tab and a churn-alerts-log tab (with the required column headers) and set the Sheet ID in both Google Sheets nodes.
2. Add Google Sheets OAuth2 credentials in n8n.
3. Sign up for RapidAPI JSearch, add your API key in the HTTP request headers, and adjust the search query/competitor terms if needed.
4. Add Gmail OAuth2 credentials and ensure each customer row includes a valid csm_email value for routing alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
