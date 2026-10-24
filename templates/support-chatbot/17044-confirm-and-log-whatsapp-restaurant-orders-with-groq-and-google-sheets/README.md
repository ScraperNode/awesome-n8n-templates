# 💬 Confirm and log WhatsApp restaurant orders with Groq and Google Sheets

> ⚡ **86 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow triggers on incoming WhatsApp orders, uses Groq to extract items and quantities, validates them against a live Google Sheets menu, logs the result to an orders sheet, and replies to the customer with either a clarification request or a priced confirmation (with optional VIP owner alerts).

## How it works
1. Triggers when a new WhatsApp message is received on your WhatsApp Business Cloud number.
2. Sends the message text to Groq (Llama 3.3) to extract a structured list of ordered items and quantities.
3. Reads the latest menu (item name, price, availability) from a Google Sheets “Menu” tab.
4. Matches extracted items to the menu, checks availability, calculates line subtotals and the total price, and compiles any validation issues.
5. If there are issues, replies to the customer on WhatsApp asking for a corrected order and appends a “needs_clarification” entry to the Google Sheets “Orders” tab.
6. If the order is valid, appends a “confirmed” entry to the Google Sheets “Orders” tab and sends a WhatsApp confirmation with the item summary and total.
7. If the confirmed total meets or exceeds the VIP threshold, sends a separate WhatsApp notification to the owner number.

## Setup
1. Connect WhatsApp Business Cloud API credentials for the WhatsApp trigger and the WhatsApp send steps.
2. Add your Groq API credential and ensure the selected model is available in your Groq account.
3. Connect Google Sheets OAuth and create a spreadsheet with a “Menu” tab (item_name, price, available) and an “Orders” tab (customer_phone, order_summary, total_price, status, notes).
4. Update the configuration values for restaurant name, WhatsApp phone number ID, owner notification number, VIP threshold, and Google Sheet ID.
5. Activate the workflow and send a test WhatsApp order to confirm messages are received and logged correctly.

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Basic LLM Chain, Structured Output Parser, WhatsApp Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
