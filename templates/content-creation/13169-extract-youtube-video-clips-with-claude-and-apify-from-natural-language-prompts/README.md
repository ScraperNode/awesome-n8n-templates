# 🎬 Extract YouTube video clips with Claude and Apify from natural language prompts

> ⚡ **27 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
Content creators, marketers, and video editors who want to **automatically extract highlight clips** from YouTube videos using natural language descriptions—no manual timestamp hunting required.

---

## What problem does it solve?
Manually scrubbing through long videos to find specific moments is time-consuming and tedious. This workflow automates the entire process: describe what clips you want in plain English, and AI analyzes the transcript to find and extract them automatically.

---

## How it works

| # | Node | Purpose |
|---|------|---------|
| 1 | **YouTube Clip Request Form** | Web form to submit YouTube URL, clip description, count, and max duration. |
| 2 | **Workflow Configuration** | Centralizes Apify credentials and user inputs. |
| 3 | **Get Video Transcript from Apify** | Fetches the full video transcript via Apify Actor. |
| 4 | **Find Clips from Transcript** | AI Agent (Claude) analyzes transcript and identifies clip timestamps based on your description. |
| 5 | **Prepare Clip Requests** | Formats the AI-identified clips for the clipping service. |
| 6 | **Create Clips via Apify** | Sends clip requests to Apify Actor to extract video segments. |
| 7a | **Save Clip Links to Google Sheets** | Logs clip URLs to a spreadsheet for easy access. |
| 7b | **Download Clip Files** *(optional)* | Downloads clips locally to your specified directory. |

---

## Setup steps

1. **Apify Configuration**
   * Sign up at [Apify](https://apify.com/) and get your API token
   * Deploy or find Actors for: YouTube transcript extraction, video clipping
   * Copy Actor URLs to the Workflow Configuration node

2. **Credentials**
   * Add your **Apify API Token** to Workflow Configuration
   * Connect **Google Sheets OAuth2** credential
   * Connect **Anthropic API** credential (for Claude)

3. **Google Sheets Setup**
   * Create a sheet with columns: `Url`, `Mp4 360p`, `Mp4 720`, `Mp4 1080`, `Mp3`
   * Update the Document ID and Sheet Name in "Save Clip Links" node

4. **Optional: Local Downloads**
   * Set `localSavePath` in Workflow Configuration
   * Ensure directory exists and n8n has write permissions

5. **Test**
   * Open the form Test URL
   * Submit a YouTube URL with a clip description (e.g., "funny moments" or "key insights")
   * Verify clips appear in Google Sheets

---

## Resources

* [Apify Platform](https://apify.com/)
* [n8n HTTP Request Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)
* [Google Sheets API](https://developers.google.com/sheets/api)
* [Anthropic Claude](https://www.anthropic.com/)

---

## Extending the flow

* **Slack/Discord notification** – Add a node to ping you when clips are ready.
* **Batch processing** – Modify to accept multiple YouTube URLs at once.
* **Custom AI prompts** – Tweak the Agent system prompt for different clip styles (tutorials, highlights, quotes).

Describe what you want, let AI find it, get clips—zero manual scrubbing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
