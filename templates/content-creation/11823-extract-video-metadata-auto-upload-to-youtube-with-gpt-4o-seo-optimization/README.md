# 🎬 Extract video metadata & auto-upload to YouTube with GPT-4o SEO optimization

> ⚡ **306 views** · 🎬 [Content Creation & Video](../)

## Description

# Video Metadata Extraction & YouTube Auto-Upload with AI

Automatically process video files, extract metadata, generate AI-optimized titles/descriptions/tags, and upload directly to YouTube with proper categorization and thumbnail handling.

## Key Features

- **YouTube Node Integration**: Direct video upload to YouTube with full metadata
- **Binary Data Handling**: Proper video and thumbnail binary processing
- **AI-Powered SEO Optimization**: Generates engaging titles, descriptions, and tags
- **Video Metadata Extraction**: Analyzes video properties (duration, resolution, codec)
- **Thumbnail Processing**: Extracts or uploads custom thumbnails
- **Category Auto-Selection**: AI determines optimal YouTube category

## How It Works

1. **Video Intake**: Receives video file via webhook or cloud storage trigger
2. **Metadata Extraction**: Analyzes video file for technical properties
3. **AI Content Generation**: Creates SEO-optimized title, description, and tags
4. **Thumbnail Processing**: Extracts frame or uses provided thumbnail
5. **YouTube Upload**: Uploads video with all metadata
6. **Post-Upload Processing**: Retrieves video ID, creates playlist entry
7. **Notification**: Sends confirmation with video URL

## Required Credentials

- YouTube OAuth2 (for video upload)
- OpenAI API (for AI metadata generation)
- Google Drive or Dropbox (optional, for cloud storage triggers)
- Gmail (for notifications)
- Google Sheets (for tracking)

## Unique Features

- Uses **YouTube node** for direct video upload (rarely used in templates)
- **Binary data manipulation** for video and thumbnail handling
- **AI-generated SEO metadata** optimized for YouTube algorithm
- **Category detection** using AI classification
- **Merge node** with chooseBranch for conditional flows

## Example Request

```json
{
  "videoFile": "&lt;binary data&gt;",
  "projectName": "Product Demo 2024",
  "targetAudience": "developers",
  "language": "en",
  "thumbnailFile": "&lt;binary data&gt;",
  "playlistId": "PLxxxxxxxx",
  "publishTime": "2024-01-15T14:00:00Z"
}
```

## Supported Video Formats

- MP4, MOV, AVI, MKV, WebM
- Maximum file size: 128GB (YouTube limit)
- Recommended: MP4 with H.264 codec

## Output

```json
{
  "videoId": "dQw4w9WgXcQ",
  "videoUrl": "https://youtu.be/dQw4w9WgXcQ",
  "title": "AI-Generated Title",
  "description": "SEO-optimized description...",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "Science & Technology",
  "uploadStatus": "processed",
  "thumbnailUrl": "https://i.ytimg.com/vi/..."
}
```

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, YouTube, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
