# 🎬 Generate quality-checked YouTube thumbnails with OpenAI and Google Drive

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a video title via an n8n form, analyzes creator photos and reference thumbnails from Google Drive with OpenAI, generates two thumbnail concepts, creates images with OpenAI image generation, uploads results to Cloudinary and Google Drive, quality-checks them, and logs approved thumbnails in Google Sheets.

## How it works
1. Receives a video title from an n8n form submission.
2. Downloads creator photos and reference thumbnail examples from Google Drive and uses OpenAI vision to extract a reusable creator appearance profile and recurring thumbnail design patterns.
3. Combines those analyses and uses an OpenAI-powered agent to produce exactly two structured thumbnail generation prompts tailored to the submitted title.
4. Loops over the two prompts and calls the OpenAI Images API to generate a high-quality thumbnail for each concept.
5. Converts the generated image to a file, uploads it to Cloudinary to get a public URL, and also saves the file to a specified Google Drive folder.
6. Uses OpenAI vision to quality-check each uploaded thumbnail and either appends the title and Cloudinary URL to Google Sheets when approved or regenerates the image up to three attempts before routing the item to manual review.

## Setup
1. Add OpenAI API credentials (used for image analysis, prompt generation, and the Images API HTTP request).
2. Add Google Drive OAuth2 credentials and set the creator photos folder ID, reference thumbnails folder ID, and output thumbnails folder ID.
3. Add Google Sheets OAuth credentials and replace the tracking spreadsheet ID (and confirm the target sheet/tab) where approved thumbnail URLs are appended.
4. Configure Cloudinary by replacing YOUR_CLOUD_NAME and YOUR_UPLOAD_PRESET, and ensure the upload preset allows unsigned uploads (or update the request to use signed authentication).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
