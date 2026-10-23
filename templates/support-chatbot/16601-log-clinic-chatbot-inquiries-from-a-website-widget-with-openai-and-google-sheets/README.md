# 💬 Log clinic chatbot inquiries from a website widget with OpenAI and Google Sheets

> ⚡ **78 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives website chatbot messages via a webhook, uses OpenAI to generate an AI receptionist reply with session-based context, extracts structured inquiry details, and appends or updates a single visitor row in Google Sheets before returning a clean JSON reply to the widget.

## How it works
1. Receives a POST request from the website chat widget containing the visitor message, sessionId, and timestamp.
2. Uses an OpenAI-powered receptionist agent with per-session memory to generate a contextual reply and a hidden JSON block of extracted inquiry details.
3. Strips the hidden data block from the reply, parses the JSON into fields (name, contact, intent, appointment details, summary, status), and flags whether any meaningful data was captured.
4. If collectible data exists, appends or updates a Google Sheets row matched on Session ID with the latest extracted details and a Last Updated timestamp.
5. Returns the cleaned reply to the chat widget as a JSON response with CORS headers.

## Setup
1. Add an OpenAI API credential for the OpenAI chat model used by the receptionist agent.
2. Add a Google Sheets OAuth2 credential and set the target spreadsheet document ID and sheet/tab name used for logging.
3. Create the Google Sheet with column headers that match the mapped fields (for example: Session ID, Last Updated, Name, Contact, Intent, Service Interested, Appointment Date/Time, Doctor Preference, Reason for Visit, Conversation Summary, Status).
4. Activate the workflow, copy the webhook URL for the chat endpoint, and configure your website widget to POST messages to it (including message and sessionId).

## 🔗 Nodes Used

Google Sheets, Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
