# 🎣 Qualify insurance quote leads with Aloware SMS and AI voice agent

> ⚡ **254 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description
Automate insurance lead qualification with an AI Voice Agent. When a prospect requests a quote — auto, home, life, or commercial — this workflow instantly acknowledges the request via SMS and routes urgent leads to an AI-powered qualification call that captures coverage details, timeline, and budget.
Insurance agencies live and die by speed-to-quote. This workflow eliminates the lag between a quote request landing in your inbox and an agent picking up the phone. Urgent leads get an immediate AI Voice Agent call that qualifies them on the spot, while standard leads enter a nurture drip until they're ready.

## How it works

1. A Webhook receives a quote request from your website form, landing page, or lead vendor.
2. A Set node normalizes the prospect data — phone, name, email, insurance type (auto/home/life/commercial), current coverage status, urgency, and ZIP code.
3. An HTTP Request creates the contact in Aloware with insurance type, coverage status, and ZIP stored in custom fields and notes.
4. A second HTTP Request sends an instant SMS: "Hi {name}! This is {agent} from {agency}. We received your {insurance type} quote request…"
5. An IF node checks the urgency field.
	-  Urgent leads → enrolled in an AI Voice Agent Sequence that calls immediately and qualifies coverage needs, renewal dates, and budget.
	- Standard leads → enrolled in a Nurture Sequence with a multi-day SMS drip.



## How to use

1. Import the JSON into n8n.
2. Add these n8n Variables: ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, ALOWARE_AI_SEQUENCE_ID, ALOWARE_NURTURE_SEQUENCE_ID, AGENCY_NAME, and AGENT_NAME.
3. In Aloware, create two Sequences:
4. 
5. AI Voice Agent Sequence: immediate AI call + follow-up SMS.
6. Nurture Sequence: SMS drip over 7–14 days.
7. Connect your quote form or lead vendor to POST to this webhook URL.
Activate and test with a sample quote request.

## Requirements

Aloware account with API access, AI Voice Agent capability, and an outbound line
A quote request form or lead source that can send webhook POSTs

#### Customising this workflow

Add a Switch node to route by insurance type — different sequences for auto vs. home vs. life.
Include a two-legged call node (/webhook/two-legged-call) to connect the prospect directly to a live agent for high-value commercial quotes.
Add a Slack notification to alert the assigned agent when an urgent quote comes in.
Connect to your rater or quoting tool API to auto-generate a preliminary quote before the call.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
