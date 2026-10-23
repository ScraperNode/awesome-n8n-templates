# 📊 Detect competitor launch signals from ads with OpenAI and Google Sheets

> ⚡ **26 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs weekly to scan competitor ad copy from Meta, Google Ads, and LinkedIn via Adyntel, detects newly emerging terms, uses OpenAI to assess launch signals, and records results in Google Sheets while sending a Slack alert when a launch signal is detected.

## How it works
1. Runs every week on a schedule (Monday) to start the competitor monitoring cycle.
2. Reads competitors marked as Pending from Google Sheets and processes them one by one.
3. For each competitor domain, pulls current ads from Meta, Google Ads, and LinkedIn using Adyntel and combines the results.
4. Extracts and deduplicates ad titles and body copy, then loads the competitor’s previously known terms from Google Sheets.
5. Extracts candidate new terms from this week’s ad copy, filters for terms that recur across multiple ads, and decides whether there are meaningful new terms to analyze.
6. If meaningful new terms exist, sends the context to OpenAI to classify the terms and determine whether a product launch signal is present, then appends the signal record and the newly classified terms to Google Sheets.
7. If no meaningful new terms exist, appends baseline terms from this week’s ad titles to Google Sheets to prevent future false “new term” detections.
8. Updates the competitor’s status to Done in Google Sheets and, when a signal is detected, formats a Slack alert message and continues to the next competitor.

## Setup
1. Connect Google Sheets OAuth credentials and update the spreadsheet ID/sheet tabs for competitors (with a status column), known_terms, and launch_signals.
2. Add an Adyntel API credential and ensure each competitor row includes a valid domain value for ad lookups.
3. Add an OpenAI API key for the OpenAI Chat Model used by the AI Agent.
4. Configure a Slack notification step (this template formats a message but does not send it) by adding a Slack node/webhook and posting the formatted slack_message to your chosen channel.
5. Confirm the schedule settings (weekly on Monday) and adjust term extraction thresholds in the code steps if you want different sensitivity.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
