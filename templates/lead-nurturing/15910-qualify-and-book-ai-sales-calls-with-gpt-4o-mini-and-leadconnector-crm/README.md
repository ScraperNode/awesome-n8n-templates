# 💬 Qualify and book AI sales calls with GPT-4o-mini and LeadConnector CRM

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow receives inbound lead messages from HighLevel (LeadConnector), pulls prior conversation history from Supabase/Postgres, uses OpenAI to generate a short reply, and updates HighLevel custom fields (qualification data, lead disposition, and appointments) including checking availability and booking or rescheduling.

## How it works
1. Receives an inbound message event from HighLevel (LeadConnector) via a webhook.
2. If the payload indicates an appointment was booked, it fetches the contact’s upcoming appointments from HighLevel and stores the matching appointment event ID back on the contact record.
3. If no appointment is indicated, it loads the lead’s previous chat history from Supabase, formats it into a readable transcript, and provides it as context to an OpenAI-powered conversational agent with Postgres chat memory.
4. The agent qualifies the lead and, when appropriate, updates HighLevel custom fields (business type, inquiry volume, response time, team size, bottleneck, monthly revenue, AI experience) and the lead disposition using HighLevel API calls.
5. When scheduling is needed, the agent calls a separate availability webhook that queries HighLevel calendar free slots and returns available times (or a no-availability message).
6. After the agent produces the final short response, the workflow sends the message back to the lead in HighLevel conversations (for example, via SMS).

## Setup
1. Create and connect credentials for OpenAI, Supabase, and Postgres (for the agent’s chat memory).
2. Provide a HighLevel (LeadConnector) API access token and ensure the incoming webhook payload supplies it (plus Contact ID, Calendar ID, Location ID, and response channel/type).
3. In HighLevel, create the required custom fields and update the workflow to use their field IDs (lead disposition, qualification fields, and the Event ID field).
4. Configure the HighLevel workflow/integration that posts messages to the n8n webhook URL and maps the required customData fields (for example, “Contact Message”, “Lead Dispostions”, and calendar details).
5. Keep the internal “get_availability” webhook URL reachable (or replace it with your own endpoint) so the agent can retrieve calendar free slots.

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, AI Agent, OpenAI Chat Model, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
