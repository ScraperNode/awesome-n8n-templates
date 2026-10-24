# 🤝 Monitor Shopify dispatch SLA breaches with Google Sheets, Slack and Gmail

> ⚡ **34 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow is built to monitor your Shopify store every hour and automatically detect open, unfulfilled orders that have gone past your dispatch SLA window. 
The moment a breach is detected, alerts go out to Slack and Email instantly, helping your team respond faster, reduce fulfillment delays.


## How it works
1. **Hourly Monitoring** — The workflow wakes up automatically every hour using the n8n Schedule Trigger.
2. **Fetch Shopify Orders** — Pulls up to 250 open, unfulfilled Shopify orders that are older than your configured SLA window.
3. **Smart Deduplication** — Loads your Google Sheet breach log and skips any orders that were already reported in a previous run.
4. **Order Processing** — Calculates how old each order is, flags VIP orders, and builds your Slack message and email.
5. **Generate Email HTML** — A dedicated node builds the full HTML email body from the processed order data.
6. **Instant Notifications** — Sends real-time Slack alerts and HTML email notifications for newly breached orders only.
7. **Error Alerts** — If any workflow step fails, the global Error Trigger immediately sends the failed node name and error message to Slack.

## Setup
1. Connect Shopify OAuth2 credentials so the workflow can read open orders from your store.
2. Connect Google Sheets OAuth2 credentials and create a sheet with headers `runTimestamp`, `unfulfilledOrderIds`, `vipOrderIds`, `totalOrders`, and `alertStatus`, then paste its URL into `googleSheetUrl` in the SLA config.
3. Connect Slack credentials and set `slackEscalationChannel` to the target channel ID for both breach and error alerts.
4. Connect Gmail OAuth2 credentials and set `recipientMail` (and optionally adjust `slaHours` and `vipThreshold`) in the SLA config before activating the workflow.

## Requirements
- **n8n Version:** 2.20 or higher
- **Shopify Store:** An active Shopify store with API access
- **Accounts Needed:** Shopify, Google Sheets, Gmail, Slack (all OAuth2)
- **Google Sheet:** Set up in advance with the 5 required column headers (see Step 2 above)

## Customization
- **Check More Often:** Change the Schedule Trigger to every 30 minutes for high-volume stores.
- **Paid Orders Only:** In the `Process & Deduplicate` node, add `&& order.financial_status === 'paid'` to the SLA check so only paid orders are flagged.
- **Send to More People:** Duplicate the Gmail node and connect both copies to `Log Breach to Sheets`, or use a distribution email address.
- **Add SMS for Critical Delays:** Connect a Twilio node to send a text message for orders breaching 120+ hours.

## 🔗 Nodes Used

Google Sheets, Slack, Shopify, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
