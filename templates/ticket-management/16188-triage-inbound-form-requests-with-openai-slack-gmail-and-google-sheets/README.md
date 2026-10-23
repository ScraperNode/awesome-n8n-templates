# 🎫 Triage inbound form requests with OpenAI, Slack, Gmail and Google Sheets

> ⚡ **40 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives website contact-form submissions via a webhook, uses OpenAI to classify and summarize the message and draft a reply, routes spam separately, alerts your team in Slack, sends an auto-reply with Gmail, logs the submission to Google Sheets, and returns a JSON acknowledgement.

## How it works
1. Receives a contact-form POST request (name, email, message) via an n8n webhook endpoint.
2. Sends the submission to OpenAI (gpt-4o-mini) to classify category/urgency/sentiment, generate a one-sentence summary, and draft a language-matched email reply in strict JSON.
3. Normalizes the AI output into consistent fields (timestamp, category, urgency, sentiment, summary, suggested reply) for downstream routing.
4. Checks whether the message is classified as spam and, if so, appends a flagged row to Google Sheets and skips notifications and email.
5. For non-spam submissions, posts a formatted alert to a Slack channel with the sender details and AI summary.
6. Sends the AI-drafted auto-reply to the visitor using Gmail, logs the submission to Google Sheets, and responds to the original webhook request with {"status":"received"}.

## Setup
1. Create and connect credentials for OpenAI, Slack, Gmail, and Google Sheets in n8n.
2. Update the Google Sheets document ID and choose the target sheet name for both the normal submission log and the spam log.
3. Select the Slack channel where alerts should be posted.
4. Copy the webhook URL from the workflow and configure your website/contact form to POST name, email, and message to it.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
