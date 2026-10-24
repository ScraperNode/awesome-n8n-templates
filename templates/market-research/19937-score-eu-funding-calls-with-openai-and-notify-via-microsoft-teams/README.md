# 📊 Score EU funding calls with OpenAI and notify via Microsoft Teams

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to query the European Commission EU Funding Search API for calls matching chosen keywords, filters out closed or older opportunities, uses OpenAI to score relevance to your organisation, and posts high-scoring grants to Microsoft Teams via an incoming webhook.

## How it works
1. Runs every week on Monday at 08:30.
2. Sends a POST request to the European Commission Search API (SEDIA) to fetch the latest EU funding calls matching the configured keyword query.
3. Splits the API results into individual grant items and processes them in a loop.
4. Filters out grants that are past their deadline or were ingested more than 7 days ago.
5. Uses OpenAI to score each remaining grant’s relevance to your organisation and generate a short justification plus the programme/type of action.
6. Posts an Adaptive Card to Microsoft Teams for grants with a relevance score above 7, then continues to the next result.

## Setup
1. Add an OpenAI API credential and fill in your organisation name and mission in the OpenAI prompt so the scoring matches your goals.
2. Create a Microsoft Teams incoming webhook and replace YOUR_TEAMS_WEBHOOK_URL with the webhook URL.
3. Update the EU Funding Search API query parameters (especially the text keywords, and optionally page size/number) to match what you want to monitor.
4. Optional: Set the error workflow ID in workflow settings (or remove it) so failures are routed correctly in your n8n instance.

## Customization
- Instead of teams you can use telegram/discord/slack.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
