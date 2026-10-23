# 📱 Reprice gold chain stock daily and announce it on WhatsApp with Google Sheets, goldapi.io and Twilio

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow reprices a gold chain catalogue every weekday using a live goldapi.io rate (or demo data), updates prices in Google Sheets, and drafts a WhatsApp announcement for customers via Twilio that only sends after the owner approves.

## How it works
1. Runs every weekday at 08:00 (or manually) and loads pricing, sheet, and WhatsApp settings from the workflow’s configuration.
2. Reads stock rows from a Google Sheets “Stock” tab (or uses built-in demo stock) and holds back any items missing required data like weight, known karat purity, or a configured style.
3. Fetches today’s 24k gold price per gram from goldapi.io (or uses a demo rate), then calculates each chain’s price using purity, making charge, margin, and rounding rules.
4. Stops the run if the gold rate looks implausible compared to the last published rate (for example, moving more than the configured maximum percentage).
5. Builds a customer-facing WhatsApp catalogue and a short “what changed” announcement (new in, back in stock, last few, sold out) from the repriced stock.
6. Reads customers from a Google Sheets “Customers” tab (or uses demo customers), filters out opted-out/invalid/duplicate numbers, and prepares a capped broadcast list.
7. Sends the owner an approval message on WhatsApp via Twilio with an approve link, then sends the announcement to each planned recipient only if the owner approves within the configured time window.
8. In live mode, writes today’s price, rate, and available quantity back to the Google Sheets stock tab so the next run can detect changes.

## Setup
1. Create a Google Sheet with “Stock” and “Customers” tabs matching the expected columns, then add Google Sheets credentials in n8n and set the Sheet ID and tab names in the config.
2. Create a goldapi.io API key, then paste it into the config and confirm the currency matches your intended pricing currency.
3. Configure Twilio WhatsApp (sender number and Twilio credentials), then set the WhatsApp “From” number and the owner’s WhatsApp number in the config.
4. Review and customize pricing rules in the config (PURITY, STYLES making charges, margin, rounding, MAX_RATE_MOVE_PCT, BROADCAST_CAP, and approval timeout).
5. Start in preview/test by setting TEST_WHATSAPP if needed, then switch to live by setting TEST_RUN to false when you are ready to send and write back to Google Sheets.

## Customization
- Part 1 of 2 parts Gold Chain Catalogue Engine

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
