# 🎬 Generate short-form clips from YouTube videos with GPT-4o, Grok & Airtable

> ⚡ **5,005 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

This n8n template demonstrates how to automate YouTube content repurposing using AI. Upload a video to Google Drive and automatically generate transcriptions, A/B testable titles, AI thumbnails, short-form clips with captions, and YouTube descriptions with chapter timestamps.

Use cases include: Content creators who publish 1-2 long-form videos per week and need to extract 5-10 short-form clips, YouTube agencies managing multiple channels, or automation consultants building content systems for clients.

## Good to know

* Processing time is approximately 10-15 minutes per video depending on length
* Cost per video is roughly $1.00 (transcription $0.65, AI generation $0.35)
* YouTube captions take 10-60 minutes to generate after upload - the workflow includes automatic polling to check when captions are ready
* Manual steps still required: video clipping (using provided timestamps), social media posting, and YouTube A/B test setup

## How it works

* When a video is uploaded to Google Drive, the workflow automatically triggers and creates an Airtable record
* The video URL is sent to AssemblyAI (via Apify) for transcription with H:MM:SS.mmm timestamps
* GPT-4o-mini analyzes the transcript and generates 3 title variations optimized for A/B testing
* When you click "Generate thumbnail" in Airtable, your prompt is optimized and sent to Kie.ai's Nano Banana Pro model with 2 reference images for consistent branding
* After uploading to YouTube, the workflow polls YouTube's API every 5 minutes to check if auto-generated captions are ready
* Once captions are available, click "Generate clips" and Grok 4.1 Fast analyzes the transcript to identify 3-8 elite clips (45+ seconds each) with proper start/end boundaries and action-oriented captions
* GPT-4o-mini generates a YouTube description with chapter timestamps based on the transcript
* All outputs are saved to Airtable: titles, thumbnail, clip timestamps with captions, and description

## How to use

* Duplicate the provided Airtable base template and connect it to your n8n instance
* Create a Google Drive folder for uploading edited videos
* After activating the workflow, copy webhook URLs and paste them into Airtable button formulas and automations
* Upload your edited video to the designated Google Drive folder to trigger the system
* The workflow automatically generates titles and begins transcription
* Add your thumbnail prompt and 2 reference images to Airtable, then click "Generate thumbnail"
* Upload the video to YouTube as unlisted, paste the video ID into Airtable, and check the box to trigger clip generation
* Use the provided timestamps to manually clip videos in your editor
* Copy titles, thumbnail, clips, and description from Airtable to publish across platforms

## Requirements

* Airtable account (Pro plan recommended for automations)
* Google Drive for video upload monitoring
* Apify account for video transcription via AssemblyAI actor
* OpenAI API key for title and description generation (GPT-4o-mini)
* OpenRouter API key for clip identification (Grok 4.1 Fast)
* Kie.ai account for AI thumbnail generation (Nano Banana Pro model)
* YouTube Data API credentials for caption polling

## Customising this workflow

* Tailor the system prompts to your content niche by asking Claude to adjust them without changing the core structure
* Modify the clip identification criteria (length, caption style, number of clips) in the Grok prompt
* Adjust thumbnail generation style by updating the image prompt optimizer
* Add custom fields to Airtable for tracking performance metrics or additional metadata
* Integrate with additional platforms like TikTok or Instagram APIs for automated posting

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Google Drive, YouTube, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
