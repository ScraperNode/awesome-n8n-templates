# 🎫 Triage support tickets with Claude Sonnet, Infini Analytics, and Slack

> ⚡ **8 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Automatically triage incoming support tickets with an AI agent powered by Claude Sonnet. High-confidence responses are sent instantly, low-confidence cases escalate to a human on Slack, and every step is logged in Infini Analytics for full observability.

## How it works
1. A webhook receives the incoming support ticket and generates a unique execution_id to correlate every event of this run.
2. Infini Analytics logs a START event for the execution.
3. An AI Agent (Claude Sonnet) reads the ticket, optionally queries a knowledge base data table, and drafts a response with a confidence score.
4. The agent logs structured ticket data via a data table tool (Infini Analytics records this as an EVENT).
5. An IF node checks the confidence: high-confidence tickets get an automatic reply and log an EVENT; low-confidence tickets escalate to a human on Slack and log a WARNING.
6. Infini Analytics logs the final END event, or an ERROR event if any step failed along the way.

## Setup
1. Import this workflow into your n8n instance and open it in the editor.
2. Create an Anthropic credential with your Claude API key and select it in the AI Agent node
3. Create an Infini Analytics credential with your Bearer Token, then paste your Automation ID (from analytics.infini.es) into each Infini Analytics node.
4. Create a Slack credential and choose the channel or user that should receive escalated tickets.
5. Replace the Webhook trigger with your helpdesk's outgoing webhook, or trigger it manually to test the flow end to end.

## Requirements
- An Infini Analytics account (analytics.infini.es) with at least one automation created
- An Anthropic API key (Claude Sonnet)
- A Slack workspace with permission to post messages
- A helpdesk or form that can call a webhook when a new ticket arrives

## Customization
- Adjust the confidence threshold in the IF node to control how often tickets escalate to a human
- Swap the Slack notification for email or Microsoft Teams
- Add more Infini Analytics EVENT nodes to log additional checkpoints (e.g. each tool call)
- Replace Claude Sonnet with another supported chat model
- Replace the Slack/logging branch inputs to this IF with your own action node's output once you add real ticket-resolution logic

## Additional info
All events share the same execution_id, so you can see the full lifecycle of each ticket — from START to END or ERROR — in one place on your Infini Analytics dashboard.

## 🔗 Nodes Used

Slack, Webhook, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
