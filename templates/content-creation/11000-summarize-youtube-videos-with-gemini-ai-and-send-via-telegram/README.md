# 🎬 Summarize YouTube videos with Gemini AI and send via Telegram

> ⚡ **182 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This automated TLDW (Too Long; Didn't Watch) generator using Decodo's scraping API to extract complete video transcripts and metadata, then uses Google Gemini 3 to create intelligent summaries with key points, chapters breakdown, tools mentioned, and actionable takeaways—eliminating hours of manual note-taking and video watching.

## Why Use This Workflow?

**Time Savings:** Convert a 2-hour video into a readable 5-minute summary, reducing research time by 95%  
**Comprehensive Coverage:** Captures key points, chapters, tools, quotes, and actionable steps that manual notes often miss  
**Instant Accessibility:** Receive structured summaries directly in Telegram within 30-60 seconds of sharing a link  
**Multi-Language Support:** Process transcripts in multiple languages supported by YouTube's auto-caption system  

## Ideal For

- **Content Creators & Researchers:** Quickly extract insights from competitor videos, educational content, or industry talks without watching hours of footage
- **Students & Educators:** Generate study notes from lecture recordings, online courses, or tutorial videos with chapter-based breakdowns
- **Marketing Teams:** Analyze competitor content strategies, extract tools and techniques mentioned, and identify trending topics across multiple videos
- **Busy Professionals:** Stay updated with conference talks, webinars, or industry updates by reading summaries instead of watching full recordings

## How It Works

1. **Trigger:** User sends any YouTube URL (youtube.com or youtu.be) to a configured Telegram bot
2. **Data Collection:** Workflow extracts video ID and simultaneously fetches full transcript and metadata (title, channel, views, duration, chapters, tags) via Decodo API
3. **Processing:** Raw transcript data is extracted and cleaned, while metadata is parsed into structured fields including formatted statistics and chapter timestamps
4. **AI Processing:** Google Gemini Flash analyzes the transcript to generate a structured summary covering one-line overview, key points, main topics by chapter, tools mentioned, target audience, practical takeaways, and notable quotes

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| Telegram Bot API | Essential | Receives video links and delivers summaries |
| Decodo Scraper API | Essential | Extracts YouTube transcripts and metadata |
| Google Gemini API | Essential | AI-powered summary generation |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin)
2. **Configure credentials:**
   - **Telegram Bot API**: Create a bot via [@BotFather](https://t.me/botfather) on Telegram, obtain the API token, and configure in n8n Telegram credentials
   - **Decodo API**: Sign up at [Decodo Dashboard](https://dashboard.decodo.com/web-scraping-api/scraper?target=youtube_transcript), get your API key, create HTTP Header Auth credential with header name "Authorization" and value "Basic [YOUR_API_KEY]"
   - **Google Gemini API**: Obtain API key from [Google AI Studio](https://makersuite.google.com/app/apikey), configure in n8n Google Palm API credentials
3. **Update environment-specific values:**
   - In the "Alert Admin" node, replace `YOUR_CHAT_ID` with your personal Telegram user ID for error notifications
   - Optionally adjust the `languageCode` in "Set: Video ID & Config" node (default: "en")
4. **Customize settings:**
   - Modify the AI prompt in "Generate TLDR" node to adjust summary structure and depth
5. **Test execution:**
   - Send a YouTube link to your Telegram bot
   - Verify you receive the "Processing..." notification, video info card, and formatted summary chunks

## Technical Details

### Workflow Logic

The workflow employs parallel processing for efficiency. Transcript and metadata are fetched simultaneously after video ID extraction. 

Once both API calls complete, the transcript feeds directly into Gemini AI while metadata is parsed separately. The merge node combines AI output with structured metadata before splitting into Telegram-friendly chunks. 

Error handling is isolated on a separate branch triggered by any node failure, formatting error details and alerting admins without disrupting the main flow.

## Customization Options

**Basic Adjustments:**
- **Language Selection**: Change `languageCode` from "en" to "id", "es", "fr", etc. to fetch transcripts in different languages (YouTube must have captions available)
- **Summary Style**: Edit the prompt in "Generate TLDR" to focus on specific aspects (e.g., "focus only on technical tools mentioned" or "create a summary for beginners")
- **Message Length**: Adjust `maxCharsPerChunk` (currently 4000) to create longer or shorter message splits based on preference

**Advanced Enhancements:**
- **Database Storage**: Add a Postgres/Airtable node after "Merge: Data + Summary" to archive all summaries with timestamps and user IDs for searchable knowledge base (medium complexity)
- **Multi-Model Comparison**: Duplicate the "Generate TLDR" chain and connect GPT-4 or Claude, merge results to show different AI perspectives on the same video (high complexity)
- **Auto-Translation**: Insert a translation node after summary generation to deliver summaries in user's preferred language automatically (medium complexity)

## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| "Not a YouTube URL" error | URL format not recognized | Ensure UR sent contains youtube.com or youtu.be |
| No transcript available | Video lacks captions or wrong language | Check video has auto-generated or manual captions change `languageCode` to match available options |
| Decodo API 401/403 error | Invalid or expired API key | Verify API key in HTTP Header Auth credential. regenerate if needed from Decodo dashboard ||
| Error notifications not received | Wrong chat ID in Alert Admin node | Get your Telegram user ID from @userinfobot and update the node |

## Use Case Examples

### Scenario 1: Marketing Agency Competitive Analysis
**Challenge:** Agency needs to analyze 50+ competitor YouTube videos monthly to identify content strategies, tools used, and messaging angles—watching all videos would require 80+ hours  
**Solution:** Drop youtube links into a shared Telegram group with the bot. Summaries are generated instantly, highlighting tools mentioned, key talking points, and target audience insights  
**Result:** Research time reduced from 80 hours to 6 hours monthly (93% time savings), with searchable archive of all competitor content strategies

---

**Created by:** [Khaisa Studio](https://khaisa.studio)  
**Category:** AI-Powered Automation
**Tags:** YouTube, AI, Telegram, Summarization, Content Analysis, Decodo, Gemini  
**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**  
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
