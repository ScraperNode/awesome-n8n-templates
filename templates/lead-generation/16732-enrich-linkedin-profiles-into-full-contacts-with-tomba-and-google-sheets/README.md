# 🎣 Enrich LinkedIn profiles into full contacts with Tomba and Google Sheets

> ⚡ **25 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule to read “Pending” LinkedIn profile URLs from Google Sheets, uses Tomba to find and enrich contact details (email and phone), and writes the results back to the same sheet with updated status and scoring.

## How it works
1. Runs on a schedule trigger.
2. Reads rows from a Google Sheets worksheet where the Status column is set to “Pending”.
3. Processes each LinkedIn URL in batches and calls Tomba’s LinkedIn Finder to retrieve the person’s email and phone details.
4. Normalizes the returned contact data (including combining multiple phone numbers) and sets an enrichment status based on whether an email is found.
5. Updates the corresponding row in Google Sheets with the enriched fields (Email, Phone, Score) and marks the Status as “Done”.

## Setup
1. Connect your Google Sheets OAuth2 credentials and set the target spreadsheet and worksheet that contains LinkedIn URL, Status, and output columns.
2. Add your Tomba API credentials and ensure the LinkedIn URL column contains valid LinkedIn profile links.
3. Make sure your sheet includes a row_number field (used for matching updates) and uses “Pending” as the Status value for rows you want to process.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
