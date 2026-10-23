# 🎫 Triage and label Gmail inbox emails with OpenRouter Gemini 3.5

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls your Gmail inbox for unread emails, sends the sender/subject/body to OpenRouter (Gemini) for structured triage, then applies a matching Gmail label and marks the message as read.

## How it works
1. Polls Gmail every minute for up to 50 unread messages in the inbox (excluding drafts).
2. Extracts and normalizes safe fields from each email (sender, subject, plain-text body, and timestamps).
3. Sends the normalized email content to OpenRouter (Google Gemini) with a strict JSON schema to classify category, priority, language, confidence, and a short summary.
4. Validates the AI response and maps the category to a target Gmail label name, failing the run if the output is invalid.
5. Loads your existing Gmail labels and resolves the required “AI Triage/…” label ID for the predicted category.
6. Applies the resolved Gmail label to the message and removes the UNREAD label to mark it as processed.

## Setup
1. Connect a Gmail OAuth2 credential with access to the inbox you want to triage.
2. Add an OpenRouter API key using an HTTP Header Auth credential and keep the request headers (including Content-Type) as configured.
3. Create these six Gmail labels exactly as written: “AI Triage/New lead”, “AI Triage/Existing client”, “AI Triage/Pricing”, “AI Triage/Invoice”, “AI Triage/Vendor pitch”, and “AI Triage/Spam”.

## Requirements
- Gmail or Google Workspace account with API access enabled
- An OpenRouter API key, or any OpenAI-compatible endpoint you prefer
- n8n 2.31.6 or newer, self-hosted or cloud

## Customization
- Change the six categories in the classification prompt and in the label map to match your own inbox
- Swap the model: any OpenRouter model works, or point the HTTP node directly at OpenAI or Anthropic
- Route by category instead of only labelling: send P1 items to Slack or Telegram
- Add a drafting step that writes replies in your own tone inside the same thread
- Log every decision to Google Sheets for an audit trail

## Additional info
The workflow never sends or replies to email. It only reads, labels and marks as read.

Label names are case-sensitive and must match the six listed in Setup exactly, including the "AI Triage/" prefix, or label resolution will fail.

If the AI returns invalid JSON the run fails on purpose instead of guessing a category, so a bad response can never push a message into the wrong label.

Cost is roughly $0.0008 per email on a fast model, so a 500-email month stays well under a dollar.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
