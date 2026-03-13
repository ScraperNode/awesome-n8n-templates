# 🎬 Generate social media content from video transcripts with Gemini AI & Airtable

> ⚡ **2,489 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🎬 Social Media Content Generator

## Workflow Overview
Automated social media content creation from video transcripts

### 🎯 Trigger: Airtable Webhook
- **Action**: Receives webhook from Airtable automation
- **Data**: RecordId and action type (e.g., "post-ig")
- **Purpose**: Starts the content generation pipeline

### 📊 Step 1: Fetch Record
- **Node**: Airtable (Get Record)
- **Action**: Retrieves full record data using RecordId
- **Data**: Name, transcript, and other fields

### 📁 Step 2: Create Google Drive Folder
- **Node**: Google Drive (Create Folder)
- **Action**: Creates blue folder in /tutorials directory
- **Name**: Uses record Name field
- **Updates**: Stores folder ID back to Airtable

### 🤖 Step 3: AI Content Analysis
- **Node**: AI Agent with Google Gemini 2.5 Flash
- **Input**: Video transcript from Airtable
- **Structured Output**: JSON with all social formats:
  - YouTube title & description
  - YouTube thumbnail text
  - Twitter thread (array)
  - LinkedIn post
  - Instagram caption
  - TikTok caption
  - YouTube Shorts caption
  - Relevant tags

### 💾 Step 4: Save Transcript File
- **Node**: Google Drive (Create from Text)
- **Action**: Saves transcript as text file
- **Location**: Inside the created folder
- **Name**: Uses record Name field

### 📋 Step 5: Update Airtable Results
- **Node**: Airtable (Update Record)
- **Data**: All AI-generated social media content
- **Special**: Twitter thread array joined with newlines

---

**🎯 Result**: Complete social media content suite ready for multi-platform publishing, organized in Google Drive with all data stored in Airtable.

## 🔗 Nodes Used

Airtable, Webhook, Google Drive, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
