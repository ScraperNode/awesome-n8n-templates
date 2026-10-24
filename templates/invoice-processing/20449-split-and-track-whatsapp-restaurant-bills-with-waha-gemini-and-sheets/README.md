# 🧾 Split and track WhatsApp restaurant bills with WAHA, Gemini and Sheets

> ⚡ **56 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs a WhatsApp bill-splitting bot using WAHA, Google Gemini for receipt OCR, OpenRouter for funny bill and reminder messages, and Google Sheets to track sessions, contacts, bills, payment status, and automated daily reminders.

## How it works
1. Receives an incoming WhatsApp message via a WAHA webhook and ignores messages from numbers that are not on the whitelist.
2. If the message includes receipt media, it downloads the image via WAHA, extracts items/tax/total with Google Gemini, asks the group to reply with “Name: item1, item2”, and stores the OCR result in a Google Sheets Session tab.
3. If a follow-up message matches the “Name: …” assignment format, it loads the latest saved OCR session and contacts from Google Sheets, matches item keywords to receipt items, and calculates each person’s share including proportional tax.
4. For each person, it uses OpenRouter to generate a short humorous bill message, sends it to their WhatsApp number via WAHA, and logs the unpaid bill entry to a Google Sheets Bills tab.
5. If a message contains a payment confirmation (e.g., “paid”/“done”), it looks up the newest matching unpaid bill in Google Sheets by WhatsApp number (or name fallback) and updates the bill status to paid.
6. Every day at 7 PM, it pulls unpaid bills from Google Sheets, determines whether a gentle/firm/savage reminder is needed (with a same-day anti-spam guard), generates the reminder with OpenRouter, sends it via WAHA, and updates lastReminderSent.

## Setup
1. Add WAHA API credentials and configure your WAHA instance to forward WhatsApp messages to the workflow’s WAHA Trigger webhook URL.
2. Add Google Sheets OAuth credentials and replace the spreadsheet document ID in every Google Sheets node, ensuring your spreadsheet includes Session, Contacts, and Bills tabs with the expected columns.
3. Add a Google Gemini (Google PaLM) API credential for the receipt OCR step.
4. Add an OpenRouter API credential for generating bill messages and reminder messages.
5. Update the whitelist values to the WhatsApp JIDs allowed to use the bot and adjust the currency code/symbol (defaults to IDR/Rp) if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
