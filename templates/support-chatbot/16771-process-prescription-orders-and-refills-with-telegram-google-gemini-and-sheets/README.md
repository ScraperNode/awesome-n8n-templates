# 💬 Process prescription orders and refills with Telegram, Google Gemini and Sheets

> ⚡ **45 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow lets customers order and refill prescriptions via Telegram by extracting medicines from prescription images with Google Gemini, checking and updating inventory in Google Sheets, and sending order summaries and status updates, with delivery updates handled by a webhook and error alerts posted to Slack.

## How it works
1. Triggers when a Telegram message is received, normalizes it, and routes it based on whether it contains a prescription image/document or the REFILL, STATUS, or CONFIRM command.
2. For prescription images/documents, it downloads the file from Telegram and uses Google Gemini vision to extract medicines, dosages, and quantities from the prescription.
3. It looks up each extracted medicine in a Google Sheets Inventory tab, deducts stock for items that are available, and aggregates the priced order lines.
4. It creates a new pending order in a Google Sheets Orders tab and sends the customer a Telegram order summary with the total and a prompt to reply CONFIRM.
5. For STATUS/REFILL/CONFIRM messages, it reads the relevant order from Google Sheets, sends the current status via Telegram, creates a new pending refill order, or updates the pending order status to confirmed and notifies the customer.
6. Triggers when a delivery service posts to a webhook, updates the order status in Google Sheets, and sends a delivery update to the customer on Telegram.
7. Runs daily on a schedule, finds orders due for refill in Google Sheets, sends Telegram refill reminders, and marks the reminder as sent.
8. Triggers on any workflow error and posts an alert message to a Slack channel.

## Setup
1. Add credentials for Telegram Bot API, Google Gemini, Google Sheets OAuth2, and Slack OAuth2.
2. Create a Google Sheets spreadsheet with Inventory and Orders tabs and matching column names (for example: Inventory has Medicine Name, Price, Stock Qty; Orders has Order ID, Chat ID, Items, Total, Status, Created At, Refill Date, Reminder Sent) and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets steps.
3. Configure your delivery provider to POST JSON with orderId and status to the workflow’s delivery webhook URL (path: /pharmacyos-delivery-update).
4. Update the Slack channel ID (YOUR_SLACK_CHANNEL_ID) used for workflow error alerts.
5. Review the Telegram message chat ID mappings so outbound messages use the stored Chat ID from Google Sheets rather than a hardcoded value, then activate the Telegram trigger, webhook, and schedule trigger.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
