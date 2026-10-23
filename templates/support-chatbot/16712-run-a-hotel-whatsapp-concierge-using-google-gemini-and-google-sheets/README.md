# 💬 Run a hotel WhatsApp concierge using Google Gemini and Google Sheets

> ⚡ **259 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/q2vPN9eub1o?si=lSo4c0kQMNQd_Aad

This workflow acts as a WhatsApp hotel concierge that looks up guest profiles, reservations, and open service requests in Google Sheets, consults a Google Docs amenities guide, and uses Google Gemini with Redis memory to reply and optionally create or update reservations and service requests.

## How it works
1. Triggers when a WhatsApp message is received and continues only if the incoming message contains text.
2. Looks up the guest by WhatsApp number in a Google Sheets “Guest Details” spreadsheet and checks whether Do Not Disturb (DND) is enabled.
3. If the guest is not in DND, fetches the guest’s reservations and any incomplete service requests from Google Sheets.
4. Determines whether the guest is new, currently checked in (based on today’s date between check-in and check-out), and whether any requests are pending, then packages this context for the assistant.
5. Uses Google Gemini with Redis chat memory to generate a WhatsApp-ready reply, calling a Google Docs amenities document when answering policy/pricing/amenity questions.
6. When appropriate, the assistant writes back to Google Sheets to create or update guest profiles, reservations, or service requests, and sends the response back to the guest on WhatsApp.
7. Separately, when a new reservation row is added in the Reservations sheet, it automatically appends or updates a corresponding record in a “Masked Reservations” Google Sheets spreadsheet.

## Setup
1. Connect WhatsApp Cloud API credentials for both the WhatsApp trigger and the WhatsApp send action, and set the correct Phone Number ID.
2. Add Google service account credentials with access to the Guest Details, Reservations, Service Requests, and Masked Reservations spreadsheets, and confirm the sheet IDs/columns match the template.
3. Add a Google Gemini (PaLM) API credential for the chat model used by the AI agent.
4. Add Redis credentials for chat memory storage and ensure the Redis instance is reachable from n8n.
5. Ensure the amenities Google Doc is accessible to the configured Google service account (or replace the document URL with your own).

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Google Sheets Trigger, AI Agent, Redis Chat Memory, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
