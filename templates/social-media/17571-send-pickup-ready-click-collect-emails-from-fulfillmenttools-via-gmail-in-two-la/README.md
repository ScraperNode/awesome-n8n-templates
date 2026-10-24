# 📱 Send pickup-ready Click & Collect emails from fulfillmenttools via Gmail in two languages

> ⚡ **5 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow listens for new handover jobs in fulfillmenttools and, for Click & Collect orders from the FFT_Shop source, fetches the related order and pickup facility details. It then sends a ready-for-pickup email via Gmail in English or German based on the customer’s language.

## How it works
1. Triggers when a HANDOVERJOB_CREATED event is received from fulfillmenttools.
2. Validates that the handover job belongs to the FFT_Shop sales source and uses the COLLECT channel, otherwise stops.
3. Looks up the matching order in fulfillmenttools by tenantOrderId and then fetches the full order details.
4. Verifies the customer email address exists and is not empty, otherwise stops.
5. Retrieves the pickup facility details from fulfillmenttools and determines the customer language from the order custom attribute shopLanguage.
6. Sends a ready-for-pickup HTML email through Gmail in English (en_US) or German (de_DE) to the customer’s email address.

## Setup
1. Install and configure the fulfillmenttools community node and add fulfillmenttools API credentials for the trigger and order/facility lookup steps.
2. Add a Gmail OAuth2 credential with permission to send email and select it in both Gmail send steps.
3. Ensure your fulfillmenttools handover job payload includes customAttributes.salesSource, channel, and customAttributes.shopLanguage (en_US or de_DE) so the workflow can filter and select the correct email language.
4. Customize the email templates (subject/body, pickup code, links, pickup-by date, and branding) to match your shop and data fields.

## 🔗 Nodes Used

Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
