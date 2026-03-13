# 🎬 Digest and analyse YouTube videos with Apify and Gemini Pro

> ⚡ **129 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Video Digestion Workflow — n8n Template Description

---

## How it works

This workflow takes any YouTube video URL and automatically extracts a rich, structured analysis — including transcript, key visual moments, video metadata, SEO keywords, and content section breakdowns. It's designed as the **foundation layer** for content repurposing, feeding its output into downstream workflows for creating Shorts, LinkedIn posts, Twitter threads, blog articles, email newsletters, and more.

### The pipeline:

1. **YouTube URL Input** — A simple form trigger accepts any YouTube video URL.
2. **Video Download (Apify)** — Downloads the video file at 720p via the Apify YouTube Video Downloader actor.
3. **Transcript Extraction (Apify)** — Pulls the full transcript with timestamps from YouTube using the Apify YouTube Video Transcript actor. No audio processing needed — fast and reliable.
4. **Data Consolidation** — A Code node merges both Apify outputs into a single structured object containing: video URL, transcript text, timestamped segments, video metadata (title, description, duration, channel info, like/comment counts, thumbnail, publish date).
5. **Visual Analysis (Google Gemini Pro)** — Sends the actual video to Gemini's video analysis endpoint, which watches the entire video and identifies key B-roll moments with precise timestamps, app detection, and webcam overlay awareness. It categorises clips as clean screen recordings vs. webcam overlays vs. talking head segments.
6. **Key Action Parsing** — Filters and categorises the Gemini output into usable clips, removing talking-head-only segments and incomplete data. Outputs chronologically sorted clips with cropping metadata for downstream video editing.
7. **AI Section Analysis (OpenAI)** — Sends the transcript + key moments to OpenAI with structured output (JSON schema) to generate: video summary, one-liner, main argument, target audience, content style, tone, key takeaways, problems addressed, tools mentioned, frameworks explained, suggested titles, and SEO keywords.
8. **Output** — The final structured payload is ready to pass to any downstream workflow (e.g., Shorts creation, social media posting, blog generation).

## Setup guide

### Required accounts & API keys

You'll need API credentials for the following services:

| Service | What it does | Sign up |
|---------|-------------|---------|
| **Apify** | YouTube video downloading + transcript extraction | [https://apify.com](https://apify.com) |
| **Google AI Studio (Gemini)** | Video analysis — watches the video and detects key visual moments | [https://aistudio.google.com](https://aistudio.google.com) |
| **OpenAI** | Structured content analysis with JSON schema output | [https://platform.openai.com](https://platform.openai.com) |

### Required Apify actors

You need to add these two Apify actors to your account:

1. **YouTube Video Downloader** by epctex — [https://apify.com/epctex/youtube-video-downloader](https://apify.com/epctex/youtube-video-downloader)
2. **YouTube Video Transcript** by starvibe — [https://apify.com/starvibe/youtube-video-transcript](https://apify.com/starvibe/youtube-video-transcript)

### n8n credentials to configure

- **Apify API** — Add your Apify API token in n8n credentials
- **Google Gemini** — Add your Google AI Studio API key in n8n credentials
- **OpenAI** — Add your OpenAI API key in n8n credentials

### Steps

1. Import the workflow into n8n
2. Configure all three credential sets (Apify, Gemini, OpenAI)
3. Ensure both Apify actors are added to your Apify account
4. Activate the workflow
5. Open the form trigger URL and paste any YouTube video URL
6. The workflow outputs a comprehensive JSON payload ready for downstream workflows

## What you can build with the output

The structured output from this workflow is designed to be piped into other workflows. Some ideas:

- **YouTube Shorts creation** — Use the key moments + timestamps to auto-clip and render short-form content
- **LinkedIn carousel posts** — Pull key takeaways and section summaries
- **Twitter/X threads** — Convert section breakdowns into threaded posts
- **Blog articles** — Use the full transcript + structure as a draft foundation
- **Email newsletters** — Summarise the video for your subscriber list
- **SEO-optimised descriptions** — Auto-generate YouTube descriptions with keywords

## Nodes used

- Form Trigger (n8n built-in)
- Apify (x2 — video download + transcript)
- Code (x2 — data consolidation + key action parsing)
- Google Gemini (video analysis)
- OpenAI (structured content analysis with JSON schema)
- Edit Fields (data mapping)
- Execute Workflow (optional — calls downstream Shorts creation workflow)

---

*Built by [@adamfreelances](https://youtube.com/@adamfreelances) — The Anti-Guru Technical Educator. Real workflows, real implementation, no fluff.*

## 🔗 Nodes Used

Execute Sub-workflow, n8n Form Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
