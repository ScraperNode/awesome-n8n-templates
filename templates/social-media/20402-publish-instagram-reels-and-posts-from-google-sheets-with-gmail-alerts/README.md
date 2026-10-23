# 📱 Publish Instagram reels and posts from Google Sheets with Gmail alerts

> ⚡ **6 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually or daily at 4 PM to pull the next pending item from Google Sheets and publish it to Instagram (Reels for MP4 videos or an image post) via the Facebook Graph API, then updates the sheet and sends Gmail success or error notifications.

## How it works
1. Runs when you click “Test workflow” or on a daily schedule around 4 PM.
2. Reads the first row in Google Sheets (Sheet1) where Status is Pending.
3. Checks whether the queued asset is an MP4 to decide between publishing a Reel (video) or an image post.
4. Creates an Instagram media container via the Facebook Graph API using the provided media URL/filename and caption.
5. Polls the container status via the Facebook Graph API and waits 15 seconds to retry while processing is IN_PROGRESS.
6. Publishes the media to Instagram when the container status is FINISHED.
7. Updates the Google Sheets row to Completed and emails a Gmail success message including remaining pending count, or marks Error Publishing and sends an error email if the container status is ERROR.

## Setup
1. Connect credentials for Google Sheets OAuth2, Facebook Graph API (with permissions to publish to your Instagram Business account), and Gmail OAuth2.
2. Replace YOUR_SPREADSHEET_ID in all Google Sheets nodes and ensure Sheet1 has at least the columns Status and Filename (optionally Url and Caption) with rows queued as Status = Pending.
3. Replace YOUR_INSTAGRAM_ACCOUNT_ID (or populate an instagram_account_id column) so the Facebook Graph API nodes target the correct Instagram Business Account.
4. Ensure each queued item has a publicly reachable Url (video_url/image_url) or update the S3-style fallback URL pattern to match where your media files are hosted.
5. Update the recipient address in both Gmail nodes (success and error) to your notification email.

## Additional info
Learn how to use this automation - https://www.youtube.com/watch?v=vocKbSPHub0

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
