# 🎫 Triage contact form enquiries with GPT-4.1, Gmail, Telegram and Data Tables

> ⚡ **26 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description

This workflow is an AI-powered contact form triage and auto-response system built for businesses that want to handle website enquiries in a faster, cleaner, and more professional way.

Instead of treating every incoming form submission the same way, the workflow automatically reviews the message, identifies its intent, and routes it into the correct path. Genuine enquiries are logged, shared with the internal team, and answered with a polished confirmation email. Seller pitches and spam submissions are separated from real leads so the inbox stays cleaner and the team can focus on messages that actually matter.

It is especially useful for companies that receive regular website enquiries and want to improve response speed, reduce manual review, maintain cleaner lead records, and deliver a more professional first-touch experience without building a complex support process.

## How it works

This workflow is built to automate the handling of incoming website form submissions in a more intelligent and structured way.

It is useful for businesses that want to instantly process new enquiries, separate genuine leads from seller pitches or spam, notify the internal team, and send a professional confirmation email without manual work. Instead of treating every form submission the same way, the workflow uses AI to understand the intent of the message and decide what should happen next.

The workflow follows these high-level steps:

1. A new form submission is received through a webhook.
2. The incoming data is standardized into a clean internal structure.
3. AI analyzes the message and classifies it as a real enquiry, a seller / outreach message, or spam.
4. Real enquiries are saved, sent to the internal team, and answered with a professional confirmation email.
5. Seller messages are saved and forwarded internally without sending an automatic client reply.
6. Spam or low-value submissions are filtered out to keep the workflow clean and efficient.

## Set up steps

Setup usually takes around **20 to 40 minutes**, depending on how your website form is currently built and whether you want to use Telegram or email for internal notifications.

Before using the workflow, you will need to:

- connect your website form to the webhook
- map the incoming form fields in the `Set data` node
- create the data table used for storing submissions
- connect your OpenAI credential for classification and email generation
- connect your Gmail credential for confirmation emails
- optionally connect Telegram for internal notifications, or replace it with email notifications

All detailed configuration notes and implementation guidance are included inside the workflow as sticky notes.

## 🔗 Nodes Used

Webhook, Telegram, Gmail, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
