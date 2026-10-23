# 📊 Send weekly client performance reports via Gmail and Slack using Google Sheets, Meta Ads, Google Ads, GA4, and OpenAI

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday, reads a Google Sheets config to fetch weekly metrics from Meta Ads, Google Ads, and GA4, uses OpenAI to write a narrative around deterministic week-over-week deltas, and delivers branded reports via Gmail and/or Slack while logging sends back to Google Sheets.

## How it works
1. Runs on a schedule every Monday at 09:00 (workflow timezone) and loads client settings from the Google Sheets `config` tab plus previously sent `dedupe_key` values from the `reports` tab.
2. Validates each config row, skips disabled clients, and turns missing sources or delivery targets into alerts that continue through the run.
3. For each enabled data source per client, fetches weekly metrics from the Meta Marketing API, Google Ads API, and/or Google Analytics Data API (GA4) and normalizes the results into a shared metric format.
4. Computes week-over-week percentage deltas and flags anomalies when a metric’s absolute change meets the per-client `alert_threshold_pct`.
5. Groups metrics into one per-client table, skips duplicates for the same ISO week using `client_id + ISO week`, and uses OpenAI to generate a short narrative that only references the precomputed table.
6. Renders a branded HTML report and delivers it via Gmail (send or draft based on `delivery_mode`) and/or posts it to a configured Slack channel.
7. Upserts a delivery record to the Google Sheets `reports` tab for idempotency and emails a single run digest to the operator, while a separate error trigger path emails the operator on unhandled failures.

## Setup
1. Run the setup lane once (the Google Sheets create/seed path) or provide your own Google Sheets workbook with `config` and `reports` tabs matching the expected columns.
2. Paste the created spreadsheet ID into the Workflow Config node and set the operator email address in the Operator email node.
3. Add Google Sheets and Gmail credentials, plus an OpenAI API credential for the narrative generation step.
4. Configure API auth for the HTTP requests: Meta Marketing API bearer token, Google Ads API bearer token + developer token, GA4 bearer token, and a Slack bot token with `chat:write` for posting.
5. Fill in the `config` tab for each client (source toggles, account/property IDs, recipients and/or Slack channel, `delivery_mode`, and optional branding/threshold fields) before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
