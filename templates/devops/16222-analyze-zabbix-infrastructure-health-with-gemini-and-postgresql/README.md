# ⚙️ Analyze Zabbix infrastructure health with Gemini and PostgreSQL

> ⚡ **129 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes a Basic Auth webhook that routes infrastructure questions to a IA agent, which queries a Zabbix PostgreSQL database for host, alert, and performance metrics and returns a Markdown response with inline SVG charts, using Redis for short-lived chat memory.

## How it works
1. Receives a POST request on a Basic Auth-protected webhook endpoint (for example from Open WebUI) containing a user message and optional conversation identifiers.
2. Normalizes the incoming payload into a consistent structure (session ID, user, message) and injects a compact Zabbix PostgreSQL schema reference to guide tool calls.
3. Uses a Google Gemini chat model with a LangChain agent and Redis chat memory to interpret the question and decide which Zabbix SQL queries to run.
4. Queries the Zabbix PostgreSQL database to retrieve host status, active alerts, item baselines and deviations, environment anomalies, disk growth projections, switch bottlenecks, and group/host searches as needed.
5. Generates a Markdown answer that can include chart placeholders for time-series insights and falls back to a static error message if the agent cannot complete.
6. Converts any chart placeholders into inline base64-encoded SVG images and returns the final JSON response (including the session ID) to the original webhook caller.

## Setup
1. Configure HTTP Basic Auth credentials for the webhook and copy the production webhook URL into your chat client or source system that sends the POST requests.
2. Add a PostgreSQL credential that can read your Zabbix database (hosts, items, history/trends, events/problems, and groups tables) and update it if your DB host/schema differs.
3. Add a Google Gemini (PaLM) API credential for the Gemini chat model used by the agent.
4. Add a Redis credential and ensure your Redis instance is reachable so the workflow can store chat memory per session ID.
5. Verify your webhook payload includes a message field (for example `ds_mensagem`, `content`, `text`, or `query`) and optionally a conversation identifier (`chat_id` or `conversation_id`).

## 🔗 Nodes Used

Webhook, AI Agent, Redis Chat Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
