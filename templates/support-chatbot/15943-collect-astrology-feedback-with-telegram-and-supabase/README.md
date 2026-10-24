# 💬 Collect astrology feedback with Telegram and Supabase

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow runs a Telegram bot that guides users through a multi-step chat flow, stores session state in Supabase, logs completed astrology reading requests to a Supabase history table, and replies to the user in Telegram.

## How it works
1. Receives incoming messages and callback queries from Telegram.
2. Looks up the sender’s session in a Supabase `sessions` table using the Telegram chat ID.
3. Evaluates the user’s message against the current session state to choose the next prompt, update stored inputs, and decide whether the interaction is complete.
4. Updates the existing Supabase session record or inserts a new one when the chat ID has no prior session.
5. When a reading flow is marked complete, inserts a record into the Supabase `astrology_readings` table with the captured input details.
6. Sends the generated reply back to the user in Telegram using HTML parse mode.

## Setup
1. Create a Telegram bot with BotFather, add your Telegram credentials in n8n, and configure the workflow’s Telegram trigger to use that bot.
2. Add Supabase API credentials in n8n and ensure you have `sessions` and `astrology_readings` tables with fields matching `chat_id`, `state`, `mode`, `p1_data`, and `p2_data`.
3. Update the Supabase table names/field mappings in the Supabase nodes if your schema differs from the workflow defaults.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
