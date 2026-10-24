# 💬 Manage restaurant orders, upsells, and payments with Telegram, OpenAI, Razorpay, and Google Sheets

> ⚡ **81 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs a Telegram restaurant ordering flow that uses OpenAI to parse orders and suggest an upsell, sends a Razorpay payment link, confirms paid orders via a Razorpay webhook, logs orders and feedback in Google Sheets, notifies the kitchen, sends delivery updates, and posts error alerts to Slack.

## How it works
1. Receives a customer’s order message in Telegram and sends it to OpenAI to extract items, quantities, subtotal, and a suggested upsell.
2. Replies in Telegram with an order summary and upsell prompt, then waits for the customer to respond.
3. When the customer replies, calculates the final total (including the upsell when accepted) and sends a Razorpay payment link in Telegram.
4. Receives the Razorpay payment.captured webhook, extracts payment details, confirms payment to the customer in Telegram, and posts a kitchen ticket to a dedicated Telegram chat.
5. Appends the paid order to an Orders tab in Google Sheets and calculates ingredient deductions to update the same sheet against the order.
6. Waits through prep and delivery windows and then sends delivery tracking followed by a Telegram feedback request.
7. Captures the customer’s rating in Telegram, calculates loyalty points, logs feedback to a Feedback tab in Google Sheets, and sends a thank-you message.
8. Runs nightly at 11 PM, reads today’s orders from Google Sheets, calculates key sales metrics, and sends a daily report to the owner in Telegram.

## Setup
1. Add Telegram Bot API credentials, set your kitchen and owner Telegram chat IDs, and connect them to the Telegram trigger and send-message steps.
2. Add an OpenAI API credential and update the menu items/prices in the OpenAI prompt to match your restaurant.
3. Add Google Sheets OAuth2 credentials, replace YOUR_GOOGLE_SHEET_ID, and create sheets/tabs named Orders and Feedback with columns matching the workflow mappings.
4. Configure Razorpay to send payment.captured webhooks to this workflow’s webhook URL and ensure your payment link includes notes for order_id, chat_id, items, and customer_name.
5. Add Slack OAuth2 credentials and set YOUR_SLACK_CHANNEL_ID so workflow errors post to the correct Slack channel.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
