# 🤝 Score Shopify COD order risk using GPT-4o-mini, Shiprocket, and Google Sheets

> ⚡ **26 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow scores every new Shopify order for RTO/fraud risk using Google Sheets history, Shiprocket serviceability, India Post pincode validation, and an OpenAI (gpt-4o-mini) review, then tags or holds fulfillment in Shopify and routes confirmations and reviews through WhatsApp, Gmail, Slack, and decision webhooks.

## How it works
1. Triggers when a new Shopify order is created and normalizes key fields (payment mode, phone, pincode, items) while generating a one-time decision token.
2. Looks up the customer’s return/delivery history and the destination pincode’s RTO risk from Google Sheets.
3. Checks Shiprocket for courier/COD serviceability and validates the pincode against India Post data, continuing even if these lookups fail.
4. Calculates a rule-based risk score from address quality, history, pincode risk, and other heuristics, then asks OpenAI (gpt-4o-mini) for a JSON risk opinion and address-fix suggestion.
5. Blends the rule score and AI score into a final score, assigns a low/medium/high tier (with hard flags forcing high risk), and logs the full assessment to an “Order Risk Log” Google Sheets tab.
6. For low-risk orders, adds Shopify tags indicating low risk and the risk score.
7. For medium/high-risk orders, places Shopify fulfillment orders on hold and tags the order, then either messages medium-risk customers via WhatsApp and Gmail with confirm/cancel links or posts high-risk orders to Slack with Release/Cancel/Prepay buttons.
8. Handles confirm/cancel/release/prepay actions via a webhook by validating the one-time token, updating Shopify (release hold or cancel), updating the risk log, showing a confirmation page, and posting the decision to Slack.

## Setup
1. Create a Shopify custom app, add its Admin API access token as Header Auth in n8n, and update the store domain placeholders (REPLACE_STORE / REPLACE_STORE.myshopify.com) used by the Shopify GraphQL requests.
2. Add Google Sheets OAuth credentials, set your spreadsheet ID in all Google Sheets steps, and create the “Customer History”, “Pincode Risk”, and “Order Risk Log” sheets with the required columns (including risk_id, status, token, assessed_at, fo_ids, reminded_at).
3. Add Shiprocket credentials for the auth login request and set your warehouse pincode in the configuration so serviceability checks can run.
4. Add OpenAI credentials for the gpt-4o-mini model.
5. Add Slack credentials and set the target channel ID for high-risk reviews and decision notifications.
6. Add Gmail credentials and WhatsApp Business Cloud credentials (phone number ID), then set the webhook base domain and prepay link placeholders used in decision and reminder messages.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Shopify Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
