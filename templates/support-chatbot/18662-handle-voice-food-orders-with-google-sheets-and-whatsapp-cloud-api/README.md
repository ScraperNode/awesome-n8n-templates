# 💬 Handle voice food orders with Google Sheets and WhatsApp Cloud API

> ⚡ **8 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes a webhook for a voice assistant to fetch a Google Sheets menu, calculate an order total from sheet prices, and place validated orders, then logs them to Google Sheets and notifies the kitchen via WhatsApp Cloud API.

## How it works
1. Receives a POST webhook request from a voice platform tool call and extracts the requested function name and arguments.
2. Tries to use a cached business config and menu, and if missing fetches the Config and Menu tabs from Google Sheets and keeps only available items.
3. If the tool call is `get_menu`, formats the available menu items with prices grouped by category and returns the text in the webhook response.
4. If the tool call is `calculate_order`, matches requested items to the Google Sheets menu, calculates subtotal, delivery fee, total, and minimum-order status, and returns the result in the webhook response.
5. If the tool call is `place_order`, re-validates items, minimum order, and required customer details (name, phone, address) and either returns a problem message or continues.
6. For valid orders, generates an order ID, appends the order to the Google Sheets Orders tab, sends a WhatsApp Cloud API message with the order details, and returns an order-confirmation message in the webhook response.

## Setup
1. Create or copy a Google Sheets file with Config, Menu, and Orders tabs and update the document and sheet references in the Google Sheets nodes to match.
2. Add a Google Sheets OAuth2 credential with access to the spreadsheet.
3. Set your business settings in the Config tab (including currency, delivery fee, minimum order, kitchen WhatsApp number, and WhatsApp phone number ID) and keep Menu rows accurate with an `available` field.
4. Add a WhatsApp Cloud API access token as an HTTP Header Auth credential and ensure your WhatsApp Cloud API sender (phone number ID) can message the target numbers.
5. Copy the Webhook URL from n8n and configure your voice platform to call it as a tool for `get_menu`, `calculate_order`, and `place_order` (adjust the request parsing in the code if your platform uses a different payload shape).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
