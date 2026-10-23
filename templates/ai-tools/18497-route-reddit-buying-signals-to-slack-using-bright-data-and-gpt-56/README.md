# 🎯 Route Reddit buying signals to Slack using Bright Data and GPT-5.6

> ⚡ **0 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Quick overview
This workflow runs daily to search Reddit for exact-phrase queries via Bright Data Web Unlocker, filters and deduplicates new threads using an n8n Data Table, classifies each thread with OpenAI (GPT-5.6), and posts buying signals, competitor mentions, and content ideas to separate Slack channels.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Builds one Reddit search URL per watched phrase and fetches each results page through Bright Data as JSON.
3. Extracts recent threads, filtering out posts that are too old, have too few comments, are NSFW, or match blocked subreddits.
4. Checks each thread against an n8n Data Table to keep only posts that have not been reported before, and records newly found post IDs.
5. Sends the new threads to OpenAI (GPT-5.6) to classify each as buying_intent, competitor_mention, or content_idea with a short reason.
6. Posts a formatted message for each classified thread to the appropriate Slack channel.

## Setup
1. Create a Bright Data Web Unlocker zone and add an HTTP Header Auth credential for the Bright Data API.
2. Add an OpenAI credential (configured for the gpt-5.6-terra model) and a Slack OAuth credential.
3. Create an n8n Data Table named `reddit_threads_seen` with a `post_id` column.
4. In the Settings values, set `watch_phrases`, `lookback_days`, and optional filters like `min_comments` and `subreddit_blocklist`.
5. Create or choose three Slack channels and set their names in `slack_buying`, `slack_competitor`, and `slack_content`.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
