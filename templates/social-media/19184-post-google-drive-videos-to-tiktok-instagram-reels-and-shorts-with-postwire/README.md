# 📱 Post Google Drive videos to TikTok, Instagram Reels and Shorts with PostWire

> ⚡ **28 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
![Workflow](https://postwire.io/n8n/templates/15-google-drive-video-to-shorts.png)

For creators and brands who edit short videos and hate uploading the same file three times.

## How it works
1. **Google Drive Trigger** watches a folder for new files.
2. **Only video files** skips anything that is not a video.
3. **Download the video** fetches the file. A Drive share link would not work — it opens a web page, not the file.
4. **PostWire** uploads the video, writes the captions from the file name or description, and publishes. PostWire already holds the TikTok, Meta and YouTube approvals, so there is no app review on your side.
5. **Any network failed?** emails you the network, the reason and the fix.

## Setup
1. Install the **PostWire** community node (Settings → Community nodes → `n8n-nodes-postwire`), then create a free account at postwire.io, connect your networks and paste the API key into a **PostWire API** credential.
2. Connect Google Drive and pick the folder. Name files after what the video says, or fill the Drive description.
3. Connect Gmail and set your address. Videos up to 50 MB; H.264 MP4, 9:16.

## Requirements
- A PostWire account — the free plan covers one brand with all its networks and 30 posts a month, no card
- Self-hosted n8n with the community node `n8n-nodes-postwire` installed (Settings → Community nodes)
- A Google Drive account
- A Gmail account

## Customization
- Add Facebook Reels, set Visibility in Options, or add a Brand Voice.

## Additional info
Drop a vertical video in a Drive folder: it is published to TikTok, Instagram Reels and YouTube Shorts with a caption written for each (and a YouTube title and tags).

This template uses the PostWire community node, so it runs on self-hosted n8n. PostWire writes a different post for each network from one idea and holds the TikTok, Meta and YouTube publishing approvals, so connecting an account is one OAuth click.

## 🔗 Nodes Used

Google Drive, Gmail, Google Drive Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
