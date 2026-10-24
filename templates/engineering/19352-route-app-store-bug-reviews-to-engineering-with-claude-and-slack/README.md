# ⚒️ Route app store bug reviews to engineering with Claude and Slack

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives app store reviews via a webhook, uses Anthropic Claude to classify and deduplicate technical complaints, checks your bug tracker for an existing issue, then either updates the matched bug or creates a new ticket, posts an alert to Slack, and logs the outcome to a tracking API.

## How it works
1. Receives a new app store review via a POST webhook and normalizes key fields like rating, text, platform, version, and reviewer handle.
2. Uses Anthropic Claude to classify whether the review is a genuine technical complaint, assign an app area and severity, and generate a normalized issue summary.
3. Filters out non-technical reviews, marks them as log-only, and skips ticket creation.
4. For technical complaints, calls a complaint-search API to fetch similar recent issues and uses Anthropic Claude to decide whether the review matches an existing complaint cluster.
5. Searches your bug tracker (via HTTP API) for an existing open issue that matches the complaint and selects the best match above a confidence threshold.
6. If a match is found, updates the existing bug with the review as evidence and the reassessed severity; otherwise it creates a new engineering ticket in the bug tracker.
7. Sends a Slack message to the routed engineering channel with the issue summary, severity, and review details, then logs the final outcome to a tracking-log API.

## Setup
1. Configure the review source to send POST requests to this workflow’s webhook URL (path: `/app-store-review-received`) and include fields like reviewText, rating, platform, appVersion, and reviewUrl.
2. Add an Anthropic credential and select a Claude chat model for the two AI agent steps.
3. Set up HTTP header authentication credentials for the complaint-search API, bug-tracker search/update/create endpoints, and the tracking-log API, then update the base URLs in the configuration values.
4. Add Slack credentials, ensure the target channels exist, and adjust the app-area-to-team/channel routing map and default channel as needed.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
