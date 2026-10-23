# 🎫 Triage and draft PII-safe support replies with OpenAI and Enterprise PII Guardrails

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow ingests customer support tickets via webhook or manual trigger, masks sensitive PII with Enterprise PII Guardrails, uses OpenAI (gpt-4o-mini) to triage and draft a reply using surrogate tokens, then restores the original PII and formats a structured payload for CRM dispatch.

## How it works
1. Receives an inbound support ticket via a POST webhook or a manual test run.
2. Normalizes the ticket fields (ID, channel, customer details, subject, and body) into a consistent payload.
3. Sends the ticket body to Enterprise PII Guardrails to detect and mask PII into surrogate tokens and returns a token-to-value mapping.
4. Sends the masked ticket text to OpenAI (gpt-4o-mini) to classify priority/category/sentiment and draft a response while preserving the surrogate tokens verbatim.
5. Unmasks the drafted response with Enterprise PII Guardrails using the returned mapping to restore the original customer data inside your environment.
6. Packages the final unmasked resolution draft and privacy metadata into a CRM-ready dispatch and audit payload.

## Setup
1. Create an Enterprise PII Guardrails API credential (API key) and set the base URL for your deployment (demo or self-hosted).
2. Add an OpenAI API credential and ensure the model selection (gpt-4o-mini) is available for your account.
3. If using the webhook trigger, copy the webhook URL for the `support-ticket-inbound` endpoint and configure your ticket source to POST ticket fields (ticket_id, channel, customer_name, customer_email, ticket_subject, ticket_body).

## 🔗 Nodes Used

Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
