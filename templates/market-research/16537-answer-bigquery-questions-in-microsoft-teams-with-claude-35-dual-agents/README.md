# 📊 Answer BigQuery questions in Microsoft Teams with Claude 3.5 dual agents

> ⚡ **96 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Turn Microsoft Teams into a natural language BI tool. This dual-agent Claude workflow intelligently classifies user questions, generates safe BigQuery SQL, executes the query, and returns a plain-English summary alongside a data preview directly to your Teams channel.

## How it works
1. The workflow listens for new messages in a designated Microsoft Teams channel or chat.
2. It checks a 24-hour static data cache for your BigQuery schema. If the cache is missing or expired, it automatically fetches the latest INFORMATION_SCHEMA metadata.
3. A main Claude 3.5 Sonnet agent classifies the user's intent (analytical, conversational, or unsafe) and identifies the relevant database tables.
4. If the intent is analytical, a specialized Claude SQL sub-agent generates a read-only SELECT query tailored exactly to your schema.
5. The workflow executes the query against BigQuery (safely constrained to a maximum of 100 rows).
6. A final Claude agent translates the raw query results into a concise, plain-English summary.
7. The answer is posted back to Teams as an Adaptive Card, complete with a formatted data preview and the generated SQL code.
8. Non-analytical questions or pipeline errors are intelligently routed to receive standard conversational replies in Teams.

## Setup
1. CRITICAL SECURITY: Restrict your Google Cloud Service Account IAM roles to BigQuery Data Viewer and BigQuery Job User ONLY. Do not use a highly privileged account.
2. Configure your Microsoft Teams trigger and posting credentials, specifying the target team and channel for the bot to operate in.
3. Configure your Google BigQuery credentials to allow reading metadata and executing queries.
4. Configure your Anthropic credentials for the three Claude LangChain nodes.
5. Update the "Configure Variables" node with your specific GCP Project ID and BigQuery Dataset ID.

## Requirements
- A Google Cloud project with BigQuery enabled and existing structured datasets.
- An Anthropic API key with access to the Claude 3.5 Sonnet model.
- Microsoft Teams administrator access to authorize the n8n integration.

## Customization
- Distributed Environments: If you are running n8n with multiple worker nodes (Queue Mode), you must swap the $getWorkflowStaticData() schema cache logic to read/write from a dedicated Key-Value store (like Redis or Supabase) to ensure state synchronization.
- UI Layout: Modify the Create Teams Adaptive Card node to add corporate branding, custom colors, or alter the FactSet data preview structure.

## Additional info
This architecture features built-in pipeline protections, including strict 40,000-character payload limits to prevent LLM context window blowouts, and fallback handling for "zero-row" query results to ensure users are never left without a response.

## 🔗 Nodes Used

Microsoft Teams, Google BigQuery, Microsoft Teams Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
