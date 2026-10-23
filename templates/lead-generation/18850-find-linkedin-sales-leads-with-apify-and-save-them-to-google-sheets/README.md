# 🎣 Find LinkedIn sales leads with Apify and save them to Google Sheets

> ⚡ **23 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually searches LinkedIn via Apify, enriches the resulting profiles with contact and company details, and appends each lead to a Google Sheets worksheet.

## How it works
1. Triggers when you click Execute workflow in n8n.
2. Runs an Apify LinkedIn profile search Actor to find people matching the provided query and filters.
3. Aggregates all returned LinkedIn profile URLs into a single list.
4. Sends the profile URL list to a second Apify enrichment Actor to retrieve names, company details, and email addresses.
5. Appends each enriched lead as a new row in Google Sheets with name, last name, email, and company.

## Setup
1. Add an Apify API token credential and select it in both Apify nodes.
2. Add a Google Sheets OAuth2 credential, then select the target spreadsheet and worksheet in the Google Sheets node.
3. Update the Apify search input (for example searchQuery, maxItems, and yearsOfExperienceIds) to match your target persona and run the workflow.

## Requirements
- An Apify account with an API token. A google account with access to GoogleSheet

## Customization
- Swap the search query for a different persona, add location or company filters supported by the Actor, or replace the Google Sheets node with HubSpot, Airtable, or a CRM of your choice. To run it on a schedule, swap the manual trigger for a Schedule Trigger node.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
