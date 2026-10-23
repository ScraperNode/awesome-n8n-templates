# 💬 Qualify real estate WhatsApp leads with Gemini, Airtable and Google Calendar

> ⚡ **101 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
An AI-powered WhatsApp assistant for real estate teams. Answers property questions 
from a live Airtable database, qualifies leads as hot, warm, or cold, checks 
calendar availability before booking viewings, and escalates to a human agent 
when a lead is ready to move.

## How it works
1. WhatsApp Trigger receives a text or voice message from the customer
2. The message is validated and routed by type, text goes straight through, voice notes go to transcription first
3. Voice notes are downloaded and transcribed using Google Gemini before reaching the agent
4. The AI agent processes the message, using Airtable to look up real property data and Google Calendar to check availability
5. A structured output parser returns the reply along with the lead status, hot, warm, or cold, and whether escalation is needed
6. The reply is sent back to the customer and the lead is logged to Google Sheets
7. If the lead is hot or needs a human, the agent is notified, with duplicate alerts prevented. If the AI agent fails, the customer still gets a fallback reply and the developer is alerted separately

## Setup
1. Add your WhatsApp Business Cloud API credentials to the WhatsApp Trigger, Send WhatsApp Reply, Notify Agent, and Send Unsupported Notice nodes
2. Add your Google Gemini API credentials to the Gemini Chat Model and Analyze Audio nodes
3. Connect your Airtable account and select your Properties base and table in the search_properties tool
4. Connect Google Calendar and select your calendar in check_availability and book_appointment
5. Connect Google Sheets and select or create a Leads sheet in Log Lead to Sheet
6. Replace the placeholder phone numbers in Notify Agent and Notify Developer with your own

## Requirements
- WhatsApp Business Cloud API access
- Google Gemini API key
- Airtable base with a Properties table
- Google Calendar account
- Google Sheets account

## Customization
- Update the knowledge base section of the system prompt to match your own region or business rules
- Adjust business hours and viewing duration inside the calendar tool descriptions
- Swap Airtable for a different database if preferred, keeping the same tool description logic

## Additional info
Session memory is in-memory and resets if the n8n instance restarts. For production use at scale, consider a persistent memory store like Redis.

## 🔗 Nodes Used

Google Sheets, HTTP Request, WhatsApp Business Cloud, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
