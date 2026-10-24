# 📁 Sort Raindrop.io bookmarks into collections with OpenAI or Ollama and Telegram alerts

> ⚡ **0 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs every 15 minutes to fetch recent Raindrop.io Inbox bookmarks, asks an LLM (Ollama or an OpenAI-compatible API) to choose the best destination collection, moves the bookmark in Raindrop.io, and sends a Telegram alert when the LLM isn’t confident.

## How it works
1. Runs every 15 minutes on a schedule.
2. Loads the list of Raindrop collections from an n8n Data Table and reads the saved configuration (Inbox ID, fallback ID, LLM settings, and optional rules).
3. Pulls the 50 most recently created bookmarks from the configured Raindrop.io Inbox collection.
4. Sends each bookmark’s title, URL, and excerpt to the configured LLM endpoint and asks for a single target collection ID plus a confidence score.
5. Validates the LLM response and routes low-confidence or invalid results to the fallback collection.
6. Moves the bookmark to the chosen Raindrop.io collection and sends a Telegram message when the bookmark was not confidently sorted.

## Setup
1. Create an n8n Data Table named `collections` and add one row per Raindrop collection with `collection_id`, `name`, and `description` values.
2. Add a Raindrop.io API token and configure HTTP Header Auth (Authorization: Bearer YOUR_TOKEN) for the requests that read and update bookmarks.
3. Provide an LLM endpoint (Ollama at `http://ollama:11434/api/chat` or an OpenAI-compatible `/chat/completions` URL) and configure HTTP Header Auth on the LLM request if your provider requires an API key.
4. Run the workflow’s setup form to set the Inbox collection ID, fallback collection ID, confidence threshold, optional extra rules, and a Telegram chat ID for alerts.
5. Add a Telegram credential for sending notifications, or disable/remove the Telegram step if you don’t want alerts.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
