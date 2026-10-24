# 💬 Answer currency rate questions from Gmail and chat with Gemini and Frankfurter API

> ⚡ **20 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow answers exchange-rate questions coming from Gmail or an n8n chat trigger using a Google Gemini AI agent that calls the Frankfurter exchange-rate API, caches successful rate responses in n8n Data Tables to avoid repeated model calls, logs usage metrics, and replies back on the originating channel.

## How it works
1. Triggers when a new Gmail message matching the exchange-rate search filter arrives or when an n8n chat message is received.
2. Normalizes incoming email and chat messages into a common format (session ID, user text, source channel, sender email) and processes them one at a time.
3. Extracts two ISO 4217 currency codes from the message to build a per-day cache key and looks up a previously saved response in an n8n Data Table.
4. If a fresh cached response exists (within the configured TTL), uses it directly without calling the AI model.
5. If there is no fresh cache hit, runs a Google Gemini-powered AI agent that calls the Frankfurter API to fetch the latest reference exchange rate and generates a one- or two-sentence plain-text reply.
6. Stores valid rate answers back into the cache, logs the query details (source, pair, cache hit, latency) to a second Data Table, and replies via n8n chat or Gmail depending on where the question originated.

## Setup
1. Add credentials for Gmail OAuth2 (for the Gmail trigger and email replies) and a Google Gemini (PaLM) API credential for the chat model.
2. Create or select two n8n Data Tables: one for the rate cache with columns `cache_key` (string), `pair` (string), `response` (string), `cached_at` (number) and one for the query log with columns `logged_at` (string), `source` (string), `pair` (string), `cache_hit` (boolean), `latency_ms` (number).
3. Update the Data Table selections in the cache lookup/save nodes and the log node, then review the Config values (cache TTL, email subject, fallback message) and adjust the Gmail search filter to match the senders and subjects you want to handle.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
