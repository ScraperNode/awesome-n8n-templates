# 💬 Qualify WhatsApp insurance leads with OpenAI, HubSpot, and Slack

> ⚡ **304 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow handles inbound WhatsApp insurance inquiries, uses OpenAI to converse with leads and remember context per phone number, then extracts a qualification decision, score, and summary, upserts qualified leads to HubSpot, and alerts a Slack channel when a lead requests a human.

## How it works
1. Triggers whenever a new WhatsApp message is received via WhatsApp Business Cloud.
2. Uses OpenAI to reply in the lead’s language, collect consent and key qualifying details, and maintain conversation context per phone number.
3. Sends the assistant’s reply back to the lead on WhatsApp.
4. Uses OpenAI again to convert the latest message and reply into structured lead data (qualified flag, 0–100 score, intent, wants-human flag, email, and a one-sentence summary).
5. Upserts the lead as a HubSpot contact with the AI summary and score when the lead is marked qualified.
6. Posts a handover alert to Slack when the lead asks for a human or the conversation indicates a human is needed.

## Setup
1. Connect credentials for WhatsApp Business Cloud, OpenAI, HubSpot, and Slack.
2. Set your WhatsApp Phone Number ID in the WhatsApp send message step and ensure the WhatsApp trigger is subscribed to message updates.
3. Select the Slack channel to receive handover alerts.
4. Review and customize the assistant’s system prompt (persona, consent/STOP handling, and qualifying questions) to match your compliance and sales process.

## Requirements
- WhatsApp Business Cloud account (Meta) with a connected phone number ID
- OpenAI API key (works great with gpt-4o-mini)
- HubSpot account (free tier is fine)
- Slack workspace + a channel for sales alerts
- n8n with the LangChain / AI nodes available (cloud or self-hosted v1.x+)

## Customization
- Swap the CRM: replace the HubSpot node with Salesforce, Pipedrive, or an HTTP Request to a custom REST API
- Edit the persona and qualifying questions in the "AI Insurance Assistant" node to fit any industry (real estate, solar, healthcare, etc.)
- Change the qualification threshold/logic in the "Qualified Lead?" and "Wants a Human?" IF nodes
- Add omnichannel fallback: a Twilio call, SendGrid email, or Calendly booking link off the routing branches
- Route handover to email or a ticketing tool instead of Slack
- Add a Google Sheets / database node to log every conversation for analytics

## Additional info
This template uses natural-language qualification (not button trees) with per-contact memory, so it handles multi-message, multi-day conversations and auto-detects the lead's language. It includes a built-in consent prompt and STOP opt-out for POPIA/GDPR-friendly handling. No credentials are bundled — connect your own WhatsApp, OpenAI, HubSpot and Slack accounts, set your WhatsApp phone number ID on the two WhatsApp nodes, and activate. Each inbound message uses ~1–2 OpenAI calls, so a low-cost model is recommended.

## 🔗 Nodes Used

Slack, HubSpot, WhatsApp Business Cloud, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
