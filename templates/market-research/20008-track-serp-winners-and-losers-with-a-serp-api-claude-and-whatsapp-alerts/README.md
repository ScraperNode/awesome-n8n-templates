# 📊 Track SERP winners and losers with a SERP API, Claude, and WhatsApp alerts

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow tracks SERP changes for one or more keywords by pulling top-100 organic results from a SERP API, storing snapshots in a historical database, analyzing winners/losers and SERP patterns with Anthropic Claude, and sending WhatsApp alerts and a run digest.

## How it works
1. Runs on a daily schedule, via a manual test run, or when a POST webhook registers a {keyword, targetDomain} to check immediately.
2. Builds a processing queue from the single webhook keyword or by fetching all tracked keywords from your historical database endpoint.
3. For each queued keyword, calls your SERP API to fetch up to 100 organic results and normalizes them into position, domain, URL, and title fields with a timestamp.
4. Fetches the latest previous snapshot for the keyword from the historical database, diffs it against the current snapshot to detect movers/new entrants/dropouts, and saves the new snapshot back to the database.
5. Shortlists the top winners and losers, then sends the movement data to Anthropic Claude to infer shared characteristics and notable changes.
6. Sends Claude’s analysis plus the tracked domain’s movement back to Anthropic Claude to classify the current SERP pattern and recommend next actions.
7. Sends an immediate WhatsApp alert when the tracked domain’s movement is significant, then loops to the next keyword.
8. When all keywords are processed (or the per-run cap is reached), compiles a digest across all checked keywords and sends it via WhatsApp, returning the digest JSON for webhook-triggered runs.

## Setup
1. Create HTTP Header Auth credentials for your SERP provider API and for your historical database API, then update the SERP and database endpoint URLs in the configuration values.
2. Add an Anthropic API credential (HTTP Header Auth) with your API key and confirm the model name in the configuration value.
3. Add WhatsApp Business Cloud credentials in n8n and set your WhatsApp Business phone number ID and recipient phone number in the configuration values.
4. Implement/prepare the historical database endpoints for tracked keywords, fetching the latest snapshot by keyword, and saving snapshots, ensuring the responses contain the keyword list and snapshot results in a compatible JSON shape.
5. If using the webhook to register keywords, copy the webhook URL from n8n and configure your source system to POST {keyword, targetDomain} to it.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
