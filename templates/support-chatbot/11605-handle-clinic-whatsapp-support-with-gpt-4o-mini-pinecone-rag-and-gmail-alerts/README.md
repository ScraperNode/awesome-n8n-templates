# 💬 Handle clinic WhatsApp support with GPT-4o-mini, Pinecone RAG and Gmail alerts

> ⚡ **401 views** · 💬 [Support Chatbots](../)

## Description

# 🏥 Clinic WhatsApp Customer Service Bot

This workflow automates patient communication for medical clinics using the WhatsApp Business API. It supports appointment booking, rescheduling, service inquiries, follow-ups, and document submissions. The workflow includes AI capabilities, appointment management, human escalation logic, memory storage, and CRM synchronization.

## Good to know

- Supports text, voice notes, images, and document uploads.
- Uses an AI agent powered by GPT-4o-mini with retrieval-augmented generation for accurate answers.
- Includes sentiment and frustration detection to trigger human takeover.
- Conversation history and lead details are stored for context and follow-up.
- Appointment booking includes slot validation to reduce errors and conflicts.

## How it works

- The workflow receives WhatsApp messages through a webhook connection.
- The AI agent processes the message and identifies the intent:
  - 📅 Appointment booking or rescheduling
  - ❓ Service or doctor inquiry
  - 📎 Document submission (e.g., lab results, insurance)
  - 🤝 Human support request
- If the request is informational, the AI responds using GPT-4o-mini with RAG from Pinecone to ensure clinic-specific accuracy.
- If the request relates to booking, the workflow:
  - Checks availability in Data Tables
  - Validates slot selection
  - Confirms, updates, or cancels the appointment
- If the user is confused, frustrated, or explicitly asks for a human, automation is paused and a staff member is notified.
- Voice messages are transcribed using Whisper API and images are processed using Vision API.
- All interactions are logged and synced to Google Sheets for CRM tracking.

## Requirements

- WhatsApp Business API access with active credentials
- OpenAI API key for GPT-4o-mini, Whisper, and Vision models
- Pinecone account for vector storage
- Google Sheets and Gmail for logging and notifications
- n8n instance (Cloud or self-hosted)
- Data Tables enabled for memory, appointments, and lead management

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Google Docs, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
