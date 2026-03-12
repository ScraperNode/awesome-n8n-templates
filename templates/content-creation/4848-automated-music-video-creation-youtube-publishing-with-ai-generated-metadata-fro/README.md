# 🎬 Automated music video creation & YouTube publishing with AI-generated metadata from Google Drive

> ⚡ **1,132 views** · 🎬 [Content Creation & Video](../)

## Description

**The Problem That it Solves**

Uploading music manually to YouTube is a chore. Renaming files, filling metadata, picking the right playlist, adding keywords, and scheduling the release can eat up your creative time. This workflow removes the busy work so you can focus on making tracks instead of managing uploads.

**How it works**
Drop an MP3 into your shared Google Drive “Audio” folder and walk away. The workflow detects the new file, grabs the genre from the filename based on a set of keywords, uses the genre to map to cover art styles, and YouTube playlists, generates the description and tags for YouTube metadata, and schedules and posts to YouTube channel, while sending messages to discord for updates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Discord, YouTube, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
