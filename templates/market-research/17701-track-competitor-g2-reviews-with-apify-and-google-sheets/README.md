# 📊 Track competitor G2 reviews with Apify and Google Sheets

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
No ScrapingBee or Bright Data account and no AI model. This template pulls G2 reviews every week for the products you list and appends one row each to Google Sheets: the pros and cons in the reviewer's own words, their role, company size, and a link to each review.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Loads the G2 product review URLs to monitor and the maximum number of reviews to fetch per product.
3. Uses the Apify actor (johnvc~g2-reviews-api) to fetch recent reviews for each listed G2 product.
4. Filters the results so only items that are actual reviews are kept.
5. Formats each review into a single row (including week-of date, product, rating when present, pros/cons, reviewer details, publish date, review link, and review ID) and truncates long text to fit spreadsheet cells.
6. Appends the formatted rows to the selected Google Sheets document and sheet tab.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential for the Apify node.
2. Connect Google Sheets credentials and select the target spreadsheet (document ID) and worksheet (sheet name) where rows should be appended.
3. Update the productUrls array and maxReviewsPerProduct value to match the G2 product review pages you want to track.

## Requirements
- An Apify account. The free tier works, and a review costs about four tenths of a cent.
- A Google account for Sheets.
- No ScrapingBee, Bright Data, or Decodo account, and no OpenAI key. There is no AI model in the workflow.

## Customization
- Add or remove G2 product URLs in the config node. Up to 100 products per run, each capped independently.
- Raise or lower `maxReviewsPerProduct` to control cost and volume.
- Add an IF node after the Code node to alert you only when a review mentions a term you care about, such as a pricing objection or a competitor name.
- Swap Google Sheets for Airtable, Slack, or a database if you would rather be pinged than build a history.

## Additional info
**How do I monitor my competitors' G2 reviews?** Put their G2 product URLs in one Set node and let the weekly schedule run. Each run pulls the latest reviews for every product on the list and appends them to your sheet, so you build a competitive history rather than checking a page when someone remembers to.

**What do I actually do with the data?** Read the Cons column. Those are the objections a prospect will bring to your next sales call, written by people who already bought the alternative, in their own words rather than a survey's. Sorting the Cons column by product is the fastest battlecard you will ever build.

**Do I need a ScrapingBee or Bright Data account?** No. The other competitor review monitoring workflows in this library sit behind a scraping vendor, and most add an OpenAI key on top for summarizing. This one needs a single free Apify credential and no language model, so nothing is paraphrased and there is no per-token cost.

**Is the star rating on every review?** No, and this is worth knowing before you build a chart on it. G2 does not attach a visible star rating to every review it publishes. In testing about 40 percent of rows carried one, so treat a blank Rating as unrated rather than as zero. The pros and cons text, the date, the reviewer's role, and the review link are present on every row, which is why the template leads with the words rather than the score.

**Will I get the same review twice?** Yes, if it is still among the most recent when the next run fires. Every row carries a Review ID, so de-duplicate on that column when you chart or pivot. Appending rather than overwriting is deliberate: it means you can see when a review was first collected.

**What does it cost?** The template is free. A review costs about four tenths of a cent, so three products at 25 reviews each is roughly 30 cents a week.

Self-hosting n8n? There is also a dedicated community node, `n8n-nodes-g2-reviews-api` on npm.

**About Apify.** [G2 Reviews API](https://apify.com/johnvc/g2-reviews-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
