# 📱 Schedule motivational YouTube Shorts with Google Drive, Gemini, Airtable and Cloudinary

> ⚡ **130 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow schedules a random daily upload of a Google Drive video as a YouTube Short, compressing large files via Cloudinary, generating a title and hashtags with Google Gemini, logging details to Airtable, and sending a Telegram notification after deleting the uploaded file.

## How it works
1. Runs on a schedule (or manually) and waits a random number of minutes to stagger posting time.
2. Finds a video file in a specified Google Drive folder and checks whether its size exceeds 50 MB.
3. If the file is large, uploads it to Cloudinary and generates a compressed Cloudinary download URL; otherwise it uses the original file.
4. Uploads the chosen video to a Google Cloud Storage bucket to create a stable URL for analysis.
5. Uses Google Gemini to analyze the video and generate a short title and up to 13 relevant hashtags, then formats the hashtags into comma-separated YouTube tags.
6. Creates an Airtable record with the file name, the generated caption (title + hashtags), and the Google Cloud Storage video URL.
7. Downloads the video binary from Google Drive, uploads it to YouTube with the generated title, description, and tags, waits briefly, deletes the source file from Google Drive, and sends a Telegram confirmation message.

## Setup
1. Connect credentials for Google Drive, YouTube OAuth2, Airtable Personal Access Token, Google Cloud Storage OAuth2, Google Gemini (PaLM) API, and Telegram (optional for notifications).
2. Update the Google Drive folder ID used for searching videos and ensure it contains the files you want to upload.
3. Configure the Cloudinary upload endpoint and `upload_preset` (and ensure your Cloudinary account allows video uploads) for the compression path.
4. Set your Google Cloud Storage bucket name and object name, and ensure the workflow has permission to create/overwrite that object.
5. Select your Airtable base/table and confirm the fields used for logging (Name, Caption, Video URL) match your schema.
6. Adjust the cron schedule, random delay range, YouTube category/region/privacy settings, and the Telegram chat ID/message text to fit your environment.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Google Drive, YouTube, Google Cloud Storage

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
