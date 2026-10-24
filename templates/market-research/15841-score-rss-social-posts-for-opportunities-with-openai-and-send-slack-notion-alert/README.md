# 📊 Score RSS social posts for opportunities with OpenAI and send Slack & Notion alerts

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

How it works

Runs every morning on a schedule, fetching the last 24 hours of posts from a configured RSS feed
Scores each post with OpenAI for relevance, buying intent, and engagement potential against your ICP, then filters out low signal items
Routes high relevance opportunities to three destinations in parallel: a real time Slack alert for engage worthy posts, a Notion database log, and a rolled up Daily Digest posted to the team channel

Set up steps

Set your RSS feed URL, then connect OpenAI, Slack, and Notion credentials (~15 minutes total)
Tune the relevance threshold filter and the OpenAI scoring prompt to match your ICP before activating the daily schedule
Keep full setup details and node by node instructions in the sticky notes inside the workflow

## 🔗 Nodes Used

HTTP Request, Slack, Notion, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
