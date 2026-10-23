# 🎬 Create TikTok Shop product videos with Seedance 2.5, OpenAI, and SocialRobot

> ⚡ **13 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a TikTok Shop product brief via an n8n form, uses OpenAI and Replicate (Seedance 2.5) to generate a 15-second vertical product video, validates the output, and uploads it to TikTok as an inbox draft using SocialRobot (with an optional Instagram Reel upload).

## How it works
1. Receives a submission from an n8n Form with the product name, selling points, optional call to action, language, and up to four product photos.
2. Uploads any provided photos to Replicate file storage and aggregates the returned URLs for use as Seedance reference images.
3. Uses OpenAI (GPT-6-luna) to generate a timed Seedance prompt, hook/voiceover text, and a TikTok caption in the selected language.
4. Submits a Replicate prediction job to run ByteDance Seedance 2.5 with the requested duration, aspect ratio, resolution, and optional audio, then polls Replicate until the job succeeds, fails, or times out.
5. Downloads the generated video from Replicate and checks its media type, file size, and actual duration against configured limits.
6. If the checks pass, uploads the video to TikTok via SocialRobot in “Send to Inbox (Draft)” mode and returns a run summary (and optionally also uploads the same video as an Instagram Reel).
7. If any step fails (generation, timeout cancellation, validation, or SocialRobot upload), the workflow stops with a readable error message.

## Setup
1. Add an OpenAI credential for the chat model used to generate the Seedance prompt and TikTok caption.
2. Add an HTTP Bearer Auth credential with your Replicate API token and select it in the Replicate HTTP Request steps (file upload, prediction submit, status check, and cancel).
3. Install and configure the SocialRobot community node and add your SocialRobot API key, then connect your TikTok account in SocialRobot and select the TikTok account in the draft upload step.
4. (Optional) Connect an Instagram account in SocialRobot and select it in the Instagram Reel step if you want cross-posting.
5. Review and adjust the video constraints in the settings step (model, duration, polling interval, timeout, and max file size) to match your content and platform limits.

## 🔗 Nodes Used

HTTP Request, Stop and Error, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
