# 🎫 Qualify and route HVAC and plumbing enquiries with OpenAI and Telegram

> ⚡ **73 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives inbound job enquiries via a webhook, uses OpenAI to classify and summarize them into structured fields, then routes genuine enquiries to Telegram with a separate emergency alert for on-call technicians.

## How it works
1. Receives an enquiry via a POST webhook and immediately returns a JSON confirmation response.
2. Collects the submitted fields (for example name, phone, email, address, and message) into a single enquiry text block.
3. Sends the enquiry text to OpenAI and parses the response into structured fields like trade, job type, urgency, missing information, and a suggested reply.
4. Builds a dispatcher-ready brief that includes the classification, summary, missing details to ask for, and contact information.
5. Stops processing if the message is not a genuine customer enquiry (for example marketing offers or job applications).
6. Sends the brief to Telegram, alerting the on-call technician for emergencies and routing non-emergencies to dispatch.

## Setup
1. Add an OpenAI credential and select a model in the OpenAI Chat Model node.
2. Add a Telegram credential, then replace the placeholder chat IDs in the Telegram nodes with your dispatch and on-call chat IDs.
3. Copy the production webhook URL from the webhook trigger and configure your website form, phone intake tool, or email parser to POST enquiries to it.
4. Update the field aliases in the enquiry collection code if your form uses different input names for contact details and the message.

## 🔗 Nodes Used

Webhook, Telegram, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
