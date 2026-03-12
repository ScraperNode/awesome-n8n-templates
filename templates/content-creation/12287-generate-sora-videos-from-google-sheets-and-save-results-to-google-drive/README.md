# 🎬 Generate Sora videos from Google Sheets and save results to Google Drive

> ⚡ **177 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate Sora AI videos, save to Google Drive, and update Google Sheets

This workflow automates video generation using OpenAI's Sora model:

**How it works:**
1. Reads video prompts from a Google Sheet
2. Submits each prompt to Sora API for video generation
3. Monitors video creation status with automatic retry logic
4. Generates SEO-optimized titles using GPT-4
5. Downloads completed videos and uploads to Google Drive
6. Updates the sheet with video URLs and status


**Setup Steps:**
1. Create a Google Sheet with columns: PROMPT, DURATION (In Seconds), VIDEO RESOLUTION, VIDEO TITLE, VIDEO URL, STATUS
2. Add your OpenAI API key (with Sora access) to credentials
3. Connect your Google Sheets and Google Drive accounts
4. Update the sheet ID in all Google Sheets nodes
5. Run the workflow manually to process all unprocessed rows


**Requirements:**
- OpenAI API key with Sora access
- Google Sheets OAuth2 credentials
- Google Drive OAuth2 credentials#Header 4

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
