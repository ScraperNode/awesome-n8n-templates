# 🎣 Find TikTok creator leads with Apify and save them to Google Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow searches TikTok creators by keyword or hashtag using Apify’s TikTok Profile Scraper, filters for profiles within a follower range that include a contact email, and upserts the resulting creator leads into a Google Sheets document deduplicated by username.

## How it works
1. Runs manually to start the lead collection.
2. Sets the search keywords/hashtags, follower range, maximum results, and whether to only keep creators with an email.
3. Calls Apify’s TikTok Profile Scraper actor via the Apify API to fetch matching TikTok profile results with enriched bio links.
4. Extracts lead fields such as username, display name, followers, average likes per post, email, bio, social links, profile URL, and the keyword source.
5. Appends or updates rows in Google Sheets, matching on the username column to avoid duplicates.

## Setup
1. Create an Apify API token and add an HTTP Header Auth credential with `Authorization: Bearer <YOUR_APIFY_TOKEN>` for the Apify request.
2. Update the search settings (keywords/hashtags, min/max followers, max results, and email-only filtering) to match your targeting.
3. Connect Google Sheets, set the target spreadsheet and sheet, and ensure the sheet has a header row that includes `username` as the matching column.

## Requirements
- Apify account and API token (pay per result, free tier available)
- Google Sheets credential with edit access to the target spreadsheet
- A sheet with a header row including a "username" column

## Customization
- Swap the follower range and keywords on the settings node to target a different niche.
- Replace the Google Sheets node with Airtable, Notion or a database if you don't use Sheets.
- Add a Schedule trigger to refresh the lead list weekly.

## Additional info
Uses the TikTok Profile Scraper actor: https://apify.com/scrape-lads/tiktok-profile-scraper
More data tools: https://scrapelads.com

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
