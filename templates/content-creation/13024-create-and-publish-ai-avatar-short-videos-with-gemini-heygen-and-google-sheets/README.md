# 🎬 Create and publish AI avatar short videos with Gemini, HeyGen and Google Sheets

> ⚡ **445 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# Automated AI Video Avatar Workflow for Shorts using n8n & HeyGen

Automatically generate AI avatar short videos and publish them to social platforms using n8n and HeyGen.  
This workflow turns viral ideas or prepared scripts into fully rendered AI avatar videos and handles publishing and tracking without manual editing.

---

## Who is this for?

This template is ideal for:

- Content creators producing Shorts, Reels, or TikTok videos at scale  
- Marketers using AI avatars for faceless or branded content  
- Affiliate marketers running automated short-form content funnels  
- AI automation builders combining LLMs, avatars, and no-code workflows  
- Teams that want a repeatable system to generate and publish short videos  

If you want to automate AI avatar video creation instead of manually scripting, rendering, and uploading videos, this workflow is for you.

---

## What problem is this workflow solving?

Creating short-form video content with AI avatars usually involves many manual steps and tools. Common challenges include:

- Manually writing scripts for each video  
- Switching between AI tools for script generation and video rendering  
- Waiting for avatar videos to render and checking status manually  
- Uploading videos to social platforms one by one  
- Tracking which ideas have been processed or published  

This workflow connects all steps into a single automated pipeline and removes repetitive manual work.

---

## What this workflow does

This automated AI video avatar workflow:

- Triggers on a defined schedule  
- Loads viral content ideas or pending rows from Google Sheets  
- Analyzes content and generates optimized scripts using AI  
- Creates AI avatar videos automatically via HeyGen  
- Waits for video rendering and checks completion status  
- Retrieves the final video once rendering is complete  
- Publishes the video to social platforms  
- Updates Google Sheets with publishing status and results  

The entire process runs end-to-end with minimal human intervention.

---

## Setup

### 1. Prepare Google Sheets

Create a Google Sheet to manage your content pipeline with columns such as:

- `idea` / `topic` – Source idea or viral reference  
- `script` – Generated or custom script (optional)  
- `status` – pending / processing / published / error  
- `video_url` – Final rendered video link  
- `publish_result` – Publishing status or notes  

Only rows marked as **pending** will be processed by the workflow.

---

### 2. Connect Google Sheets

- Authenticate your Google Sheets account in n8n  
- Select the spreadsheet in the content loading nodes  
- Ensure update nodes can write back to the same sheet for status tracking  

---

### 3. Configure AI & HeyGen

- Add credentials for your AI model (e.g. Gemini or OpenRouter)  
- Add your HeyGen API credentials  
- Configure avatar settings such as voice, language, and style  

Test video creation once before running the workflow at scale.

---

### 4. Configure Publishing & Schedule

- Set up publishing credentials for your target social platforms  
- Open the Schedule trigger and define how often the workflow runs  
- The schedule controls how frequently new AI avatar videos are created and published  

---

## How to customize this workflow to your needs

You can adapt this workflow without changing the core structure:

- Replace viral idea sources with your own content inputs  
- Add approval steps (Slack, Telegram, Email) before video creation  
- Customize scripts per platform or language  
- Disable publishing and use the workflow only for video generation  
- Add retry logic for failed renders or publishing steps  
- Extend the workflow with analytics or performance tracking  

---

## Best practices

- Start with a small batch of test rows  
- Keep status values consistent in Google Sheets  
- Use short, clear scripts optimized for AI avatars  
- Monitor render and publish status nodes regularly  
- Adjust schedule frequency based on rendering limits  

---

## 📄 Documentation

For a full walkthrough and advanced customization ideas, see [Video Guide](https://youtu.be/v8iSpsBuOHU?si=TDjWoJJFi13OOuzA)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
