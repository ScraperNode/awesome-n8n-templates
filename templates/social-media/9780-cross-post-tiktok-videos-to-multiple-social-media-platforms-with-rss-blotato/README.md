# 📱 Cross-post Tiktok videos to multiple social media platforms with RSS & Blotato

> ⚡ **731 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Description
This automation detects when you post a Tiktok video, automatically downloads the video without watermark, stores it in Google Drive, and reposts your Tiktok video to other social media platforms. All on autopilot. So you can grow your presence on multiple platforms, without more work. You can also easily add steps to customize captions per platform.

## Youtube Tutorial
https://www.youtube.com/watch?v=yHbyEb-fBGY

## 📄 Documentation
[Full Step-by-Step Documentation](https://help.blotato.com/api/templates/8-repurpose-tiktoks-on-autopilot)

## How It Works

**1. Trigger**
- RSS feed triggers when you post a new Tiktok video

**2. Fetch Video**
- Download the newly posted Tiktok video (without watermark)  
- Store video in Google Drive

**3. Publish to Social Media**
- Connect Blotato to your social accounts  
- Choose your social accounts  
- Post immediately or schedule for later  

## Setup & Required Accounts
- Enable "Verified Community Nodes" in your n8n Admin Panel  
- Install "Blotato" verified community node  
- Sign up for [Blotato](https://blotato.com): create API key at Dashboard → [API Keys](https://my.blotato.com/settings/api), then create your Blotato credential and connect your social accounts
- Sign up for [RSS.app](https://rss.app): create feed from your TikTok profile, copy RSS URL into the RSS Feed Trigger node, and set "Number of Posts" to 1  
- Google Drive account to store downloaded Tiktok videos

## Tips & Tricks
- Ensure your RSS feed outputs only 1 item at a time  
- For multiple posts within an hour, set RSS.app refresh to 15 minutes (paid plan)  
- While testing: enable only 1 social platform, deactivate others, and consider scheduling posts in the future  
- After the workflow finishes, check your social account for the final post; if successful, enable another social media node and continue testing

## Troubleshooting
Check your [Blotato API Dashboard](https://my.blotato.com/api-dashboard) to see every request, response, and error. Click on a request to see the details.

## Need Help?
In the Blotato web app, click the orange button on the bottom right corner. This opens the Support messenger where I help answer technical questions.

Connect with me: [Linkedin](https://www.linkedin.com/in/sabrinaramonov) | [Youtube](https://www.youtube.com/@sabrina_ramonov)

## 🔗 Nodes Used

HTTP Request, Google Drive, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
