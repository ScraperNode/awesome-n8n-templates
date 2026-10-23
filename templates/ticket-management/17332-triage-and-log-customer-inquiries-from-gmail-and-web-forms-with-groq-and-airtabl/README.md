# 🎫 Triage and log customer inquiries from Gmail and web forms with Groq and Airtable

> ⚡ **21 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow captures customer inquiries from Gmail or a website form webhook, deduplicates them in Airtable, summarizes new messages with Groq (Llama 3.3) via an AI Agent, posts updates to Slack, and sends an automated acknowledgment email through Gmail.

## How it works
1. Triggers when a new Gmail message arrives or when a website form submits a POST request to the webhook.
2. Normalizes the incoming payload into a consistent structure (name, email, message, source, and timestamp).
3. Searches Airtable for an existing inquiry with the same email address to detect duplicates.
4. If a duplicate is found, posts a duplicate alert to a Slack channel.
5. If it is not a duplicate, creates a new record in Airtable with the inquiry details.
6. Uses Groq (Llama 3.3) to generate a 1–2 line summary of the inquiry and posts it to Slack.
7. Sends an automatic thank-you/confirmation email to the inquirer via Gmail.

## Setup
1. Connect credentials for Gmail OAuth2, Airtable Personal Access Token, Slack OAuth2, and a Groq API key.
2. In Airtable, ensure the base and “Inquiries” table exist and include fields matching Name, Email, Message, Source, and Timestamp, then update the base/table IDs if yours differ.
3. Configure the Slack channel (e.g., #inquiries) in both Slack message steps.
4. If using the website form path, copy the webhook URL from n8n (path: /customer-inquiry-form) and set your form to POST name, email, and message in the request body.

## 🔗 Nodes Used

Airtable, Slack, Webhook, Gmail, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
