# 🧾 Capture LINE receipt expenses with Gemini, Google Drive and Google Sheets

> ⚡ **15 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives receipt images from LINE, uses Google Gemini to extract structured expense data, verifies Japanese invoice T-numbers via the NTA Web-API, archives the image in Google Drive, logs the expense to Google Sheets, and replies to the user in LINE.

## How it works
1. Receives a POST webhook from LINE and extracts the message type, message ID, reply token, and user ID.
2. If the incoming event is not an image, sends a LINE reply instructing the user to send a receipt photo.
3. For image messages, downloads the image from LINE, uploads it to Google Drive, and converts it to Base64.
4. Sends the image to Google Gemini to decide whether it is a receipt and to extract receipt date, vendor, totals, tax, category, description, and any T-number.
5. If Gemini indicates the image is not a receipt, replies in LINE asking the user to retake and resend the photo.
6. If a valid-looking T-number is present, calls the NTA invoice validity endpoint for the receipt date and combines the result with the extracted receipt data and Google Drive file link.
7. Appends the final expense record to Google Sheets and sends a confirmation message back to the user in LINE including the invoice validity status.

## Setup
1. Create LINE Messaging API credentials (Channel Access Token) and configure HTTP header authentication for the LINE download and reply requests.
2. Add a Google Gemini API key (HTTP header auth) and update the Gemini endpoint/model if needed.
3. Connect Google Drive and Google Sheets credentials, then set the target Drive folder ID, Google Sheets document ID, and sheet name.
4. Register for the NTA Invoice System Web-API, replace YOUR_NTA_APP_ID in the NTA request URL, and ensure the API is accessible from your n8n instance.
5. Copy the n8n production webhook URL into the LINE Developers console for your bot’s webhook configuration.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
