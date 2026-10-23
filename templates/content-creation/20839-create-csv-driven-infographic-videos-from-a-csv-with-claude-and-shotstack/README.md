# 🎬 Create CSV-driven infographic videos from a CSV with Claude and Shotstack

> ⚡ **27 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Turn every row of a CSV into a vertical infographic video for TikTok, Reels or Shorts. Claude writes the words, and Shotstack generates a studio photo, music and an ElevenLabs voiceover, then renders the video. Self-hosted n8n only: it reads and saves files on disk.

## How it works
1. Reads videos.csv from n8n's files folder and works through it one row at a time.
2. Claude writes the video's words: a hook, a key number, a feature, three steps, a closing line, eight voiceover lines, and the prompts for the photo and the music.
3. A Code step checks Claude's answer before anything costs money, and stops that row if a field is missing or too long.
4. Shotstack generates a studio photo with Nano Banana 2 and a music track with ElevenLabs Music. If the row links to a product photo, Nano Banana 2 Edit puts that exact product in the shot.
5. Build the video lays out the infographic: the hook, the photo with animated callouts, the key number in a ring, the steps, the main benefit and an end card, each scene timed to its voiceover line.
6. One Shotstack render adds the ElevenLabs voiceover, plus a 5-second Seedance shot if the row asks for one. The MP4 is saved to the videos folder, and a results CSV says how every row went.

## Setup
1. Install the Shotstack community node, version 0.2.1 or later, from the nodes panel or Settings → Community nodes, then import this workflow.
2. Add your Anthropic API key to the Claude step. It uses Claude Opus 5.5, so pick another model there if your account doesn't have it. Add your Shotstack API key to the four Shotstack steps. Free trial: https://shotstack.io/?utm_source=n8n&utm_medium=template&utm_campaign=infographic-video&utm_content=description
3. Save videos.csv in n8n's files folder (/home/node/.n8n-files in Docker) with the columns What it is, What to say, Brand colours, Animated AI shot (Yes or No) and Product photo (an optional link). Make an empty videos folder next to it.
4. On an npm install, change /home/node/.n8n-files to your own files folder in Read the CSV, Save the results and Save the video. Then click Execute workflow, and try one row first.

## Requirements
- Self-hosted n8n, version 2 or later, because the workflow reads and saves files on disk
- The Shotstack community node, version 0.2.1 or later
- A Shotstack API key with credits for AI generation. The free trial's 10 credits cover a first video
- An Anthropic API key, or another chat model n8n supports

## Customization
- Change the fonts, colours, positions or scenes in the Build the video step
- Set Animated AI shot to Yes on a row to add a 5-second Seedance shot, for about 9.5 more credits
- Add a Product photo link to a row to put the client's real product in the studio shot
- Read the rows from the Google Sheets node instead of the CSV
- Swap Claude for OpenAI, Gemini or another chat model in the Claude step

## Additional info
Each video costs about 5 Shotstack credits (95¢ to $1 depending on the plan), or about 14 with the animated AI shot, plus about 5 cents of Claude. Each one takes 4 to 8 minutes. If a row fails, the others are still made, and the results file says which step broke. Write-up with sample videos: https://community.n8n.io/t/320120

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Anthropic Chat Model, Read/Write Files from Disk, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
