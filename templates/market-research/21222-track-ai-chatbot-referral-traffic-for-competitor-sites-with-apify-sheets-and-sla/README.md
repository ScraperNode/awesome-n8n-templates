# 📊 Track AI chatbot referral traffic for competitor sites with Apify, Sheets and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs weekly to fetch Similarweb-based AI chatbot referral share and traffic estimates for a list of competitor domains via Apify, appends new monthly data to a Google Sheets History tab, and posts a Slack alert when chatbot share or visit changes exceed your thresholds.

## How it works
1. Runs manually or every Monday at 08:00 to start the check.
2. Sends your list of domains to an Apify actor that returns Similarweb estimates, including monthly visits, AI chatbot visit share, and per-chatbot splits.
3. Reads existing rows from the Google Sheets “History” tab and compares each domain’s newest month to the latest saved month.
4. Creates new rows only when a new traffic month is available, calculates notable changes against the previous month, and flags domains that pass your share-point or visit-change thresholds.
5. Appends the new month rows to the Google Sheets “History” tab.
6. Builds a combined message for all flagged domains and posts it to a Slack channel, or posts a failure note to Slack if the Apify run errors.

## Setup
1. Add an Apify API token credential and ensure the Apify community node (`@apify/n8n-nodes-apify`) is installed in your n8n instance.
2. Connect Google Sheets OAuth credentials, create a spreadsheet with a tab named “History”, and replace the spreadsheet ID in both Google Sheets steps.
3. Connect Slack credentials and set the target channel (for both the alert and failure message), then update the domain list and alert thresholds in the settings step.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
