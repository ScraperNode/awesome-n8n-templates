# 🎣 Enrich CRM contacts in Google Sheets with Tomba firmographic data

> ⚡ **7 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches a Google Sheets contacts list for new rows and enriches each contact using Tomba to find a likely email address, company firmographics, and a phone number, then writes the enriched fields back to the same spreadsheet.

## How it works
1. Triggers when a new row is added to a specified Google Sheets worksheet (polled every minute).
2. Processes new contacts one at a time to control throughput.
3. Uses Tomba to find an email address for the contact based on the provided domain, company, and name.
4. Uses Tomba to enrich the company with firmographic details such as industry, company size, revenue, and location.
5. Uses Tomba to look up a company phone number from the contact’s domain.
6. Combines the enrichment results into a single contact record and sets a status like “Enriched” or “Not Found.”
7. Updates the matching row in Google Sheets with the enriched Email, Phone, Industry, Company Size, Revenue, Country, and Status fields.

## Setup
1. Connect Google Sheets credentials and select the target spreadsheet and worksheet to monitor.
2. Add Tomba API credentials to each Tomba step used for email, company, and phone enrichment.
3. Ensure your Google Sheet includes the destination columns (Email, Phone, Industry, Company Size, Revenue, Country, Status) and that the Domain column is present and used as the unique matching key for updates.
4. Adjust the polling interval in the Google Sheets trigger if you want the workflow to check for new rows more or less frequently.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
