# 🎫 Triage support tickets and draft safe replies with OpenAI, Gmail, and Data Tables

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives support requests via a webhook, authenticates and redacts the message, matches it to a closed knowledge base, and uses OpenAI to draft a grounded reply for human approval, storing ticket state in n8n Data Tables and sending review alerts through Gmail.

## How it works
1. Receives a support request via a POST webhook and validates an intake token from request headers.
2. Normalizes the incoming payload, redacts common sensitive patterns, detects basic prompt-injection signals, generates a stable ticket key, and attempts to match the question to a built-in knowledge-base list.
3. Deduplicates repeat requests by claiming the ticket key and, if a record already exists in the Support_Tickets Data Table, returns a “duplicate” webhook response.
4. If a knowledge-base match is found, OpenAI drafts a reply constrained to the matched KB entry and the workflow validates that the draft cites the retrieved KB ID and meets safety and confidence checks.
5. Stores the resulting ticket state in the Support_Tickets Data Table and emails a controlled human-review alert via Gmail for either a validated draft or an escalation without a draft.
6. Returns a webhook response indicating whether the request is “draft_ready” for human review or “escalated” with no automated answer.
7. On a separate approval webhook, validates an approval token, loads the ticket from Support_Tickets, records approve/edit/reject/escalate decisions, and only for approve/edit sends a controlled Gmail reply and optionally logs the approved Q&A to Support_KB_Learnings.
8. Runs hourly to find tickets where the review alert was not confirmed as sent and retries sending the Gmail alert, updating only the alert metadata in Support_Tickets.

## Setup
1. Create two n8n Variables named SUPPORT_INTAKE_TOKEN and SUPPORT_APPROVAL_TOKEN and update your calling systems to send them in the appropriate request headers.
2. Create the Support_Tickets and Support_KB_Learnings n8n Data Tables and replace all REPLACE_WITH_TABLE_ID placeholders with your actual table IDs.
3. Add Gmail credentials and replace ops@example.com with your operator inbox (and, for production, update the controlled “reply” recipient as needed).
4. Add OpenAI credentials and confirm the selected model (gpt-4o-mini) is available in your OpenAI account.
5. Replace or extend the demo in-workflow knowledge-base entries and adjust the match/confidence thresholds and validation rules to fit your support policies.
6. Copy the Support Intake and Support Approval webhook URLs and configure your support intake source and approval tool to call the correct endpoints.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
