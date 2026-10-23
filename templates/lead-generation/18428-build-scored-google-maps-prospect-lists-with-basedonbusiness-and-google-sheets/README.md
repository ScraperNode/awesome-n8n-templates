# 🎣 Build scored Google Maps prospect lists with BasedOnBusiness and Google Sheets

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects Google Maps business leads via BasedOnBusiness based on a category and location, filters for low-rated listings with enough reviews to matter, calculates an opportunity score and priority, and appends the ranked prospects to Google Sheets.

## How it works
1. Receives search inputs from an n8n form, including business category, city, country code, lead count, maximum rating, and minimum reviews.
2. Validates and normalizes the inputs, then starts a BasedOnBusiness scrape job with an idempotency key to avoid double-billing on retries.
3. Polls BasedOnBusiness every 15 seconds until the job completes (or stops on failed/cancelled status or after 15 minutes).
4. Downloads the scrape results from BasedOnBusiness and splits them into one item per business.
5. Filters out unrated and closed listings, keeping only businesses at or below the maximum rating and at or above the minimum review count.
6. Calculates “Reviews to 4.5”, an opportunity score, and a High/Medium/Low priority, then sorts the list by opportunity score.
7. Appends the sorted prospect rows to a Google Sheets worksheet.

## Setup
1. Create a BasedOnBusiness account and add an HTTP Bearer Auth credential in n8n with your API key (with `scrapes:read` and `scrapes:write` scopes).
2. Connect your Google Sheets account in n8n and select the target spreadsheet and sheet in the Google Sheets append step.
3. Ensure your sheet has headers that match the workflow output (for example: Business Name, Rating, Reviews, Reviews to 4.5, Opportunity Score, Priority, Phone, Website, Address, Category, Google Maps URL, City, Country).

## Requirements
- A BasedOnBusiness account and an API key with the scrapes:read and scrapes:write scopes — https://www.basedonb.com/en/docs

## Customization
- Change the 4.5 target inside Score Opportunity to whatever counts as a good rating in your market, and adjust the High and Medium cut-offs in the same node. Swap Google Sheets for your CRM — every output field is built in that one node.

## Additional info
A search costs BasedOnBusiness credits equal to the number of leads you request, not the number of businesses that pass the rating and review filters, so start small. The opportunity score weights the rating gap by the square root of the review count, so a busy listing with a fixable rating outranks a quiet one with a worse rating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
