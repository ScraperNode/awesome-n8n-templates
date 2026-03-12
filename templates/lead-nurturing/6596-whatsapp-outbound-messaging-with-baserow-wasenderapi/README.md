# 💬 WhatsApp outbound messaging with Baserow & WasenderAPI

> ⚡ **311 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Master Outbound WhatsApp: Baserow & WasenderAPI

This workflow integrates with your Baserow 'Messages' table, triggering on 'Sent' status. Messages fire via WasenderAPI, rigorously logged as 'Outbound' in Baserow. Gain total control; drive results.

## How it works

* Monitors Baserow 'Messages' table for 'Sent' status.
* Sends messages via WasenderAPI.
* Logs outbound details in Baserow.

## Who's it for

For teams dominating outbound WhatsApp and centralizing Baserow logging. Demand communication efficiency? This is your solution.

## Setup Steps

Rapid implementation. Action plan:
1.  Activate all critical workflow nodes.
2.  Copy `Sent_whatsapp` webhook URL. Configure Baserow automation (on 'Sent' status) to trigger webhook.
3.  Ensure Baserow 'Messages' table includes 'Status' ('Sent' option), linked 'WhatsApp Number', and 'Message Content' fields. (Optional: [Baserow Message Form](https://baserow.io/form/B2TUPV0S_Fx3PKyNiKOQR4YAdo77RnvAxZyMw8jN7Uc) for input).
4.  Embed WasenderAPI and Baserow API tokens in n8n Credentials. Security is non-negotiable.

## Requirements

* Active n8n instance (self-hosted/cloud).
* WasenderAPI.com trial/subscription.
* Baserow account with pre-configured 'Contacts' ([link](https://baserow.io/public/grid/a5iWkAQpu8QljUlgwgm_pour_Au5BKd3mtkfu-B6N7Y)) and 'Messages' ([link](https://baserow.io/public/grid/0H22XZitFDWnrVNnKwBfiI7M6XX5CugHrXHEzdCY4xY)) tables.

## 🔗 Nodes Used

HTTP Request, Webhook, Baserow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
