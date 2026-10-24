# 🔬 Extract business card contacts from LINE with Google Gemini and Notion

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives image messages from LINE, downloads the photo, uses Google Gemini to detect and extract business card details, and then saves the contact to a Notion CRM database before replying to the sender in LINE.

## How it works
1. Receives a POST request from the LINE Messaging API webhook when a user sends a message.
2. Extracts the message type, image message ID, reply token, and LINE user ID from the webhook payload.
3. If the message is an image, downloads the image content from the LINE data API and converts it to Base64.
4. Sends the image to Google Gemini (Generative Language API) to determine whether it is a business card and to extract name, company, position, phone, and email as JSON.
5. Parses Gemini’s JSON response and branches based on whether the image is flagged as a business card.
6. If it is a business card, creates a new page in a Notion CRM database with the extracted fields and pushes a confirmation message to the user in LINE.
7. If it is not a business card, pushes a LINE message asking the user to resend a clearer business card photo.

## Setup
1. Create a LINE Messaging API channel, enable webhooks, and add the n8n webhook URL from the LINE webhook trigger as your channel’s webhook URL.
2. In n8n, create an HTTP Header Auth credential for LINE (Authorization: Bearer <Channel Access Token>) and select it in the LINE image download and LINE push message requests.
3. Add a Google Gemini / PaLM (Google AI Studio) API credential for the Generative Language API used to classify and extract the business card fields.
4. Connect a Notion API credential and select your target CRM database ID, ensuring it has properties for Company, Position, Phone, and Email (and a title for the contact name).

## 🔗 Nodes Used

HTTP Request, Webhook, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
