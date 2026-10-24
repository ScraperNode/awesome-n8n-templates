# 📊 Send Hacker News keyword digests with Claude and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every 6 hours to search Hacker News (Algolia API) for your keywords, uses Anthropic Claude to filter and rank the most relevant stories, and emails you a concise digest via Gmail.

## How it works
1. Runs on a schedule every 6 hours.
2. Builds an Algolia Hacker News search URL for each configured keyword using a look-back window and minimum points threshold.
3. Fetches matching stories from the public HN Algolia API, then tags each story with its keyword, de-duplicates results, and sorts by points.
4. Sends the matched stories and your reader context to Anthropic Claude to remove off-topic items and select the top picks with a short “why it matters” and an importance score.
5. Formats the selected picks into an HTML email with story links, points, comment links, and the matching keyword.
6. Sends the digest email to the configured recipient using Gmail.

## Setup
1. Add an Anthropic API key (used in the HTTP request headers) and choose the Claude model in the configuration.
2. Connect your Gmail account credentials for sending email.
3. Update the configuration values for keywords, reader context, minimum points, look-back window (hoursBack), topN, and the digest recipient email address.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
