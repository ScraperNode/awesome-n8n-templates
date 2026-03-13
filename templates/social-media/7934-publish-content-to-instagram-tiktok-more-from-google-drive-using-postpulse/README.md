# 📱 Publish content to Instagram, TikTok & more from Google Drive using PostPulse

> ⚡ **974 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Description
![photo_20250827_091506.jpg](fileId:2212)
This automation template enables you to publish content from a Google Drive folder directly to multiple social platforms — TikTok, Instagram, YouTube, LinkedIn, Telegram, Bluesky, X (Twitter), and Threads. By connecting [PostPulse](https://post-pulse.com/) with n8n, you can transform a manual posting routine into a seamless automated workflow, ensuring consistent cross-platform publishing without repetitive tasks.

*⚠️ **Disclaimer:** This workflow uses the community node **@postpulse/n8n-nodes-postpulse**. Make sure community nodes are enabled in your n8n instance before importing and using this template.*
👉 **To install it:**
Go to Settings → Community Nodes → Install and enter:"@postpulse/n8n-nodes-postpulse".
💡 **For more details, see n8n Integration Guide:** [PostPulse Developers – n8n Integration](https://developers.post-pulse.com/n8n-integration).

## Who Is This For?
- **Marketers** who want to manage multiple accounts at once.
- **Creators** who store media on Google Drive and want to quickly expand it.
- **Teams** for whom it is important to centralize the content plan and have a transparent publishing system.

## What Problem Does This Workflow Solve?
Instead of manually uploading photos or videos to TikTok, Instagram, YouTube or other social networks, you get:
- **Centralizing uploads:** Add your media once to Google Drive, and the system takes care of publishing it everywhere.
- **Multi-platform posting:** Publish simultaneously to TikTok, Instagram, YouTube, LinkedIn, Telegram, Bluesky, X, and Threads.
- **Streamlined scheduling:** Schedule future posts with PostPulse directly through n8n.
- **Error reduction:** Avoid mistakes caused by copy-pasting across platforms.

## How It Works 
1. **File Upload:** Place your media file (image or video) into a designated Google Drive folder.
2. **File Processing:** n8n automatically downloads the file and prepares it for upload.
3. **Account Retrieval:** PostPulse retrieves your connected accounts (TikTok, Instagram, YouTube, etc.).
4. **Media Upload:** The file is uploaded to PostPulse via n8n.
5. **Automation:** PostPulse automatically distributes it to TikTok, Instagram, YouTube, LinkedIn, Telegram, Bluesky, X, and Threads.
6. **Publishing:** PostPulse schedules or directly publishes the post to the selected platforms.

## Setup 
1. **Connect PostPulse to n8n**
- Request your OAuth client key and secret from support@post-pulse.com.
- Add your PostPulse account in n8n Credentials.

2. **Connect Google Drive**
- Create a Google Cloud project.
- Enable the **Google Drive API**.
- Configure OAuth credentials and connect your Google Drive account to n8n.

3. **Configure Google Drive Trigger**
- Point it to the folder where you will upload your media.

4. **Upload Media Node**
- Add the PostPulse “Upload Media” node to process files from Google Drive.

5. **Schedule Posts**
- Add the PostPulse “Schedule Post” node.
- Map content, media path, and connected account IDs.

6. **(Optional) Metadata from Google Sheets**
- Use Google Sheets as a source of captions, hashtags, or scheduling details.

## Requirements
1. **Connected Accounts at PostPulse** (TikTok, Instagram, YouTube, LinkedIn, Telegram, Bluesky, X, Threads).
2. **OAuth client key and secret requested** from support@post-pulse.com.
3. **Google Cloud Project** with the Google Drive API enabled and valid OAuth credentials.

✨ With this workflow, PostPulse and n8n become your all-in-one automation hub for social publishing.

## 🔗 Nodes Used

Google Sheets, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
