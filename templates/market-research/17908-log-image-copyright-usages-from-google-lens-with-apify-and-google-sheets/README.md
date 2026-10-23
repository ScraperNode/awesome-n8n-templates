# 📊 Log image copyright usages from Google Lens with Apify and Google Sheets

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
No stock agency monitoring service and no per-image fee. Every week this looks up the images you list and appends one row per page carrying that exact image to Google Sheets: the site, the page title, the page URL and the dimensions of their copy.

## How it works
1. Runs every Monday morning on a schedule.
2. Loads a list of image URLs to monitor and the maximum number of matches to return per image.
3. Looks up each image individually by calling the Apify Google Lens API actor in exact-match mode.
4. Keeps only results that are confirmed as matches.
5. Formats each match into a single row with the week date, source image URL, page details, and image dimensions.
6. Appends the rows to a selected Google Sheets spreadsheet tab.

## Setup
1. Create an Apify account, add your Apify API token in n8n, and ensure the workflow can run the `johnvc~google-lens-api` actor.
2. Connect a Google Sheets account in n8n and select the target spreadsheet and sheet/tab to append rows to.
3. Replace the example `imageUrls` list with publicly accessible image URLs and set `maxMatchesPerImage` to the desired limit.

## Requirements
- An Apify account (the free tier works, a match costs about a third of a cent), a Google account for Sheets, and images that are publicly reachable by URL. Links behind a login or a signed URL will not work.

## Customization
- Add or remove image URLs in the config node; each becomes its own lookup and its own rows. Raise or lower the match cap per image to control cost, add an IF node after the Code node to alert only when a new domain appears, or point it at product shots instead of photography to watch marketplaces reusing your listings.

## Additional info
**How do I find out where my images are being used?** Put the image URLs in one Set node and let the weekly schedule run. Each run appends one row per page carrying that exact image, so you get a usage log rather than a one-off search you forget to repeat.

**Does this tell me if someone is infringing my copyright?** No, and it is important to be clear about that. A row means a page is serving your image. It might be licensed, credited, fair use, or your own syndication. Read the sheet as a shortlist to review, not a list of offenders, and take legal advice before acting on it.

**I got zero rows. Does that mean nobody is using my image?** No, it means unknown. Coverage is patchy: in testing the same lookup returned nothing for two Wikimedia URLs and a NASA APOD link, while returning eight to ten matches for other hosts. A brand new upload will usually return nothing at all. Test one image manually before trusting a whole portfolio to a schedule.

**What does it cost?** The template is free. A match costs about a third of a cent, so an image with 30 uses is about a cent to check.

**About Apify.** [Google Lens API](https://apify.com/johnvc/google-lens-api?fpr=9n7kx3&fp_sid=n8n) runs on Apify, a platform of ready-made scrapers and APIs for sources that have no usable public API. Actors are pay per use with no subscription, and they run in the cloud, so nothing runs on your machine and nothing breaks when the source changes its markup.

**New to Apify?** You can [set up a free account](https://apify.com?fpr=9n7kx3&fp_sid=n8n) and get the API token this template needs in a couple of minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
