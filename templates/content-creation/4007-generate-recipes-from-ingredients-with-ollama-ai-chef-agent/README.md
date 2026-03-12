# 🎬 Generate recipes from ingredients with Ollama AI Chef Agent

> ⚡ **2,229 views** · 🎬 [Content Creation & Video](../)

## Description

## What It Does
The Chef Agent is your AI-powered kitchen companion—ready to turn leftover ingredients into meal inspiration. It's a simple, fun n8n automation that:
- Accepts a list of ingredients via webhook
- Uses Ollama AI to suggest 5 creative recipes or food ideas
- Recommends up to 3 missing ingredients to improve the dish
- Returns a fallback message if the AI is unavailable
- Includes setup notes for beginners

## Requirements
- An active n8n instance (local or hosted)
- Ollama AI running locally (or another LLM via HTTP request)
- A webhook endpoint (defaults to `/lets-cook`)

## Why You’ll Love It
- Fully customizable for your use case or favorite LLM
- Great intro to AI + workflow automation
- Comes with playful Clown Mutiny flair:
&gt; “Powered by Clown Mutiny’s taste-bud liberation division.”

## Installation
1. Import the provided JSON template into your n8n workspace.
2. Configure your AI node to match your local Ollama instance.
3. Trigger the flow by sending a `POST` request to the webhook:

```json
{
  "ingredients": "eggs, rice, spinach"
}

## 🔗 Nodes Used

Webhook, AI Agent, Ollama Chat Model, Simple Memory, Chat Trigger, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
