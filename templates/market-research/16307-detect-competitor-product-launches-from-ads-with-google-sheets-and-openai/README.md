# 📊 Detect competitor product launches from ads with Google Sheets and OpenAI

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This scheduled workflow scans competitor ads via Adyntel (Meta, Google, and LinkedIn), extracts newly appearing terms from ad copy, and uses OpenAI to classify potential launch signals, then logs results and updates baselines in Google Sheets.

## How it works
1. Runs on a schedule and reads competitor domains marked as Pending from a Google Sheets spreadsheet.
2. For each competitor, fetches active ads from Meta, Google Ads, and LinkedIn Ads using Adyntel and combines the results.
3. Extracts and deduplicates ad headlines and body text, then compiles a single text corpus for the current week.
4. Loads previously known terms for the competitor from Google Sheets and deterministically extracts new terms from this week’s ads by comparing against the baseline.
5. If no qualifying new terms are found, writes baseline terms derived from this week’s ad titles to the known_terms sheet, marks the competitor as Done, and continues to the next competitor.
6. If new terms are found, sends the terms and ad-copy context to OpenAI to classify each term and decide whether the pattern indicates a product launch.
7. When a launch signal is detected, appends a record to the launch_signals sheet, adds the newly discovered terms (with categories) to known_terms, updates the competitor status to Done, and formats a Slack-ready alert message.

## Setup
1. Create a Google Sheets spreadsheet with three tabs named competitors, known_terms, and launch_signals, and ensure the expected columns exist (at minimum: competitors.domain and competitors.status, known_terms.domain and known_terms.term, and the launch_signals columns used for logging).
2. Connect Google Sheets OAuth2 credentials in n8n and update the spreadsheet ID/sheet selectors if you are not using the provided document.
3. Add an Adyntel API credential so the workflow can query Meta, Google Ads, and LinkedIn Ads by company domain.
4. Add an OpenAI API credential (Chat Model) and select the model you want to use for term classification and launch-signal detection.
5. Populate the competitors sheet with competitor_name, domain, and set status to Pending for rows you want processed, then adjust the schedule interval to your preferred scan frequency.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
