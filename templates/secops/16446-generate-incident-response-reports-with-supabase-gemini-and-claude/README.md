# 🔒 Generate incident response reports with Supabase, Gemini and Claude

> ⚡ **128 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow ingests incident and playbook content from GitHub into Supabase (including pgvector embeddings with Google Gemini) and, on a webhook trigger, enriches a test incident with historical matches, a routed response playbook, and live web threat intel (via Tavily + OpenRouter) to generate a validated incident response report.

## How it works
1. Receives a POST webhook containing the incident payload (including an encrypted OpenRouter API key) and decrypts the key for downstream LLM calls.
2. Creates a tracking row in a Supabase table and loads configuration values used by the retrieval and report-generation steps.
3. Retrieves similar resolved incidents from a Supabase pgvector store using Google Gemini embeddings and returns structured historical patterns.
4. Retrieves the best-matching reference playbook from a Supabase pgvector store and fetches the full playbook text from Supabase, falling back to a built-in generic playbook when no match is found.
5. Uses Tavily Search plus an OpenRouter-backed agent to gather external threat intelligence, IOCs, and phased mitigation guidance when the incident is classified as security-relevant.
6. Merges the three intelligence branches and uses an OpenRouter LLM to synthesize a structured JSON output and an 11-section Markdown incident response report.
7. Validates that required report fields exist and, if valid, writes the structured output and Markdown report back to the Supabase test incident record; otherwise it skips the write.

## Setup
1. Create Supabase tables for test incidents and vector stores (for resolved incidents and reference playbooks) and configure the matching SQL functions used for retrieval (for example, `match_resolved_incidents_v1` and `match_reference_playbooks_v1`).
2. Add Supabase credentials in n8n and set the correct table names and query function names in the workflow’s configuration nodes.
3. Add Google Gemini (PaLM) API credentials and ensure the embedding model name used in the config (for example, `models/gemini-embedding-001`) is available to your account.
4. Add an OpenRouter API credential for the chat models used by the agents and synthesizer, and ensure your webhook caller sends an `encrypted_openrouter_key` value that matches the workflow’s decryption format.
5. Add a Tavily API credential for web search, then copy the webhook URL and configure your incident source to POST the incident JSON to it.

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, AI Agent, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
