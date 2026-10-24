# 📊 Detect ad spend anomalies and budget pacing with Google Ads, Meta and GA4

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to pull Google Ads, Meta Ads, and GA4 performance data, detect spend/ROAS anomalies, budget pacing issues, and tracking gaps, then emails a digest and sends approval-based pause requests via Gmail before pausing campaigns in Google Ads or Meta.

## How it works
1. Runs on a daily schedule (or manually for testing) and loads configuration values such as account IDs, budgets, thresholds, and date range.
2. Either generates built-in sample data or fetches campaign stats from Google Ads, campaign insights from Meta Ads, and paid sessions from the GA4 Data API.
3. Normalizes and merges the platform datasets into a single set of daily campaign and GA4 channel rows.
4. Compares the latest day to a trailing baseline to flag spend spikes and ROAS drops, projects month-end spend versus monthly budgets to identify pacing issues, and checks GA4 sessions per ad click for potential tracking breaks.
5. If email sending is enabled, sends a Gmail digest of findings and sends one Gmail approval email per proposed campaign pause when ROAS falls below the target.
6. When an approval is received, either logs the action in dry-run mode or pauses the campaign via the Google Ads API or Meta Graph API, and skips changes if the request is rejected or times out.

## Setup
1. Add credentials for Google Ads OAuth2 (and obtain a Google Ads developer token), Facebook Graph API, Google Analytics OAuth2 (GA4 Data API), and Gmail OAuth2.
2. Update the Workflow Configuration values for your Google Ads customer/login customer IDs, Meta ad account ID, GA4 property ID, monthly budgets, target ROAS, thresholds, and the approver email address.
3. Decide whether to run with sample data or live data by setting sampleMode, and enable production behavior by setting emailsEnabled to true and dryRun to false after reviewing test digests.

## Requirements
- Google Ads account with an API developer token (from the Google Ads API Center)
- Meta ad account with Marketing API access
- Google Analytics 4 property
- Gmail account

## Customization
- Tune the thresholds in the config node, send alerts to Slack instead of Gmail, or add actions beyond pausing, such as lowering budgets.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
