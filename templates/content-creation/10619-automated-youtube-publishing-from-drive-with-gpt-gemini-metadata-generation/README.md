# 🎬 Automated YouTube publishing from Drive with GPT & Gemini metadata generation

> ⚡ **595 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# How it works
This workflow turns a Google Drive folder into a fully automated YouTube publishing pipeline. Whenever a new video file is added to the folder, the workflow generates all YouTube metadata using AI, uploads the video to your YouTube channel, deletes the original file from Drive, sends a Telegram confirmation, and can optionally post to Instagram and Facebook using permanent system tokens.
## High-level flow:
Detects new video uploads in a specific Google Drive folder.

Downloads the file and uses AI to generate:
• a polished first-person YouTube description
• an SEO-optimized YouTube title
• high-ranking YouTube tags

Uploads the video to YouTube with the generated metadata.

Deletes the original Drive file after upload.

Sends a Telegram notification with video details.

(Optional) Posts to Instagram & Facebook using permanent system user tokens.

## Set up steps
Setup usually takes a few minutes.

Add Google Drive OAuth2 credentials for the trigger and download/delete nodes.

Add your OpenAI (or Gemini) API credentials for title/description/tag generation.

Add YouTube OAuth2 credentials in the YouTube Upload node.

Add Facebook/Instagram Graph API credentials if enabling cross-posting.

Replace placeholder IDs (Drive folder ID, Page ID, IG media endpoint).

Review sticky notes in the workflow—they contain setup guidance and token info.

Activate the Google Drive trigger to start automated uploads.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, YouTube, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
