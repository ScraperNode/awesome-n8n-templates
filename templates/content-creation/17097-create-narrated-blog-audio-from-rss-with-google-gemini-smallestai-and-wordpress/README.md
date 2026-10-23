# 🎬 Create narrated blog audio from RSS with Google Gemini, Smallest.ai and WordPress

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow polls a blog RSS feed, rewrites new posts into a spoken-word script using Google Gemini, generates an MP3 with Smallest.ai, uploads it to Google Drive, and updates the matching WordPress post to embed a public audio player.

## How it works
1. Polls an RSS feed every minute to detect newly published or updated blog items.
2. Extracts the post body and strips HTML, scripts, styles, and common entities to produce clean plain text.
3. Uses Google Gemini to rewrite the text into a single, conversational narration script with an intro/outro and length limits.
4. Sends the rewritten script to Smallest.ai to synthesize an English MP3 audio file.
5. Uploads the MP3 to Google Drive and updates sharing so anyone with the link can play it.
6. Updates the corresponding WordPress post to embed an HTML5 audio player pointing to the Google Drive link and includes the article text below it.

## Setup
1. Set the RSS feed URL in the RSS Feed Trigger node and confirm the feed provides the fields used for the post content and GUID.
2. Add credentials for Google Gemini (Google AI / Gemini) and select that connection in the chat model used by the rewrite step.
3. Add your Smallest.ai API credentials and verify the desired voice/language/output format settings.
4. Connect Google Drive OAuth credentials and choose the target drive/folder for uploads, then ensure public sharing is allowed by your Drive admin policies.
5. Connect WordPress credentials and confirm the post identifier mapping (the workflow uses the RSS item GUID as the WordPress post ID) matches your site.

## 🔗 Nodes Used

Google Drive, Wordpress, AI Agent, RSS Feed Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
