# 💬 Recover abandoned carts with localized pricing via ApogeoAPI and SMTP email

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives abandoned-cart events via a webhook, uses ApogeoAPI to geolocate the shopper and convert the cart total from USD to the shopper’s local currency, then waits one hour and sends a localized recovery email via SMTP.

## How it works
1. Receives an abandoned cart event via a POST webhook containing the shopper email, IP address, cart total in USD, and checkout URL.
2. Uses ApogeoAPI to geolocate the shopper’s IP address and retrieve the country details, including the local currency.
3. Uses ApogeoAPI to fetch the current USD-to-local exchange rate and calculates a localized cart total plus a region-specific greeting, language, and coupon.
4. Waits one hour to give the shopper time to complete the purchase without a reminder.
5. Sends a recovery email via SMTP that includes the localized cart total, localized message copy, coupon code, and a link back to the checkout.

## Setup
1. Self-host n8n and install the `n8n-nodes-apogeoapi` community node.
2. Create an ApogeoAPI account, add your ApogeoAPI credentials in n8n, and ensure the workflow nodes reference that credential.
3. Configure your store (for example, Shopify) to POST abandoned-cart events to the workflow webhook URL and map the event fields to the expected payload.
4. Add an SMTP (or other supported email) credential and update the “from” address used to send the recovery email.

## Requirements
- Self-hosted n8n — community nodes are not available on n8n Cloud
- An ApogeoAPI account — signup includes 14 days of full access; IP geolocation and exchange rates require a paid plan afterwards
- An SMTP credential to send the recovery email
- An ecommerce platform that can POST abandoned-cart events to a webhook, sending email, first_name, ip and cart_total_usd

## Customization
- Change the wait duration before the reminder is sent
- Replace the coupon codes per region, or remove the discount entirely
- Add more languages to the localization rules in the Code node
- Adjust currency rounding and the display format of the localized total
- Swap the email node for SMS, WhatsApp or a push channel

## 🔗 Nodes Used

Send Email, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
