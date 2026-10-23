# 🎬 Create daily AI news YouTube Shorts with Groq, VoiceRSS, Pexels and Shotstack

> ⚡ **819 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to turn the latest Artificial Intelligence News RSS headline into a YouTube Shorts video by generating a script with Groq, creating voiceover with VoiceRSS, selecting stock footage from Pexels, rendering with Shotstack, and uploading the finished MP4 to YouTube.

## How it works
1. Runs every 24 hours on a scheduled trigger.
2. Reads the latest item from the Artificial Intelligence News RSS feed and extracts the headline and summary.
3. Uses Groq (Llama 3.1) to generate a punchy ~45-second YouTube Shorts voiceover script based on the headline and summary.
4. Converts the script into an MP3 voiceover with the VoiceRSS text-to-speech API and searches Pexels for a matching portrait video.
5. Sends the stock video and script to Shotstack to render a 9:16 MP4 with text-to-speech audio and waits before polling Shotstack for the finished render URL.
6. Downloads the rendered MP4 and uploads it to YouTube with the generated title and a prefilled description.

## Setup
1. Add a Groq API credential and ensure the Groq model node is connected to your account.
2. Replace the VoiceRSS API key, Pexels API key, and Shotstack API key values in the corresponding HTTP Request nodes.
3. Add YouTube OAuth2 credentials and select the correct YouTube account in the upload node.
4. Review and customize the script prompt, default search keyword/hashtags, and YouTube upload settings (privacy, region, and category) to match your channel.

## 🔗 Nodes Used

HTTP Request, RSS Read, YouTube, Schedule Trigger, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
