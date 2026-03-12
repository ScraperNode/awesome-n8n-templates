# 🎬 Auto-publish PR news articles with featured images to WordPress from RSS

> ⚡ **3,381 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the process of publishing PR News articles to the WordPress website.

🔧 How it works:

Uses an RSS Feed Trigger to monitor new PR News articles.

Extracts the article content and parses the featured image URL.

Uploads the image to WordPress as a media item.

Creates a new draft post on the WordPress site using the article's content and sets the uploaded image as the featured image.

✅ Features:

Polls RSS feed every minute.

Automatically extracts and sets featured images.

Posts are created as drafts for editorial review.

📝 Requirements:

WordPress REST API access with media upload permission.

Active WordPress credentials in n8n.

Perfect for teams who want to streamline PR content publishing without manual effort.

## 🔗 Nodes Used

HTTP Request, Wordpress, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
