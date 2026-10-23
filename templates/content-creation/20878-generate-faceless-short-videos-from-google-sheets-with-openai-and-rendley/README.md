# 🎬 Generate faceless short videos from Google Sheets with OpenAI and Rendley

> ⚡ **13 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Turn a Google Sheet of topics into faceless short videos and auto-post them to TikTok, Instagram Reels and YouTube Shorts. ChatGPT writes the script, Rendley creates and edits the video with AI voiceover, captions, stock footage and music, then publishes it for you. No filming or editing.

## How it works
1. Plan your content in Google Sheets: one row per video idea, with a topic and a target audience. Every morning at 9:00 the workflow picks the next idea, and videos you already approved are published first.
2. ChatGPT turns the topic into a scroll-stopping hook, 5 to 8 voiceover lines with a matching shot for each, plus a title, a caption and hashtags.
3. The Rendley AI video agent creates the whole vertical 9:16 video in one run: stock footage or AI-generated clips, AI voiceover, word-by-word animated captions, background music and your brand kit.
4. Review the video in the Rendley editor, change anything you like, then mark the row "approved". Prefer full autopilot? Turn review off and videos are posted automatically; only videos the agent flags with warnings wait for you.
5. Rendley exports the video in 1080p and publishes it to TikTok, YouTube Shorts, Instagram Reels, X, LinkedIn and more, right away or as a scheduled post in the Rendley content calendar. Status, post IDs and any errors are written back to the sheet.

## Setup
1. Create a Google Sheet with the columns id, topic, audience, status, title, caption, project_id, project_url, post_ids, posted_at and error, then add your video ideas with status "ready".
2. In app.rendley.com, connect your TikTok, YouTube, Instagram and other accounts under Social media, then create an API key (paid plan).
3. Add your Rendley and Google Sheets credentials and your ChatGPT API key in "Script writer model". Select your sheet in every Google Sheets node and your accounts in the "Post to social media" node.
4. Adjust the Settings node (video length, language, voice, footage, posting delay), run once with Test workflow, then activate it. Setup takes about 10 minutes.

## Requirements
- Rendley account on a paid plan with credits and social publishing
- Rendley community node (n8n-nodes-rendley) installed
- ChatGPT API key (or any other chat model n8n supports, such as Claude or Gemini)
- Google Sheets account

## Customization
- Set video length, language, voice style and posting delay in the Settings node, and the time of day in the "Every morning" trigger
- Pick the footage style: stock footage, hybrid with an AI-generated hook, or fully AI-generated clips (uses more credits)
- Change the tone and hashtags in "Write script and shot list" and the visual rules in "Build agent prompt"; set reviewBeforePosting to false for full autopilot

## Additional info
Built for creators, agencies and marketing teams who want a steady stream of short-form video without filming or editing. Nothing gets lost when a step fails: the row is marked "failed" with the reason and the run stops, so your n8n error workflow can alert you. Set the row back to "ready" to retry. Every post also appears in the Rendley content calendar, where you can reschedule or cancel it.

## 🔗 Nodes Used

Google Sheets, Stop and Error, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
