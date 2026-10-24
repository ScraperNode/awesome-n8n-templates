# 📊 Monitor Meta CAPI event match quality with Meta Graph API and Claude

> ⚡ **54 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs on demand to monitor Meta Conversions API Event Match Quality across the pixels in a Meta ad account, calculates a weighted 0–100 match-quality score from Graph API stats, and uses Anthropic Claude to summarize risks and fixes for any pixels below an alert threshold.

## How it works
1. Runs when you manually trigger the workflow.
2. Loads configuration for which pixels to monitor, how far back to consider pixels active, which conversion events to weight more heavily, and the alert threshold.
3. Uses the Meta Graph API to discover recently active pixels (or uses a provided list of pixel IDs) and pulls per-event “had_pii” coverage stats for each pixel.
4. Computes a weighted match-quality score per pixel (conversion events count triple) and builds a scorecard sorted from lowest to highest.
5. Sends the scorecard to Anthropic Claude to generate a short JSON summary with a one-line risk and a concrete fix for each pixel below the threshold.
6. Prints a formatted EMQ scorecard with alerts and Claude’s recommendations to the execution log.

## Setup
1. Create a Meta access token with permissions to read pixel stats, and set META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, and (optionally) META_API_VERSION in your n8n environment.
2. Add an Anthropic API key and set ANTHROPIC_API_KEY in your n8n environment.
3. Review and update the config values (ALERT_BELOW, CONVERSION_EVENTS, ACTIVE_DAYS, PIXEL_LIMIT, and optional DATASET_IDS) to match your tracking and optimization priorities.

## Requirements
- A Meta access token with permission to read pixel stats (ads_read)
- A Meta ad account with one or more active pixels/datasets
- An Anthropic API key (Claude)

## Customization
- Set DATASET_IDS in Config to monitor specific pixels, or leave empty to auto-discover all active ones
- Tune ALERT_BELOW, CONVERSION_EVENTS, and ACTIVE_DAYS to your optimization priorities
- Swap the final stdout node for a Slack or email node to auto-alert
- Append daily scores to Google Sheets or a database to track match-quality decay over time

## Additional info
Built by https://nocode.expert (done-for-you automation and tracking). Reads all secrets from environment variables, so no credentials are stored in the workflow.

## 🔗 Nodes Used

HTTP Request, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
