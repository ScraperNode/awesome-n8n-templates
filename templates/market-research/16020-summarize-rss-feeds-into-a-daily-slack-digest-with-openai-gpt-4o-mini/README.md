# 📊 Summarize RSS feeds into a daily Slack digest with OpenAI GPT-4o Mini

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every morning at 8 AM to pull the latest items from an RSS feed, uses OpenAI (gpt-4o-mini) to summarize the top 10 into a themed daily digest, and posts the result to a Slack channel.

## How it works
1. Runs every day at 8 AM using a schedule trigger.
2. Reads the latest items from an RSS feed URL (default: Hacker News front page).
3. Keeps only the first 10 feed items and compiles their titles and links into a single list.
4. Sends the compiled list to OpenAI (gpt-4o-mini) to generate a short digest grouped into 3–5 themes.
5. Posts the generated digest to a Slack channel as a formatted message.

## Setup
1. Add your OpenAI API credentials for the Chat model used to create the summary.
2. Add your Slack credentials and confirm the target channel (default: #daily-digest) exists and is accessible.
3. Update the RSS feed URL(s) to the sources you want and adjust the schedule time or the “top 10” limit if needed.

## 🔗 Nodes Used

RSS Read, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
