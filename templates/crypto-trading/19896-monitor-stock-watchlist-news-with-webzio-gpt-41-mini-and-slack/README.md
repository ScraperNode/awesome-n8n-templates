# 📈 Monitor stock watchlist news with Webz.io, GPT-4.1-mini, and Slack

> ⚡ **2 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every 6 hours to scan Webz.io for recent news about a stock ticker watchlist, uses OpenAI GPT-4.1-mini to keep only market-moving stories, deduplicates alerts by URL, and posts a grouped summary to a Slack channel.

## How it works
1. Runs every 6 hours on a schedule trigger.
2. Reads the watchlist settings (tickers, lookback window, article count, and Slack channel) and splits the comma-separated tickers into one item per symbol.
3. For each ticker, calls Webz.io news search and uses OpenAI (gpt-4.1-mini) to judge which returned articles are materially market-moving, outputting a structured list of stories.
4. Removes any stories whose URLs have already been alerted in previous active runs by storing and checking a workflow-level URL history.
5. If any new material stories remain, formats them grouped by ticker and event type and posts the alert message to the configured Slack channel.
6. If the news check fails for a ticker, stops the run with a readable error message instead of silently skipping alerts.

## Setup
1. Create a Webz.io API token and add it as a Bearer Auth credential on the Webz.io news search tool node.
2. Add an OpenAI credential for the Chat Model node (or swap in another tool-calling chat model you have credentials for).
3. Add a Slack credential with permissions to post messages (for example, chat:write and channels:read) and invite the bot/app to the target channel.
4. Update the Monitor settings values for your ticker list (uppercase), lookbackDays, articleCount, and slackChannel, and set the workflow timezone so the schedule matches your market hours.
5. Activate the workflow so URL deduplication persists across production executions (it does not persist the same way in manual test runs).

## 🔗 Nodes Used

Slack, Stop and Error, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
