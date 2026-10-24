# 🎣 Qualify WhatsApp real estate leads with Gemini and Supabase

> ⚡ **250 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow triggers on incoming WhatsApp messages, uses Google Gemini to extract and score real estate lead details, stores each lead in Supabase, and sends a WhatsApp alert to the agent only for high-intent inquiries based on configurable score thresholds.

## How it works
1. Triggers when a new WhatsApp message is received via the WhatsApp Business Cloud API.
2. Pulls the sender name, phone number, and message text and applies your configured scoring thresholds and agent contact number.
3. Sends the message to Google Gemini to extract structured lead details (budget range, property type, location preference, timeline, and intent score).
4. Inserts the extracted lead data into a Supabase `leads` table for tracking.
5. Routes the lead based on the intent score and sends a formatted WhatsApp message to the agent for high-intent leads.
6. Leaves medium- and low-intent leads logged in Supabase without sending an agent alert.

## Setup
1. Connect WhatsApp Business Cloud API credentials for both the incoming-message trigger and the WhatsApp send action, and activate the workflow to generate the webhook for your WhatsApp app.
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model.
3. Add a Supabase API credential and create a `leads` table with the required columns (name, phone, budget_range, property_type, location_preference, timeline, intent_score, status, created_at).
4. Replace `REPLACE_WITH_AGENT_WHATSAPP_NUMBER` and set the score thresholds in the configuration values, and fill in your WhatsApp `phoneNumberId` used to send messages.

## 🔗 Nodes Used

Supabase, WhatsApp Business Cloud, Basic LLM Chain, Structured Output Parser, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
