# 📱 Send AI-curated weekly news digests with RSS, Vector DB & GPT-4o

> ⚡ **162 views** · 📱 [Social Media & Email Marketing](../)

## Description

## What this workflow does

This workflow implements a two-stage news automation system
designed for reusable and topic-driven email delivery.
News articles are continuously collected from multiple platforms
using RSS feeds and stored in a vector database with semantic
embeddings and category metadata.

Instead of fetching news on demand, the workflow separates
daily ingestion from weekly delivery. This allows the same
news data to be reused across different topics, audiences,
or delivery schedules.

On a weekly basis, relevant articles are retrieved from the
vector store based on defined areas of interest and item limits.
The selected news is then processed by an AI agent, which
converts the raw articles into a structured, email-ready format
before sending the final content to users.

## How it works

1. News articles are collected daily from multiple RSS feeds
2. Articles are categorized and stored in a vector database
3. On a weekly trigger, topic preferences are evaluated
4. Relevant articles are retrieved using vector-based search
5. An AI agent formats the content for email delivery
6. The email is sent to the user

## Setup

To use this workflow, complete the following steps:

1. Add and configure your RSS feed sources
2. Connect a vector database and embedding model
3. Configure AI model credentials for content generation
4. Set up email service credentials
5. Define weekly scheduling and topic inputs
6. Test retrieval and email output

## Customization

You can customize this workflow by:

- Adding or removing RSS feed sources
- Adjusting news categories or topic filters
- Changing the number of articles retrieved per topic
- Modifying the AI agent’s writing tone or structure
- Reusing the vector store for other content workflows
- Updating email frequency or delivery format

## Requirements

- RSS feed URLs
- Vector database credentials
- AI model credentials
- Email service credentials

## 🔗 Nodes Used

RSS Read, Gmail, Markdown, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
