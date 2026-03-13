# 📱 Schedule social media posts from local files using UploadToURL, OpenAI, and Buffer

> ⚡ **130 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Schedule social media posts from local files using UploadToURL, OpenAI, and Buffer
===

Marketing teams often have design files sitting locally — campaign images, product videos, event graphics — that need to be published on social media. The usual process means downloading files, switching apps, uploading to each platform separately, and writing captions by hand. This workflow removes those steps.

Send a file link or binary upload to the webhook. UploadToURL hosts it instantly and returns a clean public URL. OpenAI GPT-4.1 mini reads the filename and context to generate a platform-specific caption, hashtags, alt text, and a scroll-stopping hook. A Switch node routes to the correct Buffer profile — Twitter/X, Instagram, or LinkedIn — and the post is scheduled at the AI-suggested best time.

## What this workflow does

1. Receives a file URL or binary upload via webhook along with platform, tone, and brand preferences
2. Validates the payload — checks the platform, detects content type from the file extension, cleans the filename into readable words for the AI prompt
3. Uploads the file to UploadToURL and retrieves a permanent public link
4. Sends the link and context to OpenAI, which returns a structured JSON caption with hashtags, alt text, a hook line, and a UTC posting time
5. Routes to the correct Buffer profile based on the platform field
6. Schedules the post and returns a confirmation with the schedule ID, caption, hashtags, and estimated engagement

## Who this is for

- **Marketing agencies** managing multiple brand accounts who need to go from a finished design file to a scheduled post without switching tools
- **Solo creators** who want to publish immediately after finishing a piece of content without manually uploading to each platform
- **E-commerce teams** who want to trigger social posts whenever new product photos are ready

## Setup

1. Install the UploadToURL community node: `n8n-nodes-uploadtourl`
2. Add credentials for UploadToURL API, OpenAI API, and Buffer (as HTTP Header Auth with your Buffer access token)
3. Set three workflow variables: `BUFFER_PROFILE_TWITTER`, `BUFFER_PROFILE_INSTAGRAM`, `BUFFER_PROFILE_LINKEDIN` — find these IDs in your Buffer account under each profile's settings
4. Activate and copy the webhook URL

## Webhook payload

```json
{
  "fileUrl": "https://cdn.example.com/summer-campaign.jpg",
  "filename": "summer-campaign.jpg",
  "platform": "instagram",
  "tone": "casual",
  "brand": "Acme Studio",
  "hashtags": true
}
```

To upload a binary file instead, send as `multipart/form-data` with field name `file` and omit `fileUrl`. Pass `scheduleTime` as an ISO 8601 string to override the AI scheduling suggestion.

## Notes

- The OpenAI node uses `gpt-4.1-mini` with `response_format: json_object` to guarantee structured output — no post-processing of freetext required
- Caption length is validated against per-platform limits before scheduling (Twitter: 280, Instagram: 2200, LinkedIn: 3000)
- To add Facebook or TikTok, add a new output on the Switch node and duplicate one of the Buffer HTTP request nodes
- The error handler returns a structured JSON `400` response so calling apps receive actionable feedback without needing to check n8n logs

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
