# 📱 Share OneDrive videos on LinkedIn, YouTube, Instagram, and Facebook via PostWire

> ⚡ **2 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow watches a Microsoft OneDrive folder for new video files, uploads them to PostWire, generates platform-specific captions, and publishes the video natively to LinkedIn, YouTube Shorts, Instagram Reels, and Facebook, emailing the team via Microsoft Outlook if any network fails.

## How it works
1. Triggers when a new file is created in a selected Microsoft OneDrive folder.
2. Filters the event to continue only when the file MIME type indicates a video.
3. Derives a posting prompt from the video filename and sets the target platforms and brand voice.
4. Requests an upload URL from PostWire, downloads the video from OneDrive, uploads it to PostWire, and finalizes the upload to get a PostWire media URL.
5. Asks PostWire to generate per-platform drafts using the prompt, brand voice, and uploaded media URL.
6. Publishes the video to LinkedIn, YouTube, Instagram, and Facebook via PostWire using the OneDrive file ID as an idempotency key to prevent duplicate posts.
7. If any platform publish fails, sends a Microsoft Outlook email to the team with the error and suggested fix.

## Setup
1. Create a PostWire account, connect your LinkedIn/YouTube/Instagram/Facebook profiles, and add an n8n HTTP Header Auth credential with `Authorization: Bearer <your_PostWire_API_key>` for the PostWire requests.
2. Add Microsoft OneDrive credentials and select the folder ID to watch in the OneDrive trigger.
3. Add Microsoft OneDrive credentials for the download step if needed, and ensure the workflow has access to download the files from the watched folder.
4. Add Microsoft Outlook credentials and replace `team@example.com` with your team’s distribution address.

## 🔗 Nodes Used

HTTP Request, Microsoft OneDrive, Microsoft Outlook, Filter, Microsoft OneDrive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
