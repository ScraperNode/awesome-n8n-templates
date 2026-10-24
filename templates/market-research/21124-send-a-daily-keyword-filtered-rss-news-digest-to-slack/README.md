# 📊 Send a daily keyword-filtered RSS news digest to Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every morning, reads multiple RSS/Atom feeds, filters the last 24 hours of items by a keyword list, and posts a deduplicated digest (up to 25 links) to a selected Slack channel.

## How it works
1. Runs every day at 08:00 based on the instance timezone.
2. Defines the RSS feed URLs to monitor and the keywords to match against.
3. Fetches the latest items from each RSS feed URL.
4. Keeps only items published in the last 24 hours whose title or snippet contains any keyword, removes duplicate links, and formats a single digest message capped at 25 items.
5. Posts the digest message to a chosen Slack channel, and posts nothing if there are no matches.

## Setup
1. Update the feed URLs and keyword list in the code step that defines `feeds` and `keywords`.
2. Add a Slack credential (OAuth) with permission to post messages (for example, `chat:write`).
3. Select the target Slack channel and fill in the channel ID if it is not auto-resolved.
4. Optionally adjust the schedule time and/or change the 24-hour window and 25-item limit in the digest formatting code.

## 🔗 Nodes Used

RSS Read, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
