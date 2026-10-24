# 🤝 Manage Google Contacts from Telegram using OpenAI GPT-4o-mini

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow listens for Telegram bot messages (text or photos), uses OpenAI to extract and classify contact requests, and then looks up, creates, or updates entries in Google Contacts before replying with a confirmation message in Telegram.

## How it works
1. Triggers when your Telegram bot receives a new message and captures the chat ID, text/caption, and any attached photo.
2. If a photo is included, it downloads the image and sends it to OpenAI Vision to extract contact details and the intended action as a JSON array.
3. If the message is text-only, it sends the text to OpenAI to classify whether it’s a contact request and to extract contact fields as a JSON array.
4. Loops through each extracted contact item, skipping non-contact chatter and routing parsing failures to an error reply in Telegram.
5. Searches Google Contacts (People API) for an existing match using email first, then name, then phone.
6. For lookup requests, formats the top matching Google Contacts results and sends them back to Telegram.
7. For create or update requests, creates a new Google Contact or merges updates into the first match, then sends a success confirmation to Telegram.

## Setup
1. Create a Telegram bot with @BotFather and add your Telegram bot token as a Telegram credential in n8n.
2. Add an OpenAI API credential (used to call the Chat Completions endpoint for both text and vision extraction).
3. Add a Google Contacts OAuth2 credential with the scope `https://www.googleapis.com/auth/contacts` so the workflow can search, create, and update contacts.
4. Remove/disable pinned sample data on the Telegram trigger and the OpenAI HTTP request nodes before activating.
5. Ensure no other active workflow uses the same Telegram bot webhook, since Telegram supports only one webhook per bot token.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
