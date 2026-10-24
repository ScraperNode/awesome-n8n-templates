# 🎣 Score leads and send WhatsApp proposals with Gemini, HighLevel and Apify

> ⚡ **119 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Youtube Video Explanation: https://youtu.be/A9IURUQlvQs?si=l5USqTcSmCEBEORP

This workflow receives new leads via webhook, enriches them with Apify Google AI Mode, scores them with Google Gemini, and then updates HighLevel contacts and opportunities while sending WhatsApp messages; it also handles WhatsApp support chats with a Gemini-powered agent, Redis memory, and Telegram notifications.

## How it works
1. Receives a new lead via a webhook and normalizes core fields like name, email, phone, and contact ID.
2. Uses Apify (Google AI Mode search actor) to generate a public professional background overview for the lead based on their name and email.
3. Sends the enriched lead profile to Google Gemini to produce a structured lead score, rationale, recommendation, and next steps.
4. Routes the lead based on score thresholds, then upserts the contact in HighLevel, creates an opportunity, sends a WhatsApp template message, and updates the opportunity stage/pipeline details.
5. Triggers on incoming WhatsApp messages, validates the sender, and fetches the related HighLevel contact and opportunities for context.
6. Uses a Google Gemini customer service agent with Redis chat history to answer the message, optionally save requirements in HighLevel notes, update/close the opportunity, and notify the team via Telegram.
7. Sends the agent’s response back to the user in WhatsApp.

## Setup
1. Create and connect credentials for Apify, Google Gemini (PaLM/Vertex API connection), HighLevel (GoHighLevel) OAuth2, WhatsApp Business (send + trigger), Redis, and Telegram.
2. Configure the “newlead” webhook URL in your lead source to send POST payloads containing at least first_name/full_name, email, phone, and contact_id.
3. In HighLevel, create the custom fields used for lead_score, score_breakdown, recommendation, and next_steps, then paste their field IDs plus the correct pipelineId/stageId values into the HighLevel nodes/tools.
4. In WhatsApp Business, set the correct phoneNumberId and approved template name (currently “hvac|en”), and ensure the recipient phone format matches your WhatsApp account requirements.
5. Set the Telegram chatId in the Telegram message step, and confirm Redis is reachable with an appropriate TTL/session key strategy for your expected conversation volume.

## Additional info
Youtube Video Explanation: https://youtu.be/A9IURUQlvQs?si=l5USqTcSmCEBEORP

## 🔗 Nodes Used

Webhook, HighLevel, WhatsApp Business Cloud, AI Agent, Redis Chat Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
