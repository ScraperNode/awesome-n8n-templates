# 🎣 Scrape Apollo.io leads and sync them to Google Sheets with ScraperCity

> ⚡ **16 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for

This workflow is for B2B sales teams, growth hackers, and revenue operators who need a reliable, low-cost pipeline of verified leads from Apollo.io -- without manually exporting CSVs or hitting Apollo's export limits. If you are prospecting into a specific industry, job title, or company size, this workflow automates the entire sourcing and storage process.

## How it works

1. You configure your target audience once in the "Configure Search Parameters" node (job titles, industry, company size, lead count).
2. The workflow sends a scrape request to ScraperCity's Apollo filter endpoint, which pulls verified contacts at $0.0039 per contact.
3. Because scrapes run asynchronously and can take 10-60 minutes, the workflow polls ScraperCity every 60 seconds until the job completes.
4. Once the scrape succeeds, the workflow downloads the results, parses the CSV data, removes duplicates, and appends clean rows to your Google Sheet.

## How to set up

1. Create a ScraperCity account at scrapercity.com and copy your API key.
2. In n8n, create an "Header Auth" credential named "ScraperCity API Key" with the header name "Authorization" and value "Bearer YOUR_KEY".
3. Connect your Google Sheets OAuth2 credential.
4. Set your Google Sheet document ID and sheet name in the "Save Leads to Google Sheets" node.
5. Edit the "Configure Search Parameters" node with your target filters.

## Requirements

- ScraperCity account (scrapercity.com)
- Google Sheets OAuth2 credential
- A Google Sheet with headers matching the contact fields

## How to customize the workflow

- Change job titles, industry, company size, and lead count in "Configure Search Parameters".
- Swap Google Sheets for HubSpot, Airtable, or a webhook to push leads directly into your CRM.
- Add a Slack notification node after the final write step to alert your team when new leads arrive.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
