# 🤝 Send shipping emails with tracking from Google Sheets via ShipStation and Gmail

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs twice on weekdays (or manually) to read shipping-ready orders from a Google Sheets “Orders” tab, optionally fetch tracking details from ShipStation, and send a tracking email via Gmail, then records the sent timestamp back in the sheet to prevent duplicates.

## How it works
1. Runs on a weekday schedule at 08:30 and 16:30 or starts manually.
2. Loads workflow configuration and reads the Orders tab from Google Sheets (or uses built-in demo orders if the sheet isn’t connected).
3. Filters for rows with Stage set to “Shipped” that have a confirmation timestamp and have not had a shipping email recorded yet.
4. For each eligible order, uses the tracking number on the sheet if present, otherwise queries the ShipStation API for carrier, tracking number, and ship date when enabled.
5. Stops the order if no tracking number is found, and separately surfaces any rows marked “Shipped” without a confirmation timestamp.
6. Composes a shipping and installation email (including tracking details and installation info derived from product rules) and sends it via Gmail in test/live modes.
7. Updates the Google Sheet row with carrier, tracking, ship date, and a “Ship email sent” timestamp so future runs skip it.

## Setup
1. Add Google Sheets credentials and set the spreadsheet ID and tab name in the config so the workflow can read and update your Orders board.
2. Add Gmail credentials and set the From name and optional Reply-To/test email values in the config.
3. Ensure your Google Sheet includes the expected columns (for example Stage, Confirmation sent, Carrier, Tracking no., Shipped date, and Ship email sent) and that your team marks orders as “Shipped” in the Stage column.
4. (Optional) Add ShipStation API credentials and enable ShipStation in the config to fetch tracking automatically when the sheet row doesn’t include it.
5. Review preview/test/live mode settings in the config (TEST_RUN and TEST_EMAIL) before enabling the schedule.

## Customization
- Part 2 of a 2 parts Shopify, Etsy or Square - Order to Ship Engine

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
