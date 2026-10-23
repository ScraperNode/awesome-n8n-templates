# 📊 Scrape Instagram profiles with Apify and log results to Google Sheets

> ⚡ **218 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects public Instagram usernames through an n8n form, scrapes profile and recent post metrics using Apify’s Instagram Profile Scraper, then upserts the results (including engagement rate and a high-profile flag) into a Google Sheets table.

## How it works
1. Receives Instagram usernames submitted through an n8n form (comma- or newline-separated).
2. Normalizes the input into a clean username list and sets run parameters like the Apify actor and how many recent posts to analyze.
3. Sends a single batched request to the Apify Instagram Profile Scraper API to retrieve profile details and latest post stats.
4. Detects whether each returned item contains valid profile data and formats records into a consistent schema for scraped vs. private/not-found outcomes.
5. Captures Apify request failures and formats an error record with a clear status and timestamp.
6. Merges all outcomes and appends or updates rows in Google Sheets so reruns update existing usernames instead of creating duplicates.

## Setup
1. Add an Apify API token as an HTTP Header Auth credential (Authorization: Bearer <token>) and select it in the Apify request step.
2. Connect a Google Sheets OAuth2 credential, then select the target spreadsheet and the “Profiles” sheet (or create them).
3. Ensure the sheet has columns matching the logged fields (for example: username, fullName, followersCount, followsCount, biography, profilePicUrl, externalUrl, isPrivate, isVerified, postsCount, latestPostCaption, latestPostLikes, latestPostComments, engagementRatePercent, isHighProfile, status, scrapedAt).
4. Review the configuration values (Apify actor slug, resultsLimit/max posts, and the follower threshold used to flag high-profile accounts) to match your needs.

## Additional info
# Scrape Instagram profiles and log them to Google Sheets
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Scrape-Instagram-profiles-and-log-them-to-Google-Sheets-3a03d6550fd981b596e4ca67e1a3c679)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
