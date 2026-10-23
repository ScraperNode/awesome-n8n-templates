# 🎣 Score LinkedIn leads in Google Sheets with Bright Data and Claude

> ⚡ **60 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches a Google Sheets leads sheet, enriches each new lead with LinkedIn person and company data from Bright Data, then uses Anthropic Claude to generate a 0–100 lead score and reason and updates the sheet status to HOT or DONE.

## How it works
1. Triggers when a new row is added to a Google Sheets worksheet.
2. Reads the leads from the sheet and iterates through the rows that match the configured Status filter.
3. For each lead, uses Bright Data to fetch structured data from the lead’s LinkedIn person profile, then waits briefly to respect rate limits.
4. Uses Bright Data to fetch structured data from the lead’s current company LinkedIn page, then waits briefly to respect rate limits.
5. Sends the person and company details to Anthropic Claude to return a JSON score (0–100) and a one-sentence reason.
6. Parses the JSON response, flags leads with scores ≥ 70 as HOT 🔥 and others as DONE, and writes the enriched fields (title, company, size, location, connections, score, reason) back to Google Sheets.

## Setup
1. Connect Google Sheets OAuth credentials (Trigger and Google Sheets) and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID.
2. Add a Bright Data API credential and ensure the LinkedIn people profiles and LinkedIn company information datasets are available in your Bright Data account.
3. Add an Anthropic API credential and update the scoring prompt in the Claude step to reflect your product and ideal customer profile.
4. Ensure your Google Sheet includes the required columns (at minimum Linkedin URL, Status, Lead Score, Reason, plus the enrichment fields you want to write back) and that your Status values match the workflow’s filter and updates.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
