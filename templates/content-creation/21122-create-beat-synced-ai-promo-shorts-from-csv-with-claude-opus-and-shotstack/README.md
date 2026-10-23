# 🎬 Create beat-synced AI promo shorts from CSV with Claude Opus and Shotstack

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Turn every row of a CSV into a 32-second vertical promo for TikTok, Reels or Shorts. Claude writes the Shotstack edit: AI images and video shots, AI music, a voiceover and subtitles, all cut to the beat. Self-hosted n8n only: it reads and saves files on disk.

## How it works
1. Downloads Shotstack's guide for AI agents once, then reads shorts.csv one row at a time. Each row is one line about a business.
2. Claude Opus 5.5 reads the guide and a plain-English brief and writes the whole Shotstack edit: prompts for 8 Nano Banana 2 images, 3 of them animated with Gemini, ElevenLabs music at 120 BPM, a voiceover, subtitles and animated text, all timed to the beat.
3. A Code step checks the edit before anything costs money. It fixes small things itself and sends anything else back to Claude with the exact problem.
4. One Shotstack render generates every image, video shot and sound, then renders the 32-second short, which is saved to the shorts folder.
5. If Shotstack turns the edit down or the render fails, Claude gets the exact error and fixes the edit, up to twice. A wrong API key or an empty balance stops the run with the reason.

## Setup
1. Install the Shotstack community node from the nodes panel or Settings → Community nodes, then import this workflow.
2. Add your Anthropic API key to the Claude and Claude (fixes) steps, and your Shotstack API key to Make the video and Check the render. Free trial: https://shotstack.io/?utm_source=n8n&utm_medium=template&utm_campaign=beat-shorts&utm_content=description
3. Save shorts.csv in n8n's files folder (/home/node/.n8n-files in Docker) with one column, About: what the business is and what the video should say. Make an empty shorts folder next to it.
4. On an npm install, change /home/node/.n8n-files to your own files folder in Read the CSV and Save the short. Then click Execute workflow, and try one row first: each short takes 10 to 25 minutes.

## Requirements
- Self-hosted n8n, version 2 or later, because the workflow reads and saves files on disk
- The Shotstack community node, any version
- A Shotstack API key with credits for AI generation
- An Anthropic API key. Claude Opus 5.5 works best; other chat models need more fixes

## Customization
- Change the length, tempo, number of images or style in the plain-English brief in Claude makes the video
- Ask for fewer video shots to spend less: each is 2.5 credits
- Read the rows from the Google Sheets node and save the shorts to Google Drive

## Additional info
About 18 Shotstack credits a short ($3.50 to $3.60 depending on the plan): 7.5 for the 3 video shots, 6 for the 8 images, 3.75 for the music and under 1 for the voiceover and render, plus your Claude usage. Each short takes 10 to 25 minutes. The 10 free trial credits don't cover a full short, so for a first try change "8 images" to 4 in the brief and delete the line about the video shots, for about 7.5 credits. Write-up with a sample video: https://community.n8n.io/t/321339

## 🔗 Nodes Used

HTTP Request, Stop and Error, Basic LLM Chain, Anthropic Chat Model, Read/Write Files from Disk, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
