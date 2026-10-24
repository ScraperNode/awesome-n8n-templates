# 📊 Monitor RSS, Atom, and JSON feed changes with Apify Feed Contract Monitor

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs hourly to monitor an RSS/Atom/JSON feed using Apify Feed Contract Monitor, keeps a persistent baseline state, and outputs only new or changed feed items for downstream processing.

## How it works
1. Runs every hour on a schedule trigger.
2. Sets the feed URL, state namespace, first-run mode, and per-run item limit.
3. Uses the Apify Feed Contract Monitor actor to fetch the feed, compare it to stored state, and return both feed-health records and changed-item records.
4. Filters the results to keep only records that represent new or changed feed items.

## Setup
1. Self-host n8n and install the community node package `n8n-nodes-feed-contract-monitor`.
2. Create and select an Apify API credential for the Apify Feed Contract Monitor node.
3. Update the feed URL and state namespace in the feed variables, and set the first run to `baseline_only` to establish the initial baseline before enabling the hourly schedule.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
