# 📱 Upload Instagram Reels from Google Sheets with DeepSeek AI captions

> ⚡ **45 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

### Overview
This n8n workflow template automates the entire process of publishing Instagram Reels from content stored in Google Sheets and Google Drive. It's designed for content creators, social media managers, and businesses who maintain a content calendar in spreadsheets and need automated publishing with AI-generated captions.
 
### Workflow Steps

#### 1. Trigger Phase
- **Schedule Trigger**: Runs every 12 hours (configurable)
- **Google Sheets Trigger**: Alternatively triggers when new rows are added
- Retrieves the next unposted video from the spreadsheet (where POSTED = FALSE)

#### 2. Content Preparation
- Downloads video from Google Drive using file ID from spreadsheet
- Processes video with FFmpeg to add custom text overlays:
  - Title text overlay
  - Numbering overlay
  - Sales hook text
- Sends processed video using SSH 

#### 3. Caption & Metadata Generation
- Extracts video filename and metadata
- Uses AI Agent (DeepSeek) to generate engaging Instagram captions:
  - 2-4 engaging sentences
  - 3-5 relevant hashtags
  - Clear call-to-action
  - Under 150 characters total
- Stores caption and metadata in Airtable for record-keeping

#### 4. Instagram Publishing
- Creates Facebook/Instagram media container with video URL and caption
- Waits and polls for video processing completion
- Publishes the Reel when ready
- Updates Google Sheet to mark content as posted (POSTED = TRUE)

#### 5. Cleanup
- Removes temporary video files from disk

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Google Drive, Facebook Graph API, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
