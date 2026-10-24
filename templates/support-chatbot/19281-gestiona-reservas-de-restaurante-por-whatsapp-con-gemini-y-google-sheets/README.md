# 💬 Gestiona reservas de restaurante por WhatsApp con Gemini y Google Sheets

> ⚡ **149 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow handles restaurant reservations over WhatsApp (text or voice) using Google Gemini, storing and managing bookings in Google Sheets and Google Calendar, and sending WhatsApp confirmations to the customer plus internal notifications to the restaurant.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Routes the request based on message type, extracting text directly or downloading the voice note and transcribing it with Google Gemini.
3. Sends the normalized customer message to a Google Gemini-powered agent that keeps per-customer conversation context by phone number.
4. When the customer asks about dishes or prices, the agent reads the menu from a Google Sheets “Menu” tab and replies in Spanish.
5. When the customer creates, updates, or cancels a booking, the agent searches and writes reservation records in a Google Sheets “Reservas” tab and creates/updates/deletes the matching event in Google Calendar.
6. The agent notifies the restaurant owner via WhatsApp with the reservation details for every new booking, change, or cancellation, and then replies to the customer via WhatsApp.

## Setup
1. Connect credentials for WhatsApp (Trigger/OAuth and WhatsApp Cloud API), Google Gemini (PaLM API), Google Sheets OAuth2, and Google Calendar OAuth2.
2. Create a Google Sheets spreadsheet with tabs named “Menu” and “Reservas” and match the required column headers (including accents) used by the workflow.
3. Select your target Google Sheets document and Google Calendar in the workflow’s Google Sheets and Google Calendar tool nodes.
4. Set the restaurant/owner recipient phone number (with country prefix) in the internal WhatsApp notification step, and ensure your WhatsApp phone number ID is available in incoming message metadata.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Simple Memory, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
