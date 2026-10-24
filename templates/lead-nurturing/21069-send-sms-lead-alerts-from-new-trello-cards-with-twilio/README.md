# 💬 Send SMS lead alerts from new Trello cards with Twilio

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow triggers on new Trello card events, extracts lead details (including a phone number) from the card content, and uses Twilio to send an SMS confirmation or alert, with a safe preview mode that builds the message without sending it.

## How it works
1. Receives a POST request from a Trello webhook when a card is created/updated, or you manually run a demo that injects sample Trello card payloads.
2. Loads centralized configuration values (Trello/Twilio settings, lead label rules, and an SMS template) and passes the incoming card payload forward.
3. Parses the Trello card to extract key fields like contact name, phone, email, company, budget, timeline, labels, and a Trello card URL.
4. Filters out cards that don’t qualify (for example missing a phone number or the required lead label) and returns a rejection reason without attempting to send.
5. Renders the SMS body from the configured template and chooses the recipient number (the card phone number, or an optional test “trench phone” in preview mode).
6. If Twilio is enabled (credentials provided and DRY_RUN is off), sends the SMS via the Twilio Messages API and outputs either the Twilio success response or the failure reason.
7. If Twilio is not enabled, outputs an exact preview of the SMS (to/from/body) so you can verify the message content without sending.

## Setup
1. Create a Trello API key/token and set your Trello webhook to call the workflow’s production webhook URL.
2. Add your Twilio Account SID, Auth Token, and an SMS-capable Twilio phone number, then set DRY_RUN to false when you are ready to send real messages.
3. Update the configuration values for the watched Trello board/list IDs, the lead label prefix (optional), the phone-field IDs (optional), and the SMS template text.
4. (Optional) Set a “trench phone” number so preview mode can deliver test messages to your own device instead of the number found on the Trello card.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
