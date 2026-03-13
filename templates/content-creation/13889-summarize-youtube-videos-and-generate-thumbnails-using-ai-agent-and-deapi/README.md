# 🎬 Summarize YouTube videos and generate thumbnails using AI Agent and deAPI

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

- YouTube creators who want to speed up their post-production workflow
- Content repurposers who turn videos into written summaries
- Social media managers handling multiple YouTube channels
- Anyone who needs quick, AI-generated thumbnails from video content

## What problem does this solve?

Watching a full video to write a summary and then designing a matching thumbnail is tedious. This workflow does both automatically — transcribe, summarize, and generate a professional 1280x720 thumbnail — all from a single YouTube URL.

## What this workflow does

1. **Takes** a YouTube video URL as input
2. **Transcribes** the full video using deAPI (Whisper Large V3)
3. **AI Agent** analyzes the transcript, writes a concise summary, and uses the deAPI Prompt Booster tool to craft an optimized thumbnail image prompt
4. **Generates** a 1280x720 landscape thumbnail using deAPI
5. **Uploads** the thumbnail to Google Drive

## Setup

### Requirements

- **Self-hosted n8n instance** (deAPI node is not yet available on n8n Cloud)
- [deAPI](https://deapi.ai) account for video transcription, prompt boosting, and image generation
- Anthropic account for the AI Agent
- Google Drive API access for file uploads

### Installing the deAPI Node

1. Go to **Settings** → **Community Nodes**
2. Install `n8n-nodes-deapi`

### Configuration

1. Add your deAPI credentials (API key + webhook secret)
2. Add your Anthropic credentials (API key)
3. Add your Google Drive credentials (OAuth2)
4. Set the target Google Drive folder ID in the **Google Drive Upload** node
5. Ensure your n8n instance is on HTTPS

## How to customize this workflow

- **Change the AI model**: Swap Anthropic for OpenAI, Google Gemini, or any other LLM provider
- **Adjust the prompt style**: Modify the AI Agent system message to target different thumbnail aesthetics (minimalist, bold text overlay, cinematic, etc.)
- **Change the output destination**: Replace Google Drive with Dropbox, S3, Notion, or email delivery
- **Add a summary output**: Insert a Google Docs or Notion node after the AI Agent to save the written summary alongside the thumbnail
- **Process in bulk**: Replace the Manual Trigger with a Google Sheets trigger containing a list of YouTube URLs
- **Swap the trigger**: Use a Form Trigger to let team members submit YouTube URLs through a web form
- **Other video platforms**: The transcription node also supports Twitch VODs, X (Twitter), and Kick URLs

## 🔗 Nodes Used

Google Drive, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
