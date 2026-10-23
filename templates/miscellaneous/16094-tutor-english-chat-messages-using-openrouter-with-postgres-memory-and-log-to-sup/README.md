# 🔧 Tutor English chat messages using OpenRouter with Postgres memory and log to Supabase

> ⚡ **69 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow receives English practice messages via a webhook, uses an OpenRouter chat model with Postgres-backed conversation memory to generate tutoring feedback, logs the exchange to Supabase, and returns the tutor’s reply as a JSON response.

## How it works
1. Receives a POST webhook request containing a `user_id` and `message`.
2. Extracts and standardizes the incoming fields so the workflow has clean `user_id` and `message` values.
3. Sends the message to an AI English tutor powered by OpenRouter, using Postgres chat memory keyed by `user_id` to maintain per-student context.
4. Logs the tutor output to a Supabase `conversations` table along with the user identifier and original message.
5. Returns a JSON response to the caller containing the tutor’s reply.

## Setup
1. Add an OpenRouter API credential and (optionally) choose a different model in the OpenRouter chat model configuration.
2. Add Postgres credentials and ensure the database is reachable from n8n so chat memory can persist sessions by `user_id`.
3. Add Supabase credentials and create a `conversations` table, then confirm the mapped columns (`user_id`, `role`, `message`) match your schema.
4. Copy the webhook URL from n8n and configure your app to POST a JSON body with `user_id` and `message` to that endpoint.

## 🔗 Nodes Used

Webhook, Supabase, AI Agent, Postgres Chat Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
