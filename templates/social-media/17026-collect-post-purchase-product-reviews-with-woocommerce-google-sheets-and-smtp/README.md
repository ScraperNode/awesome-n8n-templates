# 📱 Collect post-purchase product reviews with WooCommerce, Google Sheets, and SMTP

> ⚡ **21 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow sends post-purchase review request emails for WooCommerce orders, stores expiring form links in Google Sheets, optionally shortens links with Dub.co and delays delivery, serves a hosted rating form via n8n webhooks, and submits collected reviews back to WooCommerce.

## How it works
1. Receives an order completion event via a WooCommerce webhook or an external POST webhook and returns a 200 OK response.
2. Normalizes the incoming order payload, generates a unique form token and expiry, and builds a customer-specific review form URL.
3. Fetches each product’s image and permalink from the WooCommerce REST API, aggregates the product list, and appends the form record to a Google Sheets tab.
4. Optionally shortens the form URL using the Dub.co API and optionally waits a configured number of days before sending the message.
5. Renders an HTML email containing the ordered products and the review link and sends it via SMTP to the customer.
6. When the customer opens the review link, looks up the form token in Google Sheets, validates status/expiry, and serves either the multi-product rating form HTML or an error page.
7. When the form is submitted, validates the token again, posts each product review to the WooCommerce product reviews endpoint with status set to “hold,” marks the form as completed in Google Sheets, and returns a JSON success or error response.

## Setup
1. Create WooCommerce REST API credentials (Consumer Key/Secret) and add them as HTTP Basic Auth credentials in n8n for the WooCommerce API requests.
2. Create a Google Sheet with a `ReviewForms` tab and the required headers, connect Google Sheets credentials, and replace `YOUR_SHEET_ID` in all Google Sheets steps.
3. Configure SMTP credentials in the email step (host, port, username, password) and verify the from/to settings fit your mail provider.
4. Update the configuration values in the Config step (siteUrl, shopName, logoUrl, n8nUrl, expiryDays, and optional Dub.co key/settings) and ensure the form/submit webhook paths match.
5. If triggering from WooCommerce, copy the WooCommerce order webhook URL and register it in WooCommerce as an `order.completed` webhook pointing to `/webhook/wc-order-complete`.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
