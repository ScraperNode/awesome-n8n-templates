# 🎫 Draft safe email replies from webhooks with Groq and n8n Guardrails

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Receives inbound messages through a webhook, strips hidden instructions and sensitive data, and drafts a reply with Groq from facts you approve. Every reply is checked in code before sending, and the recipient is set in code from the original sender.

## How it works
1. Receives an inbound message payload via a webhook and normalizes it into consistent fields (sender, subject, body, and message ID).
2. Reconstructs the visible text a human would read, detects hidden/encoded instruction-like content, and assigns a risk score.
3. Replaces card numbers, IBANs, national ID numbers and API keys with placeholders using the n8n Guardrails node, so the model never sees them.
4. Blocks high-risk messages from reaching the LLM and marks them for review with the detected reasons.
5. Sends the cleaned message and your approved business facts to Groq, which returns a draft reply as JSON. The model writes the wording only and never chooses the recipient.
6. Checks the draft in code for length, unapproved links, stray email addresses and card or key shaped text. Approved replies go to your sending endpoint, addressed to the original sender. Anything else is held with the reason, and one report covers the whole run.

## Setup
1. Configure the inbound source to POST to the workflow webhook URL and ensure the payload fields match (or update the field mappings in Settings).
2. Add a Groq API credential to the POST Writing to LLM node. The free tier is enough. To use another OpenAI-compatible provider, change llm_base_url and llm_model in Set Email Fields and swap the credential.
3. Fill in the allowed facts in about_us and set your allowed_recipient_domains, allowed_links, and maximum lengths in Settings.
4. Set action_url to your sending endpoint, or replace the POST Final Reply node with a Gmail, Microsoft Outlook or Slack node.
5. Keep dry_run enabled to review outcomes in the report, then disable it when you are ready to send replies automatically.

## Requirements
- A Groq API key (the free tier is enough), or any OpenAI-compatible API.

A source that can POST messages to a webhook, such as a form, a helpdesk, or another n8n workflow reading your inbox.

An endpoint or node that sends the approved reply, such as an email API, Gmail, Outlook or Slack.

No community nodes. Works on n8n Cloud and self-hosted.

## Customization
- Lower high_risk_at in Set Email Fields to hold more messages, or raise it to hold fewer.

Edit the numbered rules in Compose Writing Request to change the tone, the language or what the assistant is allowed to say.

Add your own checks to Validate Generated Reply, for example a banned-phrase list. It is plain code.

Replace POST Final Reply with any sending node. It receives a payload that has already passed every check.

## Additional info
Why rely on code rather than the model's own safety: OpenAI has said prompt injection is "unlikely to ever be fully solved", and the UK National Cyber Security Centre says it may never be fully mitigated, because a model does not separate instructions from data. So this workflow limits what the assistant can do instead of trusting it to resist.

It was built and tested against live runs, and three behaviours came out of that testing:

1. The reply is checked as well as the input. When its facts contained an outside link, an outside address and a card-shaped number and it was told to quote them, the model did, and the code blocked all three.

2. Every message is accounted for. The Guardrails node was seen returning fewer items than it received, so Rebuild Message Content matches results back by item link and marks anything the sanitiser skipped.

3. Failures hold instead of send: model unavailable, malformed JSON, skipped redaction, or an error from the sending step.

It starts in dry run, so the first run sends nothing.

## 🔗 Nodes Used

HTTP Request, Webhook, Guardrails

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
