# 🎬 Publish WordPress posts from Google Sheets with images and tags

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

## Description

## Who this is for
This workflow is for content teams, marketers, and solo site owners who draft posts in Google Sheets and want a reliable way to publish to WordPress automatically — including featured images and tags.

## What it does
- Pulls rows from a Google Sheet where `status = READY`
- Processes rows one-by-one (safe for multiple posts in a single run)
- If `image_url` is present, downloads the image and uploads it to WordPress Media, then uses it as `featured_media`
- Parses `hashtags` into clean tag slugs, checks if each tag exists in WordPress, and creates missing tags
- Publishes the post via the WordPress REST API (`/wp-json/wp/v2/posts`) with the collected tag IDs
- Updates the same Google Sheets row to `POSTED` and writes `posted_at` + `post_url`

## How to set up
1) Make a copy of the Google Sheets template: https://docs.google.com/spreadsheets/d/1lJDeaN75c1hBk0gddsdvbeXDuxDr5Q-NablHRSjvLjQ/edit?gid=0#gid=0  
2) Connect **Google Sheets** credentials in n8n and point the workflow to your spreadsheet + sheet tab.  
3) Connect **WordPress** credentials (recommended: Application Password) for REST API access.  
4) Ensure your sheet has columns like: `id`, `status`, `title`, `excerpt`, `body`, `image_url`, `hashtags`.

## Requirements
- WordPress site with REST API enabled
- Credentials set via n8n (no hardcoded secrets)
- Publicly accessible `image_url` (or adjust the workflow for private assets)

## How to customise
- Swap Manual Trigger for Cron to publish on a schedule
- Add categories, custom post types, or draft mode
- Extend error handling to write `error_message` and set `status = ERROR` when publishing fails

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
