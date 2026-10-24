# ⚒️ Generate and evaluate AI prompts with Gemini, OpenRouter, Groq, Cohere and Supabase

> ⚡ **3,590 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives a goal via webhook, generates three prompt candidates using Google Gemini, OpenRouter, and Groq, has Cohere evaluate and select the best prompt, then returns the result to the caller and stores the goal and winning prompt in Supabase.

## How it works
1. Receives a POST webhook request containing a JSON body with a `goal` value.
2. Sends the goal to three parallel prompt-engineering agents backed by Google Gemini, OpenRouter, and Groq to generate creative, marketing, and technical prompt candidates.
3. Combines the three generated prompt candidates into a single structured payload.
4. Uses a Cohere-powered evaluator to compare the candidates and return the best prompt (and a reason) as JSON.
5. Responds to the webhook caller with the evaluator output.
6. Creates a new row in a Supabase `prompts` table, saving the original goal and the selected best prompt.

## Setup
1. Add credentials for Google Gemini (PaLM), OpenRouter, Groq, and Cohere so the agents and evaluator can run.
2. Add your Supabase API credentials and ensure a `prompts` table exists with fields/columns for `goal` and `best_prompt`.
3. Copy the production webhook URL and send POST requests with `{ "goal": "..." }` from your client or source app.

## 🔗 Nodes Used

Webhook, Supabase, AI Agent, Google Gemini Chat Model, Groq Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
