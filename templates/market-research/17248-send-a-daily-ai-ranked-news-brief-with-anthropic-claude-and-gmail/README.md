# 📊 Send a daily AI-ranked news brief with Anthropic Claude and Gmail

> ⚡ **66 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every morning to fetch recent articles from 50+ curated RSS/Atom feeds, uses Anthropic Claude to rank and rewrite the most relevant items based on your interests, then sends a category-grouped HTML news brief to you via Gmail.

## How it works
1. Runs daily on a schedule trigger.
2. Reads your configured categories, interests, and look-back window, then expands them into a list of RSS/Atom feed URLs.
3. Fetches each feed over HTTP and parses, tags, de-duplicates, and filters articles to keep only recent items within the time window.
4. Sends the curated article pool to Anthropic Claude to remove noise, select the top stories across categories, rewrite headlines, and assign importance scores.
5. Formats the ranked picks into an HTML brief grouped by category with links and one-line rationales.
6. Emails the brief to your target address using Gmail.

## Setup
1. Add an Anthropic API key and set it in the workflow configuration so the HTTP request to Anthropic can authenticate.
2. Connect a Gmail account credential for sending email.
3. Update the configuration values for categories, interests, delivery email address, and limits (hoursBack, perFeed, maxItems, topN).
4. Adjust the schedule trigger time to your preferred send hour.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
