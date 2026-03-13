# 🎬 Recreate Instagram reels with Gemini 2.0 analysis & minimax video generation

> ⚡ **775 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

This n8n template demonstrates how to automatically download an Instagram Reel, analyze its content using AI video understanding, and regenerate a similar video using AI video generation models. The workflow creates AI-powered variations of existing video content while maintaining visual consistency and style from the original source material.​​

Use cases are many: Content creators can produce multiple variations of trending reels, social media managers can recreate viral content with brand-specific modifications, or marketers can generate similar videos without copyright concerns while maintaining the original's visual appeal and storytelling structure.​

## Good to know
Video generation typically takes 2-5 minutes per video. The workflow includes automatic polling to check completion status.​

Minimax Video-01 generates videos up to 6 seconds long at 720p resolution and 25fps with cinematic camera movements.​

Gemini 2.0 Flash processes video at 1 frame per second (approximately 300 tokens per second of video), making it ideal for detailed video analysis.​

The workflow includes retry logic for failed API requests to ensure reliability.​

Ensure you have sufficient API credits in your Replicate account before running high-volume workflows.​

## How it works
The workflow begins when a user submits an Instagram Reel URL through the chat trigger interface.​

The RapidAPI Instagram Reels Downloader fetches the video metadata and download URL from Instagram.​

Downloaded video data is formatted and validated to ensure successful retrieval before proceeding.​

The video file is uploaded to Google's Gemini 2.0 Flash model via their File API for processing.​​

Gemini 2.0 Flash analyzes the video frame-by-frame, generating a comprehensive description covering visuals, audio, movements, lighting, camera angles, and transitions.​​

The AI-generated description is formatted as a continuous text prompt (lowercase, no punctuation) optimized for video generation models.​

This detailed prompt is sent to Replicate's Minimax Video-01 model to generate a new video based on the analysis.​

The workflow polls the Replicate API every 2 minutes to check generation status, automatically looping until completion.​

Once generation succeeds, the final AI-generated video is downloaded and ready for use or further processing.​

## How to use
The chat trigger node accepts Instagram Reel URLs as input, but you can replace this with webhooks, forms, or scheduled triggers depending on your automation needs.​

Replace all placeholder API keys in the workflow before activation (RapidAPI, Google AI Studio, and Replicate).​

Test with short Instagram Reels first (under 30 seconds) to optimize processing time and token usage.​

The workflow automatically handles null checks and retries if the initial download fails, ensuring robust execution.​

Requirements
RapidAPI account for Instagram Reels Downloader API (handles video extraction from Instagram)​

Google AI Studio API key with Gemini 2.0 Flash access enabled (for advanced video analysis)​​

Replicate API account with sufficient credits for Minimax Video-01 model access (for AI video generation)​

Active n8n instance (self-hosted or cloud) to run the workflow automation​

## Customising this workflow
This AI video recreation workflow can be adapted for numerous creative and business applications. Try extending it to generate multiple style variations from one input video, add branding overlays or watermarks before final output, or integrate with cloud storage (Google Drive, Dropbox) for automated archiving. You can also chain this workflow with content scheduling tools to automatically post generated videos to social media platforms, or combine it with analytics nodes to track which AI-generated variations perform best with your audience.

## 🔗 Nodes Used

HTTP Request, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
