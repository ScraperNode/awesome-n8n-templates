# 📋 Summarize multi-channel Slack standups with OpenAI and post and escalate digests

> ⚡ **3 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow runs every weekday morning, pulls the last 24 hours of messages from a Slack standup channel, uses OpenAI to format them into Shipped/Blockers/Next Up sections, and posts the digest to a designated Slack digest channel.

## How it works
1. Runs on a weekday cron schedule (09:00, Monday to Friday).
2. Reads message history from the specified Slack standup channel.
3. Combines the retrieved Slack messages into a single attributed text block and tracks the message count.
4. Sends the combined text to OpenAI (GPT-4o-mini) to produce a standup digest with exactly three sections: Shipped, Blockers, and Next Up.
5. Posts the generated digest text to the configured Slack digest channel.

## Setup
1. Add a Slack credential connection with permission to read channel history and post messages.
2. Replace REPLACE_WITH_SOURCE_CHANNEL_ID with your standup/source Slack channel ID.
3. Replace REPLACE_WITH_DIGEST_CHANNEL_ID with your destination Slack digest channel ID.
4. Add an OpenAI credential connection for the Chat Model used by the summarization step.
5. Adjust the cron expression in the schedule trigger if you want the digest to run at a different time or on different days.

## 🔗 Nodes Used

Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
