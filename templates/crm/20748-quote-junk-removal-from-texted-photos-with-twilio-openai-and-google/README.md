# 🤝 Quote junk removal from texted photos with Twilio, OpenAI and Google

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Customers text photos of a pile to your Twilio number. OpenAI describes it and matches it to your price list in Google Sheets; the total is added up in code. Big or odd jobs wait for your YES by text. YES plus a day books a Google Calendar hold.

## How it works
1. Receives an inbound SMS/MMS webhook from Twilio (or runs on a 30-minute schedule for follow-ups, or runs manually once to create the spreadsheet).
2. Checks whether the text came from the owner's mobile (set in Your settings), which means an approval reply, or from a customer (photos, a booking reply, or another text), and reads that customer's quotes from Google Sheets.
3. For owner replies, interprets YES/NO/custom price instructions, updates the matching quote row in Google Sheets, and sends SMS updates to the customer and the owner via Twilio.
4. For customer photos, downloads the images from Twilio, optionally saves them to a Google Drive folder, and sends the full photo set to OpenAI Vision to identify items, load size, and any restricted materials.
5. Reads the “Price list” tab from Google Sheets, has OpenAI map the observed items to your load sizes and extra charges, then calculates the final total in code and appends a new quote record to the “Quotes” sheet.
6. Texts the quote to the customer automatically when it meets your rules, or texts the owner for approval when the quote is high, unclear, heavy, or includes not-accepted items.
7. When a customer replies YES with a preferred day/time, creates a hold event in Google Calendar, marks the quote as booked in Google Sheets, and sends confirmation SMS messages to both the customer and the owner.
8. Every 30 minutes, scans Google Sheets to remind the owner about pending approvals, nudge customers once after a configurable delay, and expire quotes past the validity window.

## Setup
1. Create and connect credentials for Twilio, OpenAI, Google Sheets, Google Drive (optional), and Google Calendar.
2. Run the manual “Create my spreadsheet” path once, then edit the “Price list” tab in the new Google Sheets file and copy its spreadsheet ID into the workflow settings.
3. Fill in the workflow settings for your Twilio number (E.164), owner mobile number (E.164), Google Calendar ID, time zone, approval threshold, quote validity, and optional Google Drive folder ID for photo storage.
4. In Twilio, set your phone number’s “A message comes in” webhook to the workflow’s “Text comes in” webhook URL and use HTTP POST.
5. Ensure your Google Calendar is accessible by the connected Google account and matches the configured calendar ID (often your Google account email or a group.calendar.google.com address).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Webhook, Google Drive, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
