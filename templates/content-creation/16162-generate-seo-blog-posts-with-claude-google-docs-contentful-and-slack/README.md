# 🎬 Generate SEO blog posts with Claude, Google Docs, Contentful, and Slack

> ⚡ **151 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a blog brief via an n8n form, uses Anthropic Claude to generate an outline and write each section, saves both outline and article as formatted Google Docs in Google Drive, then creates a Contentful entry and posts the links to Google Sheets and Slack.

## How it works
1. Receives a blog brief submission from an n8n Form Trigger with title, word count, keywords, links, and extra instructions.
2. Normalizes the submission into a structured brief and appends it to a Google Sheets tracker.
3. Calls the Anthropic Messages API (Claude) to generate a markdown outline, creates a dedicated Google Drive folder, and saves the outline as a formatted Google Doc.
4. Splits the outline into H2 sections and calls Anthropic Claude once per section to write markdown content that incorporates the provided keywords and internal/external links.
5. Aggregates all sections, assembles the full markdown article (title + intro + sections), and saves it as a formatted Google Doc in the same Google Drive folder.
6. Uses Anthropic Claude to choose a short category, converts the markdown to Contentful Rich Text via a Google Cloud Function, and creates a new blogPost entry in Contentful.
7. Updates the original Google Sheets row with the blog URL plus the Google Docs links, then sends a Slack message with the article details and links.

## Setup
1. Connect credentials for Google Sheets and Google Drive, and update the target spreadsheet ID/sheet name and the parent Google Drive folder ID.
2. Add an Anthropic (Claude) API key as an HTTP Header Auth credential and ensure the workflow can reach the Anthropic Messages API.
3. Deploy/configure the Google Cloud Function endpoint that converts Markdown to Contentful Rich Text (or replace it with your own converter) and update the URL.
4. Add Contentful Management API credentials, then replace CONTENTFUL_SPACE_ID_PLACEHOLDER (and environment if needed) and confirm the Contentful content type is named blogPost.
5. Add Slack credentials and set SLACK_CHANNEL_ID_PLACEHOLDER to the channel where notifications should be posted.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Markdown, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
