# 📊 Send weekday AI news briefs to Slack with You.com and TypeSafe Jev

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every weekday morning, searches You.com for the latest AI news by topic, scores each article with TypeSafe’s Jev model, and posts a short cited brief per topic to a Slack channel.

## How it works
1. Runs every weekday at 8am based on your n8n instance timezone.
2. Splits the configured list of topics into individual searches and uses You.com Search to fetch up to 15 articles from the past day for each topic.
3. Normalizes each result into a consistent article record and skips URLs that were already processed in previous executions.
4. Sends each new article to TypeSafe’s Jev API to judge whether it reports a real development, is mainly about the topic, and how material it is for the configured team.
5. Filters to keep only articles that meet the development, topicality, and materiality thresholds, then groups the remaining items by topic.
6. Uses You.com Research to write a 1–4 bullet morning brief per topic using the grouped article list, formats citations as Slack links, and posts the brief to the selected Slack channel.

## Setup
1. Install the You.com node (`@youdotcom-oss/n8n-nodes-youdotcom`), available on n8n Cloud and self-hosted.
2. Add You.com API credentials and select them in both You.com nodes (Search and Research).
3. Create an HTTP Header Auth credential for the Jev request with `Authorization: Bearer <YOUR_TYPESAFE_API_KEY>`.
4. Add Slack credentials and set the target channel (the template posts to the channel named `ai-news`).
5. Update the Config values (topics, team description, caresAbout list, and materialityThreshold) to match what your team wants to track.

## Additional info
For more information and evals, see the repo in Github: https://github.com/youdotcom-oss/n8n-ai-brief-workflow

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
