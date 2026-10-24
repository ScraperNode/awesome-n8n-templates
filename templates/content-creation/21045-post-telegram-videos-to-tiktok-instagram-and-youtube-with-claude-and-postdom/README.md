# 🎬 Post Telegram videos to TikTok, Instagram and YouTube with Claude and Postdom

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for videos sent to your Telegram bot, uses Anthropic Claude to generate platform-specific captions based on your notes and a Postdom brand brief, requests approval in Telegram, then uploads and publishes the video to TikTok, Instagram Reels, and YouTube Shorts via Postdom.

## How it works
1. Triggers when a new Telegram message is received by your bot and loads your configured owner user ID and target platforms.
2. Accepts only messages from your Telegram user ID and only MP4/MOV videos up to 20 MB, replying with instructions to everyone else.
3. Fetches your brand brief from Postdom and prompts Anthropic Claude to generate one caption per selected platform (plus a YouTube title) as structured JSON.
4. Cleans and trims captions to each platform’s character limits and sends a preview back to Telegram for approval, waiting up to 24 hours.
5. If approved, downloads the video from Telegram, reads its width/height/duration, and uploads it to Postdom storage.
6. Looks up connected Postdom accounts and publishes one video post per platform using the platform-specific caption and settings like privacy, visibility, and optional scheduling.
7. Replies in Telegram with the publish status per platform and includes guidance when posting requires approval or when an upload/publish error occurs.

## Setup
1. Create a Telegram bot with @BotFather, add the Telegram credentials in n8n, and start a chat with the bot so it can message you.
2. Add an Anthropic credential for the Claude chat model used to generate captions.
3. In Postdom, connect your TikTok/Instagram/YouTube accounts, create an Agent Key, and add it as a Postdom API credential in n8n.
4. Update “Your settings” with your numeric Telegram user ID and adjust platforms, TikTok privacy, YouTube visibility, AI label, and optional publish delay minutes.

## Requirements
- A Postdom account (the Free plan covers 1 post a month on 2 accounts on any platform)
- A Telegram bot
- An Anthropic API key
- MP4 or MOV videos up to 20 MB (Telegram's bot download limit)

## Customization
- Add facebook, linkedin or threads to platforms in Your settings.
- Set publish_delay_minutes to schedule instead of posting now.

## Additional info
Uses the Postdom community node, verified by n8n. It works on n8n Cloud and on self-hosted n8n (install n8n-nodes-postdom under Settings > Community nodes). Postdom API reference: https://postdom.com/docs

## 🔗 Nodes Used

Telegram, Telegram Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
