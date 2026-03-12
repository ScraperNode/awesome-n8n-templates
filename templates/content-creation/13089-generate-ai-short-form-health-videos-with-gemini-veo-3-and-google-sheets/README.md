# 🎬 Generate AI short-form health videos with Gemini, Veo 3 and Google Sheets

> ⚡ **711 views** · 🎬 [Content Creation & Video](../)

## Description

# Overview

Automatically generate viral short-form health videos using AI and publish them to social platforms with n8n and Veo 3.  
This workflow collects viral ideas, analyzes engagement patterns, generates AI video scripts, renders videos with Veo 3, and handles publishing and tracking fully automated, with no manual editing.

---

## Who is this for?

This template is ideal for:

- Content creators building faceless health channels (Shorts, Reels, TikTok)
- Affiliate marketers promoting health products with video content
- AI marketers running high-volume short-form content funnels
- Automation builders combining LLMs, video AI, and n8n
- Teams that want a scalable, repeatable system for viral AI video production

If you want to create health niche videos at scale without manually scripting, rendering, and uploading each video, this workflow is for you.

---

## What problem is this workflow solving?

Creating viral short-form health videos usually involves many manual steps and disconnected tools, such as:

- Manually collecting and validating viral content ideas
- Writing hooks and scripts for each video
- Switching between AI tools for analysis and video generation
- Waiting for videos to render and checking status manually
- Uploading videos and tracking what has been published

This workflow connects all these steps into a single automated pipeline and removes repetitive manual work.

---

## What this workflow does

This automated AI health video workflow:

- Runs on a defined schedule
- Collects viral health content ideas from external sources
- Normalizes and stores ideas in Google Sheets
- Loads pending viral ideas for processing
- Analyzes each idea and generates AI-optimized video scripts
- Creates AI videos automatically using the Veo 3 API
- Waits for video rendering and checks completion status
- Retrieves the final rendered videos
- Optionally aggregates or merges video assets
- Publishes videos to social platforms
- Updates Google Sheets with processing and publishing results

The entire process runs end-to-end with minimal human intervention.

---

## Setup

### 1. Prepare Google Sheets

Create a Google Sheet to manage your content pipeline with columns such as:

- `idea / topic` – Viral idea or source content
- `analysis` – AI analysis or hook summary
- `script` – Generated video script
- `status` – pending / processing / completed / failed
- `video_url` – Final rendered video link
- `publish_result` – Publishing status or notes

Only rows marked as **pending** will be processed by the workflow.

---

### 2. Connect Google Sheets

- Authenticate your Google Sheets account in n8n
- Select the spreadsheet in the load and update nodes
- Ensure the workflow can write status updates back to the same sheet

---

### 3. Configure AI & Veo 3

- Add credentials for your AI model (e.g. Gemini or similar)
- Configure prompt logic for health niche content
- Add your Veo 3 API credentials
- Test video creation with a small number of ideas before scaling

---

### 4. Configure Publishing & Schedule

- Set up publishing credentials for your target social platforms
- Open the Schedule triggers and define how often the workflow runs
- The schedule controls how frequently new AI health videos are created and published

---

## How to customize this workflow to your needs

You can adapt this workflow without changing the core structure:

- Replace viral idea sources with your own research or internal data
- Adjust AI prompts for different health sub-niches
- Add manual approval steps before video creation
- Disable publishing and use the workflow only for video generation
- Add retry logic for failed renders or API errors
- Extend the workflow with analytics or performance tracking

---

## Best practices

- Start with a small batch of test ideas
- Keep status values consistent in Google Sheets
- Focus on strong hooks for health-related content
- Monitor rendering and publishing nodes during early runs
- Adjust schedule frequency based on API limits

---

## Documentation

For a full walkthrough and advanced customization ideas, see the [Video Guide](https://youtu.be/FYAb2RIv8F0).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
