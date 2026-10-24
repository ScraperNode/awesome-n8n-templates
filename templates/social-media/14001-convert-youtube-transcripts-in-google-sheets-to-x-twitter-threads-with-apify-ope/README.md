# 📱 Convert YouTube transcripts in Google Sheets to X (Twitter) threads with Apify, OpenAI and RapidAPI

> ⚡ **33 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow lets you scrape and convert youtube video transcript to twitter thread using Google sheets, [Apify](https://apify.com?fpr=ve081) and [RapidAPI](https://rapidapi.com)

### Workflow summary
1. Get unprocessed youtube video link from google sheet
2. Use [youtube trascript scraper](https://apify.com/supreme_coder/youtube-transcript-scraper?fpr=ve081&fp_sid=n8n) to extract transcript from youtube video
3. Feed the youtube transcript to OpenAI model with advanced prompt to convert the transcript to twitter friendly posts/thread
4. Post the thread to 𝕏 from your account using your cookies for authentication 
5. Mark the video as Processed so that it won't be processed again 

### Features
- Fast and cheap (mostly free) APIs 
- Advanced prompts to avoid tweets sound like AI converted from youtube
- Customizable AI Model

### Prompt used

**System:**

You are an expert Twitter thread creator. Your task is to convert YouTube video transcripts into engaging, viral-worthy Twitter threads. Each tweet must be under 280 characters, punchy, and valuable on its own. Use emojis sparingly for emphasis and include line breaks for readability. Always create a hook tweet, 5-10 insight tweets, and a call-to-action tweet.

**User:**

Convert this YouTube video transcript into a Twitter thread. Make sure it doesn't sound like it is direct conversion from youtube. For example do not make sentences that indicates you are perforing an activity in presense tense. 

Create a thread with:
1. A hook tweet that grabs attention. Show results first with numbers 
2. 5-10 tweets breaking down key insights
3. A final call-to-action tweet

Return as structured JSON with the thread array.

Video Title: {{Title}}


Transcript:
{{Transcript}}

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
