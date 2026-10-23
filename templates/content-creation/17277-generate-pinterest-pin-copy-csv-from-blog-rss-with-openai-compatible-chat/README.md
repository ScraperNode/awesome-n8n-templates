# 🎬 Generate Pinterest pin copy CSV from blog RSS with OpenAI-compatible chat

> ⚡ **29 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn your latest blog posts into Pinterest-ready pin titles, descriptions and keywords, exported as a CSV formatted for Pinterest's native bulk upload. An AI writes one conversion-focused pin per post from your RSS feed — curiosity-preserving titles under 90 characters, natural keywords, no clickbait.


## How it works
1. Starts when you manually execute the workflow.
2. Loads configuration values such as the RSS feed URL, number of posts to process, target Pinterest board name, and the AI API base URL and model.
3. Reads the blog’s RSS feed and collects the newest N posts with their titles, links, and short snippets.
4. Sends the post list to an OpenAI-compatible Chat Completions endpoint to generate one Pinterest pin title, description, and keyword set per post as structured JSON.
5. Transforms the AI response into Pinterest bulk upload columns (including Title, Description, Keywords, Link, and Pinterest board) and inserts a placeholder Media URL for you to replace.
6. Converts the rows into a CSV file and provides it for download.

## Setup
1. Add an HTTP Header Auth credential for your OpenAI-compatible API (for example, `Authorization: Bearer <API_KEY>`) and select it on the AI request step.
2. Update the configuration values for your RSS feed URL, how many posts to include, and your Pinterest board name (it must match your Pinterest board exactly).
3. Set the AI API base URL and model name to match your provider (or keep the defaults for OpenAI).
4. After generating the CSV, replace the placeholder Media URL with your hosted pin image URLs before uploading the file in Pinterest (Settings → Import content).

## Requirements
- An API key for any OpenAI-compatible chat provider (OpenAI, OpenRouter, Groq, etc.)

## 🔗 Nodes Used

HTTP Request, RSS Read, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
