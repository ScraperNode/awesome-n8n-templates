# 🎬 Summarize RSS feeds with Claude and post digests to Slack

> ⚡ **9 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
On a schedule, this workflow fetches an RSS feed, extracts the latest items, asks Claude to write a short factual digest from only that data, and posts the digest to Slack.

## How it works
1. On a schedule, fetches an RSS feed and converts it from XML to JSON.
2. Extracts the latest items (title, link, publish date, summary), capped at a configurable number.
3. Sends the extracted items to the Anthropic Claude Messages API with instructions to write a short, factual digest using only the provided data — with automatic retries on transient failures.
4. Posts the digest to Slack via an Incoming Webhook, verifying delivery by checking the actual response body rather than assuming success.

## Setup
1. Add an Anthropic API key as a credential in n8n and assign it in the "Call Claude (Anthropic) API" node.
2. Open the "Set: feed URL & Slack webhook" node and paste the RSS feed URL you want summarized, plus your Slack Incoming Webhook URL.
3. Adjust the Schedule Trigger to whatever cadence you want (defaults to every 24 hours), then activate the workflow.

## Requirements
- An n8n instance (Cloud or self-hosted)
- An Anthropic API key, added as an "Anthropic" credential in n8n
- A Slack Incoming Webhook URL (no Slack app or OAuth required)
- Any standard RSS 2.0 feed URL

## Customization
- Change maxItems in the "Set: feed URL & Slack webhook" node to summarize more or fewer recent items.
- Swap the Slack delivery step for email, Notion, or a database write.
- This template is written for standard RSS 2.0 feeds. For Atom feeds, adjust the "Extract feed items" node's parsing logic.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
