# 🔬 Create Notion page summaries from URLs with Snapshot Site and Slack alerts

> ⚡ **49 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives a published page URL via webhook, analyzes the page with Snapshot Site, posts failures or quality issues to Slack, and creates a structured summary page in Notion with the extracted summary, topics, headings, and content-quality notes.

## How it works
1. Receives a POST webhook request (or a manual test payload) containing a page URL.
2. Sends the URL to Snapshot Site AI Analyze to extract a summary, topics, headings, and quality signals.
3. If the Snapshot Site request returns an API error, posts an error alert to a Slack channel and stops.
4. If the page is detected as blank or CAPTCHA-walled, posts a content-quality warning to Slack and skips creating a Notion page.
5. For valid pages, formats the analysis into Notion-ready fields (title, URL, summary, topics, headings, and quality notes).
6. Creates a new Notion page under the выбранный parent page with the structured analysis content.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add Snapshot Site API credentials.
2. Add a Notion connection and set the target parent page ID in the Notion node.
3. Add a Slack connection and confirm the target channels (for example `#content-ops-alerts` and `#content-quality`) exist or update them.
4. Copy the webhook Production URL and configure your CMS/page publisher to POST JSON in the shape `{ "url": "https://..." }` (mapped to `body.url` in the workflow).

## 🔗 Nodes Used

Slack, Webhook, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
