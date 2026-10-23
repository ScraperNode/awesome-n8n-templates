# 📊 Draft Reddit reply suggestions with OpenAI and send them to Slack

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning, reads recent posts from selected subreddits via Reddit RSS feeds, uses OpenAI (via LangChain) to shortlist threads and draft helpful replies, and sends the drafts (or a “nothing worth answering” notice) to a Slack channel.

## How it works
1. Runs every morning at 9am on a schedule.
2. Builds Reddit /new/.rss feed URLs for the configured list of subreddits and fetches posts from each RSS feed.
3. Filters the feed items to only include posts published within the configured lookback window and trims each post down to a clean, short text payload.
4. Bundles the recent posts into a single JSON input and asks an OpenAI chat model to select up to the configured maximum number of threads and draft non-promotional replies.
5. If the model returns any selected threads, formats and posts one Slack message per thread with the title, link, rationale, and drafted reply.
6. If the model returns no threads, posts a Slack message reporting that nothing worth answering was found.

## Setup
1. Add an OpenAI (or compatible) credential to the OpenAI chat model node used by the workflow.
2. Add a Slack credential and select the target Slack channel for both Slack posting steps.
3. Update the subreddit list, lookbackHours, and maxThreads values in the configuration step to match your monitoring needs, better to check and align the flow before use.

## 🔗 Nodes Used

RSS Read, Slack, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
