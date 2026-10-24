# 🔧 Generate and publish AI home cam Shorts with OpenAI, kie.ai and YouTube

> ⚡ **209 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs three times daily to generate an AI “home cam” short video concept with OpenAI, create the video via kie.ai, then download and archive it to Google Drive, upload it to YouTube as a public video, and send a confirmation email via Gmail.

## How it works
1. Runs on a schedule three times a day (08:00, 12:00, and 18:00).
2. Selects a random scenario number from the configured range and asks OpenAI (GPT-4.1-mini) to generate a title, description, tags, and a detailed text-to-video prompt as structured JSON.
3. Builds a kie.ai Sora-2 text-to-video job request using the generated prompt and submits it to the kie.ai API.
4. Waits and repeatedly polls kie.ai until the job succeeds and returns a result payload containing a video download URL.
5. Downloads the generated video file from the returned URL.
6. Uploads the video to a specified Google Drive folder, publishes it to YouTube with the AI-generated metadata, and emails you a notification containing the prompt and video link.

## Setup
1. Add an OpenAI API credential, a kie.ai API key using HTTP Header Auth, and OAuth credentials for Google Drive, YouTube, and Gmail.
2. In the workflow variables, set your notification email address, the target Google Drive folder ID, and the callback URL value used in the kie.ai request.
3. Review or adjust the random scenario range (videoIdeaMin/videoIdeaMax) and YouTube upload settings (for example, privacyStatus and notifySubscribers) before activating the workflow.

## Requirements
- OpenAI API credential
- kie.ai API key
- OAuth credentials for Google Drive, YouTube, and Gmail

## Customization
- Video niche or topic (e.g., Home Security, AI, Fitness, Finance)
- Video generation schedule (change how often videos are created)
- OpenAI model (switch to a different OpenAI model)
- YouTube channel and upload settings (privacy, category, playlist)
- Google Drive destination folder
- Email notification recipient
- Number of video ideas generated per run
- Prompt templates (customize the AI's writing style and tone)
- Video duration and aspect ratio (depending on kie.ai capabilities)

## Additional info
This workflow is designed as a complete automation pipeline for YouTube Shorts. It generates AI-powered video ideas, creates videos with kie.ai, uploads them to YouTube, archives them in Google Drive, and sends email notifications. The workflow is modular, making it easy to replace the AI model, video generation provider, or publishing destination to fit your own content strategy.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, YouTube, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
