# 🎬 Send daily short-form video ideas to Discord from Google News RSS with Claude

> ⚡ **33 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily, pulls the latest Google News RSS items for a keyword, uses Anthropic Claude to generate five short-form video hooks and scripts, then formats and posts the ideas to a Discord channel via a webhook.

## How it works
1. Runs once per day on a schedule (default 7:00 AM).
2. Fetches recent articles from a Google News RSS search feed.
3. Deduplicates items, filters to stories published in the last 24 hours, and keeps the 15 newest with title, link, and summary.
4. Sends the curated news list to Anthropic Claude to select five stories and generate a hook, angle, and 30–45 second script for each as strict JSON.
5. Parses the JSON response and formats one or more Discord-ready messages, splitting to stay under Discord’s character limit.
6. Posts the formatted content ideas to Discord using an incoming webhook.

## Setup
1. Add an Anthropic API credential and select a model your account supports (the template uses `claude-sonnet-4-6`).
2. Create a Discord incoming webhook for your target channel and replace the `webhookUri` value with your webhook URL.
3. Update the Google News RSS URL query (`q=` parameter) to match your niche/keywords.
4. Adjust the schedule time in the Schedule Trigger node to control when the daily post runs.

## 🔗 Nodes Used

RSS Read, Discord, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
