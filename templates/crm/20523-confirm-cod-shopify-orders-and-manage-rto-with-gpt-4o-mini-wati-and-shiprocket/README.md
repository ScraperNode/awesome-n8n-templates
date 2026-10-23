# 🤝 Confirm COD Shopify orders and manage RTO with GPT-4o-mini, WATI, and Shiprocket

> ⚡ **18 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow reduces COD RTOs by scoring new Shopify orders (rules + OpenAI), confirming them over WhatsApp via WATI, and dispatching confirmed orders to Shiprocket, while tracking statuses in Google Sheets and notifying ops via Telegram using webhooks, a review form, and scheduled follow-ups.

## How it works
1. Triggers on new Shopify orders, incoming WATI/Shiprocket webhook events, ops decisions submitted via an n8n form, and a 15-minute schedule.
2. Loads the COD Orders tracker from Google Sheets and decides the next required actions for each order (confirm, remind, hold, dispatch, or NDR follow-up) based on the latest status and timing.
3. For new orders, calculates a rule-based RTO risk score and sends the order details to OpenAI (gpt-4o-mini) to assess address quality and fraud/RTO likelihood.
4. Writes the order with its blended risk score and risk band to Google Sheets, updates Shopify order tags (and cancels the order when needed), and sends WhatsApp confirmation or reminder templates through WATI.
5. Moves confirmed low/medium-risk orders to dispatch by creating shipments in Shiprocket, then stores shipment IDs, AWB, courier, and shipment status back in Google Sheets.
6. Reacts to Shiprocket tracking updates by sending WATI out-for-delivery and failed-delivery (NDR) messages, optionally triggering Shiprocket NDR actions (re-attempt/return), and alerting the ops team in Telegram for high-risk orders, repeated NDRs, auto-cancellations, or Shiprocket API errors.

## Setup
1. Connect credentials for Shopify (Admin access token), Google Sheets, OpenAI, and Telegram.
2. Create and share a Google Sheet containing a “COD Orders” tab, then paste the Sheet ID and tab name into the workflow configuration.
3. Add WATI HTTP Header Auth credentials and configure your approved WATI WhatsApp templates (confirmation, reminder, out-for-delivery, and NDR) plus your WATI tenant endpoint.
4. Add Shiprocket Custom Auth login credentials (API user email/password), set your Shiprocket pickup location name, and configure Shiprocket and WATI to POST webhook events to the workflow’s webhook URL (including the shared Shiprocket webhook token header).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Shopify Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
