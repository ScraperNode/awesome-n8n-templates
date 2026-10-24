# 🤝 Review HeyReach campaign performance and tune Twain agents from Slack

> ⚡ **5 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily, pulls campaign stats and reply conversations from HeyReach, sends them to Twain for performance analysis, and posts a digest to Slack with optional one-click approval to apply Twain’s suggested agent updates.

## How it works
1. Scheduled run
2. Iterates through the configured pairs of Twain campaign IDs and HeyReach campaign IDs.
3. Fetches the HeyReach campaign details, overall performance stats, and recent inbox conversations for each campaign.
4. Packages key metrics and recent message threads and sends them to Twain’s /v2/Campaign/Analyze endpoint for analysis and optimization suggestions.
5. Builds a Slack digest with health signals, reply themes, step diagnostics, and proposed agent changes (plus a link to the campaign in Twain when available).
6. If there are actionable agent changes, posts the digest to Slack with Approve/Skip buttons and applies the approved changes via Twain’s /v2/Agent/Update, then confirms success or errors in Slack.
7. If there are no changes, posts the digest only when the analysis is meaningful (for example, analyzed results or alerts), then moves on to the next campaign.

## Setup
1. Add HeyReach API access using HTTP Header Auth credentials and ensure your key can call campaign, stats, and inbox endpoints.
2. Add a Twain API key using HTTP Header Auth credentials (X-Api-Key) and confirm your Twain campaign IDs are correct.
3. Add Slack credentials for a bot token and ensure the bot has permission to post and use interactive approvals in the target channel.
4. In the Settings values, replace REPLACE_WITH_TWAIN_CAMPAIGN_ID and REPLACE_WITH_HEYREACH_CAMPAIGN_ID for each campaign pair, optionally set a focus string, and set the Slack channel name.
5. Adjust the schedule time if needed and activate the workflow.

## Requirements
- Twain account

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
