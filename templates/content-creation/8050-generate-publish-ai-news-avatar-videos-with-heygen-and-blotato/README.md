# 🎬 Generate & publish AI news avatar videos with HeyGen and Blotato

> ⚡ **588 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

![Generate Photo.png](fileId:2288)
How it works

Schedule Trigger — runs daily at 10:00 (adjustable).

RSS Feed Read — collects fresh AI/LLM news from multiple feeds.

AI Agent — analyzes news, picks the most viral story, and drafts a 30-second script.

OpenAI nodes — create:

a short, catchy video title

a short caption for social media

a long caption with hashtags

HeyGen API — generates a vertical avatar video (9:16) using your selected avatar_id, voice_id, and optional background video.

Wait node — checks the processing status of the video.

Blotato API — uploads the video and captions for publishing.

Optional publish nodes — preconfigured for TikTok, Instagram, YouTube, Facebook, etc. (disabled by default).

Requirements

n8n v1.105.4+ (cloud or self-hosted)

HeyGen account with API key + avatar_id + voice_id

Blotato account with API key and platform IDs

Setup steps

Import the workflow into n8n.

Create credentials in n8n (⚠ do not hardcode keys):

HeyGen API Key

Blotato API Key

Open the Setup Heygen node:

Paste your heygen_api_key

Add your avatar_id and voice_id

Optionally change background_video_url

Open the Prepare for Publish node:

Paste your blotato_api_key

Add IDs for TikTok, YouTube, Instagram, etc.

Adjust the Schedule Trigger to your preferred time/frequency.

(Optional) Enable the publish nodes if you want direct uploads to your platforms.

Customization

Topic — edit the AI Agent’s prompt to switch from AI/LLM news to any topic (crypto, marketing, tech, etc.).

Language — update prompts for different output languages.

Visuals — replace the HeyGen avatar, voice, or background video for a different look.

Publishing — connect only the social platforms you actually use.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
