# 📊 Log weekly brand mentions from Google News to Google Sheets with Apify

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No media monitoring subscription and no PR retainer. Every week this searches Google News for the brands and topics you follow and appends one row per article to Google Sheets: headline, source, publication date, snippet and a link.

## How it works
1. Runs every Monday at 8:00 AM.
2. Defines the watch terms to monitor along with the target country and language for Google News.
3. Runs one Google News search per watch term using Apify (GoogleNewsAPI actor).
4. Skips any watch term that returns no articles.
5. Converts the results into one row per article, including the week, watch term, rank, headline, source, published text, snippet, and link.
6. Appends the generated rows to a selected Google Sheets worksheet.

## Setup
1. Add an Apify API token credential and ensure you have access to the Apify actor `johnvc~GoogleNewsAPI`.
2. Add a Google Sheets OAuth credential, then select the target spreadsheet and worksheet in the Google Sheets append step.
3. Replace the example watch terms (and optionally the country and language) with the brands/topics you want to track.

## Requirements
- An Apify account. The free tier works, and a watch term costs about 3 cents per week.
- A Google account for Sheets.
- No media monitoring subscription and no AI model in the workflow.

## Customization
- Add or remove watch terms in the config node. Each one becomes its own search and its own rows.
- Change country and language together to follow coverage in another market.
- Add an IF node after the Code node to alert you only when a named publication appears.
- Swap Google Sheets for Slack or email if you would rather be pinged than build an archive.

## Additional info
**How do I monitor press coverage without a PR tool?** Put your brand and your competitors in one Set node and let the weekly schedule run. Each run appends the articles Google News is currently surfacing, so the sheet becomes a coverage archive you own rather than an alert email you skim and lose.

**Why is the date a phrase like "2 days ago"?** Because that is what Google News publishes. There is no absolute publication date and no date filter available on this source, so the relative string is what lands in the sheet. De-duplicate on Link when you chart it, and use the Week of column for the timeline.

**What is the competitor angle?** Watch your own brand and two rivals in the same sheet, then sort by Source. That answers a question a Google Alert never will: which publications cover them and ignore you.

**What does it cost?** The template is free. A watch term costs about 3 cents per week, so three terms is roughly 9 cents a week.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-google-news-api` on npm.

**About Apify.** [Google News API](https://apify.com/johnvc/GoogleNewsAPI?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
