# 📊 AI-powered viral trend analysis for TikTok and Instagram with GPT-4

> ⚡ **1,649 views** · 📊 [Market Research & Insights](../)

## Description

Automatically discover, analyze, and report the most viral TikTok and Instagram videos in your niche every day. This workflow leverages AI and [Apify](https://apify.com/) to help you stay ahead of social media trends.

---

## What This Workflow Does

- **Scrapes trending videos** from TikTok and Instagram using [Apify](https://apify.com/).
- **Filters and analyzes** content based on engagement, growth rate, and recency.
- **Uses AI (OpenAI GPT-4 Vision & GPT-4)** to provide visual and trend analysis for each video.
- **Identifies “super viral” content** and sends instant Slack alerts.
- **Saves results to Google Sheets** and sends a daily email report with the top trends.

---

## Use Cases

- **Social Media Managers:** Instantly spot viral trends to inform your content strategy.
- **Content Creators:** Get daily inspiration from the fastest-growing videos in your niche.
- **Marketing Teams:** Monitor competitor performance and adapt to new trends quickly.
- **Agencies:** Automate trend research and reporting for multiple clients.

---

## How to Configure

1. **Workflow Configuration:**  
   Add your API keys, set engagement thresholds, and adjust main workflow settings.

2. **Search Config:**  
   Enter your keywords, hashtags, language, and time window for content discovery.

3. **Scrape TikTok & Scrape Instagram:**  
   Set up your [Apify](https://apify.com/) API credentials and endpoints.

4. **Save to Google Sheets:**  
   Connect your Google account and select the destination spreadsheet.

5. **Send Daily Digest Email:**  
   Add the recipient’s email address and customize the message if needed.

6. **Send Super Viral Alert (optional):**  
   Configure your Slack webhook for instant notifications.

&gt; **Tip:** Test each integration and double-check your credentials before activating the workflow.

---

## Requirements

- [Apify](https://apify.com/) account and API token
- Google account for Sheets integration
- OpenAI API key (for AI analysis)
- Slack webhook URL (optional, for viral alerts)

---

Stay ahead of the curve and never miss a viral trend again!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
