# ⚡ Monitor favorite YouTube channels through RSS feeds and receive notifications

> ⚡ **5,048 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This workflow creates an automated system for monitoring and receiving notifications about new videos from your favorite YouTube channels through RSS feeds, with customizable email and Telegram notifications.

## 🌟 Key Features
**📡 RSS Feed Management**
- Accepts custom YouTube channel IDs or uses default channels
- Automatically creates RSS feeds for each YouTube channel
- Monitors channels for new video uploads
- Labels and filters recent videos within a 3-day window (change this as required)


**📨 Multi-Channel Notification System**
- Sends Telegram notifications with video thumbnails and links
- Delivers customized email notifications in two formats:
  - Individual emails for each new video
  - Single digest email containing all new videos


**⚙️ Content Processing**
- Fetches detailed video information using YouTube API
- Creates responsive HTML email templates with video previews
- Includes video thumbnails, titles, descriptions, and direct links
- Maintains professional formatting across different email clients


## 🛠️ Setup Requirements
**🔑 API Configuration**
- YouTube Data API credentials
- Gmail account for sending notifications
- Telegram bot token and chat ID
- OpenAI API key for content processing


**📋 Channel Management**
- Add YouTube channel IDs through form input
- Configure default channel list
- Set notification preferences
- Adjust monitoring schedule


This workflow is perfect for content creators, marketers, or anyone wanting to stay updated with their favorite YouTube channels through automated, professionally formatted notifications delivered via email and Telegram.

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
