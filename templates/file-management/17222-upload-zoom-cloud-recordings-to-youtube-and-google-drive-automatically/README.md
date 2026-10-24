# 📁 Upload Zoom cloud recordings to YouTube and Google Drive automatically

> ⚡ **30 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives Zoom cloud recording webhooks, handles Zoom’s endpoint URL validation, downloads completed MP4 recording files using the event download token, and uploads each recording to both Google Drive and YouTube as an unlisted video.

## How it works
1. Receives a POST webhook from Zoom for recording-related events.
2. If the event is `endpoint.url_validation`, generates the required HMAC-SHA256 response from the plainToken and immediately returns it to Zoom.
3. For `recording.completed` events, returns a 200 OK response to Zoom and extracts all completed MP4 recording files plus the event’s download token.
4. For each MP4 file, downloads the recording from Zoom using the provided `download_url` and Bearer `download_token`.
5. Uploads the downloaded MP4 file to a selected Google Drive folder.
6. Uploads the same MP4 file to YouTube with an unlisted privacy setting and a basic description.

## Setup
1. Create a Zoom Marketplace app (Webhook Only or Server-to-Server OAuth), subscribe to the `recording.completed` event (and URL validation), and paste this workflow’s production webhook URL into the Zoom event subscription.
2. Set your Zoom app Secret Token value in the “Setup: Edit this node” step so the workflow can answer Zoom’s URL-validation challenge.
3. Connect Google Drive OAuth credentials and select the destination Drive and folder for uploads.
4. Connect YouTube OAuth2 credentials with permission to upload videos and confirm your YouTube Data API quota supports your expected upload volume.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
