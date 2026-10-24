# 📊 Collect Crunchbase funding data into Google Sheets using Apify

> ⚡ **36 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
No Crunchbase API key required. This template collects venture capital data from Crunchbase and writes it to Google Sheets: funding totals, rounds, investors, industries, headquarters, employee band, and operating status, one clean row per company, powered by the Crunchbase Company API actor on Apify.

## How it works
1. Runs manually when you click “Test workflow” in n8n.
2. Loads an array of Crunchbase organization URLs to process.
3. Sends the URLs to Apify (johnvc/crunchbase-company-api actor) to scrape structured Crunchbase company data.
4. Filters the results to keep only items identified as company records.
5. Selects and renames key fields (company name, website, industries, HQ, employee count, funding totals/rounds, investors, and operating status) for tabular output.
6. Appends each company as a new row in a Google Sheets worksheet.

## Setup
1. Create an Apify account and add your Apify API token in n8n credentials for the Apify node.
2. Connect your Google Sheets account in n8n credentials and select the target spreadsheet and sheet tab in the Google Sheets node.
3. Replace the example Crunchbase organization URLs with your own list in the input step before running the workflow.

## Requirements
- An Apify account. The free tier works and Crunchbase collection costs about $0.009 per company.
- A Google account for Sheets.
- No Crunchbase API key or enterprise license.

## Customization
- Swap Google Sheets for Slack, email, Airtable, or your CRM to send company rows where your team works.
- Add more Crunchbase organization URLs to the Set node, up to 1000 per run.

## Additional info
No Crunchbase API key required: the official Crunchbase API is aimed at enterprise customers and priced accordingly, while this template gets the same public company data through the Crunchbase Company API actor on Apify, so you only need a free Apify token. 

Collection costs about $0.009 per company on the actor's free tier, with no subscription. 

The actor accepts up to 1000 Crunchbase organization URLs per run and returns one row per company, so you can enrich a full target list in one call. 

Add a Schedule trigger to refresh funding data weekly. 

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-crunchbase-company-api` on npm. 

[Actor](https://apify.com/johnvc/crunchbase-company-api?fpr=9n7kx3&fp_sid=n8n)

## 🔗 Nodes Used

Google Sheets, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
