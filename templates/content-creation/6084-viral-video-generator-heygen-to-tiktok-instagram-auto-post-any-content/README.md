# 🎬 Viral video generator: HeyGen to TikTok & Instagram auto-post + any content

> ⚡ **1,077 views** · 🎬 [Content Creation & Video](../)

## Description

# HeyGen AI Video Generation with Social Media Publishing

## Description

This workflow automates the entire process of creating AI-generated videos from trending news content and publishing them to social media platforms (Instagram and TikTok). It runs daily at 6 AM, finds viral-worthy news, generates scripts, creates AI avatar videos using HeyGen, and automatically publishes to multiple social platforms.

## How it works

### Content Discovery & Script Generation
1. **Schedule Trigger**: Runs daily at 6 AM or any time you choose. 
2. **Perplexity Search**: Finds trending news articles that would make good viral content
3. **Write Video Script**: Uses GPT-4.1 to create a 30-second video script with hook, main content, and CTA
4. **Extract URL**: Parses the article URL and script data for further processing

### Video Creation Pipeline
5. **Get Screenshot**: Uses ScreenshotOne API to create an animated scrolling video of the news article
6. **Upload to Cloudinary**: Temporarily stores the background video
7. **Write Video Caption**: Generates an engaging social media caption (150-200 characters)
8. **Prepare Avatar Data**: Combines all data needed for HeyGen video generation
9. **Create Avatar Video**: Sends request to HeyGen API to generate AI avatar video with:
   - Talking photo avatar
   - Text-to-speech voice
   - Background video from the news article
   - 720x1280 dimensions (vertical format)

### Data Management
10. **Prepare Sheets Data**: Formats video metadata
11. **Store to Google Sheets**: Saves video_id, caption, timestamp, and status for tracking

### Webhook Processing (Asynchronous)
12. **HeyGen Webhook**: Receives callback when video generation is complete
13. **Process HeyGen Callback**: Extracts video URLs and status from webhook
14. **Get Caption from Sheets**: Retrieves the associated caption using video_id
15. **Combine Data**: Merges video data with caption

### Social Media Publishing
16. **Upload to Blotato**: Uploads the completed video to Blotato media service
17. **Extract Blotato URL**: Gets the media URL for social posting
18. **Assign Social Media IDs**: Sets the account IDs for each platform
19. **INSTAGRAM**: Posts video to Instagram with caption
20. **TIKTOK**: Posts video to TikTok with caption and appropriate settings

## Setup

### Prerequisites
1. **API Keys Required**:
   - Perplexity API (for news search)
   - OpenAI API (for script and caption generation)
   - ScreenshotOne API (for article screenshots)
   - HeyGen API (for AI video generation)
   - Cloudinary account (for temporary video storage)
   - Blotato API (for social media posting)
   - Google Sheets API (for data tracking)

2. **HeyGen Setup**:
   - Create a talking photo avatar and get the `talking_photo_id`
   - Select a voice and get the `voice_id`
   - Set up a webhook endpoint in n8n for callbacks

3. **Google Sheets Setup**:
   - Create a new Google Sheet
   - Add headers: `video_id`, `caption`, `timestamp`, `status`
   - Get the sheet ID from the URL

4. **Social Media Setup**:
   - Connect Instagram and TikTok accounts to Blotato
   - Get the account IDs for each platform

### Configuration Steps

1. **Replace all placeholder values**:
   - `YOUR_TALKING_PHOTO_ID` - HeyGen avatar ID
   - `YOUR_VOICE_ID` - HeyGen voice ID
   - `YOUR_WEBHOOK_URL` - Your n8n webhook URL
   - `YOUR_GOOGLE_SHEET_ID` - Google Sheets document ID
   - `YOUR_INSTAGRAM_ACCOUNT_ID` - Blotato Instagram account ID
   - `YOUR_TIKTOK_ACCOUNT_ID` - Blotato TikTok account ID
   - `YOUR_CLOUD_NAME` - Cloudinary cloud name
   - `YOUR_UPLOAD_PRESET` - Cloudinary upload preset

2. **Add credentials in n8n**:
   - Perplexity API credentials
   - OpenAI API credentials
   - HeyGen API credentials (create custom API credentials with X-Api-Key)
   - Blotato API credentials
   - Google Sheets OAuth2
   - ScreenshotOne API credentials

3. **Configure the webhook**:
   - Copy the webhook URL from the "HeyGen Webhook" node
   - Use this URL in the "Create Avatar Video" node's callback_url

## Notes

- The workflow uses a two-part asynchronous process: initial video creation and webhook-based completion
- Videos are optimized for vertical format (720x1280) for mobile social media
- The Google Sheet acts as a database to link video IDs with captions
- All sensitive content (URLs, API keys) should be replaced with your own values
- Consider content moderation and copyright when selecting news sources
- Monitor API usage and costs, especially for HeyGen video generation

## Customization Options

- **Content Sources**: Modify the Perplexity search query to target specific news sources or topics
- **Video Style**: Adjust avatar position, scale, and background video settings
- **Voice Settings**: Change voice_id, speed, and pitch for different narration styles
- **Publishing Schedule**: Modify the Schedule Trigger for different times or frequencies
- **Social Platforms**: Add more platforms by duplicating the Blotato posting nodes

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, OpenAI, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
