# 💬 Run a WhatsApp sales chatbot with Google Gemini, HubSpot, Sheets and Docs

> ⚡ **425 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow turns incoming WhatsApp messages into AI-assisted sales replies using Google Gemini, while syncing contacts with HubSpot and pulling product and company information from Google Sheets and Google Docs, then logging the conversation back to Google Sheets.

Watch the full step-by-step video: https://www.youtube.com/watch?v=AlxGbatqb_A

## How it works
1. Triggers when a new WhatsApp message is received via the WhatsApp Business Cloud API.
2. Filters events to only process updates that contain inbound message content.
3. Uses a per-contact memory (keyed by the WhatsApp ID) and Google Gemini to generate a sales reply, calling HubSpot, Google Sheets, and Google Docs as needed.
4. Searches for the sender in HubSpot and creates or updates the contact record with any details collected during the chat.
5. Retrieves matching product information from a Google Sheets product catalog and policies/FAQs from a Google Docs company profile to ground the response.
6. Appends the customer message and the AI-generated reply to a Google Sheets chat log.
7. Sends the final reply back to the customer on WhatsApp.

## Setup
1. Connect WhatsApp Business Cloud API credentials for both the WhatsApp trigger and the WhatsApp send action, and configure your Meta webhook subscription to send message events to the workflow’s webhook URL.
2. Add a Google Gemini (PaLM / AI Studio) API key credential for the chat model.
3. Add a HubSpot OAuth2 credential with permission to search and create/update CRM contacts.
4. Add Google Sheets OAuth2 credentials and set the spreadsheet document IDs and sheet names for the product catalog and chat log.
5. Add Google Docs OAuth2 credentials and replace the placeholder document URL with your company profile/FAQ document.

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Filter, AI Agent, Simple Memory, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
