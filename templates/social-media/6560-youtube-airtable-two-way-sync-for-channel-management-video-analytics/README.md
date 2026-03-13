# 📱 YouTube-Airtable two-way sync for channel management & video analytics

> ⚡ **133 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

Automatically sync your YouTube channel videos with Airtable for comprehensive content management, analytics tracking, and bulk video updates.

## How it works

This workflow creates a powerful bridge between your YouTube channel and Airtable database, enabling you to:

1. **Fetch & Analyze**: Retrieves all videos from your YouTube channel and extracts detailed metadata including views, likes, duration, and publishing information
2. **Smart Filtering**: Automatically filters videos based on your criteria (public videos over 3 minutes) to focus on meaningful content
3. **Database Sync**: Creates organized records in Airtable with all video data formatted for easy analysis and reporting
4. **Bulk Updates**: Provides a secondary workflow path to update multiple YouTube videos directly from your Airtable data

The workflow processes videos in batches to prevent API rate limiting and ensure reliable execution, making it suitable for channels of any size.

## Set up steps

**Time required:** 15-20 minutes

### Prerequisites
- YouTube channel with videos
- Airtable account with a prepared base
- Basic understanding of API credentials

### 1. YouTube API Setup (5 minutes)
- Create a Google Cloud project and enable YouTube Data API v3
- Generate OAuth2 credentials for YouTube access
- Configure your OAuth consent screen

### 2. Airtable Configuration (8 minutes)
- Create an Airtable base with two tables:
  - **Main table** for video storage with fields: VideoID, Video Name, Publishing Date, Description, Thumbnail, Views, Likes, Duration
  - **Vid_Update table** for videos you want to update on YouTube
- Generate a Personal Access Token in Airtable
- Note your base ID and table IDs

### 3. n8n Workflow Setup (5 minutes)
- Import the workflow into your n8n instance
- Add your YouTube OAuth2 credentials
- Add your Airtable Personal Access Token
- Update the Airtable base and table IDs in the workflow nodes
- Test the connection to both services

### 4. Customization (2 minutes)
- Adjust the video filter criteria if needed (currently set to public videos over 3 minutes)
- Modify the region code if your audience is outside India
- Set up scheduling if you want automatic syncing

## Key Features

- **Batch Processing**: Handles large video libraries without API timeouts
- **Data Transformation**: Converts YouTube's ISO 8601 duration format to seconds for easy analysis
- **Dual Functionality**: Both one-way sync (YouTube → Airtable) and update capability (Airtable → YouTube)
- **Smart Filtering**: Focuses on public, substantial content (&gt;3 minutes)
- **Error Handling**: Robust processing with built-in safeguards

## Use Cases

- Content creators tracking video performance
- Marketing teams analyzing YouTube metrics
- Agencies managing multiple channels
- Bulk video metadata updates
- Content calendar planning and analysis

## 🔗 Nodes Used

Airtable, YouTube, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
