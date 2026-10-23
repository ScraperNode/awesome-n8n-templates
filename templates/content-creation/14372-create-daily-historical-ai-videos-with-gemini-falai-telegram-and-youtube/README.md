# 🎬 Create daily historical AI videos with Gemini, fal.ai, Telegram and YouTube

> ⚡ **3,014 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for
This workflow is ideal for:
- Content creators producing daily historical or educational videos  
- YouTube automation enthusiasts building AI-driven channels  
- Educators sharing engaging historical facts in short-form video format  
- Anyone creating an automated AI video pipeline with human approval  

## How it works
This workflow automates the full pipeline of generating and publishing historical videos:

1. Triggers daily at 1 AM and initializes retry tracking (maximum 3 attempts)  
2. Fetches historical events for the current date and selects one randomly  
3. Uses Google Gemini to generate a cinematic text-to-video script  
4. Sends the prompt to fal.ai (Hunyuan LoRA) to generate a short video  
5. Polls the generation status every 30 seconds until the video is ready  
6. Downloads the generated video and sends it to Telegram with context  
7. Waits for manual approval via Telegram  
8. If approved → uploads the video to YouTube and sends a confirmation message  
9. If declined → retries with a new event (up to 3 attempts total)  

## How to set up
1. Import the workflow into n8n  
2. Configure your Telegram credentials  
3. Set your Telegram Chat ID using a variable or Set node (avoid hardcoding)  
4. Configure HTTP Header Auth credentials for fal.ai (API key required)  
5. Set up Google Gemini API credentials  
6. Connect your YouTube account using OAuth2  
7. (Optional) Adjust the schedule time in the trigger node  
8. Activate the workflow  

## Requirements
- n8n (cloud or self-hosted)  
- fal.ai account and API key (for video generation)  
- Google Gemini API access  
- YouTube account with upload permissions  
- Telegram account for approval notifications  

## How to customize the workflow
- Adjust retry limits in the retry logic node  
- Modify video parameters (resolution, frames, aspect ratio) in the fal.ai request  
- Change the script style by editing the Gemini prompt  
- Replace the historical events API with another content source  
- Customize Telegram messages or approval flow

## 🔗 Nodes Used

HTTP Request, Telegram, YouTube, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
