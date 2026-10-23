# 🔧 Track Amazon keyword rankings and share of shelf with Bright Data and Slack

> ⚡ **6 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs daily (or on demand) to crawl Amazon search results via Bright Data for a list of keywords, separates sponsored listings from organic results, calculates your best organic position and shelf coverage, compares it with yesterday’s numbers stored in an n8n Data Table, and posts notable changes to Slack.

## How it works
1. Runs every morning on a schedule or starts manually to check keyword rankings.
2. Builds one Bright Data crawl input per keyword and triggers the Bright Data Amazon dataset with a per-keyword result cap.
3. Polls Bright Data until the snapshot is ready (or errors after a maximum number of checks) and then downloads the snapshot results.
4. Splits sponsored placements from organic results and renumbers the organic listings into a counted position per keyword.
5. Identifies your listings by brand and/or ASINs, then calculates best organic position, how many top slots you hold (share of shelf), and which products rank above you.
6. Reads yesterday’s metrics from the n8n Data Table, flags notable movements (entered, dropped out, first run, or moved by the threshold), and posts a digest to a Slack channel only when there is something worth reporting.
7. Upserts today’s per-keyword metrics into the n8n Data Table so the next run can compare against this baseline.

## Setup
1. Add a Bright Data HTTP Header Auth credential and ensure you have access to the dataset ID used in the Bright Data trigger and snapshot endpoints.
2. Add a Slack credential and set the target Slack channel name in the Settings values.
3. Create an n8n Data Table named `amazon_shelf` with columns `keyword`, `best_position`, `slots_held`, `organic_seen`, `top_asin`, and `checked_on`.
4. Update the Settings values for `keywords`, `amazon_domain`, `your_brand` and/or `your_asins`, plus tuning values like `shelf_depth`, `results_per_keyword`, and `alert_on_move`.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
