# 🎬 Spot social media trends and generate post ideas with Claude and Google Sheets

> ⚡ **687 views** · 🎬 [Content Creation & Video](../)

## Description

This AI-powered workflow monitors trending topics across multiple social platforms, generates creative post ideas with captions and visual suggestions, and recommends optimal posting times based on engagement data.

### How it works

1. **Trigger** - Runs on schedule or webhook to start trend monitoring
2. **Fetch Trends** - Pulls trending topics from Twitter, Reddit, Google Trends
3. **Wait & Aggregate** - Allows trend data to settle for better analysis
4. **Filter & Parse** - JavaScript code filters relevant trends for your niche
5. **AI Content Generation** - Claude creates post ideas, captions, hashtags
6. **Visual Suggestions** - Recommends image/video concepts
7. **Wait for Analysis** - Pauses before engagement time calculation
8. **Optimal Timing** - JavaScript calculates best posting times
9. **Log & Track** - Records all ideas in Google Sheets
10. **Response** - Returns ready-to-use content ideas

### Setup Steps

1. Import this workflow into your n8n instance
2. Configure credentials:
   - **Twitter API v2** - For trending hashtags and topics
   - **Reddit API** - For subreddit trending posts
   - **Google Trends (no auth)** - For search trends
   - **Anthropic API** - For Claude AI content generation
   - **Google Sheets** - To track generated ideas
3. Update your brand profile and niche in the config node
4. Set your target social platforms and audience
5. Activate the workflow

### Sample Trigger Payload
```json
{
  "platforms": ["twitter", "instagram", "linkedin"],
  "niche": "AI & Technology",
  "trendSources": ["twitter", "reddit", "google"],
  "contentTypes": ["educational", "entertaining", "news"],
  "targetAudience": "tech professionals, 25-45",
  "brandVoice": "professional yet approachable",
  "minTrendScore": 60,
  "maxIdeasPerTrend": 3,
  "includeVisuals": true
}
```

### Features

- **Multi-platform trend monitoring** (Twitter, Reddit, Google Trends)
- **AI-powered content generation** with brand voice matching
- **Visual concept suggestions** for each post idea
- **Optimal timing recommendations** based on engagement patterns
- **Hashtag strategy** with trending and niche tags
- **Content calendar integration** via Google Sheets
- **Duplicate prevention** - tracks used trends
- **Performance tracking** - logs which ideas perform best

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
