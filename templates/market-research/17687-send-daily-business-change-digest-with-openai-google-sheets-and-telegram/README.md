# 📊 Send daily business change digest with OpenAI, Google Sheets and Telegram

> ⚡ **35 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily at 8am to detect meaningful changes in competitor pricing, Google search ranking, revenue anomalies, and customer churn using Google Sheets, SerpApi, and OpenAI, then sends a morning digest to Telegram and Gmail, with Slack alerts for failures.

## How it works
1. Runs every day at 8am on a schedule and loads configuration values like the Google Sheet ID, SerpApi key, tracked keyword/domain, and notification targets.
2. Reads competitor pricing baselines from Google Sheets, uses OpenAI web search to extract current entry-level plan pricing, and flags price moves of 3% or more while updating the stored baseline.
3. Checks Google rankings for a tracked keyword via SerpApi, compares the current position to the previous baseline in Google Sheets, and keeps only rank changes as reportable updates while saving the new rank.
4. Reads the revenue log from Google Sheets and flags today’s revenue as an anomaly when it is a z-score outlier (≥ 2) versus recent history.
5. Reads customer status rows from Google Sheets, detects customers that moved from active to churned, and updates each customer’s baseline status for the next run.
6. Combines all reportable changes, uses OpenAI (gpt-4o-mini) to write a grouped “What Changed?” digest, and sends it to Telegram and Gmail or sends an “all clear” Telegram message when no changes are detected.
7. If the workflow errors, posts an execution alert to Slack with the failed node and execution details.

## Setup
1. Create or copy a Google Sheets spreadsheet with tabs for CompetitorPricing, GoogleRankings, RevenueLog, and CustomerStatus, then paste its spreadsheet ID into the configuration values.
2. Add Google Sheets OAuth2 credentials and ensure the sheets include the baseline columns used by the workflow (for example, previousPrice, previousRank, and previousStatus).
3. Add a SerpApi credential (API key) and set the tracked keyword and tracked domain used for the rank check.
4. Add OpenAI API credentials for both the pricing web-search model and the digest model (gpt-4o-mini).
5. Add Telegram bot credentials and set your Telegram chat ID for notifications.
6. Add Gmail OAuth2 credentials, set the recipient email address for the digest, and add Slack OAuth2 credentials with your Slack channel ID for error alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
