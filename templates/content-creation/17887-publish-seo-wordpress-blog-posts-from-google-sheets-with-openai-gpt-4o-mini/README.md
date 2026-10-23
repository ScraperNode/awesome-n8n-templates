# 🎬 Publish SEO WordPress blog posts from Google Sheets with OpenAI gpt-4o-mini

> ⚡ **28 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every 25 minutes to pull a keyword from Google Sheets, generate a Japanese SEO-ready WordPress post with OpenAI, publish it to WordPress, and then write the title, category, URL, and processing timestamps back to the same Google Sheet.

## How it works
1. Runs every 25 minutes on a schedule.
2. Retrieves the next keyword/topic from a Google Sheets document and sheet named “Keywords”.
3. Sends the keyword to OpenAI (gpt-4o-mini) to generate a Japanese SEO article as JSON with title, slug, category ID, meta description, and WordPress-ready HTML.
4. Creates and publishes a new WordPress post using the generated title, slug, category ID, and HTML content.
5. Appends or updates the matching Google Sheets row (by Keyword) with publish status, post URL, category, and processed/published timestamps.

## Setup
1. Create Google Sheets OAuth credentials in n8n and replace `YOUR_GOOGLE_SHEET_ID` with your spreadsheet ID.
2. Ensure your spreadsheet has a sheet named “Keywords” (or update the sheet name) and includes columns like Keyword, Title, Category, Status, PostURL, PublishedDate, Processed, and ProcessedDate.
3. Add an OpenAI API credential in n8n and choose a model with access equivalent to `gpt-4o-mini`.
4. Add WordPress API credentials in n8n and make sure the WordPress REST API is enabled and the target site allows creating posts and assigning categories by ID.

## 🔗 Nodes Used

Google Sheets, Wordpress, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
