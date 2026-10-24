# 🎬 Create talking avatar TikTok videos with Seedance, OpenAI and Blotato

> ⚡ **135 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow generates a talking-avatar video from a portrait image using AtlasCloud Seedance 2.0, creates a TikTok-ready title with OpenAI, and publishes the resulting video to TikTok via Blotato.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sends the image URL, script prompt, and video settings to [AtlasCloud](https://www.atlascloud.ai/?ref=8QKPJE)  Seedance 2.0 to generate an image-to-video talking avatar.
3. Waits for a configured interval and polls AtlasCloud for the generation status until it returns completed/succeeded.
4. Extracts the generated video URL from the AtlasCloud response.
5. Uses OpenAI to produce a single TikTok title (under 60 characters) based on the provided script prompt.
6. Uploads the video to TikTok through [Blotato](https://blotato.com/?ref=firas) using the generated title and the selected privacy level, marking the post as AI-generated.

## Setup
1. Create an AtlasCloud API key and add it as an HTTP Header Auth credential, then select it in both AtlasCloud HTTP Request steps.
2. Add an OpenAI API credential and ensure the OpenAI chat model is selected for the title-generation step.
3. Add a Blotato API credential, connect your TikTok account in [Blotato](https://blotato.com/?ref=firas), and select the correct TikTok account in the publishing step.
4. Update the Configuration values (image_url, video_prompt, aspect_ratio, resolution, duration, fps, poll interval, and TikTok privacy level) to match your content and requirements.

## Additional info
## Generate a talking avatar video from an image and post to TikTok

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Generate-a-talking-avatar-video-from-an-image-and-post-to-TikTok-Course-support-EN-3983d6550fd981bf8f89d9d72e59cccd)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
