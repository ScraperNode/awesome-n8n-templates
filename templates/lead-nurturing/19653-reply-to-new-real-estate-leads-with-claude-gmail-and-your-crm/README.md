# 💬 Reply to new real estate leads with Claude, Gmail and your CRM

> ⚡ **34 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
A new lead arrives from a portal email, a website form or a CRM webhook. Claude qualifies it and drafts a first reply in your voice, quiet hours and consent are checked, Gmail sends it, the CRM is updated, and a follow-up fires if the lead stays silent.

## How it works
1. Receives a new lead via a webhook request containing details like name, email/phone, source, and enquiry message.
2. Fetches any existing contact history and context from your CRM via an HTTP API request.
3. Uses Anthropic Claude to extract qualification signals (timeline, pre-approval, price band, intent) and routes low-confidence cases to a manual review path.
4. Uses Anthropic Claude to draft a short first reply with exactly one question and routes flagged drafts to a manual review path.
5. Checks quiet hours and consent/opt-out rules before allowing any outbound messaging to proceed.
6. Sends the reply via Gmail using the generated subject and message content.
7. Logs the interaction back to the CRM via an HTTP API request and then waits for a resume trigger to support a follow-up if there is no response.

## Setup
1. Add an Anthropic credential for the Claude (Anthropic Chat Model) nodes.
2. Connect a Gmail account credential and set the from/sending behavior as needed in the Gmail send message node.
3. Replace the placeholder CRM API URLs in both HTTP Request nodes and add the required authentication (for example, Follow Up Boss, kvCORE, or HubSpot).
4. Update the values in “Config (edit me)” (your name/company, timezone, quiet hours, approver, and test/approval mode settings).
5. Copy the webhook URL from the trigger and configure your lead source to POST lead data to it (for example, your website form or your CRM/webhook source).

## Requirements
- n8n 1.x (tested on 2.38), an Anthropic API key for the Claude nodes, a Gmail account, and a CRM with an API — Follow Up Boss, kvCORE or HubSpot (the two HTTP Request nodes carry placeholder URLs to replace).

## Customization
- Put your first-reply rules, quiet hours and opt-out words in "Config (edit me)". Swap the HTTP Request nodes for the native HubSpot node if that is your CRM, and add a Twilio node next to Gmail for SMS replies. Keep the guardrail: nothing is sent between 9 pm and 8 am in the lead's time zone, and every draft below the confidence threshold parks at the "Needs a person?" gate instead of going out.

## Additional info
One of 48 Agentmelt blueprints. The blueprint page explains the trigger, the steps, the guardrails and where the standard version stops: https://agentmelt.com/workflows/speed-to-lead-automation/ — all 48 workflow files are on GitHub (MIT): https://github.com/zeshutmax/agentmelt-blueprints

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
