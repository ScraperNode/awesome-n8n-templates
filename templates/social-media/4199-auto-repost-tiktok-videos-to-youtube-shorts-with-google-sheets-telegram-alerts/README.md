# 📱 Auto-repost TikTok videos to YouTube Shorts with Google Sheets & Telegram alerts

> ⚡ **1,461 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# **TikTok to YouTube Parser Video**


Generate traffic and grow your audience effortlessly with this plug-and-play n8n automation template.
Automatically fetch TikTok videos, upload them to YouTube Shorts, save logs to Google Sheets, and trigger uploads via Telegram — no coding required.
Perfect for creators, marketers, and automation enthusiasts.

## **What This Workflow Does**

This complete n8n automation:

✅ Fetches the latest TikTok videos from any user
✅ Avoids duplicate uploads with intelligent filtering
✅ Uploads to YouTube Shorts via OAuth2
✅ Saves video metadata to Google Sheets
✅ Sends Telegram notifications on completion
✅ Lets you trigger uploads directly from Telegram
✅ Supports custom titles, tags, descriptions, and privacy settings

## **Use Cases**

📈 Repurpose TikTok content to grow your YouTube channel
📲 Automate content curation from influencers
🕐 Schedule regular syncing (daily/hourly)
👩‍💼 Perfect for agencies, content managers, or solo creators

## **What’s Included**


- Intelligent filter to avoid re-uploading already-processed videos (via staticData)
- Dynamic title extraction from TikTok video
- You control the video description (use for ads, credits, or SEO)
- Upload scheduling (via Schedule Trigger or Telegram Trigger)
- Append upload logs to a connected Google Sheets document
- Telegram Trigger support — send a username to your bot and watch the magic happen
- Easily adjustable through Set nodes (number of uploads, tags, etc.)

## 🎥 See It in Action

Want to know exactly how it works?

Watch the video demo https://www.youtube.com/watch?v=Aci40EpeGvA to see the workflow in action — from fetching TikToks to uploading YouTube Shorts and logging everything in Google Sheets.

📲 Telegram trigger included — you'll see how easy it is to run the whole process from your phone.

## Requirements

- An n8n instance (self-hosted or cloud)
- YouTube API credentials (OAuth2 setup included)
- Google Sheets API enabled
- Telegram bot token (optional)

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
