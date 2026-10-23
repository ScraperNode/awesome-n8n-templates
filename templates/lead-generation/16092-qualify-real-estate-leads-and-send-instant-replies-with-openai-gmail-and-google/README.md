# 🎣 Qualify real estate leads and send instant replies with OpenAI, Gmail, and Google Sheets

> ⚡ **149 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures real estate leads via a webhook, uses an OpenAI-compatible Chat Completions API call to qualify and draft a reply, then sends emails through Gmail and logs the lead to Google Sheets.

## How it works
1. Receives a new lead submission via a POST webhook from a web form.
2. Normalizes the incoming lead fields (name, email, phone, budget, interest, timeline, message) and applies your business and agent settings.
3. Sends the lead details to an OpenAI-compatible Chat Completions endpoint to classify the lead as HOT/WARM/COLD and generate a subject and follow-up email body.
4. Parses the AI response (or falls back to defaults if parsing fails) and merges it back into the lead record.
5. Sends the generated reply to the lead via Gmail and emails the agent a notification that includes the AI verdict.
6. Appends the lead details and AI score/reason to a Google Sheets tab for CRM-style tracking.

## Setup
1. Configure the webhook URL from “New Lead (Web Form)” in your website form/Facebook lead form so it sends a POST request to `/realestate-lead`.
2. Add Gmail credentials for both outgoing emails and confirm the workflow is allowed to send to leads and your agent address.
3. Add an HTTP Request credential (or set the required Authorization header) for your OpenAI-compatible API endpoint, and verify the model name in the settings.
4. Add Google Sheets credentials, paste your Google Sheet URL in the logging step, and ensure a tab named `Leads` exists with matching columns (name, email, phone, budget, interest, timeline, score, reason).
5. Update the Settings values (business name, agent name/email, booking link, AI URL/model) to match your environment.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
