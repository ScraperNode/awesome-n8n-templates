# 📊 Log competitor Google Ads transparency snapshots to Google Sheets with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or manually) to snapshot Google Ads Transparency results for a single competitor domain via the Apify Google Ads Transparency Scraper, validates the run output, and upserts ad records into a Google Sheets “Ads” tab to maintain a growing log of observed ads.

## How it works
1. Runs on a daily 09:00 UTC schedule (or via manual run) and loads the Google Sheets ID, Apify Actor input, and safety limits.
2. Validates that the configuration uses a single lowercase domain, “ads” snapshot mode, and a maximum charge cap before continuing.
3. Reads existing ad records from the “Ads” sheet in Google Sheets to preserve previously saved keys and delivery status.
4. Starts the Apify datasmithlab/google-ads-transparency-scraper Actor and polls Apify until the run succeeds or fails.
5. Fetches HEALTH and TARGETS records plus the ads dataset from Apify and stops if the results look incomplete or unreliable.
6. Builds a scope-specific key for each ad, merges the latest snapshot with saved rows (keeping older rows even if they disappear), and marks new keys as baseline/logged depending on whether this scope is empty.
7. Upserts the assembled rows back into the Google Sheets “Ads” tab and outputs a run summary with counts and coverage notes.

## Setup
1. Create a Google Sheet with a tab named “Ads” and add the required header columns (from the provided CSV in the template notes/repo).
2. Add Google Sheets OAuth credentials in n8n and select them for the Google Sheets read and write steps.
3. Add an Apify API token as HTTP Header Auth (Authorization: Bearer YOUR_APIFY_TOKEN) and select it for all Apify HTTP requests.
4. In the Configuration step, replace REPLACE_WITH_SPREADSHEET_ID with your Sheet ID and set the Apify Actor input (one domain, region, and maxItems) plus a maxTotalChargeUsd limit.
5. Run the workflow manually at least twice to confirm baseline vs. update behavior, then activate the daily schedule once the sheet keys look stable.

## Requirements
- An Apify account with access to the Google Ads Transparency Scraper, an Apify API token stored in n8n Header Auth, Google Sheets OAuth2 credentials, and a dedicated Ads tab with the supplied CSV headers. Actor usage may incur charges; review current pricing before running.

## Customization
- Change the competitor domain and region in Configuration. Keep the initial 20-ad snapshot cap and review the per-run charge limit before expanding coverage. Adjust the daily schedule after two successful manual runs. First-seen records indicate discovery by this workflow, not the ad publication date.

## Additional info
Setup guide: https://datasmith-lab.github.io/datasmithlab-google-ads-n8n/track-google-ads-google-sheets-n8n.html
Source and starter: https://github.com/Datasmith-lab/datasmithlab-google-ads-n8n
Actor: https://apify.com/datasmithlab/google-ads-transparency-scraper
The downloadable workflow is inactive and contains no credentials or private spreadsheet identifiers. A bounded snapshot does not guarantee complete ad history. Native import and offline engine validation passed; simulated services are distinguished from the previously verified live Google Sheets integration.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
