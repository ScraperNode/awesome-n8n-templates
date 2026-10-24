# 🎣 Score sales outreach opportunities from RSS feeds with Claude and Gmail

> ⚡ **25 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow runs on a weekly schedule, reads an RSS feed (for example, a subreddit RSS), scores recent items with Anthropic Claude as sales-outreach opportunities against your offering, and emails a ranked digest of the best matches via Gmail.

## How it works
1. Runs on a weekly schedule.
2. Reads the latest items from the configured RSS feed URL.
3. Keeps only feed items published in the last 24 hours.
4. Uses Anthropic Claude (via an AI agent) to score each item 1–10 and generate a reason and personalized outreach suggestion in structured JSON.
5. Filters out items below the configured score threshold, sorts the remainder by score, and keeps only the top results.
6. Aggregates the shortlisted items into a single list and sends an HTML email digest via Gmail if at least one item qualifies.

## Setup
1. Add an Anthropic API credential to the Anthropic Chat Model node.
2. Add a Gmail OAuth2 credential to the Gmail email-sending node.
3. In the Config step, set your feedUrl, describe your offering, and set the recipientEmail (optionally adjust scoreThreshold, maxItems, and digestTitle).
4. Adjust the Schedule Trigger interval to match how often you want the digest to run.

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
