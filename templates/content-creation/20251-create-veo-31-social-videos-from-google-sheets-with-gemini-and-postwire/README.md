# 🎬 Create Veo 3.1 social videos from Google Sheets with Gemini and PostWire

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs daily, pulls the next “ready” video idea from Google Sheets, uses Google Gemini to write a Veo prompt and platform-specific captions, generates an 8‑second vertical video with Veo 3.1, and publishes it to multiple social platforms via the PostWire API.

## How it works
1. Runs every day at 9:00 and reads Google Sheets rows where the status is set to "ready".
2. Takes the first matching idea and updates the same row in Google Sheets to mark it as "generating".
3. Uses Google Gemini to produce a Veo prompt plus captions (and a YouTube title/description) based on the idea and optional style.
4. Requests an upload URL from PostWire, generates an 8-second 9:16 video with Veo 3.1, uploads the file to PostWire, and finalizes it to obtain a hosted media URL.
5. Calls the PostWire posting endpoint to publish the video to the selected platforms with per-platform text (and a YouTube title), using the sheet row as an idempotency key.
6. Updates the Google Sheets row with the published links and a "posted" status, or writes the required fixes to the row and sends a Gmail alert when any platform fails.

## Setup
1. Connect Google Sheets credentials and select the target spreadsheet and sheet in the read/update steps.
2. Create a Google Sheet with columns for idea, style, networks, status, posted_at, links, and note, and set one or more rows to status "ready".
3. Add Google Gemini credentials and ensure billing is enabled for Veo access in Google AI Studio.
4. Create a PostWire account, connect your social profiles, and add an HTTP Header Auth credential with `Authorization: Bearer <your PostWire API key>` for the PostWire API requests.
5. Connect Gmail credentials and replace the recipient address in the email step so failures are sent to your inbox.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
