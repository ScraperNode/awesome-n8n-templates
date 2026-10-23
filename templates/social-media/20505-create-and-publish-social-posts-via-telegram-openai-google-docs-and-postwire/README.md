# 📱 Create and publish social posts via Telegram, OpenAI, Google Docs and PostWire

> ⚡ **16 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow turns Telegram topic messages into platform-specific drafts for LinkedIn, Facebook, Bluesky, and Mastodon using OpenAI and brand rules from Google Docs, then publishes approved posts via PostWire and logs outcomes to Google Sheets.

## How it works
1. Triggers when a new Telegram message arrives and ignores empty messages or commands starting with “/”.
2. Fetches your brand rules from a Google Docs document and combines them with the submitted topic.
3. Uses an OpenAI agent (optionally calling SerpApi Google Search for current facts) to generate a JSON object containing one draft per network plus any source URLs used.
4. Sends the drafts back to Telegram and waits for an Approve or Decline response.
5. If approved, posts the per-network text to PostWire and checks whether each platform publish succeeded.
6. Appends a success or failure record (including links and notes) to Google Sheets and replies in Telegram with published URLs or required fixes.
7. If declined, replies in Telegram confirming nothing was published.

## Setup
1. Create a Telegram bot with @BotFather, add a Telegram credential in n8n, and select it for the trigger and messaging steps.
2. Connect Google Docs and Google Sheets credentials, set your Google Doc URL for the brand rules, and choose the target spreadsheet and sheet for logging.
3. Add an OpenAI credential for the chat model and a SerpApi API key for the Google Search tool.
4. Create a PostWire account, connect your social profiles, and add an HTTP Header Auth credential with `Authorization: Bearer <your PostWire API key>` for the PostWire request.
5. Create the Google Sheet columns `date`, `topic`, `status`, `links`, and `note` to match the append operations.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Docs, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
