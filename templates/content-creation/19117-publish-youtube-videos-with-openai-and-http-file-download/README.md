# 🎬 Publish YouTube videos with OpenAI and HTTP file download

> ⚡ **112 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow generates an optimized YouTube title and description with OpenAI from a provided video topic, downloads an MP4 from a public URL, and uploads the video to YouTube with the AI-generated metadata.

## How it works
1. Starts when you manually execute the workflow.
2. Collects a public MP4 URL and a short text description of the video topic.
3. Sends the topic to OpenAI to generate a YouTube-ready title and description with three hashtags.
4. Parses the AI’s JSON response and combines it with the source video URL.
5. Downloads the MP4 file from the provided URL.
6. Uploads the downloaded video to YouTube with the generated title and description, using Private visibility.

## Setup
1. Add an OpenAI credential to the OpenAI step used to generate YouTube metadata.
2. Add a YouTube OAuth credential with permission to upload videos.
3. Replace `source_url` with a direct, publicly accessible MP4 file URL and update the `topic` text to match your video.
4. Review the YouTube upload settings (privacy status, category, and region) and keep uploads set to Private while testing.

## Requirements
- OpenAI API credential
- YouTube OAuth2 credential
- Direct publicly accessible MP4 video URL

## Customization
- Change the OpenAI model used for metadata generation
- Change YouTube privacy status from Private to Public
- Change YouTube category and region
- Customize the AI prompt for your preferred title and description style

## Additional info
Use only videos you own or have permission to upload. The source URL must point directly to a publicly accessible MP4 file. YouTube uploads are set to Private by default for safe testing.

## 🔗 Nodes Used

HTTP Request, YouTube, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
