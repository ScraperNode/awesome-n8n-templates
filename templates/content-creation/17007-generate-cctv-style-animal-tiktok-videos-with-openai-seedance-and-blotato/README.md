# 🎬 Generate CCTV-style animal TikTok videos with OpenAI, Seedance and Blotato

> ⚡ **108 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every four hours to generate a CCTV-style animal video concept with OpenAI, renders an 8-second vertical clip using AtlasCloud Seedance, then publishes it to TikTok via Blotato and sends a preview to Telegram.

## How it works
1. Runs every 4 hours on a schedule.
2. Uses OpenAI to create a hyper-realistic CCTV-style image and video prompt based on a random (or overridden) animal, location, action, and a current timestamp overlay.
3. Starts a Seedance text-to-video render on AtlasCloud with the generated prompt, duration, aspect ratio, and optional audio.
4. Polls AtlasCloud at a fixed interval until the render status is completed or succeeded and retrieves the output video URL.
5. Uses OpenAI to generate a TikTok-ready title and exactly five hashtags from the video concept.
6. Publishes the generated video to TikTok via Blotato with the title/hashtags and the selected privacy level, flagged as AI-generated.
7. Sends the rendered video and title as a preview to a specified Telegram chat.

## Setup
1. Add OpenAI API credentials and set the prompt and caption models in the Configuration values if you want to change them.
2. Add an AtlasCloud API key (HTTP Header Auth) and ensure it is selected for both the generate and status-check requests.
3. Add a Blotato credential, select your TikTok account, and confirm your desired TikTok privacy level.
4. Add a Telegram bot credential and set the target telegram_chat_id in the Configuration values.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
