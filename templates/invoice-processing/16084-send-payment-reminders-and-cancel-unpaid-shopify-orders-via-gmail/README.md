# 🧾 Send payment reminders and cancel unpaid Shopify orders via Gmail

> ⚡ **27 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily to find open, unpaid Shopify orders, send staged payment reminder emails via Gmail, and automatically cancel long-unpaid orders while restocking inventory. It also emails an admin a daily CSV audit report and sends error alerts if the workflow fails.

## How it works
1. Runs every day at 8:00 AM and loads your Shopify domain, reminder thresholds, cancellation window, and admin email settings.
2. Queries Shopify’s Admin GraphQL API for open orders with pending payment created within the configured lookback period, then keeps only orders that have a customer email address.
3. Calculates how many days each order has been pending and checks existing Shopify order tags to decide whether to send Reminder 1/2/3, cancel the order, or take no action.
4. Generates an HTML email (subject and body) for the selected action and routes each order to the reminder, cancellation, or skip path.
5. Sends reminder emails through Gmail and then adds a corresponding Shopify order tag (for example, `reminder-2-sent`) to avoid sending the same reminder again.
6. Cancels eligible orders through Shopify GraphQL with restocking enabled, sends a cancellation email via Gmail when the cancellation succeeds, and otherwise skips further customer actions.
7. Builds a CSV log and summary statistics for all evaluated orders and emails the report (with CSV attachment) to the configured admin address via Gmail.

## Setup
1. Create a Shopify Admin API access token with permissions to read orders and edit orders/tags (and to cancel orders), and add it as an HTTP Header Auth credential named `Shopify Token`.
2. Connect a Gmail account using OAuth2 credentials named `Gmail OAuth2` so the workflow can send customer emails, admin reports, and error notifications.
3. In the workflow configuration, set your `shopifyDomain`, `adminEmail`, reminder day thresholds, cancellation day threshold, lookback window, and fetch limit to match your store policies.

## 🔗 Nodes Used

GraphQL, Gmail, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
