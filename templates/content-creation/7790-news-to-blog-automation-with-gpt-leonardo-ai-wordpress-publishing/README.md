# 🎬 News-to-blog automation with GPT, Leonardo AI & WordPress publishing

> ⚡ **579 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the end-to-end process of generating and publishing blog posts from live news headlines.

Fetch Headlines – Collects the latest top stories from Google News and GDELT, merges them, and removes duplicates.

Headline Selection & Classification – Picks top headlines, checks relevance, and applies style rules.

Draft Generation – Uses GPT to create an initial blog article in a natural, human tone.

Tone & Expansion – Refines the draft for clarity, length, and style (customized to your own writing voice).

Image Generation – Sends the article topic to Leonardo AI, waits for the image to finish rendering, and retrieves the final asset.

Publish to WordPress – Uploads the generated image, assigns alt-text, creates a WordPress post with the article and image, and logs the publication to Google Sheets for tracking.

Purpose

Designed for hands-off content automation, this workflow continuously produces SEO-ready blog posts enriched with AI-generated images and publishes them directly to WordPress. It’s ideal for:

Running an automated blog that reacts to trending news.

Keeping websites updated with fresh, styled content without manual effort.

Creating a repeatable content engine that combines research, writing, and media assets in one pipeline.


Setup Instructions:
Add Your Credentials

Go to Credentials in n8n and create:

OpenAI (for article generation)

Leonardo AI (for image generation)

WordPress (to publish posts)

(Optional) Google Sheets (to log published articles)

Attach these credentials to the matching nodes in the workflow.

Check the WordPress Node

Update the WordPress site URL to your own blog.

Make sure the category, tags, and status (publish/draft) are set the way you want.

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
