# 🎬 Automate Video Creation from Google Sheets to YouTube with VideoApiHub

> ⚡ **213 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automate 
Video Creation from Google Sheets and Upload to YouTube with VideoApiHub

Automatically generate and publish YouTube videos from Google Sheets using n8n, VideoApiHub, and YouTube.

This workflow monitors a Google Sheet for pending rows, creates videos using a reusable VideoApiHub template, waits for rendering to complete, uploads the final video to YouTube, and updates the sheet with task status automatically.

---

# Prerequisites

Before using this workflow, make sure you have:

- An active n8n instance
- A Google account with access to Google Sheets
- A YouTube channel
- A [VideoApiHub](https://videoapihub.com) account and API key
- A created video template in VideoApiHub
- Google Sheets OAuth credentials connected in n8n
- YouTube OAuth2 credentials connected in n8n

---

# Sample Google Sheet

Use this sample sheet as a starting point:

https://docs.google.com/spreadsheets/d/1I0oFB_PEdZdrfrqEMhcyDeKQ-9_0mllUM8Whci3MrG0/edit?usp=sharing

Duplicate the sheet and update it with your own content before running the workflow.

---

# What this workflow does

- Reads video content from Google Sheets
- Filters pending or failed rows
- Creates videos using VideoApiHub templates
- Polls render status automatically
- Uploads completed videos to YouTube
- Updates Google Sheet with status and task IDs
- Handles failed renders gracefully

---

# Perfect for

- YouTube Shorts automation
- Motivational video channels
- Automated generated content pipelines
- Social media automation
- Batch video publishing workflows
- No-code video generation systems

---

# Required integrations

- Google Sheets
- YouTube OAuth2
- [VideoApiHub API](https://videoapihub.com)

---

# Sheet fields supported

- Background image
- Audio URL
- Multiple text lines
- Filename
- YouTube title
- Description
- Tags
- Status tracking

---

# Setup steps

1. Duplicate the sample Google Sheet
2. Create a [VideoApiHub](https://videoapihub.com) account and generate an API key
3. Create a reusable video template in VideoApiHub
4. Update the `Template Config` node with:
   - Google Sheet ID
   - Sheet name
   - Video template ID
   - Poll interval
   - YouTube privacy setting
5. Connect your Google Sheets credentials
6. Connect your YouTube OAuth2 credentials
7. Activate the workflow

---

# Features

- Fully automated pipeline
- Retry support for failed renders
- Configurable polling interval
- Dynamic video variables
- YouTube metadata support
- Easy customization for any niche
- Supports scalable content generation workflows

This is human generated and tested automation. 

Here is Youtube channel running with this automation - https://www.youtube.com/@WealthIsMoney

## 🔗 Nodes Used

Google Sheets, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
