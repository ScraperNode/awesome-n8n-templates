# 📱 Generate AI YouTube comments and replies from a video URL using GPT-4 and Google Sheets

> ⚡ **88 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

- A form trigger accepts any YouTube URL: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID, or just a plain video ID
- A code node normalises the URL and extracts a clean video ID for the YouTube Data API v3
- Calls the API to fetch video stats (title, description, tags, views, likes, comment count)
- Fetches comments from the videos commentThreads endpoint, capped by the form's Max Comments to Process field
- Flattens each comment into its own item, then merges two ranked lists deduped by commentId: the 5 newest comments by publishedAt and the 5 highest-engagement comments by likes plus replies
- A GPT-4 agent writes a natural, human-sounding reply for each top comment, responding as a fellow viewer (not as the channel owner)
- In parallel, a second GPT-4 agent writes one original top-level comment based on the videos title and description
- A structured output parser guarantees clean JSON for both agents
- Replies are merged with the top-level comment by videoId, normalised into row shape, and appended to Google Sheets - one row per reply

## Set up steps

- Setup takes about 5 to 10 minutes
- Connect a **YouTube Data API OAuth2** credential (used by both the Get Video Statistics and Get Video Comments nodes)
- Connect an **OpenAI API** credential (defaults to gpt-4.1-mini; swap to any model you prefer)
- Connect a **Google Sheets OAuth2** credential and pick your destination spreadsheet plus tab in the Save to Google Sheets node
- Create a tab with these column headers in row 1: videoId, videoUrl, videoTitle, commentAuthor, commentText, myReply, myVideoComment, selectionType, videoTags, viewCount, engagementScore, videoDescription, likeCount, commentCount
- Optional: tweak the system prompts inside each AI agent to match your niche, voice, and brand
- Submit a YouTube URL via the form trigger to test
- Detailed per-step notes live inside the workflow as sticky notes

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
