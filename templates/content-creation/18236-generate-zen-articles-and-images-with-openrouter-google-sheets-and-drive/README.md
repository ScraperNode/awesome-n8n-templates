# 🎬 Generate Zen articles and images with OpenRouter, Google Sheets, and Drive

> ⚡ **92 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow manages a Yandex Zen content pipeline by generating weekly article topics from Wikipedia categories, then drafting a daily Russian article and up to two illustrations via OpenRouter, saving everything to Google Docs/Drive and tracking status in a Google Sheets database.

## How it works
1. Runs either manually for daily generation or on a weekly Monday 09:00 schedule to refresh the topic queue.
2. Searches Google Drive for a Google Sheets file named Zen_Content_DB and, if missing, creates the spreadsheet, required sheets (Topics/Published/Images/State), and a Zen_Content_Articles folder in Google Drive.
3. For topic generation, pulls already published and queued titles from Google Sheets, queries the Wikipedia API for a random women-focused category, and uses OpenRouter (Claude Sonnet) to generate new Russian topic ideas while filtering out duplicates before appending them to the Topics sheet.
4. For content generation, reads the Topics sheet, selects one topic with status = new, and uses OpenRouter (Claude Haiku) to draft a Russian article and then rewrite it in a second pass to reduce AI-sounding patterns.
5. Creates a per-article folder in Google Drive, creates a Google Doc, inserts the final article text, and shares the document link publicly.
6. Uses OpenRouter (GPT-5) to extract up to two illustrated scenes and generate English image prompts, then calls OpenRouter Images (Gemini image model) to generate images, uploads them to Google Drive, and shares them via link.
7. Logs image metadata to the Images sheet, appends the article entry to the Published sheet, and updates the topic row in Topics to status ready with the Google Doc URL.

## Setup
1. Add Google Sheets, Google Drive, and Google Docs credentials with permission to create files/folders and share them via link.
2. Add an OpenRouter API credential for the text models (Claude Sonnet/Haiku, GPT-5) and the OpenRouter Images endpoint.
3. Ensure your Google Drive allows creating a spreadsheet named Zen_Content_DB and a root folder named Zen_Content_Articles (the workflow bootstraps these automatically if missing).
4. In the Topics sheet, keep a status column using values like new and ready, since daily generation only processes rows marked new.
5. Review and customize the system prompts (topics, article drafting, and image prompts) to match your niche, language, and style requirements before enabling the weekly schedule trigger.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Docs, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
