# 💬 Quote freight shipments via WhatsApp with Google Gemini, HighLevel, and Warp

> ⚡ **90 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/kO4LgKT6oME?si=VpUEz2LKuxMujrUp
This workflow receives WhatsApp messages, checks the sender in HighLevel, and uses Google Gemini with Redis chat memory to collect shipment details, then requests an LTL quote from the Warp API, applies a commission, and replies with either a conversational prompt or a final freight quote.

## How it works
1. Receives an incoming WhatsApp message and only continues when the text body is not empty.
2. Looks up the sender’s phone number in HighLevel and stops contacts marked as Do Not Disturb from being processed further.
3. Uses a Google Gemini-powered agent with Redis chat memory to ask for missing contact and freight details in a fixed order, optionally creating the HighLevel contact or marking the lead as DND when the user opts out.
4. Parses the agent’s structured JSON output and checks whether the required shipment data collection is complete.
5. If data is incomplete, sends the agent’s conversational reply back to the user via WhatsApp.
6. If data is complete, posts the shipment details to the Warp LTL quote API, adds a configured commission percentage to the returned price, and sends the finalized quote back to the user via WhatsApp.

## Setup
1. Connect WhatsApp credentials for both the WhatsApp Trigger and WhatsApp “send message” actions, and configure the webhook in Meta/WhatsApp so inbound messages reach this workflow.
2. Add a HighLevel OAuth2 credential and confirm your HighLevel account has permission to search contacts, create contacts, and update the DND field.
3. Add a Google Gemini (PaLM) API credential and a Redis credential for chat memory, and ensure Redis is reachable from your n8n instance.
4. Add an HTTP Header Auth credential for the Warp API and verify the quote endpoint URL, headers, and request body fields match your Warp account requirements.
5. Adjust the commission percentage value (and any quoting assumptions like weight per pallet) to match your pricing policy.

## 🔗 Nodes Used

HTTP Request, HighLevel, WhatsApp Business Cloud, AI Agent, Redis Chat Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
