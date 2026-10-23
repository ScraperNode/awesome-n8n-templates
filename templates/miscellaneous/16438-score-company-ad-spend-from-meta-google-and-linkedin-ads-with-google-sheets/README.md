# 🔧 Score company ad spend from Meta, Google and LinkedIn Ads with Google Sheets

> ⚡ **60 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow pulls Pending companies from Google Sheets, checks their ad activity via Adyntel for Meta (Facebook), Google Ads, and LinkedIn Ads, calculates a budget signal score from ad volume and channel diversity, and writes the results back to the same sheet.

## How it works
1. Runs when you manually execute the workflow in n8n.
2. Reads rows from Google Sheets where the Status column is set to Pending.
3. Processes each company domain in sequence and queries Adyntel for Meta (Facebook) ads, Google Ads, and LinkedIn Ads.
4. Combines the three ad search results into a single dataset for the current company.
5. Calculates per-platform ad counts, total ads, active platforms, channel diversity, and a composite budget_signal_score.
6. Updates the matching row in Google Sheets (by domain), writes the scoring fields, and sets Status to Done before moving to the next company.

## Setup
1. Connect Google Sheets OAuth credentials and set the target spreadsheet and sheet where your company list lives.
2. Add Adyntel API credentials so the workflow can query Meta (Facebook), Google Ads, and LinkedIn Ads by company domain.
3. Ensure your Google Sheet includes at least company_name, domain, and Status columns, with Status set to Pending for rows you want to process.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
