# 🔬 Turn YouTube meeting recordings into Notion notes with Claude, deAPI, and Slack alerts

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## Who is this for?

- Teams who upload meeting recordings to YouTube (unlisted or private) and want automated notes
- Project managers who need to track action items across recurring meetings
- Remote teams who want searchable, structured meeting notes in Notion
- Content teams repurposing recorded calls into documentation

## What problem does this solve?

Meeting notes are either rushed, incomplete, or never written at all. This workflow removes that bottleneck — upload a recording to YouTube and get a structured Notion page with summary, action items, decisions, and key topics, plus a Slack notification, all within minutes.

## What this workflow does

1. **Monitors** a YouTube channel via RSS for new video uploads
2. **Transcribes** the video using deAPI (Whisper Large V3) directly from the YouTube URL — no file download or size limits
3. **AI Agent** analyzes the transcript and extracts a title, summary, action items, decisions, and key topics
4. **Creates** a structured meeting notes page in a Notion database
5. **Posts** the summary and action items to a Slack channel

## Setup

### Requirements

- **Self-hosted n8n instance** (deAPI node is not yet available on n8n Cloud)
- [deAPI](https://deapi.ai) account for video transcription
- Anthropic account for the AI Agent
- Notion workspace with a meeting notes database
- Slack workspace

### Installing the deAPI Node

1. Go to **Settings** → **Community Nodes**
2. Install `n8n-nodes-deapi`

### Configuration

1. Add your deAPI credentials (API key + webhook secret)
2. Add your Anthropic credentials (API key)
3. Set the **Feed URL** in the RSS trigger to your YouTube channel's RSS feed: `https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID`
4. Add your Notion credentials and set the **Database ID** in the Notion node
5. Add your Slack credentials and set the **Channel** in the Slack node
6. Ensure your n8n instance is on HTTPS

## How to customize this workflow

- **Change the AI model**: Swap Anthropic for OpenAI, Google Gemini, or any other LLM provider
- **Adjust the note structure**: Modify the AI Agent system message to extract different fields (attendees, follow-up date, sentiment, etc.)
- **Change the trigger**: Replace the RSS trigger with a Google Drive trigger or form upload for non-YouTube recordings
- **Change the output destination**: Replace Notion with Google Docs, Confluence, or Airtable
- **Change the notification**: Replace Slack with Microsoft Teams, email, or Discord
- **Monitor multiple channels**: Duplicate the RSS trigger or use multiple feed URLs to track several YouTube channels

## 🔗 Nodes Used

Slack, Notion, AI Agent, Anthropic Chat Model, Structured Output Parser, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
