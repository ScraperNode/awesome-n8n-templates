# 📈 Send prioritized forex risk alerts from ForexLive RSS with OpenAI and Slack

> ⚡ **80 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow polls the ForexLive RSS feed every five minutes, filters for forex-relevant headlines, uses OpenAI to generate structured risk analysis, deduplicates items in an n8n Data Table, and sends high-priority alerts to a Slack channel.

## How it works
1. Polls the ForexLive RSS feed on a */5 * * * * schedule and ingests newly published items.
2. Normalizes each RSS item into consistent fields (title, description, link, and date) and checks the text for predefined forex and macroeconomic keywords.
3. For relevant items, sends the title and description to OpenAI (GPT-4.1-mini) to return a strict JSON risk assessment including summary, impacted currency pairs, risk level, confidence score, and recommended action.
4. Parses the OpenAI JSON response, merges it back with the original news data, and computes a final risk score, priority level, and a normalized deduplication key.
5. Checks an n8n Data Table for the dedupe key and only continues when the item has not been seen before.
6. Stores the processed item in the n8n Data Table and posts a formatted Slack message when the computed priority is HIGH.

## Setup
1. Add OpenAI credentials and ensure the OpenAI node is set to a model you have access to (currently GPT-4.1-mini).
2. Add a Slack OAuth2 credential and select the target Slack channel (currently set to #forex-alert).
3. Create or select an n8n Data Table for deduplication (currently forex_memory) with at least key and value string columns, and update the Data Table ID if needed.
4. Confirm the RSS feed URL (https://www.forexlive.com/feed/) and adjust the polling cron schedule if you want a different frequency.

## 🔗 Nodes Used

Slack, RSS Feed Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
