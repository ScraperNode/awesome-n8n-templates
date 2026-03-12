# 🎬 AI-powered short-form video generator with OpenAI, Flux, Kling, and ElevenLabs

> ⚡ **112,297 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
Content creators, digital marketers, and social media managers who want to automate the creation of short-form videos for platforms like TikTok, YouTube Shorts, and Instagram Reels without extensive video editing skills.
## What problem does this workflow solve?
Creating engaging short-form videos consistently is time-consuming and requires multiple tools and skills. This workflow automates the entire process from ideation to publishing, significantly reducing the manual effort needed while maintaining content quality.
## What this workflow does
This all-in-one solution transforms ideas into fully produced short-form videos through a 5-step process:

1. **Generate video captions** from ideas stored in a Google Sheet
2. **Create AI-generated images** using Flux and the OpenAI API
3. **Convert images to videos** using Kling's API
4. **Add voice-overs** to your content with Eleven Labs
5. **Complete the video production** with Creatomate by adding templates, transitions, and combining all elements

The workflow handles everything from sourcing content ideas to rendering the final video, and even notifies you on Discord when videos are ready.
## Setup (Est. time: 20-30 minutes)
Before getting started, you'll need:

- [n8n installation](https://n8n.partnerlinks.io/n8nTTVideoGenTemplate) (tested on version 1.81.4)
- [OpenAI API Key](https://platform.openai.com/api-keys) (free trial credits available)
- [PiAPI](https://piapi.ai/?via=n8n) (free trial credits available)
- [Eleven Labs](https://try.elevenlabs.io/n8n) (free account)
- [Creatomate API Key](https://creatomate.com/) (free trial credits available)
- Google Sheets API enabled in [Google Cloud Console](https://console.cloud.google.com/apis/api/sheets.googleapis.com/overview)
- Google Drive API enabled in [Google Cloud Console](https://console.cloud.google.com/apis/api/drive.googleapis.com/overview)
- OAuth 2.0 Client ID and Client Secret from your [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials)

## How to customize this workflow to your needs

- Adjust the Google Sheet structure to include additional data like video length, duration, style, etc.
- Modify the prompt templates for each AI service to match your brand voice and content style
- Update the Creatomate template to reflect your visual branding
- Configure notification preferences in Discord to manage your workflow

This workflow combines multiple AI technologies to create a seamless content production pipeline, saving you hours of work per video and allowing you to focus on strategy rather than production.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Discord, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
