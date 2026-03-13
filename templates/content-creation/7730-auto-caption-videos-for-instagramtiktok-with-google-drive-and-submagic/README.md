# 🎬 Auto-caption videos for Instagram/TikTok with Google Drive and Submagic

> ⚡ **545 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

🎥 Auto-Caption Videos for Instagram with Google Drive + Submagic

Description
Save hours on video editing with this workflow! Whenever you upload a video to a specific Google Drive folder, it’s automatically sent to Submagic to generate engaging captions (using your chosen template). Once the captioned video is ready, it’s pulled back, downloaded, and uploaded into your Google Drive—fully captioned and Instagram-ready.

Watch build along videos for workflows like these on: www.youtube.com/@automatewithmarc

How It Works

Google Drive Trigger – Listens for new video uploads in your chosen folder.

Post to Submagic – Sends the video URL to Submagic’s API with your caption style (e.g. Hormozi).

Wait Loop + Status Check – Polls Submagic until the captioning job is complete.

Download Captioned Video – Retrieves the finished captioned video file.

Upload to Google Drive – Saves the captioned version back into Drive, ready for Instagram posting.

Why You’ll Love It

🎯 Zero manual steps — captioning happens automatically.

⚡ Faster IG content pipeline — ready-to-post reels in minutes.

🎨 Consistent style — apply your favorite Submagic caption templates every time.

☁️ Cloud-first — works entirely with Google Drive + Submagic, no local processing needed.

Requirements

Google Drive account (with OAuth credentials)

Submagic API key

n8n (Cloud or self-hosted)

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
