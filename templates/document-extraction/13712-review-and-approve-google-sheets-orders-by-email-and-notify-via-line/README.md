# 🔬 Review and approve Google Sheets orders by email and notify via LINE

> ⚡ **141 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Process new orders from Google Sheets automatically. Small orders are approved right away. Large orders get an email with one-click Approve and Reject links, and several orders can be reviewed at the same time without blocking each other. Every outcome is sent to LINE.

## How it works
1. A Google Sheets Trigger polls the sheet for new rows. Rows that already have a status are skipped.
2. Each order gets a unique token written back to its row.
3. The order amount is compared with an approval threshold (default: 500). Small orders are approved instantly.
4. Large orders trigger a Gmail email with styled HTML Approve and Reject buttons. Each link carries the order's token.
5. A click goes to an n8n Webhook, which validates the token every time. Tampered or expired links return a 403 error page, and a link that was already used shows a friendly message. Each order is handled independently, so there is no Wait node holding up the queue.
6. Every outcome (auto-approved, approved, rejected) is sent as a LINE push notification and written back to the sheet with a reviewedAt timestamp.

## Setup
1. Create a Google Sheet with these columns: orderId, customerName, amount, approvalToken, status.
2. Add Google Sheets and Gmail credentials in n8n, then point the trigger and the Sheets nodes to your sheet.
3. Connect your LINE Messaging API channel and set who should receive the push notifications.
4. Set the approval threshold and the email address of the person who reviews large orders.
5. Activate the workflow. The Approve and Reject links only work while it is active.
6. Add one small and one large test order to check both paths.

## Requirements
- A Google account with Google Sheets and Gmail
- A LINE Messaging API channel
- An n8n instance the reviewer's browser can reach, so the email links can call the webhook

## Customization
- Change the approval threshold to match your order sizes.

## Additional info
Built by Jason Chuang (AI process automation consultant) — https://jasonchuang.com

Want more automation templates? https://jasonchuang0818.gumroad.com/l/n8n-content-automation-bundle

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
