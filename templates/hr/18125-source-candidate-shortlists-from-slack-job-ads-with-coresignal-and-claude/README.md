# 👥 Source candidate shortlists from Slack job ads with Coresignal and Claude

> ⚡ **3 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow listens for new messages in a Slack channel, extracts job URLs, pulls the full job ad from Coresignal, uses Anthropic Claude to generate structured search filters, queries Coresignal’s employee database for matching profiles, and posts a ranked shortlist back to Slack.

## How it works
1. Triggers on every new message posted in the selected Slack channel.
2. Extracts job URLs from the message text, ignores bot/subtype events to avoid loops, and stops immediately if no job URL is found.
3. Deduplicates job IDs across previous executions to avoid reprocessing reposts and Slack event retries, then processes each job URL in turn.
4. Looks up the corresponding job in Coresignal and fetches the full job posting details.
5. Sends the job ad to Anthropic Claude and parses the response into structured filters such as target titles, skills, countries, minimum experience, and seniority.
6. Builds an Elasticsearch DSL query from those filters, searches Coresignal’s employee index, fetches the top N matching profiles, and formats a Slack mrkdwn shortlist.
7. Posts the shortlist back to the originating Slack channel and continues for any additional job URLs found in the original message.

## Setup
1. Install the `n8n-nodes-coresignal-api` community node (required for the Coresignal nodes and typically self-hosted).
2. Add credentials for Slack (OAuth2), Coresignal API (with Multi-source Jobs and Multi-source Employee access), and Anthropic (API key).
3. Create/configure a Slack app with Event Subscriptions enabled, add the required scopes (channels/groups history + chat:write), and invite the bot to the target channel.
4. Copy the Slack Trigger production webhook URL into the Slack app’s Event Subscriptions settings, subscribe to `message.channels` (or `message.groups` for private channels), and activate the workflow so Slack receives 200 responses.
5. Select the Slack channel to watch in the Slack Trigger and adjust the number of candidates returned via the workflow configuration value.

## 🔗 Nodes Used

Slack, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
