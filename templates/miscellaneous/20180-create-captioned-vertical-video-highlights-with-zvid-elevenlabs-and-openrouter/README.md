# 🔧 Create captioned vertical video highlights with Zvid, ElevenLabs and OpenRouter

> ⚡ **1 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow accepts a direct MP4 URL via webhook or manual test, transcribes the opening with ElevenLabs Scribe, uses OpenRouter to pick highlight ranges, and builds Zvid projects to render captioned 1080x1920 Shorts (or save editor drafts) before returning clip links in the webhook response.

## How it works
1. Receives a direct video URL (and optional title/layout) via a POST webhook, or runs manually with a built-in sample video.
2. Downloads a byte-range sample of the source video and sends it to ElevenLabs Speech-to-Text (Scribe) to get word-level timestamps.
3. Formats the transcript into an indexed prompt and asks OpenRouter (Gemini model) to select non-overlapping highlight ranges and short on-screen titles.
4. Converts the chosen word ranges into exact start/end timestamps, trims clips to the configured min/max duration, and prepares per-clip caption timing.
5. Generates a Zvid render project JSON for each clip (vertical layout, captions, branding, and progress bar) and validates it with Zvid’s render validator.
6. If dryRun is enabled, saves each clip as a Zvid editor draft and returns a summary with credit estimates and editor links.
7. If dryRun is disabled, submits each clip to Zvid for rendering, polls until completion (with safe retry behavior on capacity limits), and responds with the final rendered clip URLs.

## Setup
1. Install the community node package `@zvid/n8n-nodes-zvid` and create a Zvid API credential (API key, base URL `https://api.zvid.io`) for all Zvid nodes.
2. Add an ElevenLabs Header Auth credential (xi-api-key) with Speech-to-Text access for the transcription request.
3. Add an OpenRouter API credential and confirm the selected model in the configuration (default `google/gemini-2.5-flash`) is available to your account.
4. Set your branding and behavior in the Config node (for example handle, colors, clipCount, clipSeconds, dryRun, pollSeconds, and timeoutMinutes).
5. If using the webhook trigger, copy the production webhook URL and configure your source system to POST JSON like `{ "videoUrl": "https://...mp4", "title": "...", "layout": "fit|fill" }` using a directly downloadable MP4 URL.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
