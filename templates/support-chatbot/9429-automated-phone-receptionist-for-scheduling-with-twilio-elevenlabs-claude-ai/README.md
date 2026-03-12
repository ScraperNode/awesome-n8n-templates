# 💬 Automated phone receptionist for scheduling with Twilio, ElevenLabs & Claude AI

> ⚡ **7,054 views** · 💬 [Support Chatbots](../)

## Description

**Schedule appointments from phone calls with AI using Twilio and ElevenLabs**

This n8n template creates an intelligent phone receptionist that handles incoming calls, answers FAQs, and schedules appointments to Google Calendar. The system uses Twilio for phone handling, ElevenLabs for voice AI and basic conversations, and n8n for complex scheduling logic—keeping responses snappy by only invoking the workflow when calendar operations are needed.

**Who's it for**

Businesses that need automated phone scheduling: service companies, clinics, consultants, or any business that takes appointments by phone. Perfect for reducing administrative overhead while maintaining a professional caller experience.

**Good to know**

Redis memory is essential—without it, the AI must reparse entire conversations causing severe lag in voice responses

Claude 3.5 Sonnet is recommended for best scheduling results

Typical response times: ElevenLabs-only responses &lt;1s, n8n tool calls 2-4s

All placeholder values must be customized or scheduling will fail

**How it works**

Twilio receives incoming calls and forwards to ElevenLabs voice AI

ElevenLabs handles casual conversation and FAQ responses instantly

When calendar operations are needed, ElevenLabs calls your n8n webhook

n8n checks Google Calendar availability using your business rules

Claude AI agent processes the request, collects required information, and schedules appointments
Redis maintains conversation context across the call

Calendar invites are automatically sent to customers

**How to set up**

Connect Twilio to ElevenLabs: In Twilio Console, set your phone number webhook to your ElevenLabs agent URL

Configure ElevenLabs tools: Add "Client Tools" in ElevenLabs that point to your n8n webhook for checking availability, creating appointments, and updating appointments

Set n8n webhook path: Replace REPLACE ME in the "Webhook: Receive User Request" node with a secure endpoint (e.g., /elevenlabs-voice-scheduler)

Configure Google Calendar: Replace all REPLACE ME instances with your Calendar ID in the three calendar nodes (Check Availability, Create Appointment, Update Event)

Set up Redis: Configure connection details in the "Redis Chat Memory" node

Customize scheduling prompt: In the "Voice AI Agent" node, replace all bracketed placeholders with your business details:

[TIMEZONE], [START_TIME], [END_TIME], [OPERATING_DAYS], [BLOCKED_DAYS]
[MINIMUM_LEAD_TIME], [APPOINTMENT_DURATION], [SERVICE_TYPE]
[REQUIRED_FIELDS], [REQUIRED_NOTES_FIELDS]


Test: Make a test call to verify availability checking, information collection, and appointment creation

**Requirements**

Twilio account with phone number
ElevenLabs Conversational AI account
Google Calendar with OAuth2 credentials
Redis instance (for session management)
Anthropic API key (for Claude AI)

## 🔗 Nodes Used

Webhook, AI Agent, Anthropic Chat Model, Redis Chat Memory, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
