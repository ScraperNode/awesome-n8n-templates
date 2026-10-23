# 💬 Reply to WhatsApp leads with Google Gemini and Cal.com booking

> ⚡ **23 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow listens for incoming WhatsApp messages and uses Google Gemini plus optional TinyFish web research to draft concise replies, including offering and booking Cal.com meeting slots when requested, then sends the response back to the same WhatsApp contact.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Checks that the incoming message contains text and ignores non-text messages.
3. Adds booking and context fields (Cal.com link, event type, timezone, sender details, and message text) to the incoming payload.
4. Uses a Google Gemini-powered agent with short-term chat memory to draft a reply, optionally calling TinyFish Search/Web Agent for lead research and Cal.com Slots/Book to propose and confirm meeting times.
5. Sanitizes the generated response to ensure it is never empty and stays within a safe length limit.
6. Sends the final reply back to the original sender via WhatsApp.

## Setup
1. Connect WhatsApp Cloud API credentials for both the WhatsApp Trigger and WhatsApp send action, and ensure your WhatsApp app is configured to deliver message webhooks to n8n.
2. Add a Google Gemini (PaLM) API credential for the chat model used by the agent.
3. Add a Cal.com API key credential and set your Cal.com booking URL, eventTypeId, timezone, and lookahead days in the Booking Config step.
4. (Optional) Add TinyFish credentials if you want the agent to perform web research about people or companies mentioned in chats.

## 🔗 Nodes Used

WhatsApp Business Cloud, AI Agent, Simple Memory, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
