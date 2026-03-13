# 🎬 Create active learning notes from YouTube videos with Gemini and Notion

> ⚡ **47 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## What this workflow does

Transform YouTube videos into structured Active Learning study sheets using AI. 

This workflow extracts video metadata, transcribes audio with Google Gemini, applies the ICAP Framework (Interactive, Constructive, Active, Passive) for deep learning, and generates micro-goals, Cornell notes, Feynman explanations, and practice tasks—all automatically formatted in Notion.

Perfect for students, educators, and lifelong learners who want to maximize retention from video content.

---

## How it works

1. **Submit YouTube URL** - User enters video URL via form
2. **Extract metadata** - Retrieves title, channel, publish date, and thumbnail
3. **Download & transcribe** - Gets audio via RapidAPI and transcribes with Google Gemini
4. **AI analysis** - Applies Active Learning framework to generate structured study content
5. **Create Notion page** - Builds formatted page with all learning materials

---

## Setup requirements

### Credentials needed:
- YouTube Data API (OAuth2)
- Google Gemini API key
- RapidAPI key (YouTube Downloader API)
- Notion API integration

### Before running:
1. Duplicate the Notion database template (link in workflow sticky note)
2. Share database with your Notion integration
3. Configure credentials in n8n
4. Add your RapidAPI key in the HTTP node
5. Add your Notion Database ID in the Build Page Structure node

All configuration points are clearly marked with sticky notes in the workflow.

## 🔗 Nodes Used

HTTP Request, YouTube, AI Agent, Simple Memory, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
