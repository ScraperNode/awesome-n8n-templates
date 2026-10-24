# 🎬 Publish blog posts from YouTube transcripts to WordPress and Telegram with Gemini

> ⚡ **181 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

Content creators, media teams, and bloggers who run a YouTube channel and want to automatically repurpose video content into SEO-ready blog posts — without manual writing. Ideal for anyone publishing news or educational content in any language.

## What it does

This workflow runs three fully automated pipelines that take a YouTube video all the way to a published WordPress post:

**Pipeline 1 — Transcript Collector** runs on a schedule, fetches new videos from your YouTube playlist via the YouTube Data API, retrieves their full transcripts via RapidAPI, saves each transcript to a Google Doc, and logs metadata to Google Sheets.

**Pipeline 2 — AI Blog Generator** picks up unprocessed transcripts, sends them to a Gemini AI Agent that reads the transcript and your existing published posts (for internal linking), then generates structured blog content: title, body (HTML), summary, tags, Telegram caption, image prompt, and publish priority. Results are saved to a second Google Sheet as `pending`.

**Pipeline 3 — Publisher** runs every 3 hours, selects the highest-priority pending post (urgent &gt; normal &gt; evergreen), publishes it to WordPress, generates a featured image via an AI image API, uploads and attaches it to the post, then announces it to a Telegram channel.

## How to set up

1. Import this workflow into n8n.
2. Create two Google Sheets tabs: `youtubeVideos` and `blogsAndNewsUploaded` (column structures in the sticky notes).
3. Configure all credentials: Google (Sheets, Docs), YouTube API key, RapidAPI key (youtube-transcript3), Gemini API, WordPress, Telegram Bot, and your AI image generation API.
4. Set your YouTube Playlist ID in the first HTTP node.
5. Set your Google Drive Folder ID for transcript storage.
6. Activate all three schedule triggers independently.

## Requirements

- YouTube Data API v3 key (Google Cloud Console)
- RapidAPI subscription to `youtube-transcript3`
- Google Gemini API key
- WordPress site with Application Password
- Telegram Bot token + channel
- AI image generation API (compatible with OpenAI images format)

## How to customize

- Adjust the Gemini system prompt in the AI Agent node to change content language, tone, or structure.
- Change `publish_priority` logic in the JS node to control posting frequency.
- Swap the image generation API with any provider (DALL-E, Stability AI, etc.).
- Add a Filter node before publishing to require manual approval of `pending` posts.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Telegram, Wordpress, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
