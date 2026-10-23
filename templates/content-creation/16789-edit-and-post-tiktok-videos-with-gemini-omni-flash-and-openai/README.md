# 🎬 Edit and post TikTok videos with Gemini Omni Flash and OpenAI

> ⚡ **4,965 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a webhook request with a video URL and edit prompt, sends the job to Fal.run’s Gemini Omni Flash for video editing, generates a title with OpenAI, downloads the rendered file, and uploads it to TikTok via the [Upload-Post](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app) API.

## How it works
1. Receives a webhook request containing a `video_url` and an editing `prompt`.
2. Submits the video edit job to Fal.run’s Gemini Omni Flash queue API.
3. Polls Fal.run every 60 seconds to check the job status until it returns `COMPLETED`.
4. Fetches the completed job details from Fal.run to obtain the final rendered video URL.
5. Uses OpenAI (GPT-5) to generate an SEO-friendly title from the original prompt.
6. Downloads the rendered video file from the provided URL and uploads it to TikTok using the Upload-Post.com upload API.
7. Returns the Upload-Post.com API response to the original webhook caller.

## Setup
1. Create and add Fal.run API header-auth credentials, and ensure the Gemini Omni Flash endpoints are accessible from your n8n instance.
2. Add an OpenAI API credential for the title generation step and select the model you want to use.
3. Create an Upload-Post.com account, add its API header-auth credentials, and replace `YOUR_USERNAME` with your Upload-Post username in the upload request.
4. Copy the webhook URL from n8n and configure the calling app to send `prompt` and `video_url` fields to this endpoint.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I'll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
