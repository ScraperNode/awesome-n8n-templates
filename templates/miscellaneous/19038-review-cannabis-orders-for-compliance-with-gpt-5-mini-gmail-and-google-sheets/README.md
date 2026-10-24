# 🔧 Review cannabis orders for compliance with GPT-5 Mini, Gmail and Google Sheets

> ⚡ **14 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow receives completed dispensary orders via a webhook, uses OpenAI (GPT-5 Mini) to review recall, METRC tag, and quantity-limit compliance, emails the appropriate staff via Gmail, and appends an audit record to a Google Sheets compliance log.

## How it works
1. Receives a completed dispensary order as a POST request via an n8n webhook.
2. Normalizes the incoming payload into consistent fields (order ID, dispensary ID, customer type, state, budtender ID, prior daily grams, and line items).
3. Sends the order details to OpenAI (GPT-5 Mini) to classify the outcome as RECALL_FLAG, METRC_TAG_MISMATCH, QUANTITY_LIMIT_BREACH, or CLEAR_TO_FULFILL and return a structured JSON decision.
4. Formats the decision into a single review record including confidence, reasoning, grams remaining after the order, and a concrete corrected action.
5. Routes the order to exactly one Gmail notification path based on the compliance category (budtender for clear orders, manager for quantity breaches, and compliance officer for METRC mismatches or recall flags).
6. Appends the compliance decision and metadata as a new row in a Google Sheets “Compliance Review Log” ledger.

## Setup
1. Add an OpenAI API credential for the GPT-5 Mini chat model used by the compliance review step.
2. Add a Gmail OAuth2 credential and replace the placeholder recipient emails for the budtender/POS inbox, store manager, and compliance officer.
3. Add a Google Sheets OAuth2 credential, create a spreadsheet tab for the compliance log, and paste the Sheet ID and tab name into the Google Sheets append step.
4. Copy the webhook URL from the webhook trigger and configure your POS system to POST order JSON to that endpoint (and adjust the webhook path if needed).

## Requirements
- OpenAI API Credentials: An active OpenAI API key with access to GPT-5 Mini (or GPT-4o Mini) to execute structured compliance evaluations and payload JSON parsing.
- POS Webhook Access: Admin access to your dispensary POS system (e.g., Dutchie, Jane, Treez) to configure outgoing webhook triggers on order submission.
- Google Sheets Integration: A connected Google account with write access to a compliance spreadsheet to log audit trails.
- Messaging Channel Setup: Active Gmail and/or Slack/Telegram integrations configured to route real-time alerts to Budtenders, Managers, and Compliance Officers.

## Customization
- METRC API Live Lookup: Replace the simulated tag check in Normalize Order Intake with an HTTP Request node querying the official state METRC API to validate batch numbers live.
- State Limit Adjustments: Update the system prompt in Review Order Compliance to match your specific state's legal limits (e.g., 28g flower / 8g concentrate vs. state-specific equivalency math).
- Automated Order Hold (POS Integration): Add a downstream POST request following non-clear routes to automatically place a hard hold on the order inside the POS system.

## Additional info
State Audit Preparedness: Every processed order generates a timestamped, immutable row in Google Sheets containing the raw input, AI decision parameters, and alert audit logs for state compliance reporting.

Failsafe Design: Any unclassified edge cases or unexpected AI output default directly to the Recall/Emergency Hold path to ensure risky orders are never auto-cleared.

Non-Medical Guardrails: The AI evaluation model operates exclusively as a regulatory compliance and batch tag validator; it does not perform medical advice or patient dosage evaluation.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
