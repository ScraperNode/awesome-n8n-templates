# 🔬 Monthly Google Ads performance report sync to Google Sheets

> ⚡ **905 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
**📺 Full walkthrough video: https://youtu.be/62QIMjT2u-E**

Automatically pulls monthly Google Ads campaign metrics for multiple clients via the API and appends the data into dedicated Google Sheets tabs — triggered on the 3rd of each month.

## How it works
1. A Schedule Trigger fires on the 3rd of each month at 10 AM to kick off the reporting process.
2. A Google Sheets node reads the full client list (with their Google Ads Customer IDs) from a source sheet.
3. A SplitInBatches loop iterates over each client one by one, sending a POST request to the Google Ads searchStream API endpoint to fetch last month's campaign metrics (cost, clicks, impressions, conversions, conversion value).
4. A JavaScript Code node flattens the raw API response, converts cost from micros to euros, rounds numeric values, and normalizes the month format.
5. The processed rows are appended to a dedicated per-client tab (named Data {Client}) in the same Google Sheet.
6. A Wait node pauses execution between each client to respect API rate limits before looping to the next.

## Setup
1. Duplicate the template spreadsheet — Google Sheets Template — and save it to your Google Drive.
2. Connect your Google Sheets OAuth2 credentials and point the "Read Clients from Sheets" node to your spreadsheet and the "Client" source sheet.
3. Connect your Google Ads OAuth2 credentials in the HTTP Request node.
4. Replace the developer-token and login-customer-id header values in the HTTP Request node with your own.
5. Ensure each client tab in the spreadsheet is named Data {Client} to match the dynamic sheet name expression.
6. Adjust the Wait node delay if needed to avoid hitting API rate limits.

## Requirements
- Google Ads account with API access and a valid developer token
- Google Sheets account with OAuth2 credentials
- A spreadsheet with a "Client" sheet listing client names and their Google Ads Customer IDs
- One tab per client named Data {Client} in the same spreadsheet

## Customization
- Modify the GAQL query in the HTTP Request node to pull different metrics or date ranges (e.g., LAST_7_DAYS, THIS_MONTH)
- Extend the JavaScript transformation to compute additional KPIs such as CPC or ROAS before appending to the sheet
- Add a Slack or email notification after each client iteration to alert stakeholders when the report is ready

## Additional info
Template maintained by Growth AI — a Lyon-based automation agency specializing in n8n workflows. For custom enterprise reporting pipelines, reach out via LinkedIn.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
