# 📱 Scheduled YouTube video uploads with Google Sheets & Drive integration

> ⚡ **802 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

**Description:**

Effortlessly automate YouTube video uploads with this ready-to-use n8n workflow. Integrated with Google Sheets, Google Drive, and YouTube API, this template streamlines your video publishing process based on scheduled metadata entries.

**Key Features:**

- 🗓️ Scheduled Uploads (Mon–Fri at 9 AM, 12 PM, 3 PM)
- 📋 Reads video metadata (title, description, filename) from Google Sheets
- 🔍 Locates video files in Google Drive by filename
- ⬇️ Downloads and uploads videos to YouTube with the correct metadata
- ✅ Updates the status in the sheet to avoid duplicates
- 📂 Moves uploaded files to a specified archive folder for organization

**Requirements:**

- Google Sheets with metadata (Title, Description, File Name, Status)
- Google Drive with video files
- YouTube API access and OAuth credentials
- A pre-set folder structure for organization

**Perfect For:**

Content creators, YouTube channel managers, marketers, and editors who want to automate repetitive upload tasks, maintain consistent publishing schedules, and organize video assets—without manual effort.

## 🔗 Nodes Used

Google Sheets, Google Drive, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
