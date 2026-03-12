# 🎬 Auto-generate AI videos and publish to YouTube with Gemini, KIE AI & Blotato

> ⚡ **867 views** · 🎬 [Content Creation & Video](../)

## Description

## Who This Workflow Is For

This workflow is ideal for YouTube creators, automation builders, and marketers who want to produce short AI-generated videos automatically. It’s especially useful for channels that publish frequent Shorts-style content or want to automate the entire video creation and posting process without manual scripting, editing, or uploading.

## What This Workflow Does

This automation creates short AI videos by combining Gemini-generated scripts with KIE AI’s text-to-video rendering. It generates a title, description, and video prompt, sends the prompt to KIE AI to create the video, and then automatically uploads the finished result to your YouTube channel using Blotato.

Each run generates a new video concept selected from a predefined set of templates, providing ongoing variety and fresh content. The workflow handles idea generation, video rendering, polling, media upload, and publishing from start to finish.

## How It Works

1. **Schedule Trigger** starts the workflow based on your chosen frequency.
2. **Randomizer** selects one creative template from several predefined options.
3. **Gemini Prompter** generates a title, description, and structured video prompt.
4. **KIE AI** renders the video using the Sora-style text-to-video model.
5. **Polling + Wait** retrieves the completed video once rendering finishes.
6. **Blotato** uploads and publishes the final video to your connected YouTube channel.

## How to Set Up

* Add your **Google Gemini**, **KIE AI**, and **Blotato** API credentials.
* Connect your YouTube channel inside Blotato.
* Adjust the schedule (e.g., every 6–12 hours).
* Edit or expand prompt templates inside the Prompter node.
* Activate the workflow to allow fully automated video generation and publishing.

## Customization Ideas

* Add logging to Google Sheets or Notion.
* Add Telegram, email, or Discord notifications when a new video is posted.
* Change video length, aspect ratio, or watermark settings in the Create video node.
* Expand your creative template list to increase content variety.

---

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
