# 📊 Track documentation changes with Firecrawl, Postgres, Gemini, and Telegram

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

This template watches an external documentation site every day and sends an AI-generated Vietnamese summary to Telegram whenever pages change. It is built around Postgres content hashing so it works with any Firecrawl deployment (Cloud or self-hosted) and any docs source, not just the default example.

## Who is this for?
Developers, API consumers, and integration maintainers who need to know the moment an upstream API or SDK documentation changes, so they can update their own code, community nodes, or client libraries without waiting for an announcement.

## How it works
- A Schedule Trigger runs daily at 9:00 AM
- Firecrawl **Map** enumerates every URL under the docs site, then a Code node dedupes and filters paths
- Firecrawl **Scrape** auto-loops one request per URL and returns clean markdown
- A Code node SHA-256 hashes the markdown of every page
- A single Postgres upsert query returns status `new`, `changed`, or `same` for each page
- Pages with real changes are aggregated and summarized by Google Gemini 2.0 Flash in Vietnamese
- The summary is delivered to Telegram; if nothing changed, the workflow ends silently

## Set up steps
- Setup takes around 15 to 20 minutes
- Self-hosted n8n required (the `n8n-nodes-firecrawl-v2` community node cannot be installed on n8n Cloud)
- Install the `n8n-nodes-firecrawl-v2` community node
- Create credentials for Firecrawl (Cloud or self-hosted), Google Gemini, Telegram Bot, and Postgres
- Run the `docs_snapshots` schema (SQL is in the main sticky note) on your Postgres database
- Edit the map URL and Telegram recipient to point at your docs source and chat
- On the first run, every page returns as `new` and you get one large alert listing all endpoints; subsequent runs only alert on real changes
- Detailed instructions are inside each sticky note in the workflow

## 🔗 Nodes Used

Postgres, Telegram, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
