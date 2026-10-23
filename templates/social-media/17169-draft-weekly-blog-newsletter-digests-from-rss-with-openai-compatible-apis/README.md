# 📱 Draft weekly blog newsletter digests from RSS with OpenAI-compatible APIs

> ⚡ **19 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs every Monday at 08:00, reads your blog’s RSS feed, filters posts from the last 7 days, and uses an OpenAI-compatible Chat Completions API to generate a markdown newsletter digest you can copy into your email tool.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Loads configuration values (RSS feed URL, OpenAI-compatible base URL, model name, and desired tone).
3. Reads the RSS feed and keeps only items published in the last 7 days, collecting each post’s title, link, and a short snippet.
4. Stops with a “nothing to send” outcome when no posts are found for the week.
5. Sends the weekly post list to an OpenAI-compatible Chat Completions endpoint to write a clean markdown digest (intro, one bullet per post, and a sign-off).
6. Extracts the generated markdown content into a single field so you can copy the draft from the final output.

## Setup
1. Update the RSS feed URL (and optionally the model, tone, and API base URL) in the configuration step.
2. Create an HTTP Header Auth credential with an `Authorization: Bearer <YOUR_API_KEY>` header and attach it to the HTTP request that calls the Chat Completions API.
3. If you use a non-OpenAI provider, set the API base URL to your OpenAI-compatible endpoint so `/chat/completions` resolves correctly.

## Requirements
- An API key for any OpenAI-compatible provider (OpenAI, OpenRouter, Groq, etc.)

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
