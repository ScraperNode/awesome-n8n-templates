# 📖 Notion AI assistant generator

> ⚡ **48,744 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This n8n workflow template lets teams easily generate a custom AI chat assistant based on the schema of any Notion database. Simply provide the Notion database URL, and the workflow downloads the schema and creates a tailored AI assistant designed to interact with that specific database structure.

## Set Up
Watch this quick set up video 👇
[![Notion AI Assistant Generator](https://uploads.n8n.io/devrel/notion-db-assistant-thumb#full-width)](https://youtu.be/iK87ppcaNgM)

## Key Features
- **Instant Assistant Generation**: Enter a Notion database URL, and the workflow produces an AI assistant configured to the database schema.
- **Advanced Querying**: The assistant performs flexible queries, filtering records by multiple fields (e.g., tags, names). It can also search inside Notion pages to pull relevant content from specific blocks.
- **Schema Awareness**: Understands and interacts with various Notion column types like text, dates, and tags for accurate responses.
- **Reference Links**: Each query returns direct links to the exact Notion pages that inform the assistant’s response, promoting transparency and easy access.
- **Self-Validation**: The workflow has logic to check the generated assistant, and if any errors are detected, it reruns the agent to fix them.

## Ideal for
- **Product Managers**: Easily access and query product data across Notion databases.
- **Support Teams**: Quickly search through knowledge bases for precise information to enhance support accuracy.
- **Operations Teams**: Streamline access to HR, finance, or logistics data for fast, efficient retrieval.
- **Data Teams**: Automate large dataset queries across multiple properties and records.

## How It Works
This AI assistant leverages two HTTP request tools—one for querying the Notion database and another for retrieving data within individual pages. It’s powered by the Anthropic LLM (or can be swapped for GPT-4) and always provides reference links for added transparency.

## 🔗 Nodes Used

Notion, AI Agent, Anthropic Chat Model, Auto-fixing Output Parser, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
