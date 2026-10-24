# 📊 Tear down proven Meta ads with Bright Data, GPT-5.6 and Gmail

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly, uses Bright Data to fetch Meta Ad Library results for your competitor search terms, extracts ad age and landing URLs, summarizes angles with OpenAI (GPT-5.6), and emails an HTML digest through Gmail while deduplicating previously reported ads via an n8n Data Table.

## How it works
1. Runs on a weekly schedule.
2. Builds Meta Ad Library search URLs for each watch term and fetches the result pages via Bright Data Web Unlocker.
3. Parses each results page into individual ads, extracting the library ID, advertiser, ad text, offer, creative URL, start date, days running, and unwrapped landing page URL (including UTM parameters).
4. Sorts and caps ads per term, marks ads as “proven” once they exceed the configured days-running threshold, and deduplicates ads that appear under multiple terms.
5. Checks an n8n Data Table to keep only ads that have never been reported before, then stores the new library IDs for future runs.
6. Fetches a small set of top landing pages (one per domain) through Bright Data and extracts live offer/price cues to compare against the ad promise.
7. Uses OpenAI to summarize the dominant offers and angles (including advertiser names and day counts) and sends a formatted HTML email digest via Gmail.

## Setup
1. Add a Bright Data Web Unlocker zone and configure HTTP Header Auth credentials (Authorization: Bearer <key>) for the Bright Data requests.
2. Add an OpenAI credential (model set to gpt-5.6-terra) and a Gmail credential for sending the digest.
3. Create an n8n Data Table named `meta_ads_seen` with a `library_id` column.
4. Update the Settings values for `watch_terms`, `country`, `proven_after_days`, caps for ads/landing pages, and the recipient address in `email_to`.

## 🔗 Nodes Used

HTTP Request, Gmail, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
