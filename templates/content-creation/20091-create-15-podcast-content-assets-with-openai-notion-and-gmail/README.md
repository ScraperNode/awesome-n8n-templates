# 🎬 Create 15 podcast content assets with OpenAI, Notion, and Gmail

> ⚡ **52 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a podcast episode via an n8n form, generates 15 marketing assets using OpenAI (including Whisper transcription), publishes them to a Notion review page, and uses Gmail to notify a reviewer and the submitter as the Notion Status changes.

## How it works
1. Receives an episode submission through an n8n form with episode details plus either a transcript file/pasted transcript or an audio file.
2. Uses the provided transcript (SRT/VTT/TXT/plain text) or transcribes the audio with OpenAI Whisper and formats the result into a timestamped transcript where possible.
3. Sends the transcript and show settings to OpenAI to generate five timestamped short-form clip suggestions and five quote graphic briefs.
4. Sends the same source material to OpenAI again to produce a newsletter draft and SEO-focused show notes, then a third time to write a LinkedIn carousel, a LinkedIn post, and an X thread.
5. Creates a Notion database page with Status set to Needs Review and appends the generated assets as page blocks in batches to stay within Notion block limits.
6. Sends a Gmail email to the reviewer with a link to the Notion page and instructions to set Status to Approved or Changes Requested.
7. Polls the Notion database every minute, and when the page Status becomes Approved it updates the page to Ready to Publish (and sets an Approved On date) or when it becomes Changes Requested it updates the page to In Revision and emails the submitter with the review notes via Gmail.

## Setup
1. Create a Notion database with properties matching the workflow (Name, Status, Guest, Asset Count, Submitted By, Review Notes, Approved On) and share it with your Notion integration.
2. Add Notion credentials (integration token) in n8n and replace YOUR_NOTION_DATABASE_ID in the Notion nodes and the Notion Trigger with your database ID.
3. Add an OpenAI API key credential for both the Whisper transcription request and the OpenAI content-generation steps.
4. Add a Gmail OAuth2 credential and verify the reviewer email and outgoing email content used to notify the reviewer and the submitter.
5. Update the show metadata (show name, host name, audience, brand voice, reviewer email) in the show settings step before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Gmail, Notion, Notion Trigger, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
