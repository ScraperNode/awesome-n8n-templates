# 🎬 Add internal links to WordPress posts with OpenAI, Notion, and Slack

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually or every Monday at 9AM to analyze published WordPress posts with OpenAI embeddings, injects semantically relevant internal links using AI-selected anchor text, logs link updates to Notion, and posts Slack alerts for orphan pages and hub-page candidates.

## How it works
1. Runs on a manual trigger or on a weekly schedule (Mondays at 9AM).
2. Retrieves all published posts from WordPress and extracts a clean title, excerpt, URL, and trimmed content for each post.
3. Generates an OpenAI embedding for each post’s title and excerpt and computes cosine similarity to find the most related posts per article.
4. For posts with strong matches, uses OpenAI to pick natural anchor text and a placement sentence from the source content for each suggested target.
5. Injects the internal links into the WordPress post content and updates the post in WordPress.
6. Logs the number of links added and orphan/hub signals to a Notion database, then sends Slack alerts for posts flagged as orphans or hub candidates.

## Setup
1. Add credentials for WordPress API, OpenAI API, Notion API, and Slack API.
2. Update the Configuration values (brand name and WordPress site URL) to match your site.
3. Set your Notion database ID in the Notion step and ensure the database has properties for Date, Post, Links Added, Is Orphan, Is Hub Candidate, and Client.
4. Set the Slack channel ID used for orphan and hub candidate alerts.
5. Test with a small set of posts or disable the WordPress update step if you want to review the generated links before writing changes to live content.

## 🔗 Nodes Used

HTTP Request, Slack, Wordpress, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
