# 🎬 Generate AI songs from text prompts with Suno, OpenAI, Google Drive and Slack

> ⚡ **82 views** · 🎬 [Content Creation & Video](../)

## Description

Build a fully automated music generation workflow in n8n using Suno to create and store AI-generated songs.

### What's the Goal?
Automate end-to-end AI music creation — from a simple text prompt to a fully generated, stored, and shareable song — using Suno's API inside n8n with zero manual effort.

### Why Does It Matter?
AI music generation is powerful but manual. This workflow lets you batch-generate songs, integrate music into apps or content pipelines, and store outputs automatically — saving hours of repetitive work.

### How It Works
1. Webhook or Schedule triggers the flow with a text prompt
2. Prompt is enriched/formatted for best Suno results
3. Suno API call initiates song generation
4. Workflow polls until song is ready (async wait loop)
5. Song metadata & audio URL retrieved
6. File downloaded and saved to cloud storage (Google Drive / S3)
7. Metadata logged to Google Sheets / Airtable
8. Notification sent via Slack / Email

### Configuration Requirements
- Suno API key (via RapidAPI or official Suno API access)
- Cloud storage credentials (Google Drive / AWS S3)
- Google Sheets or Airtable credentials (for logging)
- Slack Bot Token or SMTP (for notifications)
- Optional: OpenAI API key (for prompt enrichment)

### Setup Guide
1. Import workflow into n8n
2. Connect credentials (Suno/RapidAPI, Google Drive, Sheets, Slack)
3. Configure Set node: default genre, mood, duration, style tags
4. Test with a manual trigger and a sample prompt
5. Activate webhook → send prompts to trigger URL
6. Monitor generation status and tune polling interval
7. Check storage & logs for generated songs

### Contact Us
https://www.oneclickitsolution.com/contact-us/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
