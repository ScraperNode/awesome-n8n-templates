# 💬 Qualify web leads and send replies with Groq, Gmail, Sheets and Slack

> ⚡ **23 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow receives new lead form submissions via webhook, uses Groq (OpenAI-compatible Chat Completions) to score and draft a reply, then sends the email via Gmail, logs the lead to Google Sheets as a lightweight CRM, and posts a lead alert to Slack.

## How it works
1. Receives a POST request from your lead/contact form via a webhook.
2. Extracts and normalizes common form fields (name, email, message, service interest, phone, company) and stops if no email is provided.
3. Sends the lead details to Groq’s Chat Completions API to generate a lead score/tier, intent summary, urgency, a drafted reply email, and a Slack note.
4. Parses the Groq JSON response and flags leads as “hot” when the score is 8 or higher.
5. Sends the drafted reply to the lead using Gmail.
6. Appends the lead details and AI outputs to a Google Sheets “Leads-CRM” sheet and posts a formatted alert to a Slack channel.
7. Returns a JSON confirmation response to the original webhook request.

## Setup
1. Configure your form provider to POST submissions to the workflow’s webhook URL (path: `/new-lead`).
2. Add an HTTP Header Auth credential containing your Groq API key for the Groq Chat Completions request.
3. Connect Gmail OAuth2 credentials and set the desired Reply-To address (default is `your@business.com`).
4. Connect Google Sheets OAuth2 credentials and update the target spreadsheet and sheet to match your CRM columns.
5. Connect Slack credentials and choose the destination channel (default: `#leads`).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
