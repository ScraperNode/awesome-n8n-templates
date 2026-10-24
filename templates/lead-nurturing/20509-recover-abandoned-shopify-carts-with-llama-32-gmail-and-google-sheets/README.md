# 💬 Recover abandoned Shopify carts with Llama 3.2, Gmail, and Google Sheets

> ⚡ **15 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow captures Shopify checkout and order webhooks, logs activity to Google Sheets, and uses an Ollama-hosted Llama 3.2 chat endpoint to generate and send cart-recovery and post-purchase emails via Gmail, then emails a weekly recovery summary.

## How it works
1. Receives Shopify webhook events for checkout creation/updates and order creation.
2. For checkout events, logs the checkout details (email, product, price, recovery link, and cart token) to Google Sheets and starts the follow-up sequence only for new checkouts.
3. After 1 hour, looks up the checkout by cart token in Google Sheets, skips if its status is already “Recovered,” and uses Llama 3.2 (via an HTTP call to an Ollama chat endpoint) to draft a reminder email that Gmail sends to the customer.
4. After 24 more hours, re-checks the same Google Sheets row, skips if “Recovered,” generates a discount follow-up mentioning code CART10 with Llama 3.2, sends it via Gmail, and updates the row status to “Discount Sent.”
5. After another 24 hours, re-checks the Google Sheets row again, skips if “Recovered,” generates a final urgency email with Llama 3.2, sends it via Gmail, and updates the row status to “Urgency Sent.”
6. For order creation events, updates the matching Google Sheets row to “Recovered,” picks a random upsell product from a built-in catalog, generates a thank-you email with Llama 3.2, and sends it via Gmail.
7. Every Monday at 9am, reads all tracker rows from Google Sheets, calculates weekly recovered revenue and recovery rate, and emails the summary via Gmail.

## Setup
1. Create Shopify webhooks for checkout creation/updates and order creation and point them to this workflow’s webhook URL.
2. Create a Google Sheet with columns for Checkout Token, Email, Product, Price, Status, Recovery Link, Created At, and Last Updated, then add a Google Sheets OAuth2 credential and replace YOUR_GOOGLE_SHEET_ID_HERE in all Google Sheets steps.
3. Add a Gmail OAuth2 credential, set the weekly summary recipient email address, and ensure your Gmail account is allowed to send to your customers.
4. Provide an Ollama (or compatible) chat endpoint that serves the llama3.2 model and update the HTTP request URL if it is not reachable at http://host.docker.internal:11434/api/chat.
5. If you use the discount follow-up, create the CART10 discount code in Shopify (or update the prompts/code to match your discount code and branding).

## Requirements
- Shopify store with admin access
- Google account with Sheets and Gmail access
- Ollama running locally with Llama 3.2 (or any OpenAI-compatible chat API)

## Customization
- Swap the local Llama model for GPT-4o or Claude by updating the HTTP Request nodes' endpoint and body
- Edit the product list in the Pick Upsell node and the store name in the Code nodes
- Adjust the three Wait nodes, or change the discount code and email tone in the HTTP Request prompts

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
