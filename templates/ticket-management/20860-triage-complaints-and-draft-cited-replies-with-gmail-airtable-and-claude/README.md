# 🎫 Triage complaints and draft cited replies with Gmail, Airtable and Claude

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail complaints inbox, logs new complaints to Airtable, sends an immediate acknowledgement, drafts a policy-cited reply using Anthropic Claude and your approved documents, and only sends the final response after a reviewer approves or edits it via an email form.

## How it works
1. Triggers every minute when a new email arrives in the Gmail inbox and hands each email off to its own independent execution.
2. Retrieves the full Gmail message, extracts plain-text fields, and screens out automated/non-complaint mail and messages sent from the monitored inbox address.
3. Searches Airtable for an existing open case by Gmail thread, quoted reference, or sender address and routes the message as skip, follow-up, or a new case.
4. For follow-ups, writes an Audit entry in Airtable and emails the handler in Gmail without sending a second acknowledgement.
5. For new messages, uses Anthropic Claude Haiku to classify whether it is a complaint and assess severity, then creates an Airtable case record with a reference and sends a fixed acknowledgement reply in Gmail.
6. Pulls approved policy documents and example replies from Airtable, uses Anthropic Claude Opus to draft a response with inline citation markers, and programmatically validates that every marker maps to an approved document (retrying the draft once if needed).
7. Stores the draft, citations, and unsupported points on the Airtable case, then sends a Gmail approval email with a form to send, hold, or handle personally, and if approved sends the reply in Gmail and updates Airtable status and the Audit log.

## Setup
1. Create an Airtable base with the tables “Cases”, “Documents”, “Examples”, and “Audit” and ensure the workflow’s referenced fields exist (for example Reference, Status, Gmail thread id, Draft reply, Citations, Unsupported points, and timestamps).
2. Add approved content to Airtable “Documents” and “Examples” with Status set to “Approved”, since Claude is constrained to cite only these sources.
3. Configure credentials for Gmail, Airtable, and Anthropic (Claude) in n8n and select them in the corresponding nodes.
4. Update the Config values (Airtable base ID, inbox address, handler/manager emails, reference prefix, response/approval time limits, acknowledgement text, and severity triggers) before activating the workflow.

## 🔗 Nodes Used

Airtable, Execute Sub-workflow, Gmail, Gmail Trigger, Execute Workflow Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
