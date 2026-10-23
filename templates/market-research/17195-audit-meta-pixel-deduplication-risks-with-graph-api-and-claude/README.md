# 📊 Audit Meta pixel deduplication risks with Graph API and Claude

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow audits Meta (Facebook) Pixels for potential duplicate conversion counting by comparing browser Pixel vs Conversions API (server) activity and highlighting events active campaigns optimize for, then uses Anthropic Claude to generate pixel-by-pixel verification next steps and prints a prioritized audit report.

## How it works
1. Runs manually to start the audit.
2. Calls the Meta Graph API to list ad account pixels and fetch ad sets to identify the optimization events used by ACTIVE campaigns.
3. Selects which pixels to audit (prioritizing pixels tied to optimization events, optionally overridden by a dataset ID list) and limits the scope to reduce API calls.
4. For each selected pixel, queries the Meta Graph API for browser-vs-server event source totals and per-event counts.
5. Classifies each pixel’s tracking setup (browser-only, server-only, or dual-source) and prioritizes pixels where optimization events may need deduplication verification.
6. Sends the flagged pixel stats to Anthropic Claude to produce a concise JSON summary and a concrete “verify dedup” action per pixel focused on the optimization events.
7. Prints a formatted audit report showing source split, key conversion events, optimization targets, and the recommended next step.

## Setup
1. Create a Meta (Facebook) Graph API access token with permissions to read the ad account and pixels, store it in the n8n environment variable META_ACCESS_TOKEN, and set your META_AD_ACCOUNT_ID in the configuration step.
2. Add an Anthropic API key in the n8n environment variable ANTHROPIC_API_KEY.
3. Review and adjust thresholds and scope controls (ACTIVE_DAYS, MIN_EVENTS, PIXEL_LIMIT, and optional DATASET_IDS) to match your account size and auditing needs.

## Requirements
- A Meta ad account with pixels and a Graph API access token (ads_read). An Anthropic API key for the Claude summary.

## Customization
- Swap the final print node for a Slack or email node to get the audit delivered. Tune ACTIVE_DAYS, MIN_EVENTS and PIXEL_LIMIT, or set DATASET_IDS to audit specific pixels.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
