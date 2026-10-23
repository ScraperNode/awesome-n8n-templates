# 🎣 Triage inbound leads with Claude, Gmail, Google Sheets, and Slack

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects inbound leads via an n8n Form, uses Anthropic Claude to classify the lead and draft a reply, requests human approval in Gmail, and logs approved leads (with the draft) to Google Sheets while sending Slack alerts if the Claude step fails.

## How it works
1. Receives a new lead submission through an n8n Form.
2. Normalizes the form fields into consistent lead properties and adds a submission timestamp.
3. Sends the lead details to the Anthropic Messages API (Claude) to classify the lead (hot/warm/cold/spam) and generate a draft reply email.
4. Parses and validates Claude’s JSON response, and routes failures to a Slack alert.
5. Emails the classification and draft reply to a reviewer in Gmail and waits for an approve/reject decision.
6. If approved, appends the lead details, classification, and draft reply to a Google Sheets “Leads” tab; if rejected, the workflow ends without taking further action.

## Setup
1. Add an Anthropic API key as an HTTP Header Auth credential and ensure the request headers include your Anthropic version.
2. Connect a Gmail OAuth2 account and replace reviewer@example.com with the reviewer’s email address.
3. Connect a Google Sheets OAuth2 account, set your spreadsheet ID, and ensure a “Leads” sheet exists with columns matching the appended fields.
4. Connect a Slack account and set the target channel (for example, #alerts) for failure notifications.
5. Publish the n8n Form and share its URL where you collect lead submissions.

## Requirements
- Anthropic API key (any Claude model works; the workflow defaults to claude-sonnet-5)

## Customization
- Change the lead categories (hot/warm/cold/spam) or the reply tone by editing one system prompt; swap Gmail approval for Slack buttons; log to a CRM instead of Sheets

## Additional info
The AI drafts but never sends: human approval gates every outbound email, failures alert loudly in Slack, and lead text is treated as data, never as instructions. Full docs: github.com/kelsonworks/n8n-claude-lead-pipeline

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
