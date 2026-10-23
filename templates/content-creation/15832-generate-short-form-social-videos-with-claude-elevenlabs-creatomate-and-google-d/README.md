# 🎬 Generate short-form social videos with Claude, ElevenLabs, Creatomate and Google Drive

> ⚡ **255 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Overview
Stop recording, editing, and posting manually. This workflow takes any topic or idea as input, uses Claude to write a punchy short-form script, ElevenLabs to generate a natural voiceover, and Creatomate to render the finished video with captions and your brand visuals and then stores it in Google Drive and alerts your team. 

**Built for TikTok, Instagram Reels, and YouTube Shorts.**

## How it works

- Submit a video topic via the built-in form or replace it with a Schedule Trigger to pull topics from a Google Sheet automatically

- Claude Sonnet writes a 45-60 second script with a strong hook, clear value points, and a call to action

- ElevenLabs converts the script to a natural-sounding MP3 voiceover in your chosen voice

- The audio is uploaded to Google Drive and sent to Creatomate, which renders the final video with animated captions and your brand template

- The workflow waits for Creatomate to finish rendering, then retrieves the completed video file

- The finished video is uploaded to Google Drive for team access

- A Slack alert is sent with the Drive link and every run is logged to Google Sheets


Setup steps

1.  **Settings node** — Open Configure Brand Settings and fill in your brand name, niche, tone, ElevenLabs Voice ID, Creatomate Template ID, and Drive folder name. This is the only node you need to personalise

2.  **Claude AI** — Add your Anthropic API key to the Claude Sonnet sub-node from console.anthropic.com

3.  **ElevenLabs** — Get your API key from elevenlabs.io and replace **YOUR_ELEVENLABS_API_KEY** in Generate Voiceover. Find your Voice ID under Voices in ElevenLabs

4.  **Creatomate** — Sign up at creatomate.com, create a short-form video template with Voiceover, Caption, Title, and Brand elements, then add your API key and Template ID

5.  **Google Drive** — Connect your Google account in Upload Audio to Drive and Upload Video to Drive. Create two folders and add their IDs to each node

6. **Slack** — Connect Slack in Notify Team - Video Ready and set your channel. Right-click and Disable if unused

7.  **Google Sheets** — Create a sheet called Video Log with columns: Timestamp, Video ID, Topic, Platform, Script Preview, Status, Drive Link

**TEST** :  Submit a test topic through the form to verify the full pipeline end to end

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
