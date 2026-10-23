# 🎣 Capture and reply to real estate leads with Typeform, Groq, Airtable, Gmail and Slack

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures Typeform real estate enquiries, validates required contact details, generates a personalized reply with Groq, saves the lead to Airtable, drafts a response in Gmail, notifies the team in Slack, and logs all outcomes to Google Sheets with fallback paths for incomplete submissions and API failures.

## How it works
1. Triggers when a new Typeform submission is received.
2. Checks that the submission includes both a full name and an email address, and logs incomplete submissions to a Google Sheets tab and alerts the team in Slack.
3. Truncates the lead’s message to 500 characters and sends the sanitized details to the Groq Chat Completions API (Llama 3.3 70B) to generate a short reply.
4. Validates that the AI-generated reply is present and does not contain placeholder text, and falls back to a “reply manually” note if validation fails.
5. Upserts the lead into Airtable (matched by email) and verifies the write by checking that key fields were actually saved, otherwise stores the lead to a backup Google Sheets tab and alerts the team in Slack.
6. Creates a Gmail draft addressed to the lead using the validated AI reply, posts a Slack notification to the team, and appends the lead plus draft to a Google Sheets backup tab.

## Setup
1. Connect Typeform credentials and ensure your form includes fields matching the questions used in the workflow (full name, email address, company, and message).
2. Add a Groq API credential and ensure it can call the Chat Completions endpoint used by the HTTP request.
3. Connect an Airtable credential, then select the correct base/table and ensure the Leads table contains fields for Name, Email, Company, Message, Draft, and Timestamp (with Email used for upsert matching).
4. Connect Gmail OAuth2 credentials with permission to create drafts, and review the draft subject/to mapping to match your preferred format.
5. Connect Slack OAuth2 credentials, choose the target channel(s) for alerts, and connect Google Sheets credentials and select the spreadsheet/tabs used for Incomplete Lead and Backup logging.

## Requirements
- Typeform account, Groq API key, Airtable account, Gmail account, Slack workspace, Google Sheets access

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Typeform Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
