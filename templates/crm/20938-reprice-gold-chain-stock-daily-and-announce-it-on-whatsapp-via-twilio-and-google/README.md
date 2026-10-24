# 🤝 Reprice gold chain stock daily and announce it on WhatsApp via Twilio and Google Sheets

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow reprices a gold chain stock list every weekday using a daily gold rate from goldapi.io (or a demo rate), builds a WhatsApp-ready catalogue and “what changed” announcement, and uses Twilio WhatsApp to request owner approval before broadcasting to customers and optionally updating a Google Sheets stock sheet.

## How it works
1. Runs every weekday at 08:00 (or manually) and loads business, pricing, sheet, and WhatsApp settings from a single configuration step.
2. Reads stock rows from Google Sheets (or uses built-in demo stock) and holds back any items that can’t be priced due to missing weight, unknown style, or unsupported karat.
3. Fetches today’s 24k gold price per gram from goldapi.io (or uses a labeled demo rate) and prices each chain, stopping if the rate looks implausible compared to the previous published rate.
4. Builds a customer-facing catalogue, an internal stock list/CSV, and a short announcement message that includes only changes such as new items, back in stock, last few, and sold out.
5. Reads the customer list from Google Sheets (or uses demo customers), filters out opted-out/invalid/duplicate numbers, enforces a broadcast cap, and prepares one WhatsApp message per recipient.
6. Sends the draft announcement to the owner on WhatsApp via Twilio with an approval link, then broadcasts the approved message to customers (or outputs a preview when sending is disabled).
7. If live mode is enabled, writes today’s price, rate, quantity, and timestamp back to the Google Sheets Stock tab so the next run can detect changes.

## Setup
1. Add Twilio credentials in n8n and set your Twilio WhatsApp sender number plus the owner’s WhatsApp number in the config so the approval request and broadcasts can be delivered.
2. Create a Google Sheet with “Stock” and “Customers” tabs (matching the expected columns) and set the Sheet ID and tab names in the config, then connect Google Sheets OAuth on the Google Sheets nodes.
3. Create a goldapi.io API key and enter it in the config along with your target currency to fetch the daily 24k gold rate.
4. Review and tailor pricing inputs in the config (PURITY table, STYLES making charges, margin, rounding, LOW_STOCK_AT, BROADCAST_CAP, and APPROVAL_WAIT_HOURS).
5. Start in preview/test by keeping TEST_RUN enabled (optionally set TEST_WHATSAPP to redirect sends), then switch to live by setting TEST_RUN to false once you are ready to send and write updates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
