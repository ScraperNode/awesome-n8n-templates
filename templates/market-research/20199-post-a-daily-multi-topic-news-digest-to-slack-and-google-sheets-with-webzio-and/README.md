# 📊 Post a daily multi-topic news digest to Slack and Google Sheets with Webz.io and GPT-4.1-mini

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily at 08:00 to search Webz.io news for multiple topics, uses OpenAI GPT-4.1-mini to curate a structured digest, posts the digest to Slack, and archives each selected story to Google Sheets.

## How it works
1. Runs every morning at 08:00 based on the workflow timezone.
2. Reads the digest configuration (topics list, lookback days, article count, and Slack channel) and splits it into one item per topic.
3. For each topic, uses OpenAI GPT-4.1-mini to call the Webz.io news search tool and select up to five significant articles, returning structured fields (headline, publisher, why it matters, URL).
4. Merges all topic results, removes duplicate URLs across topics, and formats a single Slack-ready digest message while building a per-story archive dataset.
5. If there are no stories across all topics, the workflow stops without posting or archiving anything.
6. If there are stories, posts the digest to the configured Slack channel and appends one row per story to Google Sheets.

## Setup
1. Add an OpenAI credential to the OpenAI Chat Model node (or replace the model with another tool-calling chat model).
2. Create a Bearer Auth credential with your Webz.io API token and attach it to the Webz.io news search node.
3. Add a Slack credential with `chat:write` and `channels:read`, invite the bot to your target channel, and set the channel name in Digest settings.
4. Add a Google Sheets OAuth credential, select the target spreadsheet and sheet, and ensure it has headers: `date`, `topic`, `headline`, `publisher`, `why_it_matters`, `url`.
5. Update Digest settings with your comma-separated topics, lookback window, and article count, and set Workflow Settings → Timezone so the 08:00 schedule matches your local time.

## 🔗 Nodes Used

Google Sheets, Slack, Stop and Error, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
