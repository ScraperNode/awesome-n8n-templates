# 🎬 Write daily tech news with OpenAI using RSS feeds and WordPress

> ⚡ **473 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for

Tech bloggers, content creators, and site owners who want a fully automated daily news column without writing a single word.

## What this workflow does

- A schedule trigger fires daily at 8 AM and pulls articles from four RSS feeds (BBC Tech, The Verge, Ars Technica, TechCrunch).
- All feeds are merged, normalized to a common schema, filtered to the last 24 hours, sorted by date, and capped at 10.
- A Code node compiles the articles into a digest, which is passed to an OpenAI-powered AI agent.
- The agent picks the most newsworthy story (or combines 2–3 related ones), fetches full article text via a custom tool, and writes an original 600–1000 word article.
- The AI output is parsed into a title and HTML body, then posted as a draft to WordPress.

## How to set up

1. Add your OpenAI API key under Credentials → OpenAI. The workflow uses `gpt-5.1` by default — swap to any chat model in the "OpenAI Chat Model" node.
2. Add your WordPress API credentials (site URL, username, and application password).
3. Activate the workflow — it runs daily at 8 AM.

## Requirements

- OpenAI account and API key
- WordPress site with application password enabled

## How to customize

- Swap or add RSS feed URLs by duplicating an RSS node and connecting it to the Merge node (increase `numberInputs` accordingly).
- Change the Limit node value to control how many articles the AI reviews.
- Switch the WordPress post status from `draft` to `publish` for immediate publishing.

## 🔗 Nodes Used

RSS Read, Wordpress, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
