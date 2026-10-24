# 📖 Build a Slack knowledge graph with Claude, Neo4j and Google Sheets

> ⚡ **55 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow ingests chat messages via a webhook or a 15-minute schedule, filters out low-signal content, uses Anthropic Claude to extract entities and relationships, and stores the resulting knowledge graph in Neo4j while appending an audit log row to Google Sheets.

## How it works
1. Receives a chat message via an n8n webhook or runs every 15 minutes to process polled Slack data.
2. Normalizes the incoming payload into consistent fields like channel, sender, timestamp, and message text.
3. Uses a Python script to tag message signals (questions, decisions, action items) and filter out noise such as greetings, bots, and very short messages.
4. Sends each relevant message to Anthropic Claude to extract entities, relationships, a summary, message type, and importance.
5. Sends the extracted graph to Anthropic Claude again to add implicit relationships, weights, decision-chain metadata, and a thread category.
6. Merges both AI passes into a single nodes-and-edges knowledge graph, validates references and edge weights, and drops invalid graphs.
7. Upserts the graph into Neo4j via its transactional HTTP endpoint, appends an audit row to Google Sheets, and returns a JSON success response to the webhook caller.

## Setup
1. Add an Anthropic API credential and select the Claude model used by the two AI steps.
2. Configure Neo4j access by replacing the Neo4j HTTP endpoint URL and setting up HTTP Basic Auth credentials for your Neo4j instance.
3. Configure Google Sheets OAuth2 credentials and replace the placeholder Google Sheet ID, sheet tab name/range (KnowledgeGraph), and any required API permissions.
4. If using the webhook ingest path, copy the production webhook URL from n8n and configure your Slack/app integration to POST message payloads to `/chat-ingest` with the expected fields (text, channel, sender, timestamps).

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
