# 💬 Manage AI agent chat sessions with timeouts, handoff, and webhooks

> ⚡ **13 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes two webhooks that manage an AI agent’s session lifecycle in an n8n Data Table, including session creation, TTL-based expiration, pause/auto-resume, human handoff, manual resume, close, and optional message deduplication.

## How it works
1. Receives an incoming message via a POST webhook and normalizes the payload (user_key, message, optional message_id).
2. Loads session configuration (TTL, pause defaults, and message deduplication) and looks up the latest session for the user in the n8n Data Table.
3. Evaluates session state to decide whether to create a new session, continue the active one, ignore a duplicate message_id, auto-resume after a pause, route to a human during pause/handoff, or start a new session after expiration/closure.
4. Writes the resulting state to the Data Table by inserting a new session or updating the existing session’s activity/status (and marking old sessions as expired when needed).
5. Returns a session context response (action, thread_key, status, expiry/pause metadata) that downstream automation uses to run an agent, wait, or hand off to a human.
6. Receives control commands (pause, handoff, resume, close) via a second POST webhook, updates the session state in the Data Table, and returns a control result payload.

## Setup
1. Create an n8n Data Table named agent_sessions with the required columns (user_key, session_id, thread_key, status, timestamps, handoff/close fields, and last_message_id) and select it in each Data Table node.
2. Copy the two webhook URLs (ai-agent-session and ai-agent-session-control) and configure your chat/app integration to POST message events and control commands to them.
3. Update the configuration values in the Load Configuration step (session_ttl_hours, default_pause_minutes, max_pause_minutes, deduplicate_message_id) to match your session policy.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
