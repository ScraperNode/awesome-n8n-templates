# 📱 Post scheduled social content from Google Sheets to Instagram, Facebook, and LinkedIn

> ⚡ **251 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily and reads a Google Sheets content calendar to auto-publish scheduled posts to Instagram and Facebook via the Meta Graph API, then posts the same content to LinkedIn and updates the sheet with posting results.

## How it works
1. Runs every day at 19:00 in the Africa/Casablanca timezone.
2. Reads rows from a Google Sheets “Content_Calendar” sheet and keeps only items scheduled for today with a status of “pending”.
3. Prepares the post payload by building the final caption (caption plus hashtags) and determining whether the content is an image or an Instagram Reel, optionally generating a Cloudinary-transformed image URL.
4. If the item is an image, it creates and publishes an Instagram media container through the Meta Graph API, then posts the same image to a Facebook Page.
5. If the item is a Reel, it creates an Instagram Reel container through the Meta Graph API, waits for processing, publishes it, and then uploads the video to a Facebook Page.
6. Downloads the posted image and publishes the captioned post to LinkedIn.
7. Updates the Google Sheets row as “posted” with timestamps/IDs on success, or marks it “failed” with the error details if a request errors.

## Setup
1. Connect your Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID (and confirm the target sheet/tab) in the read and update steps.
2. Create a Meta app/access tokens with permissions to post to your Instagram Business account and Facebook Page, then replace YOUR_IG_ACCOUNT_ID, YOUR_FB_PAGE_ID, YOUR_META_ACCESS_TOKEN, and YOUR_FB_PAGE_ACCESS_TOKEN.
3. Connect your LinkedIn OAuth2 credentials and replace YOUR_LINKEDIN_PERSON_ID for the account that should publish the post.
4. If you want branded image overlays, upload your base images to Cloudinary, set YOUR_CLOUDINARY_CLOUD, and update the transformation overlay references (logo/text) used to generate the final image URL.
5. Ensure your Google Sheet includes the expected columns (at least scheduled_date, status, format, image_source_url, caption_fr, hashtags, and a unique post_id) and uses “pending/posted/failed” statuses.

## 🔗 Nodes Used

Google Sheets, HTTP Request, LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
