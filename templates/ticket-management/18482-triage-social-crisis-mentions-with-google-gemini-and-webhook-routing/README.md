# 🎫 Triage social crisis mentions with Google Gemini and webhook routing

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives social mention payloads via a webhook, uses Google Gemini to triage them against a PR crisis matrix, and routes the result into P0/P1/P2 handling paths while generating a structured incident record and response drafts.

## How it works
1. Receives a social mention via an HTTP POST webhook (or uses a manual test payload) containing platform, author, follower count, text, and URL.
2. Adds PR crisis matrix guidelines and normalizes the incoming mention fields for analysis.
3. Uses Google Gemini to score urgency/toxicity, classify severity (P0/P1/P2), extract key allegations, and draft both public and internal response text.
4. Routes the mention based on the urgency score into an executive “war-room” alert (P0), a support escalation brief (P1), or a simple community archive record (P2).
5. Consolidates the routed output and builds a final PR incident ledger entry with a unique incident ID, all scores, summaries, and drafts.

## Setup
1. Add Google Gemini (PaLM) API credentials for the Google Gemini node.
2. If using live monitoring, copy the webhook URL from the workflow and configure your social listening/source system to POST mention events to `/social-mention-stream`.
3. Review and adjust the crisis matrix thresholds and any hard-coded routing text (war-room/support language) to match your organization’s incident process.

## 🔗 Nodes Used

Webhook, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
