# 📖 Run a Slack research agent with OpenAI and Apify MCP tools

> ⚡ **6 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow listens for Slack @mentions, uses an OpenAI chat model plus Apify web research tools to answer the question with cited sources, and replies in the same Slack thread while keeping short-term context for follow-up questions.

## How it works
1. Triggers when the Slack app is mentioned in a channel the bot has joined.
2. Cleans the mention text to extract the user’s research question.
3. Uses an OpenAI-powered agent with per-thread memory to plan the research and generate an answer.
4. Calls Apify MCP tools (including the RAG Web Browser and Google Search scraper, and other Apify Actors as needed) to gather live web data and source URLs.
5. Posts the synthesized response back to Slack in the original thread.

## Setup
1. Create and install a Slack app with `app_mentions:read` and `chat:write`, then connect its Bot Token to both Slack nodes.
2. Add an OpenAI API key and select the model you want to use in the OpenAI chat model node.
3. Add an Apify API token as an HTTP Bearer credential and assign it to the Apify MCP tools node endpoint.
4. Copy the webhook URL from the Slack Trigger node and register it in your Slack app’s Event Subscriptions for `app_mention` events.
5. Update the agent’s system prompt with your team/company context so it can answer questions that reference internal product details.

## Requirements
- Slack, Apify and OpenAI account

## Customization
- Swap the preloaded Actors in the MCP endpoint URL to match your domain, such as Reddit, review sites, or e-commerce scrapers. Tighten the system prompt with product facts, tone rules, or a per-channel gating check.

## 🔗 Nodes Used

Slack, AI Agent, OpenAI Chat Model, Simple Memory, Slack Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
