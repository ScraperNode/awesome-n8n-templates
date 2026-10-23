# 🔬 Summarize portfolio review notes and flag compliance risk with GPT-4o, Gmail and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives advisor meeting notes via a webhook, uses OpenAI GPT-4o to generate a structured summary and compliance risk classification, logs the result to Google Sheets, and sends notifications through Gmail and Telegram based on the detected risk level.

## How it works
1. Receives a POST request with client and advisor details, risk tolerance on file, and raw meeting notes via a webhook.
2. Normalizes the incoming fields and fills in safe defaults for missing values.
3. Uses OpenAI GPT-4o to summarize the notes, classify compliance risk (high/medium/low), and produce flagged issues and recommended follow-up in a strict JSON structure.
4. Appends the structured summary, risk level, and flags to a Google Sheets “Portfolio Reviews” compliance tracker for auditing.
5. Routes the record by risk level and emails a compliance-review alert via Gmail for high-risk items.
6. Sends a Telegram message to the compliance team for high-risk items and emails the advisor a logged summary via Gmail for medium-risk items.

## Setup
1. Add an OpenAI API credential with access to the gpt-4o model.
2. Connect Google Sheets OAuth credentials and replace the spreadsheet ID in the Google Sheets append step (and ensure the “Portfolio Reviews” sheet has matching columns).
3. Connect Gmail OAuth credentials and set the recipient logic as needed (the template sends emails to the submitted advisor email).
4. Create a Telegram bot, add Telegram credentials, and replace the Telegram chat ID with your compliance team chat/channel.
5. Copy the webhook URL from the trigger and configure your meeting-notes form or CRM to POST the expected JSON fields to it.

## Requirements
- Active OpenAI API key (GPT-4o access).
- Gmail account with OAuth2 credentials configured.
- Google Sheets account with OAuth2 credentials configured.
- Telegram Bot token and target Chat ID (for compliance team alerts).
- n8n self-hosted or cloud instance (version 1.0+ recommended).

## Customization
- PDF Memo Generation: Add a PDF-generation node to produce a signed, dated compliance memo for the client file automatically.
- CRM Integration: Connect to a CRM (Salesforce, Redtail, or Wealthbox via HTTP Request) to attach the summary directly to the client record.
- Quarterly Rollup Report: Add a quarterly digest sub-workflow that rolls up all flagged issues into one report for the Chief Compliance Officer (CCO).
- Client-Facing Recap: Add a second AI pass that drafts a client-facing meeting recap email (distinct from the internal compliance note).

## Additional info
Audit Trail Protection: Every portfolio review gets a permanent, timestamped audit log in Google Sheets before any branching happens, so data is never lost even if downstream notifications fail.

Same-Day Risk Prevention: Flags suitability mismatches instantly via email and Telegram to resolve regulatory risks before trades execute.

Strict Schema Locking: Uses a Structured Output Parser with GPT-4o to lock the model into strict JSON schemas, preventing off-script outputs or parsing errors.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
