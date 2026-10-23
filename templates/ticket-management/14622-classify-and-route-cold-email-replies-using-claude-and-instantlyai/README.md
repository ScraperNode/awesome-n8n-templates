# 🎫 Classify and route cold email replies using Claude and Instantly.ai

> ⚡ **114 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Overview :

Automatically reads every reply to your cold email campaigns in Instantly.ai, uses Claude AI to understand the intent, and takes the right action . No need ofmanual inbox checking needed.

## How it works :

- A lead replies to your cold email in Instantly.ai , this workflow starts automatically.
- Claude AI reads the reply and labels it: Interested, Not Now, Unsubscribe, or Referral.
- Each label triggers a different action calendar email, 30-day follow-up, opt-out removal, or referral ask.
- Every reply gets logged to a Google Sheet automatically.

## Setup steps :

1. Instantly webhook — In Instantly → Settings → Webhooks, add a new webhook. Paste the URL from the Receive Instantly Reply node and set the trigger to Reply Received.
2. Claude AI — Click the Claude Haiku node, add your Anthropic API key from console.anthropic.com. Costs less than $0.01 per reply.
3. Google Sheets — Create a sheet with these column headers: Timestamp | First Name | Last Name | Email | Company | Reply | Classification | Campaign. Connect your Google account in all four Log to Sheets nodes.
4. Gmail — Connect your Gmail in Send Calendar Link and Send Referral Reply. Replace {{CALENDAR_LINK}} with your booking link.
5. Slack (optional) — Connect Slack in Notify Slack - Hot Lead and pick a channel. Don’t use Slack? Right-click the node → Disable.
6. Instantly re-sequence — In Re-add to Instantly Sequence, add your Instantly API key and replace {{SEQUENCE_ID}} with your follow-up sequence ID.
7. Activate the workflow and send a test reply to confirm everything works.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
