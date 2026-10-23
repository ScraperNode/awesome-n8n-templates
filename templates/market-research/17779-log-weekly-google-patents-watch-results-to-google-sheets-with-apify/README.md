# 📊 Log weekly Google Patents watch results to Google Sheets with Apify

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No IP watch service and no per-seat subscription. Every week this searches Google Patents for the technologies you follow and appends one row per patent to Google Sheets: title, assignee, inventor, publication and filing dates, the abstract, and a link to the patent.

## How it works
1. Runs every Monday morning on a schedule.
2. Loads your patent watch list, optional assignee, target country, and lookback window.
3. Splits the watch list so each watch term triggers a separate Google Patents search.
4. Uses Apify (johnvc/google-patents-api actor) to query Google Patents for recent publications within the lookback window.
5. Skips any searches that return no patents.
6. Expands the results into one flattened spreadsheet-ready row per patent, including key metadata and a patent link.
7. Appends the patent rows to the selected Google Sheets tab.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential in n8n.
2. Connect Google Sheets credentials and select the target spreadsheet and sheet/tab in the Google Sheets node.
3. Update the watch terms, and optionally set assignee, country, and lookbackDays in the configuration step before activating the workflow.

## Requirements
- An Apify account. The free tier works, and a watch term costs about 4 cents per week.
- A Google account for Sheets.
- No IP watch service, no scraping vendor account, and no AI model in the workflow.

## Customization
- Add or remove watch terms in the config node. Each one becomes its own search and its own rows.
- Set `assignee` to a company name and the template becomes a competitor filing watch instead of a topic watch.
- Change `country` to another patent office, for example EP for the EPO or WO for WIPO, or a comma separated list.
- Widen `lookbackDays` to catch more, or add an IF node so you are only alerted when a named competitor appears.

## Additional info
**How do I monitor new patents in my field?** Put your technology terms in one Set node and let the weekly schedule run. Each run searches Google Patents inside a publication-date window and appends one row per patent, so the sheet becomes a running record of what is being published in your area rather than a search you keep forgetting to repeat.

**Can I watch a specific company instead of a topic?** Yes, and it is the most useful way to run this. Set the `assignee` field to a company name and every run returns what that company has published inside the window. Patents publish about 18 months after filing, so it is a lagging indicator, but it is the closest public thing there is to a competitor's R&D roadmap.

**Why does it not sort by newest?** Because sorting Google Patents by newest quietly throws the query away. Asking for the newest patents about solid state batteries returns the newest patents about anything: in testing, a solid state battery search sorted by newest came back with an acid reflux implant, a pilates reformer and a webcam merger. This template uses relevance plus a publication-date window instead, which is what actually gives you results that are both recent and on topic.

**Why is the lookback 90 days and not 7?** Patent offices publish in batches, and a narrow technology niche can go weeks with nothing at all. A 30 or 60 day window frequently returns an empty result, which looks like a broken workflow rather than a quiet week. Ninety days is the shortest window that reliably returns something to look at, and duplicates are easy to drop.

**Will the same patent appear twice?** Yes, in two situations, and both are intentional. A patent that matches two of your watch terms appears once per term, with the term recorded on the row, so you can see what it matched. And because rows are appended every week, a patent stays in the window until it ages out. De-duplicate on Publication number when you chart it.

**What does it cost?** The template is free. A watch term costs about 4 cents per week, so three terms is roughly 12 cents a week. There is no AI model in the workflow, so there is no token bill on top.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-google-patents-api` on npm.

**About Apify.** [Google Patents API](https://apify.com/johnvc/google-patents-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
