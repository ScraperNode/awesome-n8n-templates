# 🎫 Send multilingual shipment confirmation emails with fulfillmenttools and Gmail

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow listens for fulfillmenttools handover jobs being handed over to a carrier, validates the shipment data, fetches the carrier details from fulfillmenttools, and sends a localized shipment confirmation email to the customer via Gmail in English or German.

## How it works
1. Triggers when fulfillmenttools emits a HANDOVERJOB_HANDED_OVER event.
2. Validates that the order comes from the FFT_Shop sales source, the channel is DELIVERY, and the recipient email address is present and correctly formatted.
3. Retrieves the carrier details from fulfillmenttools using the shipment’s carrier reference.
4. Checks the customer’s shopLanguage custom attribute and routes the flow to the matching language branch.
5. Sends a shipment email via Gmail in English or German, including the order ID, tracking number, carrier name, and line items.

## Setup
1. Install and configure the fulfillmenttools community node and add fulfillmenttools API credentials for both the trigger and the carrier lookup.
2. Connect a Gmail OAuth2 account and select it in both Gmail email-sending steps.
3. Ensure fulfillmenttools sends the required payload fields (recipientAddress.email, customAttributes.salesSource, customAttributes.shopLanguage, channel, carrierRef, carrierTrackingNumber, and handoverJobLineItems) and adjust the validation rules or email templates as needed.

## Requirements
- fulfillmenttools community node, fulfillmentools System, gmail Account, gmail OAuth connection

## Customization
- Change the Layout of the email, add or change available Languages, adjust the data check

## 🔗 Nodes Used

Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
