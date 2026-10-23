# 📱 Post Facebook image captions from Google Drive using Gemini Vision

> ⚡ **18 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on a schedule, pulls the next image from a Google Drive folder, generates a Facebook-ready caption with Google Gemini Vision, and publishes the image and caption to a Facebook Page using the Facebook Graph API.

## How it works
1. Runs every three days at 19:30 on a schedule.
2. Sets the Facebook Page ID, CTA link, and brand context used throughout the workflow.
3. Searches a specified Google Drive folder and selects the next image file, then downloads it.
4. Sends the downloaded image plus your brand context to Google Gemini Vision to generate a caption returned as JSON.
5. Posts the image (via a Google Drive thumbnail URL) and the generated caption to your Facebook Page through the Facebook Graph API /photos endpoint.

## Setup
1. Add credentials for Google Drive OAuth2, Google Gemini, and Facebook Graph API (with a Page Access Token that can publish photos).
2. Replace the Facebook Page ID, CTA link, and brand context values in the Config step.
3. Update the Google Drive folder ID in the file search step to point to your image folder and ensure it contains images you want to post.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
