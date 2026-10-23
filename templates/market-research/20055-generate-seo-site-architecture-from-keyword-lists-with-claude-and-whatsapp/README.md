# 📊 Generate SEO site architecture from keyword lists with Claude and WhatsApp

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow ingests up to 10,000 SEO keywords via webhook or manual test run, clusters them algorithmically, uses Anthropic Claude to label clusters and consolidate pillar topics, then returns a pillar–cluster–supporting-page site architecture, optionally saves it to a CMS endpoint, and sends a WhatsApp summary.

## How it works
1. Receives a POST request with a keyword list (or runs manually for testing) and normalizes, de-duplicates, and caps the input to the configured maximum.
2. Groups keywords into coarse clusters by shared core terms (after removing stopwords/modifiers) and selects a primary keyword plus supporting keywords for each cluster.
3. Batches clusters and calls the Anthropic Claude Messages API repeatedly to generate a human-readable topic label and suggested pillar for each cluster.
4. Aggregates all suggested pillar labels and calls Anthropic Claude again to merge near-duplicate pillar names into a canonical pillar set.
5. Builds the final pillar → cluster → supporting-page architecture with URL-friendly slugs, then asks Anthropic Claude to review balance and propose internal-linking and build priority.
6. Optionally posts the final report JSON to a CMS/content-planning API, sends a completion summary via WhatsApp Business Cloud, and returns the full report as the webhook response.

## Setup
1. Create an Anthropic API credential (HTTP Header Auth) and ensure the workflow sends your API key when calling https://api.anthropic.com/v1/messages.
2. Configure WhatsApp Business Cloud credentials/connection and set your WhatsApp phone number ID and recipient phone number in the workflow configuration.
3. If you want to save results externally, add HTTP credentials for your CMS/database API and set the target save URL used by the HTTP request step.
4. Adjust the configuration values (batch size, max keywords, and sample keywords per cluster) to fit your keyword volume and Anthropic token limits.
5. If using the webhook trigger, copy the production webhook URL for the ingest endpoint and post either {"keywords": [...]} or {"csvText": "..."} to start a run.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
