# 🎬 Summarize RSS feeds into a daily digest with Google Gemini and webhooks

> ⚡ **34 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily, fetches content from an RSS feed or URL, summarizes it into a short digest using Google Gemini, and posts the digest as JSON to a destination webhook.

## How it works
1. Runs once per day on a schedule (default: every day at 07:00).
2. Loads the source URL to summarize and the destination webhook URL from the workflow’s configuration values.
3. Fetches the RSS feed (or page content) from the configured URL via HTTP.
4. Sends up to the first 8,000 characters of the fetched content to the Google Gemini generateContent API to produce a plain-text digest with up to five bullet points.
5. Extracts the generated digest text from the Gemini response.
6. Posts the digest to the configured destination webhook as JSON in the form `{ "text": "..." }`.

## Setup
1. Create an HTTP Query Auth credential containing your Google Gemini API key and select it in the Google Gemini request step.
2. Update the `sourceUrl` and `notifyWebhookUrl` values to point to your RSS/feed URL and your destination webhook endpoint.
3. If needed, adjust the schedule time and frequency to match when you want the daily digest to run.

## Requirements
- A Google Gemini API key (the free tier is enough)
- A webhook to receive the digest (a Slack, Discord or Telegram incoming webhook, or your own endpoint)

## Customization
- Edit the prompt on the Gemini node to change the length, tone or language of the digest
- Change the schedule node for a different time or frequency
- The Gemini call retries up to five times if the API is briefly overloaded; adjust this in the node settings

## Additional info
More ready-made AI workflows: https://ruancody.gumroad.com/l/vlbne

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
