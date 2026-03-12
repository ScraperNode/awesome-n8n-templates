# 🎣 Extract business email addresses using Serper.dev and ScrapingBee from Google Sheets

> ⚡ **781 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Lead Enrichment & Email Discovery from Google Sheets

## What this workflow does
This template automates the enrichment of business leads from a Google Sheet by:
* Triggering when a row is activated
* Searching for company information with Serper.dev
* Generating and validating potential contact pages
* Scraping company pages with ScrapingBee
* Extracting emails and updating the sheet
* Marking rows as finished
---
## Prerequisites
* Google Sheet with columns: `business type`, `city`, `state`, `activate`
* **Copy the ready-to-use template:**
  [Sheet Template](https://docs.google.com/spreadsheets/d/1222TvBxE2UBb1MK2xDMoQSd5WHQ7mA5Ew-W6vBgfCJs/edit?usp=sharing)
* Google Sheets API credentials (from Google Cloud)
* Serper.dev API key (free tier available)
* ScrapingBee API key (free tier available)
---
## Inputs
* **Google Sheet row:**
  Must include `business type`, `city`, `state`, `activate`
* **Set Information Node:**
  `country`, `country_code`, `language`, `result_count` (can also be provided via columns in the sheet)
---
## Outputs
* **Google Sheet update:**
  Company names, URLs, found email addresses (comma-separated if multiple), and status updates (`Running`, `Missing information`, `Finished`)
---
## Configuration Required
* Connect Google Sheets node with your Google Cloud credentials
* Add your Serper.dev API key to the HTTP Request node
* Add your ScrapingBee API key to the scraping node
* Adjust search and filtering options as needed
---
## How to customize the workflow
* **Send `country`, `country_code`, and `result_count` from the sheet:**
  Add these as columns in your sheet and update the workflow to read their values dynamically, making your search fully configurable per row.
* **Add more blacklist terms:**
  Update the code node with additional company names or keywords you want to exclude from the search results.
* **Extract more contact details:**
  Modify the email extraction code to find other contact info (like phone numbers or social profiles) if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
