# 🎬 Sync Note.com articles to WordPress with OpenAI categorization and tags

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

## Description

Automatically publish your Note.com articles to WordPress with intelligent category and tag assignment powered by OpenAI.

## Who is this for

Content creators and bloggers who publish on Note.com and want to maintain a synced WordPress blog without manual copy-pasting.

## What this workflow does

1. Monitors your Note.com RSS feed for new articles (hourly)
2. Fetches full article content via Note.com's API
3. Uses OpenAI to analyze content and assign the best category and tags
4. Downloads all images (including the featured image) from Note.com
5. Uploads images to your WordPress media library
6. Replaces all image URLs in the article content
7. Publishes the post with the correct featured image

## Setup

1. Add your OpenAI API credentials
2. Add your WordPress credentials (using Application Password)
3. Update the RSS feed URL to your Note.com profile
4. Customize the AI prompt with your WordPress category and tag IDs

## Requirements

- Note.com account with published articles
- Self-hosted WordPress site with REST API enabled
- OpenAI API key
- WordPress Application Password

## Customization

Edit the system prompt in the AI node to match your WordPress taxonomy. You can also change the polling frequency and post status (draft/publish).

## 🔗 Nodes Used

HTTP Request, Wordpress, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
