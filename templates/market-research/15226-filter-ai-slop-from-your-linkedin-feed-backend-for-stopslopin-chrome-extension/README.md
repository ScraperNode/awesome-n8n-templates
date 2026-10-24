# 📊 Filter AI slop from your LinkedIn feed (backend for StopSlopIn Chrome extension)

> ⚡ **30 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Purpose

This workflow is the official backend for the StopSlopIn Chrome extension – it classifies LinkedIn posts as quality or slop using a strict LLM quality gate and learns from user votes over time via a Qdrant vector store.

## What this is for

This runs the webhook that powers the [StopSlopIn Chrome extension](https://chromewebstore.google.com/detail/pbflmnidhehgfpcjhcplegpcfohcnbjk) on the Chrome Web Store. The extension sends LinkedIn posts here for analysis and user votes here for training – everything stays on your own n8n instance.

## Setup

- Add your OpenAI credentials to the chat model and embeddings nodes
- Add your Qdrant credentials to both vector store nodes, pointing to a collection named `stopslopin`
- Activate the workflow, copy the webhook URL, and paste it into the StopSlopIn Chrome extension settings
- Follow the instructions on the yellow sticky notes for anything else

## How it works

A single webhook exposes two actions, selected via a `?action=` query parameter: `analyze` for classification, `vote` for training.

1. A `Switch` node routes incoming requests based on the `action` parameter
2. On `analyze`: each post is enriched with similar prior-rated posts pulled from Qdrant (RAG), batched together, and sent to the LLM with a strict quality-gate system prompt
3. The LLM returns a structured JSON array of `pass` / `fail` results, which is sent back to the caller
4. On `vote`: the post is embedded and stored in Qdrant along with the user's "good" or "slop" rating as metadata
5. Every new vote becomes in-context reference material for future classifications, so the filter gradually adapts to personal taste

## Customization

- **LLM** – swap the `OpenAI Chat Model` for any LangChain-compatible chat model (Claude, Ollama, etc.)
- **Prompt** – edit the system prompt inside the `Basic LLM Chain` node to match your own feed taste
- **Similarity threshold** – change the value in the `Filter` node (default `0.7`) to make RAG examples looser or stricter

## Compatibility

- n8n Version 2.17.0 or above
- Cloud or Self-Hosted
- Requires: OpenAI account, Qdrant instance

*Note: post contents sent through this workflow are forwarded to the configured LLM and embeddings provider (OpenAI by default). Swap those nodes for a local or alternative provider if that is a concern.*

## 🔗 Nodes Used

Webhook, Filter, Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
