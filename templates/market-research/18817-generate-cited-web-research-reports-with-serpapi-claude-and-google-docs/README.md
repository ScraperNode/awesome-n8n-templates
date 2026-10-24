# 📊 Generate cited web research reports with SerpAPI, Claude, and Google Docs

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow accepts a research query via webhook, breaks it into sub-questions with Anthropic Claude, gathers web results via SerpAPI, synthesizes a cited report, scores confidence, and then saves the report to Google Docs, notifies Slack, and logs the run to Postgres.

## How it works
1. Receives a POST webhook request containing a research query.
2. Uses Anthropic Claude to generate 3–5 focused sub-questions and splits them into individual search tasks.
3. Queries Google results via SerpAPI for each sub-question and aggregates the returned organic results.
4. Uses Anthropic Claude to synthesize the aggregated search results into a structured research report with inline URL citations.
5. Uses Anthropic Claude to score the report’s overall confidence and identify any low-confidence claims.
6. Creates a Google Doc for the research report, posts either a high-confidence or human-review Slack notification based on the confidence threshold, and stores the run metadata (query, doc URL, confidence, low-confidence count) in Postgres.

## Setup
1. Create an Anthropic (Claude) credential in n8n for the three AI steps (planning, synthesis, and confidence scoring).
2. Add a SerpAPI API key and set it in the workflow configuration value used by the SerpAPI HTTP request.
3. Connect your Google Docs account in n8n and ensure the account has permission to create documents in the target Google Drive.
4. Add a Slack credential, set the Slack channel ID in the workflow configuration value, and ensure the bot can post to that channel.
5. Configure the Postgres credential and ensure a `public.research_runs` table exists with columns matching the inserted fields (query, created_at, report_url, overall_confidence, low_confidence_count).

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Google Docs, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
