# 📊 YouTube channel monitor with Gemini AI transcription & summarization

> ⚡ **221 views** · 📊 [Market Research & Insights](../)

## Description

# This n8n workflow monitors YouTube channels 24/7, transcribes new videos with AI, and scores them by relevance—all automatically saved to Google Sheets.


## About

This n8n workflow automatically monitors YouTube channels, transcribes new videos, and generates AI-powered summaries with relevance scoring. It pulls channel URLs from a Google Sheet, fetches recent videos (last 14 days), transcribes them using Google Gemini, and saves detailed summaries back to your spreadsheet with relevance scores based on custom criteria.

## How It Works

1. **Schedule Trigger**: Runs weekly (every 7 days at 7:05 AM)
2. **Fetch Channels**: Reads channel URLs and filter criteria from Google Sheets
3. **Process Channels**: Loops through each channel and fetches recent videos via YouTube RSS feeds
4. **Filter Videos**: Only processes videos from the last 14 days that don't already exist in the database
5. **Transcribe**: Uses Google Gemini API to transcribe video content
6. **Summarize & Score**: AI agent analyzes transcripts against your criteria and generates:
   - Full 500-word summary in markdown
   - Short bullet-point summary
   - Topic classification
   - Relevance score (1-10)
   - Relevance reasoning
7. **Save Results**: Appends or updates video data in Google Sheets

## Setup Instructions

### Prerequisites
- n8n instance (cloud or self-hosted)
- Google account with Sheets API access
- Google Gemini API key

### Step 1: Google Sheets Setup

Create a new Google Spreadsheet with two sheets:

**Google Sheet Template**: [Click here to access](https://docs.google.com/spreadsheets/d/1CvRiadHGvfLOduLUZZThc-_g339q9BQXb_P8ZUCchIo/edit?usp=sharing)
   - Make a copy to your Google Drive
   - Configure the two sheets as described below

**Sheet 1: "channels"**
- Column A: `category` (e.g., "AI Tools", "Marketing")
- Column B: `channels` (comma-separated YouTube channel URLs)
- Column C: `video filter criteria` (describe what makes videos relevant)

**Sheet 2: "videos"**
- Columns: `id`, `title`, `video url`, `date`, `channel`, `category`, `topic`, `summary`, `short sumary`, `transcript`, `relevance score`, `relevance reason`

### Step 2: Configure n8n Workflow

1. Import the workflow JSON into n8n
2. **Google Sheets Authentication**:
   - Connect your Google account in both "Get row(s) in sheet" nodes
   - Update the document ID to match your spreadsheet
3. **Gemini API Key**:
   - In the "set channel" node, replace the placeholder API key with your own Gemini API key
   - Get your key from: https://makersuite.google.com/app/apikey

### Step 3: Adjust Settings (Optional)

- **Video lookback period**: Edit line 6 in "Videos Posted in Last X days" node (default: 14 days)
- **Videos per channel**: Modify the "Limit" node (default: 4 videos)
- **Schedule**: Change the "Schedule Trigger5" node timing as needed
- **Wait times**: Adjust wait nodes to respect API rate limits

### Step 4: Test & Activate

1. Add a test channel URL to your "channels" sheet
2. Run the workflow manually to verify it works
3. Activate the workflow to run on schedule

## Notes

- The workflow includes rate limiting (wait nodes) to avoid API throttling
- Videos are checked for duplicates before processing
- Failed transcriptions continue to the next video without stopping the workflow
- Results are automatically saved to Google Sheets after each video processes

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
