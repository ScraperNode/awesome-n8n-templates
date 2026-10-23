# 📊 Track competitor Google Ads Transparency Center ads with Apify and Google Sheets

> ⚡ **78 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No ad spy subscription and no agency retainer. Every week this reads the Google Ads Transparency Center for the advertisers you list and appends one row per ad to Google Sheets: advertiser, format, when it first ran, how long it has run, and a link to the creative.

## How it works
1. Runs every Monday morning on a schedule.
2. Defines the competitor advertiser IDs to track, the maximum ads to pull per advertiser, and an optional region.
3. Uses Apify (google-ads-transparency-api actor) to retrieve each advertiser’s current ads from the Google Ads Transparency Center.
4. Filters the results to keep only items that are actual ads.
5. Formats each ad into a spreadsheet-ready row, converting timestamps to dates and flagging creatives that have run for 90+ days.
6. Appends the formatted rows to the selected Google Sheets spreadsheet and worksheet.

## Setup
1. Create an Apify account and add your Apify API token in n8n credentials for the Apify node.
2. Connect your Google Sheets account in n8n credentials and pick the target spreadsheet and tab in the Google Sheets node.
3. Open adstransparency.google.com, search each competitor you want to watch, and copy the AR code out of the URL into the config node.

## Requirements
- An Apify account. The free tier works, and an ad costs about a third of a cent.
- A Google account for Sheets.
- No ad spy subscription and no scraping vendor account. There is no AI model in the workflow, so nothing to pay per token.

## Customization
- Add more `AR...` codes to the config node. Each advertiser becomes its own set of rows, so the sheet turns into a side by side.
- Raise or lower `maxAdsPerAdvertiser` to control cost. Twenty per advertiser is usually enough to see the pattern.
- Set `region` to a Google ads region code to see only the ads running in one country.
- Add an IF node after the Code node to alert you only when a brand new creative appears, or swap Google Sheets for Slack or Airtable.

## Additional info
**How do I see what ads a competitor is running?** Google publishes them. The Google Ads Transparency Center lists every ad an advertiser is currently running, and this template reads it on a schedule so the answer lands in a spreadsheet instead of a browser tab you forget to open.

**What is an advertiser ID and where do I get it?** Go to adstransparency.google.com, search the company, and open its page. The URL contains an `AR...` code, and that code is the advertiser ID. Large companies often have several, one per legal entity, so check you picked the one running the ads you care about.

**Which column actually matters?** Days running. Anyone can look up what a competitor is advertising today. The useful signal is which creative they have kept paying for: in testing one advertiser had a text ad running for 827 days. A creative alive that long is a proven winner, and it is worth more study than the twelve they launched last month.

**Does this show ad spend or impressions?** No, and nothing else can either. Google does not publish spend, impressions, or targeting in the Transparency Center for commercial advertisers. What you get is the creative itself, its format, and how long it has been live. Treat anyone selling you competitor ad spend numbers with suspicion.

**Does it show ads that were stopped?** No. The Transparency Center lists what an advertiser is running now, so every row in your sheet is a live ad. Because the workflow appends a dated snapshot each week, a creative that disappears from next week's rows is one they have stopped, which the history gives you for free.

**What does it cost?** The template is free. An ad costs about a third of a cent, so three competitors at 20 ads each is roughly 20 cents a week. There is no AI model in the workflow, so there is no token bill on top.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-google-ads-transparency-api` on npm.

**About Apify.** [Google Ads Transparency API](https://apify.com/johnvc/google-ads-transparency-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
