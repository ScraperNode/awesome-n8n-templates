# 🎬 Digest new YouTube videos to Slack with Google Sheets, RapidAPI & GPT-4o-mini

> ⚡ **1,081 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

Marketing, content, and enablement teams that need a **quick, human-readable summary of every new video** published by the YouTube channels they care about—without leaving Slack.

## What problem does this workflow solve?

Manually checking multiple channels, skimming long videos, and pasting the highlights into Slack wastes time. This template **automates the whole loop**: detect a fresh upload from your selected channels → pull subtitles → distill the key take-aways with GPT-4o-mini → drop a neatly-formatted digest in Slack.

## What this workflow does

1. **Schedule Trigger** fires every 10 min, then grabs a list of YouTube RSS feeds from a Google Sheet.
2. **HTTP + XML** fetch & parse each feed; only brand-new videos continue.
3. **YouTube API** fetches title/description, **RapidAPI** grabs English subtitles.
4. Code nodes build an AI payload; **OpenAI** returns a JSON summary + article.
5. A formatter turns that JSON into Slack Block Kit, and **Slack** posts it.
6. Processed links are appended back to the “Video Links” sheet to prevent dupes.

## Setup

1. **Make a copy** of this [Google Sheet](https://docs.google.com/spreadsheets/d/1i3jZ_0npsEVtrMUSzGPV3Lbta3q7sArHHeNomlAuSMg/edit?usp=sharing) and connect a **Google Sheets OAuth2** credential with edit rights.
2. **Slack App**: create → add `chat:write`, `channels:read`, `app_mention`; enable Event Subscriptions; install and store the **Bot OAuth token** in an n8n Slack credential.
3. **RapidAPI key** for `https://yt-api.p.rapidapi.com/subtitles` (300 free calls/mo) → save as HTTP Header Auth.
4. **OpenAI key** → save in an OpenAI credential.
5. Add your RSS feed URLs to the “RSS Feed URLs” tab; press *Execute Workflow*.

## How to customise

* Adjust the schedule interval or freshness window in **“If newly published”**.
* Swap the OpenAI model or prompt for shorter/longer digests.
* Point the Slack node at a different channel or DM.
* Extend the AI payload to include thumbnails or engagement stats.

## Use-case ideas

* **Product marketing**: Instantly brief sales & CS teams when a competitor uploads a feature demo.
* **Internal learning hub**: Auto-summarise conference talks and share bullet-point notes with engineers.
* **Social media managers**: Get ready-to-post captions and key moments for re-purposing across platforms.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, YouTube, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
