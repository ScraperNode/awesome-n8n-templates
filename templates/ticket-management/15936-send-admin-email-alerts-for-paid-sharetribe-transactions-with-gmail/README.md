# 🎫 Send admin email alerts for paid Sharetribe transactions with Gmail

> ⚡ **26 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Sharetribe for transaction transition events, filters for payments that have just been confirmed, fetches the full transaction details, and sends a notification email to a marketplace admin via Gmail.

## How it works
1. Polls Sharetribe every minute for `transaction/transitioned` events.
2. Checks that the transaction’s previous transition is `transition/request-payment` to focus only on post-payment state changes.
3. Fetches the transaction’s current `lastTransition` from Sharetribe and confirms it equals `transition/confirm-payment`.
4. Retrieves the full Sharetribe transaction details including the customer, provider, listing, and payout/pay-in totals.
5. Fetches the Sharetribe marketplace name once and formats the key fields, including calculated operator revenue (pay-in total minus payout total).
6. Sends a Gmail email to the admin with the marketplace name, listing title, revenue amount, and a link to the transaction in the Sharetribe Console.

## Setup
1. Add Sharetribe Integration API (OAuth2) credentials and ensure the workflow can read marketplace and transaction data.
2. Add Gmail OAuth2 credentials for the account that sends the admin notifications.
3. Replace the Gmail “To” address with your admin email and adjust the email subject/body as needed.
4. If your transaction process uses different transition names, update the two transition checks (`transition/request-payment` and `transition/confirm-payment`) to match your process.

## Requirements
- Sharetribe marketplace with Integration API credentials

## 🔗 Nodes Used

Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
