# 💬 Handle WhatsApp booking requests with OpenAI and Airtable

> ⚡ **24 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow handles WhatsApp booking requests using OpenAI and Airtable. It supports text and voice messages, checks availability, creates, confirms and cancels bookings, answers FAQs from business information, and escalates conversations to human support when needed.

## How it works
1. Receives incoming WhatsApp webhook events and returns the verification challenge for subscription requests, or acknowledges message events with an EVENT_RECEIVED response.
2. Ignores events that don’t contain an incoming message, then looks up the sender’s phone number in an Airtable Conversations table to see if the chat is in human mode.
3. If the conversation is in human mode, the workflow stops without sending an automated reply.
4. If the message is a voice note, it fetches the media URL from WhatsApp, downloads the audio file via HTTP, and uses OpenAI to transcribe it to text.
5. If the message is text, it extracts the message body and phone number directly from the webhook payload.
6. Sends the customer message (and phone number) to an OpenAI-powered agent that can query Airtable for availability and business info, create pending bookings, confirm bookings, cancel bookings, or escalate to human support.
7. If the agent returns a reply and it isn’t marked as “no response needed,” the workflow sends the response back to the customer via WhatsApp.

## Setup
1. Create and connect a WhatsApp Business Cloud API account in n8n, set your Phone Number ID in the WhatsApp send node, and configure the workflow webhook URL in your WhatsApp app settings.
2. Add OpenAI API credentials for both the chat model (agent reasoning) and the audio transcription node.
3. Create an Airtable base with Bookings, Business Info, and Conversations tables (including an autonumber booking_id field and the expected column names), then connect your Airtable credential and replace the placeholder base/table IDs in all Airtable nodes.
4. Add an HTTP Header Auth credential used to download WhatsApp media, and set the required authorization header value for your WhatsApp media requests.

## Requirements
- WhatsApp Business Cloud API account and phone number
- OpenAI API key with billing enabled (chat + Whisper transcription)
- Airtable account with an editable base

## Customization
- Swap the "2"/"3" confirmation codes for interactive WhatsApp buttons if your setup supports them
- Add a payment gateway (Stripe, PayPal) instead of manual payment-proof verification
- Extend the Business Info table for multiple languages or locations

## Additional info
Built for single-location, time-slot based businesses (studios, clinics, courts, rentals, salons). For multi-location use, add a "location" field to each Airtable table and update the agent's system prompt.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
