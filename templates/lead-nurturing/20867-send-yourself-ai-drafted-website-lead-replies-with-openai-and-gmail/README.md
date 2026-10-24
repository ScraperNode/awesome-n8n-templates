# 💬 Send yourself AI-drafted website lead replies with OpenAI and Gmail

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow captures website enquiries via an n8n Form, uses OpenAI to draft a first reply in your business voice, and sends you a Gmail alert containing the lead details, the suggested response, and a one-click mailto link to reply manually.

## How it works
1. Triggers when a visitor submits the n8n Form with their name, email, phone, and enquiry message.
2. Adds your business context (business name, services, service area, sign-off name, reply rules, and target alert email) to the submission data.
3. Sends the lead details and your business context to the OpenAI Chat Completions API to generate a short, friendly draft reply while instructing the model to treat the customer message as data.
4. Cleans up the generated text, falls back to a safe default reply if no usable AI output is returned, and builds an HTML email that includes a pre-filled “Reply now” mailto link to the lead.
5. Sends the formatted alert email to your chosen inbox using Gmail, without sending anything directly to the customer.

## Setup
1. Add an OpenAI API credential and ensure the workflow can call the Chat Completions endpoint.
2. Add a Gmail credential with permission to send email from the account you want to receive alerts.
3. In “Your business details”, fill in your business name, services, service area, sign-off name, and the alertEmail address, and optionally adjust replyRules and the OpenAI model.
4. Activate the workflow and share or embed the n8n Form production URL on your website.

## 🔗 Nodes Used

HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
