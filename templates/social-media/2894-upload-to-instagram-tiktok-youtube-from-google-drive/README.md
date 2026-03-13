# 📱 Upload to Instagram, TikTok & YouTube from Google Drive

> ⚡ **48,755 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Description
This automation template is designed for content creators, digital marketers, and social media managers looking to simplify their video posting workflow. It automates the process of generating engaging video descriptions and uploading content to both Instagram and TikTok, making your social media management more efficient and error-free.

### Who Is This For?
- **Content Creators & Influencers:** Streamline your video uploads and focus more on creating content.
- **Digital Marketers:** Ensure consistent posting across multiple platforms with minimal manual intervention.
- **Social Media Managers:** Automate repetitive tasks and maintain a steady online presence.

### What Problem Does This Workflow Solve?
Manually creating descriptions and uploading videos to different platforms can be time-consuming and error-prone. This workflow addresses these challenges by:
- **Automating Video Uploads:** Monitors a designated Google Drive folder for new videos.
- **Generating Descriptions:** Uses OpenAI to transcribe video audio and generate engaging, customized social media descriptions.
- **Ensuring Multi-Platform Consistency:** Simultaneously posts your video with the generated description to Instagram and TikTok.
- **Error Notifications:** Optional Telegram integration sends alerts in case of issues, ensuring smooth operations.

### How It Works
1. **Video Upload:** Place your video in the designated Google Drive folder.
2. **Description Generation:** The automation triggers OpenAI to transcribe your video’s audio and generate a captivating description.
3. **Content Distribution:** Automatically uploads the video and description to both Instagram and TikTok.
4. **Error Handling:** Sends Telegram notifications if any issues arise during the process.

### Setup
1. Generate an API token at [social media API upload-post](https://upload-post.com) and configure it in both the Upload to TikTok and Upload to Instagram nodes.
2. **Google Cloud Project:** Create a project in Google Cloud Platform, enable the Google Drive API, and generate the necessary OAuth credentials to connect to your Google Drive account.
3. Set up your Google Drive folder in the Google Drive Trigger node.
4. Customize the OpenAI prompt in the Generate Social Description node to match your brand’s tone.
5. (Optional) Configure Telegram credentials for error notifications.

### Requirements
- **Accounts:** upload-post.com, Google Drive, and (optionally) Telegram.
- **API Keys & Credentials:** Upload-post.com API token, OpenAI API key, and (optional) Telegram bot token.
- **Google Cloud:** A project with the Google Drive API enabled and valid OAuth credentials.

Use this template to enhance your productivity, maintain consistency across your social media channels, and engage your audience with high-quality video content.

## 🔗 Nodes Used

HTTP Request, Read Binary File, Write Binary File, Telegram, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
