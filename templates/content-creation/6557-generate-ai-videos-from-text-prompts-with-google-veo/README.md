# 🎬 Generate AI videos from text prompts with Google Veo

> ⚡ **6,215 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This n8n workflow uses the Google Gemini node to generate AI videos via the Veo model. It replaces complex manual API setups with a simple, plug-and-play experience.

## How it works
1. Define Prompt : Write a text prompt in the 1. Set Video Prompt node.
2. Trigger : Manually run the workflow with one click.
3. Generate : The Gemini node sends the prompt to the Veo model and generates a video.
4. Output : Returns a binary video file ready to save or share.

## Setup
1. Enable Google Cloud Billing : Make sure your Google Cloud project has billing activated.
2. Add Credentials : Add your Google AI (Gemini) credentials in n8n.
3. Set the Prompt : Open the 1. Set Video Prompt node and write your video idea.
4. Activate Workflow : Save and activate the workflow.
5. Run It : Click “Execute Workflow” to generate a video.

## Requirements
- n8n (Cloud or Self-Hosted)
- Google Cloud Project with billing enabled
- Google AI (Gemini) credentials linked to that project

## Customization
- Save Output : Add a Google Drive, Dropbox, or S3 node to store the video.
- Post Automatically : Connect social media nodes (YouTube Shorts, TikTok, etc.) to publish content.
- Generate in Bulk : Replace the Set node with Google Sheets or Airtable to generate multiple videos from a list of prompts.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
