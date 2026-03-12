# 💬 Automate AI phone booking & CRM updates with GPT-4, VAPI.ai, and GHL

> ⚡ **1,564 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**Automate AI-driven appointment booking with phone call confirmations, real-time lead validation, CRM updates, and email notifications—powered by n8n, OpenAI, VAPI.ai, and GoHighLevel.**

# Tools & Services Used
- GoHighLevel (CRM & appointment management)
- VAPI.ai (AI phone calls)
- OpenAI (GPT-4 for lead validation and post-call analysis)

- Email Service (transactional email notifications)

- n8n (Self-hosted required for Community Nodes)

# Workflow Overview
## This automation performs the following steps:

- Trigger: A new lead arrives via the GHL Webhook.

- Validation: OpenAI (GPT-4) checks lead quality and relevance.

- AI Phone Call: VAPI.ai initiates an automated call to confirm appointment details.

- Post-Call Analysis: OpenAI interprets the call result (booking_made=YES/NO).

## Conditional Actions:

If YES: Updates GoHighLevel CRM and sends confirmation emails to the client and owner.

If NO: Alerts the owner via email about the failed booking.

# Prerequisites
Active accounts and API keys for:

- GoHighLevel (webhook setup)
- VAPI.ai (phone call API)
- OpenAI (GPT-4 access)
- Email service (e.g., SMTP, SendGrid, or Gmail)

# How to Use This Template
## Step 1: Import the Template

Import the JSON into your self-hosted n8n instance (requires Community Nodes like @n8n/n8n-nodes-langchain).

## Step 2: Configure Credentials

GHL Webhook: Replace YOUR_WEBHOOK_ID with your GoHighLevel webhook ID.

OpenAI Nodes: Add your OpenAI API key (replace placeholder BxLbA94QZt0ifZsC).

VAPI Call Node: Ensure the VAPI.ai endpoint (https://api.vapi.ai/call/phone) has valid API credentials.

Email Nodes: Configure SMTP or API credentials for your email service.

## Step 3: Enable Disabled Nodes

Activate the Post-call Analysis node if needed (disabled by default).

Finding Your GHL Webhook ID
In GoHighLevel, navigate to Automations → Webhooks.

Create a new webhook and copy its unique ID into the GHL Webhook node.

# Initial Test Run
Simulate a Lead: Manually trigger the GHL webhook with test lead data.

# Debugging:

Verify OpenAI validates the lead.

Check if VAPI.ai initiates a call (use a test phone number).

Confirm CRM updates and emails are sent conditionally.

# Production Prep:

Enable error-handling loops for failed calls.

Adjust GPT-4 prompts for stricter validation.

# Use Cases
- Medical Clinics: Reduce no-shows with automated appointment confirmations.

- Salons/Spas: Streamline booking updates and client reminders.

- Consultants: Sync client meetings to CRM in real time.

# Disclaimer
Requires self-hosted n8n (Community Nodes are unsupported on n8n Cloud).

Test phone call and email nodes extensively before scaling.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
