# 🤝 Send a daily Holded sales summary to Slack

> ⚡ **12 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily at 08:00 to pull yesterday’s invoices from Holded, aggregate invoice count and totals, identify the top customer, and post a formatted sales digest to a Slack channel.

## How it works
1. Runs every day at 08:00 on a scheduled trigger.
2. Retrieves all invoices from Holded dated yesterday.
3. Calculates the number of invoices, total billed amount, and the top customer by billed total, then formats the results into a Slack-ready message.
4. Posts the daily sales report message to the selected Slack channel.

## Setup
1. Add your Holded API v2 credentials (API key) to allow the workflow to read invoices.
2. Add your Slack credentials and select the channel where the report should be posted.
3. Adjust the schedule time if you want the report to run at a different hour.
4. Install the free Holded community node first: in n8n go to Settings → Community Nodes → Install and search for @francodesystems-npm/n8n-nodes-holded. It is a verified community node, so it is also available on n8n Cloud.

## Requirements
- A Holded account with an API key (Settings → Developers → API keys)
- A Slack workspace where you can install apps and post to the target channel
- The @francodesystems-npm/n8n-nodes-holded verified community node installed

## Customization
- Change the trigger hour, or switch to a weekly digest by editing the Schedule Trigger
- Report on a different period (e.g. last 7 days) by adjusting startDate/endDate in the Holded node
- Add more metrics in the Code node: average ticket, pending amounts, breakdown by sales channel
- Swap the Slack node for Email, Teams or Telegram to deliver the report elsewhere

## Additional info
Built with the verified n8n-nodes-holded community node, which covers the full Holded API v2 (42 resources, 323 operations) — so this workflow is easy to extend to estimates, payments, products or CRM data. Documentation and more Holded automation guides: https://francodesystems.com/open-source/n8n-nodes-holded

## 🔗 Nodes Used

Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
