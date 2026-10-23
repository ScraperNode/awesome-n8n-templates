# 📊 Monitor Google AI Overview visibility and SEO alerts with Pangolinfo

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every 24 hours to query Google via Pangolinfo’s AI Overview SERP API, retrieving the current AI Overview, cited sources, organic results, and an optional screenshot, then outputs a normalized visibility record you can store or compare over time.

## How it works
1. Runs every 24 hours on a scheduled trigger.
2. Sets the target Google search URL and whether to request a SERP screenshot.
3. Calls Pangolinfo to fetch the Google AI Overview response, citations, organic results, and optional screenshot for the configured query.
4. Normalizes the Pangolinfo payload into a consistent JSON record with a timestamp, task ID, AI Overview data, organic results, and screenshot URL/data.

## Setup
1. Install the community node `n8n-nodes-pangolinfo` (self-hosted n8n required).
2. Create and select a Pangolinfo API credential for the Pangolinfo node.
3. Update the Google search URL and screenshot option in Configure Monitoring, test the workflow once to verify the normalized output, and only then activate the 24-hour schedule for ongoing AI Overview citation and brand-visibility monitoring.

## Requirements
- Self-hosted n8n with community nodes enabled; n8n-nodes-pangolinfo; and a user-owned Pangolinfo API key.

## Customization
- Change the query, schedule, or screenshot preference, then send normalized records to Sheets, databases, alerts, dashboards, or an AI comparison step.

## Additional info
This workflow uses a community node and is compatible with self-hosted n8n only. Learn more about the [Pangolinfo AI Overview SERP API](https://www.pangolinfo.com/ai-overview-serp-api/), use the [Pangolinfo AI SERP Skill](https://www.pangolinfo.com/ai-serp-skill/), read the [AI Overview API documentation](https://docs.pangolinfo.com/en-api-reference/aiModeSerpApi/aiModeSerpAPI), and get an API key in the [Pangolinfo Console](https://tool.pangolinfo.com/).

## 🔗 Nodes Used

Send Email, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
