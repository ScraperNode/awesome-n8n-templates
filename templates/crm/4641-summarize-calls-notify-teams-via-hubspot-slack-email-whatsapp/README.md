# 🤝 Summarize calls & notify teams via HubSpot, Slack, Email, WhatsApp

> ⚡ **10,874 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automates the process of handling conversation transcriptions and distributing key information across your organization. Here's what it does:

**Trigger:** The workflow is initiated via a webhook that receives a transcription (e.g., from a call or meeting).

**Summarization & Extraction:** Using AI, the transcription is summarized, and key information is extracted — such as action items, departments involved, and client details.

**Department Notifications:** The relevant summarized information is automatically routed to specific departments via email based on content classification.

**CRM Sync:** The summarized version is saved to the associated contact or deal in HubSpot for future reference and visibility.

**Multi-Channel Alerts: **The summary is also sent via WhatsApp and Slack to keep internal teams instantly informed, regardless of platform.

**Use Case:**
Ideal for sales, customer service, or operations teams who manage client conversations and want to ensure seamless cross-departmental communication, documentation, and follow-up.

**Apps Used:**

Webhook (Trigger)

OpenAI (or other AI/NLP for summarization)

HubSpot

Email

Slack

WhatsApp (via Twilio or third-party provider)

## 🔗 Nodes Used

Slack, Webhook, HubSpot, WhatsApp Business Cloud, AI Agent, Summarization Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
