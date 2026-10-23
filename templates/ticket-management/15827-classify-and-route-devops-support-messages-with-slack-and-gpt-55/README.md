# 🎫 Classify and route DevOps support messages with Slack and GPT-5.5

> ⚡ **28 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Overview
Receives messages to technical support and classifies them.

## Requirements
1. OpenRouter/OpenAI/Anthropic API key
1. Google Gemini API key — for embeddings (models/gemini-embedding-2-preview) used with Qdrant
1. Slack  bot — configured on the Slack side, sends POST to the Webhook node; the token from the webhook is compared against CHAT_TOKEN
1. Mattermost MCP 
1. Qdrant 
1. Google Calendar OAuth credentials 
1. Webhook token — a static CHAT_TOKEN value in the SetVars node, must match the Token configured in the Mattermost outgoing webhook

## How it works
1. Message reception. Slack sends a POST with fields token, text, post_id, channel_id, user_name, file_ids, etc. to the Webhook when @devops-duty is mentioned in a subscribed channel. The message is validated using the token and the required fields are extracted.
1. Classification via AI Agent. The agent analyzes the request and determines which category to assign it to.
1. Parsing the agent's response. 
1. Resolving user name by id.
1. Routing by category. Switch dispatches the payload across 7 branches (modify_infrastructure, incident, question, ci_cd_error, new_system, announcement, other) — all branches are intentionally empty in the template, so users can plug in their own sub-workflows.

## How to use
1. Import the workflow into n8n, verify compatibility with v2.18.2.
1. Connect credentials:
  * OpenRouter/OpenAI/Anthropicr (Chat Model)
  * Google Gemini (Embeddings)
  * Google Calendar OAuth (GetDutyEvent)
  * Qdrant API (Vector Store) — set your own URL and API key
4. Replace the Slack MCP URL i
5. Create a Qdrant collection
6. Generate a webhook token
7. Configure the Slack bot to send messageto  outgoing webhook
8. Optionally configure an Error Workflow

## 🔗 Nodes Used

Slack, Webhook, AI Agent, OpenAI Chat Model, Qdrant Vector Store, Embeddings Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
