# 🎬 Repurpose YouTube videos into social posts and thumbnails with OpenAI

> ⚡ **17 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts a YouTube URL via webhook, pulls video details and a transcript, uses OpenAI to generate repurposed text content and a thumbnail image, uploads the thumbnail to Google Drive, and stores everything (including the public thumbnail link) in a Notion database.

## How it works
1. Receives a POST webhook request containing a YouTube video URL.
2. Extracts the video ID, then uses the YouTube API to fetch the video’s metadata and Apify to retrieve the video transcript.
3. Cleans and normalizes the transcript text (for example, removing HTML entities and extra whitespace).
4. Sends the cleaned transcript to OpenAI to generate a LinkedIn post, Twitter/X thread, blog draft, and YouTube description in a JSON format.
5. Uses OpenAI to create a thumbnail image prompt from the video title and transcript, then generates a 1024×1024 thumbnail image.
6. Uploads the generated thumbnail to Google Drive, shares it publicly, and prepares the public URL.
7. Saves the video title, video URL, transcript excerpt, AI-generated content, timestamp, and thumbnail URL as a new page in a Notion database.

## Setup
1. Create and connect credentials for YouTube, Apify, OpenAI, Google Drive, and Notion.
2. Create a Notion database with properties matching the workflow fields (Video Title, Video URL, Transcript, LinkedIn Post, Twitter Thread, Blog, YouTube description, Thumbnail, Timestamp) and select its database ID in the Notion step.
3. Choose the Google Drive folder to upload thumbnails to and ensure link sharing is allowed for your Drive.
4. Activate the workflow and send a POST request to the webhook URL with a JSON body containing `url` set to the YouTube link.

## Additional info
## How To Customize Nodes

### Customize AI Content Style

Modify OpenAI prompts to generate:

* Professional content
* Casual content
* Technical content
* Viral social media style

### Customize Thumbnail Design

Update thumbnail prompt instructions:

* Colors
* Fonts
* Lighting
* AI art style
* Branding style

### Customize Notion Storage

You can add additional fields:

* Video category
* Tags
* SEO keywords
* Publishing status
* Approval status

### Customize Google Drive Storage

You may:

* Upload to specific folders
* Organize by date
* Organize by creator/channel


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* Auto-post content to LinkedIn
* Auto-post to Twitter/X
* Generate Instagram captions
* Generate Facebook posts
* Add SEO keyword generation
* Create email newsletters
* Generate short-form video hooks
* Add Slack notifications
* Add Telegram alerts
* Store analytics in Airtable


## Use Case Examples

### 1. Content Repurposing

Convert one YouTube video into multiple content formats automatically.

### 2. Social Media Automation

Generate ready-to-post social content using AI.

### 3. AI Thumbnail Generation

Automatically create engaging thumbnail images.

### 4. Content Database Management

Store all AI-generated content inside Notion.

### 5. Marketing Workflow Automation

Reduce manual content creation workload.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Transcript not found | Video has no subtitles | Use videos with captions enabled |
| OpenAI generation failed | Invalid API key | Reconnect OpenAI credentials |
| Thumbnail not uploading | Google Drive issue | Reconnect Drive account |
| Notion data not saving | Wrong database fields | Match field names correctly |
| Webhook not working | Workflow inactive | Activate workflow |
| Empty AI response | Transcript too short | Test with longer videos |


## Need Help?

If you need help customizing or extending this workflow by adding auto-posting, advanced AI prompts, SEO automation, multi-platform publishing, analytics dashboards or production-level scaling, then our n8n team at WeblineIndia can help with [building advanced workflow automation solutions](https://www.weblineindia.com/process-automation-solutions.html).

## 🔗 Nodes Used

Webhook, Google Drive, YouTube, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
