# 📊 Route low-rated Tripadvisor hotel reviews to Google Sheets with Apify

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
No reputation management subscription and no review platform API key. Every week this pulls the latest reviews for the hotels you list, sends anything at or below your rating threshold to its own reply queue tab, and appends every review to a running history in Google Sheets.

## How it works
1. Runs every Monday morning on a schedule.
2. Loads the Tripadvisor hotel place IDs to monitor, how many recent reviews to pull per hotel, and the “bad review” rating threshold.
3. Calls the Apify Tripadvisor API actor for each hotel to retrieve the latest reviews.
4. Filters the results to keep only rows that represent actual review items.
5. Formats each review into a single row with a run date (“Week of”), key review fields, and a “Needs a reply” flag when the rating is at or below the threshold.
6. Appends flagged reviews to a Google Sheets tab used as a reply queue and appends all reviews to a separate Google Sheets tab used as a running history.

## Setup
1. Create an Apify account and add your Apify API token in n8n so the workflow can run the `johnvc~tripadvisor-api` actor.
2. Add a Google Sheets OAuth credential, select the target spreadsheet, and choose the sheet tabs for the reply queue and the full review history.
3. Update the hotel Tripadvisor place IDs, reviews-per-hotel limit, and rating threshold in the input step (place ID is the number after “d” in the Tripadvisor hotel URL, such as `d143336`).

## Requirements
- An Apify account. The free tier works, and a review costs about a fifth of a cent.
- A Google account for Sheets, with two tabs in one spreadsheet.
- The Tripadvisor place ID for each hotel you watch, read straight out of the hotel page URL.

## Customization
- Change alertAtOrBelow in the config node to make the reply queue stricter or wider than the default of two stars.
- Add more hotels in the config node. Each place ID becomes its own lookup and its own rows.
- Wire the unconnected Slack or Gmail node to the true branch to be told about a bad review instead of reading the tab.
- Wire the unconnected Remove Duplicates node in first so the same review does not alert every week.

## Additional info
**How do I monitor hotel reviews automatically?** List your hotels as Tripadvisor place IDs in one Set node and let the weekly schedule run. Each run appends one row per review, stamped with the run date and keyed by review ID, so the sheet becomes a review history rather than a one-off export you forget to repeat.

**Why are there two tabs?** Because a single appended log buries the complaints among the five star reviews. Anything at or below your threshold takes the IF node's true branch into a short reply queue, and every review still lands in the history tab, so nothing is lost and nobody has to scan for the bad ones.

**How do I know which reviews are new?** Two ways. A review ID that appears in this week's rows and not in last week's is a new review. And every row carries the hotel's running review total, so the count rising week over week tells you the pace before you diff a single row.

**Where do I find a hotel's place ID?** Open the hotel's page on Tripadvisor and read the number after d in the URL: a URL containing d143336 means place ID 143336. The actor's search mode also returns the placeId for every hotel it finds, so you can look properties up by name once and paste the IDs into the config node.

**Why is the stay date only a month?** Because that is all the source gives. The stay date always lands on a month end, so the column ships as YYYY-MM rather than pretending to know the exact night. Trip type is cleaned up the same way: it arrives upper case with NONE standing in for not stated, and the template folds that into a blank.

**What does it cost?** The template is free. A review costs about a fifth of a cent, so checking the latest ten reviews on one hotel weekly is just under 2 cents a week.

**About Apify.** [Tripadvisor API](https://apify.com/johnvc/tripadvisor-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
