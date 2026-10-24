# 📱 Post Instagram images with captions from Google Drive using Gemini Vision

> ⚡ **20 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on a schedule to pick an image from a Google Drive folder, generate an Instagram caption with Google Gemini Vision, and publish the post through the Instagram Graph API using the required create-container and publish steps.

## How it works
1. Runs every 3 days at 19:30 on a scheduled trigger.
2. Sets the Instagram Business Account ID, CTA link, and brand context used throughout the workflow.
3. Searches a specified Google Drive folder for an image and downloads the file.
4. Sends the image to Google Gemini Vision to generate a formatted Instagram caption returned as JSON.
5. Calls the Facebook/Instagram Graph API to create an Instagram media container with the image URL and generated caption.
6. Publishes the created media container to the Instagram Business account via the Graph API.

## Setup
1. Add Google Drive OAuth2 credentials and update the Google Drive folder ID used for the image search.
2. Add a Google Gemini API key (Google Gemini node credentials).
3. Add a Facebook Graph API credential with permission to publish Instagram content (for example, `instagram_content_publish`) and connect it to the correct Instagram Business account.
4. Replace the placeholder Instagram Business Account ID in the Config step and set your CTA link and brand context values.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
