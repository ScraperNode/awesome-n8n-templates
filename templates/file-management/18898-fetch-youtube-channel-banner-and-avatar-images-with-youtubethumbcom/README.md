# 📁 Fetch YouTube channel banner and avatar images with YouTubeThumb.com

> ⚡ **2 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a public YouTube channel or video link, queries YouTubeThumb.com for available channel banner and profile image URLs, and optionally downloads the largest banner image as a file.

## How it works
1. Runs manually when you click Test workflow.
2. Sets the YouTube URL or @handle to look up.
3. Calls the YouTubeThumb.com channel-images endpoint to retrieve the channel’s available banner and avatar image sizes.
4. Checks whether the lookup succeeded and returns an error message if it fails.
5. Selects the largest banner and avatar by image area and outputs the full lists of banners and avatars.
6. If a banner URL is available, downloads the largest banner JPG via YouTubeThumb.com’s channel-image-file proxy.

## Setup
1.  Open the Set YouTube URL node and replace the sample @YouTube value with the public channel handle, /channel/ URL, or watch URL you want to inspect.
2.  Confirm your n8n instance can make outbound HTTPS requests to youtubethumb.com. No API key, login, or paid credential is required for this lookup.
3. Click Test workflow. Review the Code node JSON for banners and avatars. If the channel published header art, the last HTTP node returns the largest banner as a JPG file; if it did not, that download step is skipped on purpose.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
