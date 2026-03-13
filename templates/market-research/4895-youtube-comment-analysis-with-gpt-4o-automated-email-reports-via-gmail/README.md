# 📊 YouTube comment analysis with GPT-4o & automated email reports via Gmail

> ⚡ **209 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Description:**

Leverage the power of ChatGPT and YouTube API to monitor, analyze, and report on video feedback automatically. This n8n automation template fetches comments from a YouTube video, performs advanced AI sentiment analysis, identifies key themes, and emails a professional report—all triggered from a Google Sheet.

**What This Template Does:**

- 🔁 Auto-Triggers from Google Sheets every minute
- 🎥 Fetches YouTube video details and top comments
- 🧠 Uses GPT-4o for comment sentiment analysis, theme detection, viewer questions & improvement insights
- 📧 Generates and sends an HTML email report with all key insights
- 📝 Marks videos as “Mail Sent” in the sheet to prevent duplicate reports

**Setup Requirements:**

- YouTube API Credentials
- OpenAI API Credentials 
- Gmail credentials for email delivery
- Google Sheet with video tracking

**Ideal for:**

YouTube creators, marketers, social media analysts, or agencies seeking automated YouTube comment sentiment analysis and actionable content insights—without writing a line of code.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, YouTube, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
