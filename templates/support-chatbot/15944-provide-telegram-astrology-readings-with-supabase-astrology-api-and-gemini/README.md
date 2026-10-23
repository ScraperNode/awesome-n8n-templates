# 💬 Provide Telegram astrology readings with Supabase, Astrology API and Gemini

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow powers a Telegram astrology bot that manages chat sessions in Supabase, calculates natal or synastry charts via AstrologyAPI using location and timezone lookups, and uses Google Gemini (via an n8n AI Agent) plus reference text from Google Drive to craft responses back to Telegram.

## How it works
1. Receives incoming Telegram messages and callback queries from users.
2. Looks up the user’s session in Supabase by chat ID and routes the conversation through a state machine to collect either natal or synastry birth details.
3. Inserts or updates the session state and collected inputs in Supabase, and sends the next prompt/status message back to the user in Telegram.
4. When enough birth data is provided, parses the intake text, geocodes the city with OpenStreetMap Nominatim, and fetches a timezone offset from the GeoNames Timezone API.
5. Calls AstrologyAPI (western_horoscope or synastry_horoscope) with the computed coordinates and timezone to generate chart data.
6. Downloads a JSON reference file from Google Drive and merges it with the live chart output to build an analysis context.
7. Sends the user prompt plus context to a Google Gemini chat model through an AI Agent with memory, logs the reading metadata to Supabase, and posts the final formatted response to Telegram.

## Setup
1. Add Telegram bot credentials and set the bot webhook in n8n so Telegram can deliver updates to the Telegram Trigger.
2. Add Supabase credentials and create the required tables/fields (sessions with chat_id, state, mode, p1_data, p2_data; and astrology_readings for logging).
3. Add HTTP Basic Auth credentials for AstrologyAPI and confirm the endpoint URLs match your AstrologyAPI plan (western_horoscope and synastry_horoscope).
4. Provide a valid GeoNames username in the timezone request, and ensure outbound HTTP access to OpenStreetMap Nominatim and GeoNames from your n8n instance.
5. Add Google Drive OAuth credentials and update the Google Drive file ID for the reference JSON (synastry.json) if you use a different file.
6. Add Google Gemini (PaLM) API credentials for the chat model used by the AI Agent.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Supabase, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
