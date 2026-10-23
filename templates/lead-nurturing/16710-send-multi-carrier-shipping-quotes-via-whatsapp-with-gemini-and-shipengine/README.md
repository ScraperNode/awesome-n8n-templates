# 💬 Send multi-carrier shipping quotes via WhatsApp with Gemini and ShipEngine

> ⚡ **15 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/jIGBUW_1Sx0?si=BNXzk95soO0Nefan

This workflow responds to incoming WhatsApp messages, validates the sender in HighLevel, uses Google Gemini with Redis memory to collect shipment details, fetches multi-carrier rates from ShipEngine, applies a commission markup, logs the quote to Google Sheets, and sends the best options back via WhatsApp.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Looks up the sender’s phone number in HighLevel and stops outreach if the contact is marked Do Not Disturb.
3. Uses a Google Gemini-powered agent with Redis chat memory to collect and confirm shipment details, creating the contact in HighLevel if needed or marking them DND if they opt out.
4. If shipment data collection is complete, requests shipping rates from the ShipEngine Rates API for the configured carriers.
5. Calculates a commission markup, filters for valid rates, and selects the cheapest and fastest options to format a quote message.
6. Appends the quote text and metadata to a Google Sheets spreadsheet and sends the quote back to the customer via WhatsApp.

## Setup
1. Connect WhatsApp Business credentials for both the WhatsApp trigger and send actions, and set your Phone Number ID.
2. Add HighLevel OAuth2 credentials and ensure contact lookup by phone works in your HighLevel account.
3. Add a Google Gemini (PaLM) API credential and a Redis credential for conversation memory.
4. Add ShipEngine credentials (API key via HTTP header auth) and replace the placeholder carrier IDs in the ShipEngine request body with your real carrier IDs.
5. Connect a Google Sheets service account and update the spreadsheet/document and sheet selection used to store quotes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, HighLevel, WhatsApp Business Cloud, AI Agent, Redis Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
