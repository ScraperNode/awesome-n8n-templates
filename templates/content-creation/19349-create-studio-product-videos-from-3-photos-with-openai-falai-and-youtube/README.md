# 🎬 Create studio product videos from 3 photos with OpenAI, fal.ai and YouTube

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects three product photos from n8n form, uses OpenAI to describe and craft a studio-shot prompt, generates an edited image and motion clips with fal.ai, archives assets to Google Drive, logs URLs to Google Sheets, publishes the final video to YouTube via Blotato, and sends Telegram alerts.

## How it works
1. Receives three uploaded product images (and optional notes) through an n8n Form trigger.
2. Validates that all three images are present and sends a Telegram alert if any uploads are missing.
3. Splits the three photos into individual items, describes each image with OpenAI vision, and uploads the originals to Google Drive.
4. Combines the Drive links and OpenAI descriptions into a single set of inputs, then uses an OpenAI agent to generate a structured image-edit prompt.
5. Sends the prompt and reference image URLs to fal.ai to generate a new studio-shot image, waits for the render, fetches the result, and crops it into top/middle/bottom thirds.
6. Uploads the three crops to Google Drive and updates a Google Sheets row with the new image URLs.
7. Uses fal.ai to generate two short motion clips from the crop pairs, stitches them into a single video with a fal.ai ffmpeg merge endpoint, then uploads and publishes the final video to YouTube via Blotato.
8. Appends a full run log (source image URLs, descriptions, generated image URL, clip URLs, and final video URL) to Google Sheets and sends a success message on Telegram.

## Setup
1. Add OpenAI credentials for the image description and prompt-generation steps (GPT-4o and a chat model such as gpt-4.1-mini).
2. Create a fal.ai API key and replace the placeholder Authorization headers used by the image generation, video generation, and video merge HTTP requests.
3. Connect Google Drive credentials and set the target Drive/folder IDs used to archive originals and publish the cropped images.
4. Connect Google Sheets credentials and replace the placeholder spreadsheet ID and sheet tab name, and ensure your sheet includes the columns referenced (for example image_1, new_image_1-3, video_1-2, Final video, description_all, image_nanobanana, status, created_at).
5. Configure Telegram credentials, set TELEGRAM_CHAT_ID in your environment variables, and choose the chat/channel that should receive failure and success notifications.
6. Set up Blotato credentials and select your YouTube account ID in the YouTube publishing step (and adjust the title/privacy settings as needed).

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Telegram, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
