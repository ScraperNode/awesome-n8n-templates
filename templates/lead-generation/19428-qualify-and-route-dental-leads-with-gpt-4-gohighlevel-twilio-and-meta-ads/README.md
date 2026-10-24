# 🎣 Qualify and route dental leads with GPT-4, GoHighLevel, Twilio, and Meta Ads

> ⚡ **39 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures leads from a webhook, Twilio SMS replies, and Meta Lead Ads, then uses OpenAI with a Pinecone knowledge base to qualify and route them into GoHighLevel with automated SMS/email responses, calendar booking, voice-call alerts, follow-up automation, and performance reporting.

## How it works
1. Receives new leads from a webhook endpoint, Twilio SMS reply events, and Meta Lead Ads submissions.
2. Merges all sources, applies workflow configuration, and normalizes the lead fields into a consistent format.
3. Uses an OpenAI-powered agent with conversation memory, Pinecone RAG retrieval, calendar-availability checking, GoHighLevel update actions, and a scoring tool to generate a structured qualification result.
4. Routes the qualified lead by treatment type and creates or updates the contact, pipeline stage, and custom fields in GoHighLevel.
5. Sends an immediate response via Twilio SMS and SMTP email, optionally replies via Facebook Graph API, and logs the interaction to Postgres.
6. If the lead is marked high priority, triggers a Twilio voice call and posts an alert to Slack, and books an appointment in Google Calendar.
7. On a schedule, pulls unresponsive leads from GoHighLevel, uses OpenAI to choose the next follow-up action, and routes the lead into the appropriate follow-up path.
8. On a schedule, queries lead/performance metrics from Postgres, aggregates and formats a dashboard report, then sends it to GoHighLevel via HTTP and by email.

## Setup
1. Configure the lead sources by copying the Webhook URL into your form/landing page, connecting Twilio for the SMS reply trigger, and connecting Meta for the Facebook Lead Ads trigger (select the Page and Lead Form).
2. Add OpenAI API credentials for both chat models and embeddings, and set up a Pinecone credential and index for the practice knowledge base used by the agents.
3. Provide GoHighLevel API access for the HTTP requests that create/update contacts, pipeline stages, custom fields, and for fetching unresponsive leads.
4. Connect Twilio for outbound SMS and voice calls, connect an SMTP account for outbound email, and connect Slack for high-priority notifications.
5. Connect Google Calendar and select the target calendar, and configure Postgres credentials plus the target schema/table(s) for activity logging and performance metric queries.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
