# 🎬 Create AI product video ad Shorts from Telegram photos with OpenAI and AtlasCloud

> ⚡ **65 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow takes a product photo sent via Telegram, uses OpenAI Vision to describe it and OpenAI to write a short-form video ad prompt, generates a vertical video via AtlasCloud, then (after two approvals in Telegram) publishes the Short to YouTube via Blotato.

## How it works
1. Triggers when a user sends a product photo (optionally with a caption/campaign) to a Telegram bot.
2. Downloads the image from Telegram and uses OpenAI Vision to extract an advertising-focused product description.
3. Uses OpenAI to generate a single cinematic text-to-video prompt plus a YouTube Shorts title and description.
4. Sends the proposed prompt to Telegram and waits for your approval before proceeding.
5. If approved, requests video generation from AtlasCloud and polls the render status until the video is completed.
6. Sends the generated video back to Telegram for preview and waits for a second approval to publish.
7. If approved, publishes the video to YouTube as an unlisted Short via **[Blotato](https://blotato.com/?ref=firas)** and notifies you in Telegram (otherwise it stops and sends a decline message).

## Setup
1. Create and connect a Telegram bot credential, then start a chat with the bot so it can receive photos and send approval prompts.
2. Add an OpenAI API credential and, if needed, update the default model IDs and language/duration/aspect ratio settings in the configuration values.
3. Create an HTTP Header Auth credential for AtlasCloud (Authorization: Bearer <API_KEY>) and select it for both AtlasCloud HTTP requests.
4. Connect a **[Blotato](https://blotato.com/?ref=firas)** credential, select your YouTube account, and confirm the desired YouTube privacy status (default is unlisted).

## Additional info
# Generate an AI video ad from a product photo and publish it to YouTube
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-an-AI-video-ad-from-a-product-photo-and-publish-it-to-YouTube-39b3d6550fd981cba160dc97f5f09c2c)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
