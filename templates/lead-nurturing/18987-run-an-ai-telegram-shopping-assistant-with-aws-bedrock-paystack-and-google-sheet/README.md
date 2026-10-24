# 💬 Run an AI Telegram shopping assistant with AWS Bedrock, Paystack and Google Sheets

> ⚡ **51 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs a Telegram shopping assistant powered by AWS Bedrock, using Google Sheets as a product catalog and cart store, generates Paystack payment links, and fulfills successful Paystack webhook payments by verifying the transaction, recording the paid order, clearing the cart, and confirming in Telegram.

## How it works
1. Triggers when a customer sends a message to your Telegram bot.
2. Extracts chat and user details, loads the customer record from the n8n Data Table (ecom_users), and provides conversation context via an AWS Bedrock chat model and memory.
3. Uses an AI agent to browse the product catalog in Google Sheets, manage cart rows in Google Sheets, and generate a Paystack checkout link via the Paystack Transaction Initialize API when required checkout details are available.
4. Sends the AI agent’s response back to the customer in Telegram.
5. Separately, receives Paystack payment webhooks, normalizes the payload, and validates authenticity by computing an HMAC-SHA512 hash and comparing it to the x-paystack-signature header.
6. Resolves the customer’s Telegram chat ID by matching the Paystack reference to a cart row in Google Sheets.
7. Verifies the transaction with Paystack, checks/updates the order status in the Orders sheet, clears the matching cart rows, and sends a single payment confirmation message in Telegram.

## Setup
1. Add Telegram Bot API credentials and set your bot webhook so the Telegram Trigger can receive messages.
2. Add AWS credentials for Amazon Bedrock and ensure the selected models are available in your AWS region.
3. Add a Google Sheets OAuth2 credential and update the spreadsheet ID/tabs for Products, Cart, and Orders to match your own sheet structure.
4. Create and populate the n8n Data Table named ecom_users (keyed by telegram_id) to store per-user state such as email and current_state.
5. Add your Paystack secret key as an HTTP Bearer credential for the Paystack API calls and as the HMAC key in the Crypto credential used for webhook signature verification.
6. Copy the Paystack Webhook URL from n8n and register it in your Paystack dashboard as a webhook endpoint.

## 🔗 Nodes Used

Webhook, Telegram, Telegram Trigger, AI Agent, Simple Memory, AWS Bedrock Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
