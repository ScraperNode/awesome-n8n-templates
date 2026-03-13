# 🎬 Turn TikTok comments into AI avatar videos with Dumpling AI, GPT-4 & Captions.ai

> ⚡ **354 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Who’s it for

This template is perfect for TikTok creators, content marketers, and social media teams who want to turn viral comments into engaging short-form videos without manually scripting, recording, or editing. If you want to keep up with trends and consistently publish high-quality avatar videos, this workflow automates the entire process from comment selection to enhanced final video.

---

## What it does

The workflow takes TikTok video URLs and their top comments from a Data Table, extracts the transcript using **Dumpling AI**, and uses **GPT-4** to write a natural and engaging TikTok script inspired by the comment. It then generates a full AI avatar video through **Captions.ai**, enhances it with subtitles and B-roll using **Submagic**, and finally saves all video details into **Airtable** for tracking.

Here’s what happens step by step:  
1. Pulls TikTok videos and their top comments from a Data Table  
2. Sends video URLs to **Dumpling AI** to retrieve transcripts  
3. Feeds both transcript and comment into **GPT-4** to generate a conversational TikTok script  
4. Cleans and formats the script using JavaScript  
5. Sends the script to **Captions.ai** to produce an AI avatar video  
6. Checks video status and retries if needed  
7. Enhances the final video with **Submagic** for captions and effects  
8. Receives the enhanced video via webhook and logs details into **Airtable**

---

## How it works

1. **Schedule Trigger**: Runs automatically at set intervals to start the workflow  
2. **Data Table**: Retrieves TikTok video URLs and associated comments  
3. **Dumpling AI**: Extracts transcripts from the video URLs  
4. **GPT-4**: Generates a compelling TikTok script based on the comment  
5. **JavaScript Node**: Cleans up script formatting for a smooth avatar generation  
6. **Captions.ai**: Creates an AI avatar video from the cleaned script  
7. **Wait & Check**: Monitors video creation status and retries if necessary  
8. **Submagic**: Enhances the video with captions, zooms, and B-roll effects  
9. **Webhook & Airtable**: Receives final video data and saves URL and ID for future use

---

## Requirements

- ✅ **Dumpling AI API key** stored as HTTP header credentials  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Captions.ai API credentials**  
- ✅ **Submagic API credentials**  
- ✅ **Airtable base** with fields for `Video URL` and `Caption Video ID`  
- ✅ A properly structured Data Table containing TikTok `Keywords` or video URLs

---

## How to customize

- Adjust the GPT-4 system prompt to shape the tone, style, or format of the TikTok script  
- Change the avatar or creator settings in Captions.ai to match your brand personality  
- Modify Submagic settings to control subtitle styling or B-roll effects  
- Integrate approval steps before final video generation if needed  
- Extend the workflow to auto-publish videos to TikTok or store them in cloud drives

---

&gt; This workflow lets you transform TikTok comments into engaging AI avatar videos with captions and edits, completely on autopilot. It’s a powerful way to scale content output and stay ahead of trends without manual scripting or filming.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
