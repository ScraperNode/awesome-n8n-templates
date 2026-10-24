# 💬 Handle restaurant reservations and orders with ElevenLabs, Sheets and Gmail

> ⚡ **31 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Automate restaurant phone calls with an ElevenLabs conversational voice agent. This workflow checks availability, creates, modifies, and cancels reservations, records pickup or delivery orders, handles callback requests, stores operational data in Google Sheets, and notifies restaurant staff through Gmail.

## How it works
1. Receives reservation details from ElevenLabs through the /restaurant_reservation webhook, normalizes the submitted fields, adds the booking to the Reservations sheet, emails the manager, and returns a confirmation message to the voice agent as JSON.
2. Receives a date, time, and party size through the /check_availability webhook. It reads existing reservations, calculates the remaining capacity for the requested time slot, and returns an availability result that ElevenLabs can communicate to the caller.
3. Receives pickup or delivery order details through the /restaurant_order webhook, normalizes the order information, stores it in the orders sheet, sends the manager a formatted Gmail notification, and returns an order confirmation to the caller.
4. Handles cancellation and modification requests through the /manage_reservation webhook. It finds the reservation using the caller’s phone number and reservation date, then either deletes the booking or updates its date, time, or party size. The workflow emails the manager and returns the appropriate response to ElevenLabs.
5. Receives unresolved requests through the /request_human_callback webhook, records the customer’s name, phone number, callback reason, and conversation ID in the Escalations sheet, sends an urgent Gmail notification to the manager, and confirms that a team member will contact the caller.

## Setup
1. Create a Google Sheet containing three tabs named Reservations, orders, and Escalations. Add column headers matching the fields used by the corresponding Google Sheets nodes, including customer details, reservation or order information, conversation ID, and creation time.
2. Connect your Google Sheets OAuth2 credential to every Google Sheets node. Replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID and verify that each node points to the correct sheet tab.
3. Connect your Gmail OAuth2 credential to every Gmail node. Replace manager@example.com with the email address that should receive reservation, order, modification, cancellation, and callback notifications.
4. Activate the workflow and copy the Production URL from each webhook node. Create five Webhook or Server Tools in your ElevenLabs conversational agent and connect them to /restaurant_reservation, /check_availability, /restaurant_order, /manage_reservation, and /request_human_callback.
5. Configure each ElevenLabs tool’s request parameters to match the fields expected by its webhook. Test every tool using sample requests, and change the CAPACITY = 40 value in the Check Capacity node if your restaurant has a different limit.

## Requirements
- An n8n Cloud or self-hosted n8n instance with publicly accessible HTTPS webhook URLs.
- An ElevenLabs account with a Conversational AI agent that supports Webhook or Server Tools.
- A Google account with access to Google Sheets and Gmail.

## Customization
- Change the restaurant capacity in the Check Capacity node to match your available seating.
- Customize the sheet names, confirmation messages, email recipients, and notification templates for your restaurant.
- Add webhook authentication and configure the same secret header in ElevenLabs before using the workflow in production.

## Additional info
Activate the workflow before copying its Production webhook URLs. The ElevenLabs agent and its five tools must be configured separately and are not included in this workflow JSON. Because the workflow processes customer names, phone numbers, delivery addresses, and reservation details, review your privacy, retention, and access-control requirements before production use.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
