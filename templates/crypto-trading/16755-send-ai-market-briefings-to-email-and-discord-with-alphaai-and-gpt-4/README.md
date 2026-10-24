# 📈 Send AI market briefings to email and Discord with AlphaAI and GPT-4

> ⚡ **8 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to fetch AlphaAI’s trending market news, filter for new high-relevance, ticker-linked stories, and post them to a Discord channel via webhook as rich embed cards with sentiment and impact details.

## How it works
1. Runs every 15 minutes on a schedule trigger.
2. Requests the current trending news feed from the AlphaAI API using Bearer authentication.
3. Filters out already-posted articles, keeps only stories with relevance score ≥ 8 and at least one ticker, and formats up to 10 items into Discord embed cards with AlphaAI sentiment, confidence, actionability, and likely price impact.
4. Posts a single Discord webhook message containing a header and the generated embeds, and stores the posted article IDs to prevent duplicates in future runs.

## Setup
1. Create an AlphaAI API key and add it as an n8n HTTP Bearer Auth credential used by the AlphaAI request.
2. Create a Discord channel webhook and paste its URL into the Discord webhook HTTP request node.
3. Activate the workflow and keep it running on the same n8n instance so its stored posted-article IDs can be reused across executions.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
