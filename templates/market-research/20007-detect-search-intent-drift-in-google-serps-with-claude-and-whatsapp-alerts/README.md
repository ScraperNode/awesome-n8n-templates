# 📊 Detect search intent drift in Google SERPs with Claude and WhatsApp alerts

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow monitors Google SERP changes for tracked keywords by storing daily SERP snapshots, classifying dominant intent over time with Anthropic Claude, detecting meaningful intent drift, and sending WhatsApp alerts and a run digest.

## How it works
1. Runs on a daily schedule for all tracked keywords, or starts immediately when a keyword is sent via a POST webhook (with a manual trigger available for testing).
2. Builds a per-run keyword queue from the incoming webhook keyword or by fetching the tracked keyword list from your historical database API.
3. For each keyword, requests the current SERP from your SERP API, normalizes the top results and SERP feature flags, and saves the snapshot to your historical database.
4. Fetches a window of historical SERP snapshots for the keyword and converts each period into a content-composition profile (informational, commercial, UGC/forum, video, other) plus SERP features.
5. Sends the per-period composition timeline to Anthropic Claude to classify the dominant search intent and confidence for each period.
6. Sends the intent timeline plus composition/feature deltas to Anthropic Claude to decide whether meaningful intent drift occurred and to generate a narrative and recommended actions.
7. Sends a WhatsApp alert for keywords with drift above the configured confidence threshold and sufficient history, then sends a WhatsApp digest summarizing the run (and returns it as the webhook response when applicable).

## Setup
1. Create HTTP Header Auth credentials for your SERP API and for your historical database API endpoints, then update the SERP and database URLs in the workflow configuration.
2. Add an Anthropic API key (HTTP Header Auth) and confirm the model name used for the two Claude requests.
3. Add WhatsApp Business Cloud credentials in n8n, then set your WhatsApp phone number ID and recipient phone number in the workflow configuration.
4. Ensure your historical database exposes endpoints to save SERP snapshots, fetch a keyword’s snapshot series, and return the list of tracked keywords in the response shape your API provides.
5. If registering keywords from another system, copy the webhook URL from n8n and POST JSON like {"keyword":"your query"} to start tracking it.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
