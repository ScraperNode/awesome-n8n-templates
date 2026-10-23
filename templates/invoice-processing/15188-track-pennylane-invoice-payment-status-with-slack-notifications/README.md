# 🧾 Track Pennylane invoice payment status with Slack notifications

> ⚡ **13 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for

Teams using Pennylane (French accounting platform) who want automatic alerts when invoices are paid or become overdue, without checking Pennylane manually.

## What it does

This workflow runs every 15 minutes, fetches all customer invoices from Pennylane, and classifies them as paid, overdue, or upcoming. If any invoices have been paid or are overdue, it sends a summary notification to Slack. If everything is normal, the workflow ends silently.

## How to set up

1. Import this workflow into n8n
2. Create a **Header Auth** credential with name `Authorization` and value `Bearer &lt;YOUR_PENNYLANE_TOKEN&gt;`
3. Select your Slack channel in the `SL Send Notification` node
4. Adjust the schedule interval in the Schedule Trigger node if needed

## Requirements

- Pennylane account with API access (Essentiel plan or higher)
- Pennylane API token with scope: `customer_invoices:all`
- (Optional) Slack workspace for notifications

## How to customize

- Change the polling interval in the Schedule Trigger node (default: every 15 minutes)
- Replace Slack with Telegram, Email, or any other notification channel
- Note: Pennylane API does not support filtering by status or paid fields, all classification is done client-side in a Code node

Part of a 3-workflow billing automation suite: https://github.com/Gauthier-Huguenin/n8n-pennylane-auto-invoicing

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
