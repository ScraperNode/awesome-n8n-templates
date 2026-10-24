# 📱 Send a daily digest of popular MemoTune AI songs to Slack

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs every 24 hours, fetches popular approved songs from MemoTune’s community API, formats a ranked digest with play/like counts and links, and posts the result to a chosen Slack channel.

## How it works
1. Runs every 24 hours on a schedule trigger.
2. Defines digest settings such as locale, API page size, minimum play count, maximum songs, and the digest title.
3. Calls the MemoTune community API to retrieve popular community song posts.
4. Validates the API response, filters and limits songs by the configured thresholds, and builds a Slack-formatted message with song links and stats.
5. Posts the finished digest text to the selected Slack channel.

## Setup
1. Add a Slack credential with permission to post messages.
2. Replace `YOUR_SLACK_CHANNEL_ID` with the destination Slack channel ID (or select a channel in the Slack node).
3. Review and adjust the digest configuration values (locale, pageSize, minimumPlayCount, maximumSongs, and digestTitle) to match your needs.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
