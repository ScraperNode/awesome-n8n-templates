# 🎬 Generate structured drama scripts from webhook requests using OpenAI and Google Sheets

> ⚡ **42 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow accepts a webhook request with a drama topic, genre, tone, and size constraints, uses Python-based genre classification plus OpenAI GPT‑4.1 to generate a full script as structured JSON, then returns the script to the caller and appends a summary log entry to Google Sheets.

## How it works
1. Receives a POST webhook request containing the script topic, genre, tone, language, act count, and character count.
2. Normalizes inputs by applying defaults, clamping acts to 1–5 and characters to 2–8, and adding request metadata like a request ID and timestamp.
3. Classifies the genre in Python and prepares genre-specific guidance used to shape the script structure, then filters out requests marked as invalid.
4. Sends the prepared parameters and genre guidance to OpenAI (GPT‑4.1) to generate a complete drama script as a single JSON object.
5. Parses and validates the AI response as JSON, falls back to a safe wrapper if parsing fails, and enriches the result with counts for acts, scenes, and characters.
6. Waits briefly and then returns the structured script to the webhook caller while also appending a summary row to a Google Sheets tab for tracking.

## Setup
1. Configure the Webhook trigger URL in the system that will send requests, and ensure it can reach your n8n instance publicly if needed.
2. Add an OpenAI API credential in n8n and attach it to the GPT‑4.1 chat model node.
3. Add a Google Sheets OAuth2 credential in n8n for the Google Sheets API.
4. Replace `YOUR_SHEET_ID` in the Google Sheets HTTP request URL and create a `ScriptLog` sheet tab with the expected columns (date, requestId, title, genre, tone, topic, acts, scenes, characters, status, generatedAt).

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
