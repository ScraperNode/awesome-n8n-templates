# 📊 Scrape Indeed job listings into dated Google Sheets with Apify

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects job listings from Indeed via the Apify Indeed Scraper actor based on form inputs, then creates a dated Google Sheets spreadsheet and appends the scraped job data as rows.

## How it works
1. Opens an n8n form where you enter the target Location, Position, Country, and number of results to scrape.
2. Creates a new Google Sheets spreadsheet named with the current date (for example, “Indeed Scraper 2026-08-11”).
3. Runs the Apify Indeed Scraper actor using the submitted search parameters and retrieves the resulting dataset.
4. Appends the scraped job listings (for example, company, position, location, salary, description, and links) into the first sheet of the newly created Google Sheets spreadsheet.

## Setup
1. Connect an Apify account credential and ensure the Apify actor “misceres/indeed-scraper” is available to run in your workspace.
2. Connect a Google Sheets OAuth2 credential with permission to create spreadsheets and write rows.
3. Review the form defaults (Country and Quantity) and adjust the max items parameter if you want to scrape more or fewer than 100 jobs per run.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
