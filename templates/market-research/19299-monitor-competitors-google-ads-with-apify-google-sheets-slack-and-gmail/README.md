# 📊 Monitor competitors’ Google Ads with Apify, Google Sheets, Slack and Gmail

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Runs the Google Ads Transparency Center Scraper Actor on Apify daily for the competitors you list, appends every new ad to Google Sheets, posts a per-advertiser digest to Slack and emails you through Gmail when a competitor launches many ads at once. An error branch reports failed runs.

## How it works
1. A Schedule Trigger fires once a day and reads your values from the Workflow settings node (competitors, regions, cap per competitor, launch window, launch threshold, alert email).
2. The Apify node runs the Google Ads Transparency Center Scraper Actor for every competitor (brand name, domain or advertiser ID), waits for the run to finish and returns the dataset items.
3. With onlyNew enabled, the Actor returns only ads it has never delivered before for that competitor and region set, so scheduled runs never repeat rows and never charge you twice for the same ad.
4. A Filter keeps only creative rows, then every new ad is appended to a Google Sheet: advertiser, domain, creative ID, format (image, text or video), first and last shown dates, days shown, preview link and Transparency Center link.
5. A Code node groups the new ads by advertiser and counts, for each one, how many were first shown inside your launch window (default 7 days). If there is anything new, one digest with formats and links goes to Slack. Quiet days send nothing.
6. If one advertiser reaches the launch threshold (default 10 ads first shown in the last 7 days) and an alert address is set, Gmail sends an email listing just those advertisers. Older ads delivered for the first time (the baseline run, or a catalog larger than the cap) never trigger the email.
7. An Error Trigger branch posts the error message and the execution link to Slack if a run ever fails.

## Setup
1. Install the verified Apify community node (@apify/n8n-nodes-apify) from Settings, Community nodes, and connect your Apify account with an API token or OAuth2.
2. Open the Workflow settings node and list your competitors (comma separated; domains work best, brand names and advertiser IDs also work), the regions to watch (ISO country codes such as US, GB, BR; empty means ads shown anywhere), the cap of ads per competitor, the launch window in days, the launch threshold and the email address for alerts. Leave the email empty to turn the email alert off.
3. Pick the spreadsheet and the sheet in the Google Sheets node; columns are mapped automatically on the first run.
4. Pick the channel in the two Slack nodes (digest and error report).
5. Optional: in the workflow settings, select this workflow as its own error workflow so failed runs reach the error branch.
6. Run the workflow once by hand. The first run delivers the current ads of each competitor (up to the cap) as the baseline, so that day's digest is long; from then on only ads not delivered before come back.

## Requirements
- An Apify account with the verified Apify community node installed.
- Google Sheets and Slack credentials in n8n. Gmail credentials only if you want the launch email.
- Actor pricing (pay per event): $0.005 per run plus $0.0015 per ad on the free Apify plan (down to $0.0009 per ad on higher plans), so 100 ads cost about $0.16. A run that delivers nothing is not charged at all, and the template caps each run at $1.

## Customization
- Everything a user edits lives in the Workflow settings node: competitors, regions, cap per competitor, launch window and threshold, alert recipient.
- You can change the schedule time or replace Gmail with another notification channel.
- Edit the Apify node input: add "formats" to keep only image, text or video ads, turn on "includeDetails" to get per-country dates and preview variations for every ad (one extra charged request per ad), or switch "outputMode" to "advertisers" for one row per competitor saying whether it runs Google ads at all (adjust the Filter node if you do, since it keeps creative rows only).

## Additional info
Google, Google Ads and Ads Transparency Center are trademarks of Google LLC. This template and the underlying Actor are not affiliated with, endorsed by, or sponsored by Google LLC. The Actor is built and maintained by orbots, the author of this template.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
