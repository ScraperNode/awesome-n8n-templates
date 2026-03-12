# 🎣 Auto-respond and classify WhatsApp leads with Ollama AI and log to Google Sheets

> ⚡ **326 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## **Who is this for**

This workflow is built for sales teams, agencies, and small businesses that receive inbound leads via WhatsApp and want to automate their first response, lead qualification, and CRM logging — without missing a single message.

## **What this workflow does**

It listens for incoming WhatsApp messages, uses an AI agent to classify each message by intent (hot lead, warm lead, support, or needs qualification), sends a tailored auto-reply, logs every interaction to Google Sheets, and automatically books Google Calendar meetings with Meet links for qualified leads.

## **How it works**


- WhatsApp Trigger receives incoming messages and filters out bot/status messages to prevent loops.
- AI Agent (powered by Ollama or any connected LLM) classifies the message into one of four intent categories with confidence scoring.
- Smart Router directs each intent down a dedicated path.
- Hot & Warm Leads receive an instant reply, get logged to Google Sheets, have a Google Calendar meeting auto-booked, and receive the Meet link via WhatsApp.
- Support requests are logged and receive a ticket confirmation.
- Vague or incomplete messages trigger a smart follow-up question. Conversation memory ensures the AI re-classifies correctly when the user replies with more context.

## **Setup steps**


- Connect your WhatsApp Business API credentials (Meta Cloud API).
- Connect Google Sheets OAuth and set your spreadsheet ID in all three logging nodes.
- Connect Google Calendar OAuth and select your calendar in both booking nodes.
- Configure your LLM (Ollama endpoint, OpenAI, or any supported model).
- Update the BOT_NUMBERS array in the "Parse WhatsApp Message" node to match your WhatsApp Business phone number ID.
- Update the phoneNumberId in all WhatsApp Send nodes to your number.
- Send a test message and verify the full flow.

## **Requirements**


- WhatsApp Business API (Meta Cloud API) access
- Google Sheets and Google Calendar accounts with OAuth credentials
- An LLM endpoint (Ollama, OpenAI, or any n8n-supported model)
- n8n instance (cloud or self-hosted)

## **How to customize**


- Swap the AI model in the Ollama Chat Model node for OpenAI, Anthropic, or any supported LLM.
- Edit the auto-reply templates in each Reply code node to match your brand voice.
- Adjust meeting booking times (default: Hot = 2 hours out, Warm = 4 hours out).
- Add Slack or email notifications by branching from the Google Sheets logging nodes.
- Modify the AI classification prompt to add custom intent categories for your business.

## 🔗 Nodes Used

Google Sheets, Google Calendar, WhatsApp Business Cloud, AI Agent, Ollama Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
