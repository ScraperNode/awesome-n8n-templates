# 🎬 Repurpose content into 5-platform posts with Groq Llama 3.3 and Upload-Post

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives a webhook with either a URL or raw text, uses Groq (Llama 3.3 70B) to analyze and repurpose the content into Instagram, X, LinkedIn, email, and video formats, optionally logs results to Google Sheets, and posts the LinkedIn text to multiple platforms via Upload-Post.com.

## How it works
1. Receives a POST webhook request containing a single `content` value that is either a URL or plain text.
2. If the input starts with `http`, it fetches the page content over HTTP and packages it as cleaned source text; otherwise it uses the provided text as-is.
3. Sends the prepared content to Groq (Llama 3.3 70B) to generate a structured analysis of the core message, key points, audience, tone, and hook angles.
4. Uses Groq again to generate platform-specific outputs (Instagram caption/hashtags, X thread, LinkedIn post, email newsletter, and a short video script) as JSON.
5. Parses the AI JSON, validates character limits for Instagram, LinkedIn, and X, and returns an error response if the output cannot be parsed.
6. On success, appends the generated content and validation warnings to Google Sheets, posts the LinkedIn text to selected social platforms via the Upload-Post.com API, and returns the full results in the webhook response.

## Setup
1. Create and add a Groq API credential in n8n and select it in both Groq chat model nodes used for analysis and generation.
2. (Optional) Create a Google Sheet, add the expected header columns, connect Google Sheets OAuth2 credentials, and replace `YOUR_GOOGLE_SHEET_ID` in the Google Sheets append step.
3. Create an Upload-Post.com account, connect your social profiles, and replace `YOUR_UPLOAD_POST_API_KEY` and `YOUR_UPLOAD_POST_USER` in the HTTP request step (and remove any `platform[]` entries you don’t want to post to).
4. Copy the workflow’s webhook URL and send a POST payload like `{ "content": "https://..." }` or `{ "content": "your text" }` from your source application for testing and production use.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
