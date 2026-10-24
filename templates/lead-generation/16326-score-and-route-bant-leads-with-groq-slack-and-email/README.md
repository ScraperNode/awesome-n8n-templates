# 🎣 Score and route BANT leads with Groq, Slack and email

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives lead form submissions via a webhook, scores each lead with Groq’s Llama model using BANT criteria, and routes the lead to Slack or an SMTP email path based on the HOT/MID/COLD tier.

## How it works
1. Receives a POST request from a lead form via an n8n webhook.
2. Normalizes the incoming fields (name, email, company, budget, authority, need, timing) into a consistent lead object.
3. Sends the lead details to the Groq Chat Completions API (Llama 3.3 70B) to return a BANT-based tier (HOT/MID/COLD) with a short reason and confidence score.
4. Parses the AI response into structured fields and attaches the score metadata to the lead.
5. If the lead is HOT, posts a formatted alert message to Slack in the configured channel.
6. If the lead is MID or COLD, sends an email to the lead via SMTP using the corresponding subject line.
7. Returns a JSON response to the webhook caller with the lead’s score and a success message.

## Setup
1. Configure the incoming lead source to POST to this workflow’s webhook URL and include the expected fields (name, email, company, budget, authority, need, timing).
2. Add an HTTP Header Auth credential for Groq and set the Authorization header to your Groq API key for the chat completions request.
3. Add an HTTP Header Auth credential for Slack and set it to a Slack bot token with permission to call `chat.postMessage`, then update the target channel (default `#sales`) if needed.
4. Add SMTP credentials for sending email and replace the `fromEmail` addresses (e.g. `sales@yourcompany.com`, `hello@yourcompany.com`) with valid sender addresses for your mail server.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
