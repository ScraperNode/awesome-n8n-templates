# 💬 Book website appointments into Google Calendar with webhook and Telegram alerts

> ⚡ **19 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives website booking messages via a webhook, extracts service, urgency, and preferred timing, proposes three appointment slots with a follow-up reminder plan, alerts the owner via Telegram only for emergencies, and immediately returns a prepared reply to the customer.

## How it works
1. Receives a POST request on a webhook endpoint containing the customer’s message and optional contact details.
2. Classifies the request by scanning the text for urgency and service keywords and infers preferred day and time-of-day.
3. Generates three suggested appointment slots, drafts a personalized reply (including a phone-number request if missing), and creates a reminder/no-show/review follow-up plan.
4. Checks whether the request is marked as urgent and, if so, sends a Telegram message to the owner with the customer summary and the first held slot.
5. Returns the generated reply, offered slots, and follow-up plan as the webhook response.

## Setup
1. Enable the Webhook trigger and copy the production webhook URL, then configure your website form/chat tool to POST the expected fields (for example: message, name, phone, channel) to it.
2. Add a Telegram bot credential and set your Telegram chat ID in the Telegram node so emergency alerts reach the right person.
3. Update the keyword lists (urgent terms and service terms) in the request-parsing code to match your business.
4. Adjust the slot-generation logic and business hours in the slot-offering code so the suggested times reflect your real availability.

## 🔗 Nodes Used

Send Email, Webhook, Telegram, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
