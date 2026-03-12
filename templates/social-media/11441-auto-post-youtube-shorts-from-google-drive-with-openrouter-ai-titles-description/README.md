# 📱 Auto-post YouTube Shorts from Google Drive with OpenRouter AI titles & descriptions

> ⚡ **905 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works

This workflow automatically uploads YouTube Shorts from a Google Drive folder.
It picks one video at each run, generates a YouTube-optimized title, description, and hashtags using an AI model, uploads the video through YouTube’s resumable upload API, and finally moves the processed video to a “Posted” folder.

## Key steps

Run on a schedule (daily/hourly/custom CRON)

Fetch one video from a selected Google Drive folder

Generate title + description + hashtags using an LLM

Prepare YouTube metadata

Upload the video via resumable upload

Move the file to a “posted” folder to avoid duplicates

## Setup instructions

Connect your Google Drive credentials

Connect your YouTube OAuth2 credentials

Update the Drive folder IDs (input + posted folders)

Edit the “Set variables” node to change store name, country, coupon code, and tone

Review the prompt in the AI node if you want to customize content style

All technical details are documented inside the sticky notes within the workflow.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
