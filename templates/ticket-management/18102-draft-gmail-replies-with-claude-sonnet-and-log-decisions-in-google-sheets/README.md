# 🎫 Draft Gmail replies with Claude Sonnet and log decisions in Google Sheets

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors unread Gmail inbox messages, uses Anthropic Claude to decide whether a reply is needed and draft a response in your business voice, creates a Gmail draft in the original thread, and logs the email details and AI decision (category, urgency, escalation) to Google Sheets.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail Inbox (excluding Promotions and Social categories).
2. Normalizes the incoming email into consistent fields like sender name/address, subject, body, message ID, and thread ID.
3. Sends the email plus your business profile (tone, facts, signature, and example replies) to Anthropic Claude to classify the email and generate a JSON reply draft when appropriate.
4. Parses and sanitizes Claude’s JSON output, defaulting to “no reply” with an escalation flag if the response cannot be parsed.
5. Creates a Gmail draft reply in the original thread when Claude indicates a reply is needed.
6. Appends a row to a Google Sheets “Email Log” sheet with the timestamp, sender, subject, category, urgency, escalation flag, reason, and whether a draft was created.

## Setup
1. Connect your Gmail account in both the Gmail trigger and Gmail draft actions.
2. Add your Anthropic credentials and select the Claude Sonnet model in the Anthropic chat model node.
3. Connect Google Sheets, select the target spreadsheet, and ensure it has a worksheet named “Email Log” with columns: timestamp, from, subject, category, urgency, draft_created, escalate, reason.
4. Update the business profile values (business name, tone, key facts, signature, and example replies) so Claude drafts match your voice and allowed facts.
5. Optionally adjust the Gmail search query in the trigger to match the inbox labels and filtering you want.

## Requirements
- A Gmail account
- An Anthropic API key
- A Google Sheets spreadsheet with a tab named Email Log

## Customization
- Edit the business profile node with your business name, tone, key facts, signature and 2 or 3 example replies so drafts sound like you
- Tighten the Gmail search filter in the trigger to control which emails get processed
- Add a Slack or email alert for emails flagged as escalate

## Additional info
Nothing is ever sent automatically. The workflow only creates drafts, a human always reviews and sends. Anything the AI cannot verify from your business facts is marked with a [CHECK] placeholder in the draft so the reviewer fills it in before sending. Tested end to end on a live inbox, including correct skipping of newsletters and cold outreach.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
