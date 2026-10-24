# 📊 Reconcile blended ROAS, MER and CAC with Meta, Google, TikTok and Claude

> ⚡ **12 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls ad spend and platform-reported revenue from Meta (with placeholders for Google Ads and TikTok), combines it with your actual store revenue and new-customer count, calculates blended ROAS/MER and blended CAC plus over-claiming, and uses Anthropic Claude to generate a short executive efficiency brief.

## How it works
1. Runs manually to start the reconciliation for the configured date range.
2. Loads the reporting window plus store revenue, new-customer count, and any additional platform spend/revenue inputs.
3. Calls the Meta Marketing API to fetch account-level ad spend and conversion value, then merges it with the additional platform figures.
4. Calculates total spend, total platform-reported revenue, blended ROAS/MER, blended CAC, and the over-claim amount and percentage, plus per-platform reported ROAS.
5. Sends the reconciled metrics to Anthropic Claude to generate a terse JSON brief with a verdict, over-claim note, and recommended action.
6. Prints a console scorecard with blended ROAS/MER, CAC, over-claiming, per-platform breakdown, and the Claude-generated brief.

## Setup
1. Set the environment variables META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, and optionally META_API_VERSION for the Meta Marketing API request.
2. Add your ANTHROPIC_API_KEY environment variable to enable the Anthropic Claude API call.
3. Replace the mock store revenue and new-customer values with a real data source such as Shopify or Stripe, and replace the Google Ads and TikTok placeholder figures with real Google Ads and TikTok connectors if needed.
4. Adjust the date_preset (for example, last_30d) and any extra platforms you want included in the blended metrics.

## Requirements
- A Meta access token with ads_read on the ad account
- A store revenue source (Shopify or Stripe) for actual revenue and new-customer count
- An Anthropic API key (Claude)
- Optional: Google Ads and TikTok Ads access to include those platforms

## Customization
- Replace STORE_REVENUE and NEW_CUSTOMERS in Config with a Shopify or Stripe node
- Replace the Google Ads and TikTok placeholders in EXTRA_PLATFORMS with real ad-platform nodes
- Adjust DATE_PRESET (e.g. last_30d)

## Additional info
Built by nocode.expert (done-for-you automation and tracking). Computes blended ROAS, MER and CAC plus the platform over-claim gap that survives iOS attribution loss. All secrets read from environment variables.

## 🔗 Nodes Used

HTTP Request, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
