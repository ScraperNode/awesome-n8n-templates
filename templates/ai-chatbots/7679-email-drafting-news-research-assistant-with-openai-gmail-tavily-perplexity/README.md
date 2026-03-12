# 🤖 Email drafting & news research assistant with OpenAI, Gmail, Tavily & Perplexity

> ⚡ **420 views** · 🤖 [AI Chatbots & Agents](../)

## Description

AI Agent MCP for Email & News Research

Build a chat-first MCP-powered research and outreach agent. This workflow lets you ask questions in an n8n chat, then the agent researches news (via Tavily + Perplexity through an MCP server) and drafts emails (via Gmail through a separate MCP server). It uses OpenAI for reasoning and short-term memory for coherent, multi‑turn conversations.

Watch build along videos for workflows like these on: www.youtube.com/@automatewithmarc

What this template does

Chat-native trigger: Start a conversation and ask for research or an email draft.

MCP client tools: The agent talks to two MCP servers — one for Email work, one for News research.

News research stack: Uses Tavily (search) and Perplexity (LLM retrieval/answers) behind a News MCP server.

Email stack: Uses Gmail Tool to generate and send messages via an Email MCP server.

Reasoning + memory: OpenAI Chat Model + Simple Memory for context-aware, multi-step outputs.

How it works (node map)

When chat message received → collects your prompt and routes it to the agent.

AI Agent (system prompt = “helpful email assistant”) → orchestrates tools via MCP Clients.

OpenAI Chat Model → reasoning/planning for research or email drafting.

Simple Memory → keeps recent chat context for follow-ups.

News MCP Server exposes:

Tavily Tool (Search) and Perplexity Tool (Ask) for up-to-date findings.

Email MCP Server exposes:

Gmail Tool (To, Subject, Message via AI fields) to send or draft emails.

The MCP Clients (News/Email) plug into the Agent, so your single chat prompt can research and then draft/send emails in one flow.

Requirements

n8n (Cloud or self‑hosted)

OpenAI API key for the Chat Model (set on the node)

Tavily, Perplexity, and Gmail credentials (connected on their respective tool nodes)

Publicly reachable MCP Server endpoints (provided in the MCP Client nodes)

Setup (quick start)

Import the template and open it in the editor.

Connect credentials on: OpenAI, Tavily, Perplexity, and Gmail tool nodes.

Confirm MCP endpoints in both MCP Client nodes (News/Email) and leave transport as httpStreamable unless you have special requirements.

Run the workflow. In chat, try:

“Find today’s top stories on Kubernetes security and draft an intro email to Acme.”

“Summarize the latest AI infra trends and email a 3‑bullet update to my team.”

Inputs & outputs

Input: Natural-language prompt via chat trigger.

Tools used: News MCP (Tavily + Perplexity), Email MCP (Gmail).

Output: A researched summary and/or a drafted/sent email, returned in the chat and executed via Gmail when requested.

Why teams will love it

One prompt → research + outreach: No tab‑hopping between tools.

Up-to-date answers: Pulls current info through Tavily/Perplexity.

Email finalization: Converts findings into send-ready drafts via Gmail.

Context-aware: Memory keeps threads coherent across follow-ups.

Pro tips

Use clear verbs in your prompt: “Research X, then email Y with Z takeaways.”

For safer runs, point Gmail to a test inbox first (or disable send and only draft).

Add guardrails in the Agent’s system message to match your voice/tone.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
