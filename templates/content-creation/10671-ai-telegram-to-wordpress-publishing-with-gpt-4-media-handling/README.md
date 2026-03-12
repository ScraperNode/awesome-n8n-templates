# 🎬 AI Telegram-to-WordPress publishing with GPT-4 & media handling

> ⚡ **69 views** · 🎬 [Content Creation & Video](../)

## Description

## AI-powered automation that rewrites, enhances, and publishes Telegram RSS content directly to your WordPress news site, including image/video upload and category mapping.

### Who’s it for
This workflow is designed for content creators, news publishers, and social media managers who share updates on Telegram and want to automatically republish them as formatted articles on WordPress. It’s ideal for news portals, agencies, or blogs that manage content across multiple channels.

### Features
- Multi-Channel Telegram RSS Monitoring
- Automatic Category Assignment
- Duplicate Prevention System (GUID Matching)
- Media Download + Type Detection (Image / Video)
- Full AI Article Rewriting (GPT-4O)
-- Stage 1: Full rewrite with structure
-- Stage 2: Context enhancement
- Media Handling Logic
- WordPress Publish


### How it works / What it does
- Fetches new posts from a Telegram channel feed (via RSS).
- Uses OpenAI to rewrite the text into a polished news-style article.
- Detects whether the content includes images or videos and downloads them.
- Uploads the media to WordPress and links it to the post.
- Automatically publishes the formatted article to WordPress with the correct category and excerpt.

### Set up steps

- Setup takes around 10–15 minutes.
- You’ll need API keys for OpenAI and WordPress Application Passwords.
- Add your Telegram RSS feed URL and WordPress site URL in the relevant nodes.
- (Optional) Adjust tone or rewrite style in the OpenAI node and category mapping in the Switch node.
- All configuration details are included in sticky notes inside the workflow.


### Requirements

- WordPress site with REST API access and Application Password
- OpenAI API key
- Telegram channels RSS URL

### How to customize the workflow
You can easily adjust the writing style in the OpenAI node, change categories in the Switch node, or schedule how often the workflow checks Telegram for new posts.

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
