# 📊 Track competitor Google review ratings and counts with Apify and Google Sheets

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No Google Business Profile connection and no SerpApi or Bright Data account. This template runs weekly review tracking across the whole Google local pack for your search term, appending one row per business to Google Sheets: star rating, review count, rank, and the gap to each rival.

## How it works
1. Runs every Monday morning on a schedule.
2. Uses your business name plus a search term, location, and Google domain/country settings to define the query.
3. Calls the Apify Google Local API actor to retrieve the Google local pack results for that query.
4. Skips the run if the search returns no local results to avoid writing empty data.
5. Splits the local pack into one item per business and calculates rank, rating, review count, and whether the result matches your business.
6. Computes “Reviews vs you” and “Rating vs you” for each competitor when your own listing is present in the results.
7. Appends the weekly scoreboard rows to the selected Google Sheets spreadsheet and sheet tab.

## Setup
1. Create an Apify account, add your Apify API token in n8n, and ensure it can run the actor `johnvc~google-local-api`.
2. Connect Google Sheets credentials in n8n and select the target spreadsheet document and sheet tab in the append step.
3. Update the input values for your business name, search term, location, Google domain, and country to match the market you want to track.

## Requirements
- An Apify account. The free tier works, and one local search costs about 2 cents.
- A Google account for Sheets.
- No Google Business Profile access and no scraping vendor account. There is no AI model in the workflow either, so nothing to pay per token.

## Customization
- Change the search term or city in the config node to watch a different market. Each run captures the full local pack for that one search.
- Track another country by changing `googleDomain` and `country` together, for example `google.co.uk` and `uk`.
- Add an IF node after the Code node to alert you only when a rival overtakes you on review count.
- Swap Google Sheets for Airtable, Slack, or email if you would rather be pinged than build a history.

## Additional info
**How do I track my competitors' Google reviews?** Put your business name, a search term, and a city into one Set node and let the weekly schedule run. Every run records the entire local pack Google returns for that search, so your rating and review count land in the same sheet as the shops ranking beside you, with the gap to each one already worked out.

That is the part most review tools cannot do. They connect to a Google Business Profile, which means they can only ever read a listing you own. This reads Google's public local results, so a competitor's numbers are no harder to collect than your own.

**Do I need access to the Google Business Profile I am tracking?** No, and that is the point. There is no OAuth step and nothing to claim. If a business shows up in Google's local results for your search, it shows up in your sheet.

**Does this collect the text of individual reviews?** No. It records the star rating and the total review count for each business, which is the number reputation monitoring runs on. If you need the wording of specific reviews, or sentiment analysis over them, this is not the template for that job.

**Can I use this for client reporting?** That is most of what I would use it for. One search term per client, a weekly schedule, and the sheet becomes a local seo reporting log you can screenshot straight into a monthly update. Add a second copy of the workflow per client rather than trying to loop several businesses through one run, since the comparison columns are anchored to a single business name.

**How do I turn weekly snapshots into review growth?** After the second run the sheet holds the history, and one formula turns it into velocity. With the default columns, put this in the first empty column and fill it down:

```
=IF(COUNTIFS($M$2:$M,$M2,$A$2:$A,"<"&$A2)=0,"",$H2-MAXIFS($H$2:$H,$M$2:$M,$M2,$A$2:$A,"<"&$A2))
```

It matches each business on Place ID, finds its most recent earlier snapshot, and shows how many reviews it gained since. Blank on a business's first appearance. Sort by that column and you can see who is actually running a review campaign and who has gone quiet.

**Is there a Google reviews API behind this?** Not Google's own. Google's public APIs do not hand out a competitor's review history, which is why competitor monitoring usually means paying a scraping vendor or a rank tracker. This template collects the same public local results through an Apify actor, so a free Apify token covers it.

**What does it cost?** The template is free. One local search runs about 2 cents, so a weekly schedule is roughly 9 cents a month. There is no AI model in the workflow, so there is no token bill on top.

**Why does a rating here differ slightly from what I see?** Google personalizes local results by exact location, and ratings update continuously. This searches from the city you specify with no personalization, which is the consistent baseline you want when you are comparing the same set of businesses week over week.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-google-local-api` on npm.

**About Apify.** [Google Local API](https://apify.com/johnvc/google-local-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
