# 💬 Handle real estate SMS inquiries with Twilio, Google Sheets, Gemini, and Calendar

> ⚡ **59 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Youtube Explanation: https://youtu.be/e_07nGFmVs0

This workflow replies to inbound Twilio SMS messages with property details and viewing scheduling help by looking up leads and properties in Google Sheets, using a Google Gemini agent with Redis chat memory, and checking/booking appointments in Google Calendar.

## How it works
1. Receives an inbound SMS via Twilio.
2. Looks up the sender’s mobile number in a Google Sheets “leads_info” spreadsheet and appends/updates the lead record if it does not exist, extracting a 4-digit property code from the message when available.
3. Splits any saved semicolon-separated property IDs into individual lookups, fetches matching property rows from a Google Sheets “Property details” spreadsheet, and compiles a summary of found vs. missing property codes.
4. Sends the user message, lead context (saved property IDs and email), current time, and the property-lookup results to a Google Gemini chat agent with Redis-backed conversation memory.
5. Lets the agent optionally use tools to fetch additional property info from Google Sheets, update the lead’s email or interested property IDs in Google Sheets, and check or create viewing events in Google Calendar.
6. Sends the agent’s final response back to the user as a Twilio SMS reply.

## Setup
1. Configure Twilio credentials in n8n and point your Twilio Messaging webhook for inbound messages to the workflow’s Twilio Trigger URL.
2. Provide Google Sheets service account credentials and ensure the “leads_info” sheet includes at least mobile_number, interested_property_id, and (optionally) email and name columns, then update the document IDs/sheet tabs if yours differ.
3. Provide Google Sheets access to the “Property details” spreadsheet and ensure it contains a property_code field (and any descriptive fields you want returned, such as name, location, and summary).
4. Add a Google Gemini (PaLM) API credential for the chat model used by the agent.
5. Add Google Calendar OAuth credentials, set the correct property calendar mapping (calendar email per property code) and the target calendar used for event creation.
6. Configure a Redis credential/connection for persistent chat memory keyed by the user’s mobile number.

## 🔗 Nodes Used

Google Sheets, Twilio, AI Agent, Redis Chat Memory, Twilio Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
