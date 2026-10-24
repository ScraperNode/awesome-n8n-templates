# 🎫 Process Shopify returns with GPT-4o, Shiprocket, WhatsApp and Gmail

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow collects return requests via an n8n form, verifies order eligibility in Shopify, uses OpenAI vision to assess uploaded photos, and then routes the case to WhatsApp/email offers, Slack agent review, or a Gmail decline while logging everything to Google Sheets and booking Shiprocket reverse pickups.

## How it works
1. Receives a return request through an n8n form submission that includes order details, reason, and photos.
2. Looks up the order in Shopify and checks eligibility against policy rules (delivery status, return window, non-returnable tags, duplicates, and repeat-return flags) using a Google Sheets returns log.
3. If eligible, sends up to four uploaded photos and the customer’s claim to OpenAI (gpt-4o) for a structured photo-verification result and confidence score.
4. Combines policy checks, order value thresholds, and the AI result to either send exchange/store-credit/refund choice links to the customer or route the case to Slack for agent approval, and logs the decision to Google Sheets.
5. Sends approved options to the customer via WhatsApp and Gmail, sends manual-review cases to Slack with approve/reject links, and emails ineligible/policy-rejected requests via Gmail.
6. When a customer or agent clicks a decision link, validates the one-time token against the Google Sheets record and either records the agent decision or continues with the customer’s chosen resolution.
7. Books a reverse pickup in Shiprocket and, for store credit, creates a Shopify gift card, then updates the return record in Google Sheets and notifies the customer on WhatsApp with a confirmation page and ops instructions in Slack.

## Setup
1. Create Shopify Admin API credentials (GraphQL) with access to read orders and create gift cards, and store the access token as an HTTP Header Auth credential used by the Shopify requests.
2. Create a Google Sheets spreadsheet with a “Returns Log” sheet and replace the placeholder spreadsheet ID wherever it appears in the workflow.
3. Add credentials for OpenAI, Slack, Gmail, WhatsApp Business Cloud, and Shiprocket (Shiprocket uses a custom auth login body with your email and password).
4. Update the store domain, policy values, the choice webhook base URL, and warehouse address details in the configuration/code steps and the Shiprocket reverse pickup payload.
5. Replace placeholder Slack channel IDs and WhatsApp phone number ID, then run a test return submission with photos and verify link-click callbacks against the webhook endpoint.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
