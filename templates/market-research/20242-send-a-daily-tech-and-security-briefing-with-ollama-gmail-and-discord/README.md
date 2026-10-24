# 📊 Send a daily tech and security briefing with Ollama, Gmail, and Discord

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning, reads multiple RSS feeds plus the CISA Known Exploited Vulnerabilities JSON feed, deduplicates and ranks recent items, then uses local Ollama models to classify and summarize the top stories before sending a formatted briefing to Gmail (SMTP) and Discord.

## How it works
1. Runs daily at 6:30 AM (or manually for testing) to start the briefing run.
2. Fetches recent items from a configured list of RSS/Atom feeds and downloads the CISA Known Exploited Vulnerabilities JSON feed.
3. Normalizes titles, links, sources, and timestamps, keeps only items from the last 72 hours, and generates stable dedupe keys.
4. Removes items already stored in the n8n Data Table history and optionally performs semantic near-duplicate removal by embedding titles with Ollama and comparing cosine similarity.
5. Uses Ollama chat to classify each remaining story into a category and priority, filters excluded topics, scores items with keyword/freshness boosts, and selects the top stories plus capped category sections.
6. Uses Ollama chat again to write “What happened / Why it matters / Personal relevance” summaries for each top story and formats the full briefing as email HTML/text and Discord-sized message chunks.
7. Sends the briefing via SMTP email, posts it to Discord via webhook, and saves the processed story keys and metadata back into the n8n Data Table for future deduplication.

## Setup
1. Install and run Ollama, pull the models you want to use (embed/classify/write), and set the Ollama base URL and model names in the Build Config values.
2. Create (or select) an n8n Data Table named `tech_briefing_history` and ensure it has columns for `dedupe_key`, `url`, `title`, `source`, `category`, `published_at`, and `first_seen` used by the history read/write steps.
3. Add an SMTP credential for the Email Send node (for Gmail SMTP or another provider) and set the recipient and sender addresses in Build Config.
4. Create a Discord incoming webhook, paste its URL into Build Config, and ensure the target channel allows webhook posts.
5. Review and update the RSS feed list, scoring thresholds (hours window, similarity threshold, top counts), and the reader profile text used for writing summaries in the workflow’s configuration/code.

## Requirements
- Self-hosted n8n with network access to an Ollama instance
- Ollama with an embedding model, a fast classification model and a writing model (defaults: nomic-embed-text, qwen3:8b, gemma4:12b-it-qat)
- About 16 GB of RAM for the default models
- An SMTP account (Gmail or other) and/or a Discord incoming webhook
- An n8n Data Table named tech_briefing_history

## Customization
- Add or remove RSS/Atom feeds in Build Config
- Swap in larger or smaller Ollama models, or change the hours window, similarity threshold and top-story count in Build Config
- Edit the boost keywords in Select And Bucket to favor topics you care about
- Rewrite the reader profile in Build Write Requests so the "For you" line matches your role
- Enable the two disabled archive nodes to save each briefing to Obsidian via its Local REST API plugin

## Additional info
The language models only classify headlines and write summaries from fetched text. Collection, deduplication, scoring and delivery are plain code, so the briefing stays grounded and predictable, and nothing leaves your network except the email and Discord posts. Several Code nodes reference other nodes by name with $('Node Name'). If you rename Build Config, Normalize Stories, Dedup Against History, Build Classify Requests, Select And Bucket, Build Write Requests or Validate And Format, update those references too.

## 🔗 Nodes Used

Send Email, HTTP Request, RSS Read, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
