# 📱 Publish videos to 9 social platforms from Google Sheets with Blotato

> ⚡ **124 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Auto Publish Videos to 9 Social Media Platforms

Schedule and load content from Google Sheets, then publish videos in parallel across 9 social media platforms.

---

## Who is this for?

This template is ideal for:

- Content creators publishing videos at scale
- Social media managers handling multiple platforms
- Affiliate marketers running automated content funnels
- AI automation builders using Google Sheets as a control panel
- Teams that want reliable, scheduled, multi-platform video publishing

If you already have videos ready and want to automate distribution instead of manual uploading, this workflow is for you.

---

## What problem is this workflow solving?

Manually publishing videos across multiple social platforms is slow and error-prone. Common challenges include:

- Re-uploading the same video to multiple platforms
- Tracking which videos have been published
- Handling publishing errors across different APIs
- Maintaining consistent posting schedules
- Managing content in spreadsheets without automation

This workflow turns Google Sheets into a single source of truth and fully automates video distribution.

---

## What this workflow does

This automated publishing workflow:

- Triggers on a defined schedule
- Loads pending video content from Google Sheets
- Publishes videos **in parallel** to 9 social media platforms:
  - Instagram
  - TikTok
  - YouTube
  - Facebook
  - X (Twitter)
  - Threads
  - LinkedIn
  - Pinterest
  - Bluesky
- Marks successfully published content in Google Sheets
- Logs publishing errors for failed platforms

---

## Setup

### 1. Prepare Google Sheets

Create a Google Sheet with at least the following columns:

- `video_url` – Direct link to the video file
- `caption` – Post caption or description
- `platforms` – Platforms to publish (optional logic-based use)
- `status` – pending / published / error
- `error_message` – Stores error details if publishing fails

Only rows marked as **pending** will be processed.

---

### 2. Connect Google Sheets

- Authenticate your Google Sheets account in n8n
- Select the spreadsheet in the **Read Pending Posts (Google Sheets)** node
- Ensure the update nodes can write back to the same sheet

---

### 3. Configure Social Platform Credentials

For each platform node:

- Add API credentials or OAuth tokens
- Verify required permissions for video publishing
- Test each platform individually if needed

Supported platforms:

- Instagram
- TikTok
- YouTube
- Facebook
- X (Twitter)
- Threads
- LinkedIn
- Pinterest
- Bluesky

---

### 4. Configure the Schedule Trigger

- Open the **Schedule Content Publishing** trigger
- Set how often the workflow runs (hourly, daily, or custom cron)
- This schedule controls when pending videos are published

---

## How to customize this workflow to your needs

You can adapt this workflow without changing the core structure:

- Disable platforms you don’t want by turning off their publishing nodes
- Add content filters or platform-specific captions
- Insert an approval step (Slack, Telegram, Email) before publishing
- Add retry logic for failed platforms
- Extend the workflow to support images or carousel posts
- Add analytics or reporting steps after publishing

---

## Best practices

- Ensure video URLs are publicly accessible
- Use platform-safe video formats and dimensions
- Start with a small batch to test credentials
- Monitor the **Log Publishing Errors** node for debugging
- Keep status values consistent in Google Sheets

---

## 📄 Documentation

For a full walkthrough and advanced customization ideas, see:

[Video Guide](https://youtu.be/93iIggWADyI?si=cwGGmm0JFW15XWaD)

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
