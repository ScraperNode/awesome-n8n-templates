# 💬 Route secure AI customer support chats with OpenAI and SoterAI

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Autonomous enterprise AI customer support copilot protected end-to-end by SoterAI. Features zero-trust prompt injection firewall, multi-turn memory, verified live ERP tools (order lookup & calculator), and real-time output DLP data redaction. Native dual-branch routing blocks attacks instantly while saving 100% of LLM compute costs.


## How it works
1. Receives a customer message from the interactive chat trigger, a POST webhook endpoint, or a manual test run.
2. Normalizes the incoming payload into a consistent structure with message text, session ID, email, and channel metadata.
3. Sends the message to SoterAI Input Threat Shield to allow only support-related topics and block or route prompt-injection, sensitive-data, or off-policy content.
4. For safe messages, uses an OpenAI chat model–backed agent with conversation memory plus an order lookup tool and calculator tool to generate a concise support reply.
5. Scans the AI reply with SoterAI Output Guardrail (DLP) and redacts detected sensitive data before delivery.
6. Returns the sanitized reply (and security metadata) to the caller via webhook/chat, and when a threat is flagged it sends an incident payload to a configurable HTTP endpoint and returns a rejection message to the customer.

## Setup
1. Install the community node package `n8n-nodes-soterai` and add a SoterAI API credential.
2. Add an OpenAI API credential for the OpenAI Chat Model node (or replace it with your preferred compatible model node).
3. If using the production endpoint, copy the POST webhook URL for `/webhook/soterai-secure-agent` and configure your support channel to send requests with a `message`/`prompt` field (and optionally `sessionId`).
4. Replace the SecOps alert HTTP request URL (currently `https://httpbin.org/post`) with your Slack/Teams/SIEM webhook or incident intake endpoint.
5. Update the order lookup tool implementation to query your real order/ERP system instead of the included mock database.

## Requirements
- • n8n version 0.8.7 or higher (v2.x recommended)
- • n8n-nodes-soterai community node installed
- • OpenAI, Groq, or compatible Chat Model credentials (optional for offline testing)

## Customization
- • Tool Customization: Edit the JavaScript in the Order Lookup Tool to connect directly to your real PostgreSQL, MySQL, Shopify, or ERP database.
- • Topic Scope: Customize the allowedTopics parameter in SoterAI Input Threat Shield to fit your specific industry (e.g. FinTech, Healthcare, E-Commerce).
- • SecOps Alerts: Point the Dispatch SecOps Alert node to your internal Slack, Discord, Microsoft Teams, or PagerDuty webhook.

## Additional info
• Tested with 100% pass rate in real Docker production environments across prompt injection attacks, legitimate customer support queries, and sensitive data leakage scenarios.
• OWASP for LLMs Compliance: Defends against LLM01 (Prompt Injection), LLM02 (Sensitive Information Disclosure), and LLM06 (Insecure Tool Execution).

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
