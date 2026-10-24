# 🎬 Automate Instagram stories publishing from Google Sheets with Meta Graph API

> ⚡ **1,831 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow completely automates posting Instagram Stories using a Google Sheet. By adding direct video URLs to your sheet, the workflow automatically schedules, shuffles, and publishes the content while preventing duplicates, giving you a hands-free social media strategy.

## How it works
1. A scheduled trigger kicks off the workflow automatically at your specified daily time.
2. The workflow connects to your Google Sheet and retrieves the list of available video URLs.
3. It intelligently filters out videos that have already been published by checking the posted_story column for a "true" value.
4. The remaining unposted video URLs are randomized to ensure a varied content mix rather than posting straight down the list.
5. The workflow sends the selected direct video link to the Instagram Graph API, which processes and publishes the video as a Story.
6. Finally, the workflow updates your Google Sheet, marking the published video row as "true" to prevent any future duplicate posts.

## Setup
1. Prepare your Google Sheet by ensuring it has two specific columns named exactly source_url and posted_story. You can extract your Sheet ID from the URL.
2. Log into your Instagram account via the Accounts Center and copy your Instagram Business Account ID (the numerical format at the end of the URL).
3. Go to Meta for Developers, create a new Meta App, and add the "Instagram Graph API" product.
4. Grant the necessary permissions in your Meta App: instagram_basic, instagram_content_publish, pages_show_list, and pages_read_engagement.
5. Generate a Long-Lived Access Token from Meta so n8n maintains persistent access to post on your behalf.
6. Open the n8n Configuration Hub Node and input your IG_BUSINESS_ID, SHEET_DOC_ID, and the exact SHEET_TAB_NAME.
7. Create and connect your Google Sheets credentials and Facebook Graph API credentials within the required nodes, run a manual test, and activate the workflow.

## Requirements
- An Instagram Business or Creator account that is fully connected to a Facebook Page.
- A Meta Developer Account to create the necessary App permissions.
- A publicly accessible storage solution that provides direct links to your video files (e.g., Amazon S3, Shopify, or a secure WordPress site).
- Direct video URLs only; shared links from services like Google Drive or Dropbox are incompatible and will fail.

## Customization
- Adjust the posting frequency and times by modifying the Auto Schedule node to fit your audience's peak engagement hours.
- Connect a custom Google Sheet template (downloadable below) to manage your video queue seamlessly.

## Additional info
If the workflow runs but doesn't post, check that you have empty rows in the posted_story column; if all are marked true, there is no new content. If you receive an "Unsupported post request" error, double-check that your video URL is a direct file link and doesn't lead to a web preview page. If you hit a permission error, verify your Meta App scopes in the Developer Dashboard.

Resources:

Template Download for Long-Lived-Token: https://oprootor.com/wp-content/uploads/2026/06/FaceBook-Long-Lived-Token.zip

Creator: @iMan (https://oprootor.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
