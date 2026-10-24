# 🎬 Generate YouTube Shorts and TikTok videos from images with Pollo Vidu Q3 Turbo

> ⚡ **30 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a prompt and reference image URL from an n8n form, submits an image-to-video generation request to the Pollo API (Vidu Q3 Turbo model), polls for completion, and returns the generated video URL and status.

## How it works
1. Receives a form submission in n8n containing a prompt, reference image URL, model path, and Pollo API key.
2. Sends a POST request to the Pollo API generation endpoint for the specified model (for example, `vidu/viduq3-turbo`) with the prompt and optional reference image.
3. Waits 10 seconds and then queries the Pollo API for the task’s generation status using the returned task ID.
4. Repeats the wait-and-check loop until the generation status is either `succeed` or `failed`.
5. Outputs the task ID, final status, generated media URL, media type, and reported credit usage.

## Setup
1. Create a Pollo API account and have an API key available to provide in the form submission.
2. Ensure your reference image is hosted at a publicly accessible URL to use the `image_url` input.
3. Set the `model_path` field to the Pollo model you want to use (for example, `vidu/viduq3-turbo`) when submitting the form.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
