# 🔧 Send weekly newsletter growth reports to Slack and Telegram with Kit

> ⚡ **2 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
Every Monday your newsletter's key numbers — new subscribers, cancellations, net growth and list total — arrive in Slack or Telegram. Reads Kit (ConvertKit) by default; beehiiv, Mailchimp or Buttondown are a one-URL swap. Put ad spend next to net growth and know which creatives earn their budget.

## How it works
1. Every Monday at 08:00 a Schedule Trigger fires — change the day or hour to match when you plan your week.
2. Fetch Growth Stats From Kit reads your subscriber stats from Kit's (ConvertKit's) v4 growth_stats endpoint over plain HTTP — no OAuth, no community nodes.
3. Format the Weekly Report builds a short five-line report: new subscribers, cancellations, net growth for the week and your current list total.
4. The report posts to Slack and/or Telegram — the two nodes are independent; delete the one you don't use.

## Setup
1. Create a Header Auth credential named X-Kit-Api-Key with your API key (Kit → Settings → Developer) and select it in Fetch Growth Stats From Kit.
2. Slack: create an incoming webhook at api.slack.com/apps and paste its URL into Post Report to Slack.
3. Telegram: create a bot with @BotFather, put its token in the URL of Post Report to Telegram and your chat id in chat_id.
4. Delete whichever of the two channel nodes you don't use, then activate the workflow.
5. Change the day or hour in Every Monday at 08:00 if Monday 8am isn't when you plan your week.

## Requirements
- An email platform with a stats endpoint — Kit (ConvertKit) out of the box, beehiiv / Mailchimp / Buttondown with a one-line URL swap — plus a Slack incoming webhook URL or a Telegram bot token and chat id. Plain HTTP Request nodes only: no OAuth, no community nodes.

## Customization
- Change the schedule in Every Monday at 08:00 to whatever day and hour you plan your week. Swap the endpoint in Fetch Growth Stats From Kit (beehiiv GET /v2/publications/{id} → stats.active_subscriptions, Mailchimp GET /3.0/lists/{id} → stats.member_count, Buttondown GET /v1/subscribers?type=regular) and match the field names in Format the Weekly Report. That same node is where you'd add ad spend or a cost-per-subscriber line.

## Additional info
Built for people running paid acquisition: net growth next to weekly ad spend is the number that tells you whether a creative is worth keeping, and it arrives in Slack before you've opened a dashboard.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
