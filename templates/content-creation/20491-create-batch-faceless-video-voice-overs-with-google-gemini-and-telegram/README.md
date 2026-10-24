# 🎬 Create batch faceless video voice-overs with Google Gemini and Telegram

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow schedules batch voice-over production by pulling queued topics from an n8n Data Table, generating and validating scripts with Google Gemini, creating WAV narration with Gemini TTS, optionally running a transcription listen-back QA, and sending audio and script files to Telegram for approve/redo decisions.

## How it works
1. Runs every morning on a schedule, ensures the `vs_queue` n8n Data Table exists, and pulls the next queued topics up to the configured batch size.
2. For each topic, builds a niche- and format-specific prompt and uses Google Gemini to generate a structured JSON script, falling back to a backup Gemini model if needed.
3. Checks the script for length, hook, scene structure, clichés, visuals, and facts to verify, and optionally asks Gemini to fix issues once and keeps the better version.
4. Sends the narration to Google Gemini TTS to generate a WAV voice-over with a backup TTS model if the first request fails, then derives scene timing from real pauses and builds SRT captions.
5. If enabled, transcribes the audio with Google Gemini and compares it to the script to compute a word-level match score and identify missing or extra words.
6. Writes the results (checks, listen-back score, package JSON, and metadata) back to the `vs_queue` row and starts a separate review run for each voice-over.
7. Sends the audio and a detailed script text file to Telegram and waits for an approval or redo response, then marks the row as `approved` with the Telegram file ID or re-queues the topic.

## Setup
1. Add a Google Gemini (PaLM) API credential and select it for the Google Gemini nodes and the HTTP requests that call the Gemini TTS endpoint.
2. Create a Telegram bot with @BotFather, add the Telegram credential in n8n, and start a chat with the bot so it can message you.
3. Update the channel settings (Telegram chat ID, optional approver user ID, batch size, schedule hour, and whether to run listen-back QA) in the workflow’s settings step.
4. Ensure your n8n instance is reachable over public HTTPS so the Telegram approval buttons can resume the waiting execution.
5. Use the built-in “Add topics” form URL to submit topics (one per line) and verify they appear as `queued` rows in the `vs_queue` Data Table.

## 🔗 Nodes Used

HTTP Request, Telegram, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
