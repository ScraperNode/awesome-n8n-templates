# 🧾 Log LINE receipt photos to Google Sheets using OpenAI

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives receipt photos from LINE via webhook, uses OpenAI to extract structured expense details, and appends or updates a Google Sheets expense log using the LINE message ID to prevent duplicates, then replies in LINE with a success or error message.

## How it works
1. Receives a webhook request from the LINE Messaging API and checks that the event contains an image message.
2. If the message is not an image, replies to the user in LINE asking for a receipt photo.
3. Downloads the receipt image from the LINE content API and converts it to Base64.
4. Sends the image to OpenAI Chat Completions with a strict JSON schema to extract date, store, category, amount, currency, and memo.
5. Validates and sanitizes the extracted fields (date and currency formats, allowed categories, non-negative amount, and formula-safe text) and uses the LINE message ID as a receipt identifier.
6. Appends or updates the expense row in Google Sheets using “Receipt ID” as the matching key, then replies in LINE with the logged details or a processing error if any step fails.

## Setup
1. Create or configure a LINE Official Account and Messaging API channel, then register the n8n production webhook URL in LINE Developers.
2. Add a LINE channel access token as an HTTP Header Auth credential (Authorization: Bearer <token>) and select it on the LINE download and reply requests.
3. Add an OpenAI API credential and ensure the selected model in the workflow settings supports image inputs.
4. Add a Google Sheets OAuth credential, set your spreadsheet ID and sheet name in the workflow settings, and create the columns: Receipt ID, Date, Store, Category, Amount, Currency, Memo.
5. Update the workflow settings for default currency and category list to match your bookkeeping needs, and test with a clear receipt photo before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Convert to/from binary data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
