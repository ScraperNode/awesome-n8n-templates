# 💬 Route Telegram support with Groq, Pinecone, Supabase, and Slack

> ⚡ **6 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
RELAY is a Telegram support agent that answers from your real knowledge base and live order data — not guesses. An AI agent drafts each reply, a second model reviews it before sending, and unresolved issues escalate to Slack as trackable tickets. Built-in rate-limiting keeps it production-safe.

## How it works
1. Triggers when a new Telegram message is received and checks Supabase to ignore duplicate Telegram updates.
2. Looks up the sender’s rate-limit record in Supabase, updates the sliding window counter, and replies in Telegram if the user exceeds the message limit.
3. Validates and normalizes the incoming text, then retrieves the last 10 messages for the chat from Supabase and formats them into a conversation history.
4. Uses a Groq chat model agent that can search a Pinecone vector knowledge base (with Google Gemini embeddings), look up orders in Supabase, and check for existing follow-up tickets in Supabase to draft a structured support response.
5. Extracts any order ID and email from the draft output, fetches matching order records from Supabase, and passes the question, evidence, and draft response to a second Groq model to approve or revise the answer.
6. Saves the user message and final assistant reply to Supabase chat memory, then replies to the customer on Telegram.
7. If escalation is required and no ticket is already open, creates a pending follow-up ticket in Supabase and posts the escalation details to a Slack channel, while still replying to the customer in Telegram.
8. Separately, receives a Slack /resolve-ticket webhook command, updates the ticket status to resolved in Supabase, and posts an ephemeral confirmation back to Slack.

## Setup
1. Add Telegram Bot credentials and configure the bot to send updates to the Telegram trigger used by this workflow.
2. Add Supabase credentials and create the required tables: processed_updates, rate_limits, chat_memory, orders, and follow_up_tickets with fields matching the workflow queries and inserts.
3. Add Groq API credentials for both chat models used for the agent and the reviewer.
4. Configure Pinecone credentials and connect the vector store node to your own index (the template ships pointing at a placeholder index named company-latest — update it to yours), then add Google Gemini embeddings credentials for vector retrieval.
5. Add Slack credentials, set the target channel for escalation notifications, and configure a Slack slash command to POST to the /resolve-ticket webhook URL.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Telegram, Telegram Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
