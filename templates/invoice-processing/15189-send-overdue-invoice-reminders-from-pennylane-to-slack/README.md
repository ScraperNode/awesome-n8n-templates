# 🧾 Send overdue invoice reminders from Pennylane to Slack

> ⚡ **39 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for

Finance teams and freelancers using Pennylane (French accounting platform) who want daily alerts for unpaid invoices that need follow-up.

## What it does

This workflow runs daily at 9 AM, fetches all customer invoices from Pennylane, and identifies unpaid invoices past their deadline by 7 or more days. If overdue invoices are found, it sends a detailed Slack reminder with invoice number, amount, days overdue, and a direct link to the PDF. If no invoices are overdue, the workflow ends silently.

## How to set up

1. Import this workflow into n8n
2. Create a **Header Auth** credential with name `Authorization` and value `Bearer &lt;YOUR_PENNYLANE_TOKEN&gt;`
3. Select your Slack channel in the `SL Send Notification` node
4. Adjust the schedule time in the Schedule Trigger node if needed

## Requirements

- Pennylane account with API access (Essentiel plan or higher)
- Pennylane API token with scope: `customer_invoices:all`
- (Optional) Slack workspace for notifications

## How to customize

- Change `THRESHOLD_DAYS` in the `Code Filter Overdue` node to adjust when reminders trigger (default: 7 days past deadline)
- Change the schedule time in the Schedule Trigger node (default: 9 AM daily)
- Replace Slack with Telegram, Email, or any other notification channel

Part of a 3-workflow billing automation suite: https://github.com/Gauthier-Huguenin/n8n-pennylane-auto-invoicing

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
