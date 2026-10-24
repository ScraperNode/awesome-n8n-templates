# 🎣 Draft portal enquiry replies with OpenAI, Gmail and Google Sheets

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
UK estate and letting agents (and any business) that receive enquiries from Rightmove, Zoopla, OnTheMarket or website forms by email and want a fast, accurate first reply without anything going out unchecked.

## How it works
1. Watches a Gmail label (portal-leads) for new enquiry emails.
2. Sends the enquiry to OpenAI with a strict prompt: pull out name, contact details, property, position, finance and timeline, and write a short personal first reply with up to three qualifying questions.
3. A Code step checks the AI output: the reply address must appear in the original email and not be your own or a portal's domain, the AI may not add links or contact details, and the prompt treats the enquiry text as data, never instructions.
4. Logs the lead to Google Sheets with a delete-after date for data retention.
5. Saves the reply as a Gmail draft, with your booking link, signature and privacy notice, for a person to check and send. Nothing is sent automatically.

## Setup
1. Gmail filter that labels portal enquiries `portal-leads`
2. Credentials: Gmail, OpenAI, Google Sheets (add your own in n8n; none are included in this template)
3. Fill in the Settings node (agency name, booking link, signature, privacy URL)
4. Google Sheet with a tab named `Leads` and the column headings listed in the Start here note

## Customization
- Edit the SYSTEM_PROMPT in "AI instructions" to change tone or questions. Change the model in AI_MODEL.

## Additional info
Made by Burnt & Toast Kits. The paid Instant Lead Responder adds checked auto-send, hot-lead alerts, Claude and Outlook versions, a lettings variant and a setup guide: https://kits.burntandtoast.com/estate-agents/kits/instant-lead-responder

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
