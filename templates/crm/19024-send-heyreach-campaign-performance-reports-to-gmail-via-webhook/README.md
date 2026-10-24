# 🤝 Send HeyReach campaign performance reports to Gmail via webhook

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives a HeyReach “campaign completed” webhook, fetches the campaign’s overall performance stats from the HeyReach API, formats an HTML summary report, and sends the report to a specified recipient via Gmail.

## How it works
1. Receives a POST webhook from HeyReach when a campaign is marked as completed.
2. Extracts the campaign ID and name from the webhook payload and sets the email recipient address.
3. Calls the HeyReach Public API (GetOverallStats) to retrieve overall statistics for the completed campaign.
4. Builds an HTML email report that includes key metrics (connections sent/accepted, messages started, replies, interested leads) and a link back to the campaign in HeyReach.
5. Sends the formatted report to the configured recipient using Gmail.

## Setup
1. Add a HeyReach API credential in n8n and select it for the HeyReach API request.
2. Add a Gmail OAuth2 credential in n8n and select it for the email-sending step.
3. Replace `your-email@example.com` with your target recipient address.
4. Copy the production webhook URL from the workflow and register it in HeyReach as a “Campaign Completed” webhook under Integrations → Public API / Webhooks.

## 🔗 Nodes Used

Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
