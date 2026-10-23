# 🎣 Qualify and route inbound leads with OpenAI, Trello, Slack and Gmail

> ⚡ **114 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description

This n8n workflow automates a speed-to-lead system, capturing form submissions and quickly routing qualified leads to tools like Trello and Gmail for fast follow-up.

## Good to Know
Speed-to-lead focuses on minimizing time from lead capture to sales engagement, boosting conversion rates.

## How it works
- Triggers on form submission, feeding data into an AI Agent powered by an OpenAI Chat Model with chat memory.

-  The AI processes leads via a structured output parser, then a switch (rules mode) decides actions like editing fields or sending messages.

- Outputs route to Trello (task creation), Gmail (notifications/emails), and possibly other apps for lead nurturing.


## How to use
-  Import the workflow into your n8n instance and connect credentials for OpenAI, Trello, Gmail, and your form tool (e.g., Google Forms).

- Test by submitting a form; monitor the AI agent for lead qualification and verify outputs in Trello/Gmail.

- Activate the workflow to run live, ensuring webhooks or triggers are set for production forms

## Requirements

- n8n account (self-hosted or cloud); API keys for OpenAI, Trello, Gmail OAuth2.

 - Form tool integration (e.g., Google Forms webhook).

 - For verified creator status: Submit 2-3 approved public workflows via n8n Creator Portal, including this one, to gain the badge and directory listing.

## 🔗 Nodes Used

Slack, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
