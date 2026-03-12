# 🎬 Generate multi-platform content with OpenAI, Tavily Research & Supabase Storage

> ⚡ **390 views** · 🎬 [Content Creation & Video](../)

## Description

# Automated Content Page Generator with AI, Tavily Research, and Supabase Storage

![workflow1.png](fileId:2626)

&gt; **⚠️ Self-Hosted Disclaimer**: This template requires self-hosted n8n installation and external service credentials (OpenAI, Tavily, Google Drive, NextCloud, Supabase). It cannot run on n8n Cloud due to dependency requirements.

## Overview

Transform simple topic inputs into professional, multi-platform content automatically. This workflow combines AI-powered content generation with intelligent research and seamless storage integration to create website content, blog articles, and landing pages optimized for different audiences.

## Key Features

- **Automated Research**: Uses Tavily's advanced search to gather relevant, up-to-date information
- **Multi-Platform Content**: Generates optimized content for websites, blogs, and landing pages
- **Image Management**: Downloads from Google Drive and uploads to NextCloud with public URL generation
- **Database Integration**: Stores all content in Supabase for easy retrieval
- **Error Handling**: Built-in error management workflow for reliability
- **Content Optimization**: AI-driven content strategy with trend analysis and SEO optimization

## Required Services & APIs

### Core Services
- **n8n**: Self-hosted instance (required)
- **OpenAI**: GPT-4 API access for content generation
- **Tavily**: Research API for content discovery
- **Google Drive**: Image storage and retrieval
- **Google Sheets**: Content input and workflow triggering
- **NextCloud**: Image hosting and public URL generation
- **Supabase**: Database storage for generated content

## Setup Instructions

### ## Prerequisites
Before setting up this workflow, ensure you have:
- Self-hosted n8n installation
- API credentials for all required services
- Database table created in Supabase

### ## Step 1: Service Account Configuration

#### OpenAI Setup
1. Create an OpenAI account at [platform.openai.com](https://platform.openai.com)
2. Generate API key from the API Keys section
3. In n8n, create new OpenAI credentials using your API key
4. Test connection to ensure GPT-4 access

#### Tavily Research Setup
1. Sign up at [tavily.com](https://tavily.com)
2. Get your API key from the dashboard
3. Add Tavily credentials in n8n
4. Configure search depth to "advanced" for best results

#### Google Services Setup
1. Create Google Cloud Project
2. Enable Google Drive API and Google Sheets API
3. Create OAuth2 credentials
4. Configure Google Drive and Google Sheets credentials in n8n
5. Share your input spreadsheet with the service account

#### NextCloud Setup
1. Install NextCloud or use hosted solution
2. Create application password for API access
3. Configure NextCloud credentials in n8n
4. Create `/images/` folder for content storage

#### Supabase Setup
1. Create Supabase project at [supabase.com](https://supabase.com)
2. Create table with the following structure:
```sql
CREATE TABLE works (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```
3. Get project URL and service key from settings
4. Configure Supabase credentials in n8n

### ## Step 2: Google Sheets Input Setup

Create a Google Sheets document with the following columns:
- **TITLE**: Topic or title for content generation
- **IMAGE_URL**: Google Drive sharing URL for associated image

Example format:
```
TITLE                           | IMAGE_URL
AI Chatbot Implementation       | https://drive.google.com/file/d/your-file-id/view
Digital Marketing Trends 2024   | https://drive.google.com/file/d/another-file-id/view
```

### ## Step 3: Workflow Import and Configuration

1. Import the workflow JSON into your n8n instance
2. Configure all credential connections:
   - Link OpenAI credentials to "OpenAI_GPT4_Model" node
   - Link Tavily credentials to "Tavily_Research_Agent" node
   - Link Google credentials to "Google_Sheets_Trigger" and "Google_Drive_Image_Downloader" nodes
   - Link NextCloud credentials to "NextCloud_Image_Uploader" and "NextCloud_Public_URL_Generator" nodes
   - Link Supabase credentials to "Supabase_Content_Storage" node

3. Update the Google Sheets Trigger node:
   - Set your spreadsheet ID in the documentId field
   - Configure polling frequency (default: every minute)

4. Test each node connection individually before activating

### ## Step 4: Error Handler Setup (Optional)

The workflow references an error handler workflow (`GWQ4UI1i3Z0jp3GF`). Either:
- Create a simple error notification workflow with this ID
- Remove the error handling references if not needed
- Update the workflow ID to match your error handler

### ## Step 5: Workflow Activation

1. Save all node configurations
2. Test the workflow with a sample row in your Google Sheet
3. Verify content generation and storage in Supabase
4. Activate the workflow for continuous monitoring

## How It Works

### ## Workflow Process

1. **Trigger**: Google Sheets monitors for new rows with content topics
2. **Research**: Tavily searches for 3 relevant articles about the topic
3. **Content Generation**: AI agent creates multi-platform content (website, blog, landing page)
4. **Content Cleaning**: Text processing removes formatting artifacts
5. **Image Processing**: Downloads image from Google Drive, uploads to NextCloud
6. **URL Generation**: Creates public sharing links for images
7. **Storage**: Saves final content package to Supabase database

### ## Content Output Structure

Each execution generates:
- **Optimized Title**: SEO-friendly, platform-appropriate headline
- **Multi-Platform Content**: 
  - Website content (professional, authority-building)
  - Blog content (educational, SEO-optimized)
  - Landing page content (conversion-focused)
- **Category Classification**: Automated content categorization
- **Image Assets**: Processed and publicly accessible images

## Customization Options

### ## Content Strategy Modification
- Edit the AI agent's system message to change content style
- Adjust character limits for different platform requirements
- Modify category classifications for your industry

### ## Research Parameters
- Change Tavily search depth (basic, advanced)
- Adjust number of research sources (1-10)
- Modify search topic focus

### ## Storage Configuration
- Update Supabase table structure for additional fields
- Change NextCloud folder organization
- Modify image naming conventions

## Troubleshooting

### ## Common Issues

**Workflow not triggering:**
- Check Google Sheets permissions
- Verify polling frequency settings
- Ensure spreadsheet format matches requirements

**Content generation errors:**
- Verify OpenAI API key and credits
- Check GPT-4 model access
- Review system message formatting

**Image processing failures:**
- Confirm Google Drive sharing permissions
- Check NextCloud storage space and permissions
- Verify file formats are supported

**Database storage issues:**
- Validate Supabase table structure
- Check API key permissions
- Review field mapping in storage node

### ## Performance Optimization
- Adjust polling frequency based on your content volume
- Monitor API usage to stay within limits
- Consider batch processing for high-volume scenarios

## Support and Updates

This template is designed for self-hosted n8n environments and requires technical setup. For issues:
1. Check n8n community forums
2. Review service-specific documentation
3. Test individual nodes in isolation
4. Monitor execution logs for detailed error information

## 🔗 Nodes Used

Nextcloud, Google Drive, Execute Sub-workflow, Supabase, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
