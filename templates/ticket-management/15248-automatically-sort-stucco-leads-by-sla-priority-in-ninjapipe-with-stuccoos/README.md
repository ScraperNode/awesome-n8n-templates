# 🎫 Automatically sort stucco leads by SLA priority in NinjaPipe with StuccoOS

> ⚡ **29 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who is it for
This is built for the plastering and stucco owners who are out on the tools while the partner (the 'Patricia' of the business) tries to keep the admin from exploding. It's for anyone losing money because high-value quotes or urgent fires are buried under newsletters and spam.

## What it does
This workflow is the **Headless Brain** that turns your messy inbox into an actionable **Action-Grid**. It doesn't just read emails; it classifies them into a modular SLA system (**Red, Orange, Yellow, Green**). It instantly routes leads and complaints into specific **NinjaPipe Lists**, ensuring that your most critical inquiries never go cold and your "Sleeping Revenue" is protected.

## The StuccoOS Method
This classifying system is a core module of the **StuccoOS** ecosystem. In this modular setup, your Pipeline shows the journey, but your **Lists** show the urgency. But even on its own, this workflow solves your "inquiry leakage" by making sure you only see what needs an immediate response.

## How it works
* The **webhook** triggers on every incoming email.
* **Noise Filter:** It weeds out automated junk and sent items to keep your CRM data clean.
* **AI Classification:** The LLM analyzes sentiment and category—identifying **AFTERCARE (RED)** for urgent complaints or **SLEEPING REVENUE (ORANGE)** for quote follow-ups.
* **Action Routing:** It checks NinjaPipe for the contact. If they don't exist, it creates them.
* **SLA Injection:** The contact is dropped into the correct priority List in NinjaPipe, triggering your internal response deadlines (1h, 4h, 24h, etc.).

## Requirements
* **AI API Key** (any will do)
* **NinjaPipe CRM** account and API Token
* **AgentMail** (if you want do advance labels) to feed the webhook

## How to set up
* **Credentials:** Connect your AI provider and NinjaPipe API token.
* **List Mapping:** Open the **Select CRM List for SLA** node. Replace the placeholder UUIDs in the `listMap` with your actual NinjaPipe List IDs.
* **Webhook:** OR any email trigger will work.

***

Note: This workflow is a modular component. It is built for NinjaPipe CRM, but it can be adapted to any CRM that supports a basic Contact + List structure through API.

Right now, this workflow mainly uses the CRM for routing and SLA tracking. It does not heavily rely on AgentMail Labels yet, but it can. Labels are a great way to organize conversations inside AgentMail before or alongside CRM sync.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, Groq Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
