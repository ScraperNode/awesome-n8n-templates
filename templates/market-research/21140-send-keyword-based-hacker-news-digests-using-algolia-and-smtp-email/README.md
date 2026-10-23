# 📊 Send keyword-based Hacker News digests using Algolia and SMTP email

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to search Hacker News via the Algolia API for a list of keywords, builds a plain-text digest of new high-scoring stories, and emails it via SMTP while tracking already-sent story IDs in workflow static data to avoid duplicates.

## How it works
1. Runs on a daily schedule (or manually for testing) to start the digest process.
2. Splits and validates your keyword list and builds one Hacker News search query per keyword for the configured lookback window.
3. Calls the Hacker News Algolia search API for each keyword to fetch recent story results.
4. Merges results across keywords, filters out stories below the minimum points threshold and any story IDs that were already emailed, and formats a plain-text digest.
5. Sends the digest email via SMTP only when there are new matching stories.
6. Saves the sent story IDs into n8n workflow static data so future runs skip duplicates.

## Setup
1. Configure an SMTP Email credential in n8n and select it in the email-sending step.
2. Update the Config values for keywords, lookbackHours, minPoints, maxPerKeyword, alertTo, and fromEmail.
3. Activate the workflow so n8n persists the static “seen” list across executions. Manual test runs do not save static data, so they may show the same stories again; this is expected.

## Requirements
- An n8n instance (tested on n8n 2.41.6) and an SMTP account for sending email. The Hacker News Algolia search API is free and needs no API key.

## Customization
- Change the run time in Schedule Trigger, or raise minPoints and lower maxPerKeyword to make the digest shorter.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
