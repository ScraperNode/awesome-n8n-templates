# 💬 Book phone appointments with ElevenLabs, Exotel, and Cal.com

> ⚡ **37 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes webhooks that let an ElevenLabs/Exotel voice agent check availability and book appointments in Cal.com, returning suggested times or booking confirmations as JSON responses.

## How it works
1. Receives a POST request on the /appointment-webhook endpoint with a tool name and payload from the calling assistant.
2. If the request asks to check availability, it queries the Cal.com Slots API for the provided date range, event type, and Asia/Kolkata time zone.
3. Formats the returned slot times into up to four suggested start times and responds with a JSON payload indicating whether any slots are available.
4. If the request asks to book an appointment, it creates a booking in Cal.com for the requested start time and attendee details (name, email, and phone).
5. Returns a JSON success response with the booking ID and start time, or a friendly error message if booking fails or the tool name is unrecognized.
6. Separately, responds to the /exotel-stream webhook with a WebSocket URL that connects Exotel to an ElevenLabs Conversational AI agent.

## Setup
1. Create a Cal.com API key, add it to n8n credentials (HTTP Header Auth), and ensure the Cal.com nodes send the required cal-api-version header.
2. Update the Cal.com eventTypeId values (and any required query/body fields) to match the event type you want to offer for scheduling.
3. Copy the production webhook URLs for /appointment-webhook and /exotel-stream and configure them in ElevenLabs tool definitions and your Exotel streaming setup.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
