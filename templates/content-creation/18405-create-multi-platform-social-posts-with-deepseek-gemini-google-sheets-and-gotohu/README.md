# 🎬 Create multi-platform social posts with DeepSeek, Gemini, Google Sheets, and gotoHuman

> ⚡ **72 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Stop writing the same idea four different ways. This workflow learns your tone from a voice library, then drafts matching LinkedIn, Instagram, and X posts from one idea. Human-approved before publishing and it keeps improving with every post.

## How it works
1. Receives a new content idea submission from an n8n Form trigger.
2. Reads the latest voice card from Google Sheets and sends the idea, notes, and voice card to the DeepSeek Chat Completions API to generate a structured core thesis, supporting points, and tone.
3. Creates a new content item row in Google Sheets, generates a unique content item ID, and prepares a core message string for downstream drafting.
4. In parallel, DeepSeek generates a LinkedIn post (then runs a second DeepSeek QA rewrite pass), an Instagram caption package (caption, visual concept, hashtags), and an X thread (4–7 tweets), and the workflow formats each draft into a consistent record.
5. Optionally generates an Instagram image concept with the Google Gemini image generation API, converts the returned base64 image into a PNG, and uploads it to Google Drive.
6. Merges the LinkedIn, Instagram, and X drafts, updates the matching content item in Google Sheets to “pending_review”, and sends all drafts to gotoHuman as a single review request.
7. When gotoHuman returns an approval/rejection webhook, the workflow publishes approved drafts to LinkedIn, Instagram Graph API, and X API (with retries), marks the item as published in Google Sheets, and prepares a failure alert message if any publish call returns an error.
8. Runs weekly to pull published items from Google Sheets, fetches LinkedIn engagement metrics, scores performance, writes results to a Performance sheet, and adds top-performing examples back into a Voice Library Examples sheet.

## Setup
1. Create a Google Sheets file with tabs for “Voice Library”, “Content Items”, “Performance”, and “Voice Library Examples”, then connect Google Sheets OAuth and set the correct spreadsheet ID/sheet names in all Google Sheets nodes.
2. Provide a DeepSeek API key (or compatible OpenAI-style endpoint) and replace the hardcoded Authorization headers in the DeepSeek HTTP requests.
3. Set up a gotoHuman account, connect the gotoHuman credential, and ensure your review template includes long-text fields with IDs `linkedinDraft`, `instagramDraft`, and `xThread`.
4. If you want Instagram images, add a Google Gemini API key and configure the Gemini request, then connect Google Drive OAuth and set the target folder for image uploads.
5. Replace the placeholder and hardcoded platform values for publishing (LinkedIn author URN and token, Instagram Business ID and access token, X bearer token) and complete any required multi-step publishing logic noted in the workflow comments.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
