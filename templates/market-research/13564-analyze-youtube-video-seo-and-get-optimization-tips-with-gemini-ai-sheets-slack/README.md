# 📊 Analyze YouTube video SEO and get optimization tips with Gemini AI, Sheets, Slack, and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Analyze YouTube video SEO and get optimization tips with Gemini AI

## Who is this for
Content creators, YouTubers, marketing agencies, and social media managers who want to optimize their YouTube videos for better discoverability and engagement. Perfect for teams managing multiple channels or creators who want data-driven SEO insights.

## How it works
The workflow starts with a Form Trigger where users paste any YouTube video URL. A Code node extracts the video ID, then two HTTP Request nodes fetch video metadata (title, description, tags, statistics) and captions from the YouTube Data API v3. Another Code node formats this data and calculates basic SEO scores.

Google Gemini AI analyzes the current SEO status and provides specific optimization recommendations including title variations, tag strategies, description improvements, thumbnail tips, and competitive keywords. A final Code node parses the AI response and structures it for reporting.

The results are automatically saved to Google Sheets for tracking, shared with your team via Slack notification, and emailed directly to content creators with actionable insights.

## How to set up  
1. Enable YouTube Data API v3 in Google Cloud Console and add the API key to both HTTP Request nodes
2. Replace the Google Sheets document ID and configure column headers in the spreadsheet
3. Set up Slack webhook and channel ID for team notifications
4. Configure Gmail credentials and update sender/recipient email addresses
5. Add your Google AI Platform credentials to the Gemini model node

## Requirements
- YouTube Data API v3 key (free tier available)
- Google Sheets access
- Slack workspace (optional)
- Gmail account
- Google AI Platform account for Gemini

## How to customize
Adjust the SEO scoring logic in the "Format SEO Data" node, modify the AI prompt for different analysis focuses, or change the reporting format in the email template. You can also add more output channels like Discord or Microsoft Teams.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Basic LLM Chain, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
