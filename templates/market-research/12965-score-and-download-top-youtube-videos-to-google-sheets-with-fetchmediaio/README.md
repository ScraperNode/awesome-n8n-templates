# 📊 Score and download top YouTube videos to Google Sheets with FetchMedia.io

> ⚡ **51 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Find, score, and download the best YouTube videos to Google Sheets

This workflow provides an end-to-end automation for discovering, evaluating, and optionally downloading high-quality educational YouTube videos.

It searches YouTube using configurable queries, applies multiple relevance and quality filters, scores the remaining videos, stores the best results in Google Sheets, and optionally downloads selected videos asynchronously using FetchMedia.io.

The workflow is designed to be modular, transparent, and easy to customize for different content curation, research, or archival use cases.

---

## How the workflow works

### 1. Search YouTube
The workflow uses the YouTube Data API to search for videos based on predefined queries.

### 2. Filter by relevance and quality
Videos are filtered using multiple criteria, including:
- Title keywords
- Publish date
- View count
- Like count
- Video duration

YouTube returns video duration in ISO-8601 format (for example, `PT1M30S`).  
The workflow converts this value to seconds to enable reliable numeric filtering (for example, Shorts vs long-form videos).

### 3. Deduplicate and score videos
- Duplicate videos are removed using `videoId` as a unique identifier.
- A relevance score is generated based on engagement metrics and metadata.
- Videos are sorted by score and limited to the top candidates.

### 4. Store results in Google Sheets
Selected video metadata is written to a Google Sheet.
The `videoId` is used as a stable identifier so rows can be updated later in the workflow.

### 5. Optional: Download videos asynchronously
Selected videos can be submitted to FetchMedia.io for download.
Because downloads are asynchronous:
- The workflow polls the FetchMedia API at regular intervals
- Download status is checked (`pending`, `running`, `success`, `failed`)
- Retry attempts are capped to prevent infinite loops

When a download completes, the final download URL (or error information) is written back to the corresponding row in Google Sheets.

---

## Who this workflow is for

- Content curators and educators  
- Researchers and analysts  
- Marketing and growth teams  
- AI and machine learning practitioners collecting video datasets  

---

## Requirements

To use this workflow, you need:

- **YouTube Data API v3** enabled with OAuth credentials
- **Google Sheets OAuth credentials**
- **FetchMedia.io API key** (optional, required only for the download step)

&gt; **Note:** FetchMedia.io is a third-party service and may require a paid account - free tier is available.  
&gt; The workflow can still be used without the download branch if desired.

---

## Configuration notes

- The FetchMedia API key is expected to be provided via an environment variable: FETCHMEDIA_API_KEY
- API quotas and limits depend on your YouTube and FetchMedia accounts.
- Retry limits and wait intervals are capped to avoid infinite loops.
- The workflow uses batch processing internally; the loop completion branch is intentionally unused, as all processing occurs within the loop itself.

---

## Customization ideas

- Adjust the relevance scoring logic to prioritize different engagement signals.
- Modify duration thresholds to focus on Shorts or long-form videos.
- Add notifications (Slack, email) when downloads complete.
- Extend the workflow to additional video platforms.

---

## Notes

This template demonstrates a complete content-curation pipeline:
from discovery, through quality control and scoring, to optional asynchronous media downloading.

It is intended as a practical, production-ready example that can be easily adapted to different workflows.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
