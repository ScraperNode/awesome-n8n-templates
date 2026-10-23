# 📊 Triage AliExpress product review complaints with Apify reviews scraper

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on demand to scrape a bounded sample of AliExpress product reviews with Apify (FalconScrape’s AliExpress Reviews Scraper) and generates a triage report that highlights low-rated complaints, issue categories, and affected variants, optionally resuming an existing Apify run.

## How it works
1. Runs manually and loads the target AliExpress product URL, review sample size, spend cap, and low-rating threshold.
2. Validates the inputs and either resumes an existing Apify Actor run by run ID or starts a new charge-capped Apify run for the product.
3. Polls the Apify run status until it succeeds or stops with an error if the run fails or takes too long.
4. Fetches up to 100 cleaned review items from the Apify dataset produced by the run.
5. Validates review identity, counts the rating distribution, and extracts only reviews at or below the low-rating threshold.
6. Classifies low-rated review text into issue buckets using keyword rules, aggregates the most affected variants, and collects example excerpts with basic PII redaction.
7. Outputs either an “ATTENTION” or “ROUTINE” triage report based on the presence of one-star reviews or at least three low-rated reviews in the sample.

## Setup
1. Add an Apify API credential in n8n and ensure your account has access to the Actor ID wfBNb1rkpWRQhOufx.
2. In Configure product, set one public AliExpress /item/<number>.html URL and adjust maxReviews (1–100), maxChargeUsd ($0.01–$1), and lowRatingThreshold (1–3).
3. Leave resumeRunId blank for a new paid run, or paste a previous Apify run ID to resume if the workflow was interrupted after starting the Actor.
4. If you want notifications, connect the optional Slack/email formatting outputs to your own Slack or email sending nodes and configure the required credentials there.

## Requirements
- Requires an Apify API credential and access to FalconScrape’s AliExpress Reviews Scraper. A new Actor run may incur a charge up to your configured cap; n8n hosting may also cost money. The relevance-ordered sample is not a complete or strictly recent review feed.

## Customization
- Adjust the issue-keyword rules and attention threshold to suit your product. The disconnected Slack and email formatter nodes are alternative delivery options within this single template; connect your own send node and credential only if you want notifications.

## Additional info
This responds to the reviewer’s near-duplicate concern about our unpublished AliExpress Google Sheets tracker (20152). This is a different user job: product-specific complaint classification and attention routing, with no Sheets, snapshot history, or dedupe ledger. The old rejected entry is unchanged. Local n8n 2.40.7 execution and visual QA passed; the uploaded JSON has no credential bindings.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
