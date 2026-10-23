# 🎬 Extend videos with audio using Fal, OpenAI, and Upload-Post for TikTok

> ⚡ **141 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts a video URL and prompt, uses Fal.ai (ltx-2.3-quality) to extend the video forward with generated audio, generates an SEO-friendly title with OpenAI, downloads the finished video, and uploads it to TikTok via the [Upload-Post](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app)  API.

## How it works
1. Triggers from either an n8n Form submission or an incoming Webhook request containing `video_url` and `prompt`.
2. Sends the video URL and prompt to Fal.ai’s ltx-2.3-quality extend-video endpoint to start an asynchronous high-quality render with audio generation enabled.
3. Waits 60 seconds and repeatedly polls Fal.ai’s queue status endpoint until the job status returns `COMPLETED`.
4. Fetches the completed Fal.ai request details to retrieve the final generated video URL.
5. Sends the original prompt to OpenAI (GPT-5) to generate a short, clickable, SEO-oriented video title.
6. Downloads the generated video file and uploads it to Upload-Post with the generated title, targeting the TikTok platform.

## Setup
1. Add a Fal.run API credential (HTTP Header Auth) and confirm the extend-video and status/request URLs match your Fal.ai account and model.
2. Add an OpenAI API credential and, if needed, change the model in the title-generation step.
3. Add an Upload-Post API credential (HTTP Header Auth), set your `user` value (currently `YOUR_USERNAME`), and confirm the Upload-Post endpoint and TikTok platform parameter.
4. If triggering externally, copy the Webhook URL and configure the calling app to send `video_url` and `prompt`, or use the included n8n Form to submit those fields.
5. Adjust the polling delay (60 seconds) if you need faster updates or fewer API calls.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I'll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, Webhook, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
