# 🎣 Score leads and send WhatsApp proposals with Gemini, HighLevel and Redis

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures new leads via webhook, enriches them with Apify-powered Google AI search, scores them using Google Gemini, and updates HighLevel CRM while sending WhatsApp template messages; it also handles inbound WhatsApp support with a Gemini-driven agent that uses Redis memory, updates HighLevel, and notifies a team via Telegram.

## How it works
1. Receives new lead details through an HTTP webhook.
2. Normalizes the lead fields and uses Apify (Google AI Mode search) to fetch a public professional background overview for the lead.
3. Sends the enriched lead context to Google Gemini to produce a structured lead score, rationale, recommendation, and next steps.
4. Routes the lead based on the score threshold and upserts the contact in HighLevel with the AI scoring details stored in custom fields.
5. Creates a HighLevel opportunity, sends a WhatsApp template message to the lead, and updates the opportunity’s pipeline/stage fields.
6. Triggers on incoming WhatsApp messages, looks up the sender in HighLevel, fetches related opportunities, and hands the conversation to a Google Gemini agent with Redis chat history.
7. Uses the agent’s decisions to save requirement notes and update/close the HighLevel opportunity, sends an internal Telegram notification, and replies to the customer via WhatsApp.

## Setup
1. Create and connect credentials for Google Gemini (Google PaLM API), HighLevel OAuth2, WhatsApp Business API (send + trigger), Apify API, Redis, and Telegram.
2. Configure the “newlead” webhook URL in your lead source so it sends first_name, last_name/full_name, email, phone, and contact_id in the request body.
3. In HighLevel, create the needed custom fields for lead_score, score_breakdown, recommendation, and next_steps, then paste their field IDs into the contact upsert steps.
4. Set your HighLevel pipelineId and stageId values in the opportunity create/update steps (including “Proposal Sent” and “Closed” stages).
5. In WhatsApp, set the correct phoneNumberId and template name (and ensure the template is approved), and in Telegram replace the placeholder chatId with your target chat or user ID.

## 🔗 Nodes Used

Webhook, HighLevel, WhatsApp Business Cloud, AI Agent, Redis Chat Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
