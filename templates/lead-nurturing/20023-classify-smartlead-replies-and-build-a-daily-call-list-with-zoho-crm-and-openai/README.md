# 💬 Classify Smartlead replies and build a daily call list with Zoho CRM and OpenAI

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow classifies Smartlead email replies and updates Zoho CRM leads with the right status and follow-up tasks, optionally using OpenAI for higher-accuracy classification, and posts urgent reply alerts plus a weekday morning call list to a Slack/Teams-style incoming webhook.

## How it works
1. Triggers when a Smartlead EMAIL_REPLY webhook is received, or runs a demo trigger that generates sample replies.
2. Extracts and cleans the reply text (removing quoted email history) and normalizes key lead fields like email, name, lead ID, and campaign.
3. Classifies the reply as interested, not_now, referral, unsubscribe, out_of_office, or needs_human using OpenAI when configured, otherwise using keyword rules with safety checks and fallbacks.
4. Translates the classification into actions such as setting Zoho lead status, creating a due-dated follow-up task, and deciding whether to notify the team, while ignoring out-of-office replies.
5. In live mode, upserts the matching lead in Zoho CRM by email and creates Zoho tasks linked to the lead record; in preview mode it outputs the payloads instead of writing.
6. For unsubscribe replies, calls the Smartlead API to unsubscribe the lead from all campaigns when configured, otherwise shows what would be sent.
7. On weekdays at 07:30 (or on demand), queries Zoho CRM for leads in the configured statuses, ranks them into a capped call list (interested, then referral, then A-tier by score), and posts it to the team webhook when enabled.

## Setup
1. In Smartlead, create an EMAIL_REPLY webhook and point it to this workflow’s production webhook URL.
2. Configure Zoho OAuth (Self Client) values in the workflow config (client ID, client secret, refresh token, and correct accounts/API base URLs) and ensure the refresh token includes ZohoCRM.modules.ALL and ZohoCRM.coql.READ scopes.
3. Add your Smartlead API key in the workflow config to enable unsubscribe suppression.
4. (Optional) Add an OpenAI API key to enable AI-based reply classification and choose the model/thresholds as needed.
5. (Optional) Add an incoming webhook URL for Slack/Microsoft Teams/Google Chat in NOTIFY_WEBHOOK_URL to post urgent reply alerts and the daily call list, then set TEST_RUN = false to allow live writes.

## Customization
- Part 2 of 2 parts Clay Outbound Scoring Engine.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
