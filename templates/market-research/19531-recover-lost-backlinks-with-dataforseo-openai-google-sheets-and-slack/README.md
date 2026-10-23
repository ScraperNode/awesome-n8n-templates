# 📊 Recover lost backlinks with DataForSEO, OpenAI, Google Sheets, and Slack

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to fetch recently lost backlinks from DataForSEO, deduplicate them by referring domain, and triage each loss with a live status check. It logs results to Google Sheets, drafts recovery email angles with OpenAI for actionable removals, and posts a digest to Slack.

## How it works
1. Runs every Monday morning (or manually) and loads your domain and thresholds such as how many days back to check and spam/rank limits.
2. Queries the DataForSEO Backlinks API for backlinks with status “lost” seen within the configured time window.
3. Deduplicates results to one best lost link per referring domain, filters by rank and spam score, and removes links already recorded in the n8n Data Table watch list.
4. For each remaining lost link, checks your target URL live with an HTTP request and classifies the loss into recovery buckets (your page gone, your redirect, link removed, their page gone, or unchecked).
5. Uses OpenAI to write one-sentence outreach angles only for links classified as “removed while both pages are healthy.”
6. Builds a Slack digest summarizing counts and top items, appends the full triage rows to a Google Sheets tab, and upserts each processed link into the n8n Data Table so it isn’t re-reported.
7. If there is nothing new (or the API response indicates a failure), posts a “nothing new / API issue” message to Slack, and if the workflow errors, posts an alert message to a separate Slack channel.

## Setup
1. Add a DataForSEO HTTP Basic Auth credential (login and password) and ensure your account can access the Backlinks API.
2. Update the Settings values (domain, lost_since_days, min_rank, max_spam_score, caps, and Slack channel names) to match your environment.
3. Connect Google Sheets credentials and replace the spreadsheet URL/ID and target sheet name where the “Lost links” rows are appended.
4. Connect Slack credentials and set the digest channel plus the separate #alerts (or your preferred) channel for error notifications.
5. Create an n8n Data Table named `lost_link_watch` with text columns `link_id`, `bucket`, and `seen_on` to track processed losses.
6. Add an OpenAI credential and ensure the selected chat model is available in your account (or change it to a model you can use).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
