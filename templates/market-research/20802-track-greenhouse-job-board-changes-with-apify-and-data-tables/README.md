# 📊 Track Greenhouse job board changes with Apify and Data Tables

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs the Apify Greenhouse Job Edit Feed Actor for a configured Greenhouse board and stores the latest change event per job in an n8n Data Table, after verifying the Actor run status, SUMMARY manifest, and dataset readback.

## How it works
1. Runs manually when you execute the workflow.
2. Starts an Apify Actor run (Greenhouse Job Edit Feed) for the configured Greenhouse board slug and namespace.
3. Fetches the Actor run’s SUMMARY record from the Apify key-value store and validates that the run succeeded and the board manifest is complete.
4. Creates the “Greenhouse Job Watchlist” n8n Data Table if it does not already exist.
5. Downloads the completed Actor dataset from Apify and verifies the dataset row count and source run IDs match the validated SUMMARY.
6. Deduplicates and maps events to a stable job key (board + post_id), deriving visibility and capturing fields like title, location, URL, description text/hash, and changed fields.
7. Upserts one row per job into the n8n Data Table so re-runs update the existing job record with the latest event details.

## Setup
1. Create an Apify account and add an Apify API token as an HTTP Bearer credential in n8n, then select it on all three Apify HTTP Request steps.
2. Update the Actor input JSON to set your Greenhouse board slug(s) and the namespace used by the Actor.
3. Ensure your n8n instance has access to n8n Data Tables and keep (or rename) the target table name “Greenhouse Job Watchlist” as needed.

## 🔗 Nodes Used

HTTP Request, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
