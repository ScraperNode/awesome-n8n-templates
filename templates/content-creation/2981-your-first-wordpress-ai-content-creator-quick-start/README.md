# 🎬 ✍️🌄 Your first Wordpress + AI content creator - quick start

> ⚡ **14,654 views** · 🎬 [Content Creation & Video](../)

## Description

# ✍️🌄 WordPress + AI Content Creator

This workflow automates the creation and publishing of multi-reading-level content for WordPress blogs. It leverages AI to generate optimized articles, automatically creates featured images, and provides versions of the content at different reading levels (Grade 2, 5, and 9).

## How It Works

### Content Generation & Processing 🎯
- Starts with a manual trigger and a user-defined blog topic
- Uses AI to create a structured blog post with proper HTML formatting
- Separates and validates the title and content components
- Saves a draft version to Google Drive for backup

### Multi-Reading Level Versions 📚
Automatically rewrites the content for different reading levels:
- Grade 9: Sophisticated language with appropriate metaphors
- Grade 5: Simplified with light humor and age-appropriate examples
- Grade 2: Basic language with simple metaphors and child-friendly explanations

### WordPress Integration 🌐
- Creates a draft post in WordPress with the Grade 9 version
- Generates a relevant featured image using Pollinations.ai
- Automatically uploads and sets the featured image
- Sends success/error notifications via Telegram

## Setup Steps

### Configure API Credentials 🔑
- Set up WordPress API connection
- Configure OpenAI API access
- Set up Google Drive integration
- Add Telegram bot credentials for notifications

### Customize Content Parameters ⚙️
- Adjust reading level prompts as needed
- Modify image generation settings
- Set WordPress post parameters

### Test and Deploy 🚀
- Run a test with a sample topic
- Verify all reading level versions
- Check WordPress draft creation
- Confirm notification system


This workflow is perfect for content creators who need to maintain a consistent blog presence while catering to different audience reading levels. It's especially useful for educational content, news sites, or any platform that needs to communicate complex topics to diverse audiences.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, Wordpress, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
