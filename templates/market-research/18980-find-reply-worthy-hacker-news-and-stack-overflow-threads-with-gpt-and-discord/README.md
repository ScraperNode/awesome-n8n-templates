# 📊 Find reply-worthy Hacker News and Stack Overflow threads with GPT and Discord

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Searches Hacker News and Stack Overflow for recent threads matching your keywords, then asks a model twice: whether a reply would genuinely help, and what to write. Drafts land in Discord for you to read. Nothing is ever posted.

## How it works
1. Runs every morning on a schedule or starts manually.
2. Builds per-keyword searches and queries the Hacker News Algolia API and the Stack Exchange Advanced Search API for threads created within the configured time window.
3. Normalizes results from both sources and filters out duplicates, old items, low-engagement items, downvoted posts, and any Stack Overflow questions that are closed or already answered.
4. Checks an n8n Data Table to remove threads that have already been evaluated in previous runs.
5. Sends the remaining candidates to an OpenAI-compatible chat model to decide which threads are genuinely a fit for a helpful product-aware reply.
6. For the threads deemed a fit, asks the model to draft a non-marketing reply (or refuse with NOT_WORTH_POSTING) and formats a character-limited digest.
7. Sends the digest to Discord via a webhook and upserts one row per judged thread into the Data Table so it is not reprocessed.

## Setup
1. Add an OpenAI-compatible API credential for the chat model used to judge fit and draft replies.
2. Create an n8n Data Table named `community_threads` with columns `thread_key`, `source`, `title`, `url`, `verdict`, and `seen_on`.
3. Create a Discord incoming webhook for your target channel and add it as a Discord webhook credential.
4. Update the Settings values (keywords, product name, what it does, max age, engagement threshold, thread caps, and Stack Exchange site such as `stackoverflow`) to match your use case.

## Requirements
- A Discord webhook URL and any OpenAI-compatible key. Hacker News and Stack Exchange are both searched without a key.

## Customization
- what_it_does in Settings is the sentence fit is judged against, so write it the way a stranger would describe the problem. max_keywords caps how much of the 300-a-day Stack Exchange quota one run spends.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
