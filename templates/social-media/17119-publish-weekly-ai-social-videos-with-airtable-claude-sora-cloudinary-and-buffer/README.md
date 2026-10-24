# 📱 Publish weekly AI social videos with Airtable, Claude, Sora, Cloudinary, and Buffer

> ⚡ **49 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs weekly to pick a fresh video topic from Airtable, generate a short caption with Anthropic Claude and a vertical Sora video via OpenAI, upload the clip to Cloudinary for a public URL, and schedule the post to LinkedIn and Instagram through Buffer.

## How it works
1. Runs every week on a schedule (Monday at 17:00 in the workflow timezone).
2. Reads all active topics from an Airtable Topics table and fetches the 14 most recent entries from an Airtable Reels history table.
3. Compares available topics with recently used ones, randomly selects a topic that has not appeared in the last 14 reels, and stops if none are available.
4. Sends the selected topic to the Anthropic Messages API (Claude) to generate a short Dutch caption and extracts the plain text for reuse.
5. Uses OpenAI Sora to generate a 720×1280 vertical video clip based on the same topic.
6. Uploads the generated video to Cloudinary to obtain a public video URL.
7. Creates a video post in Buffer for LinkedIn and Instagram using the caption and Cloudinary URL, then logs the topic and caption back to Airtable to maintain the anti-repeat history.

## Setup
1. Create Airtable credentials (personal access token) and replace the base ID and table IDs for the Topics and Reels tables.
2. Ensure Airtable has a Topics table with fields Topic (text) and Active (checkbox) and a Reels table with a Created time Date field plus Topic and Post fields.
3. Add an Anthropic API credential and customize the Claude prompt in the request body to match your brand voice and rules.
4. Add an OpenAI API credential with access to Sora and adjust the video prompt and model selection if needed.
5. Add Cloudinary credentials for video uploads.
6. Add Buffer credentials and set your Buffer organization ID plus the LinkedIn and Instagram channel IDs used for publishing.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
