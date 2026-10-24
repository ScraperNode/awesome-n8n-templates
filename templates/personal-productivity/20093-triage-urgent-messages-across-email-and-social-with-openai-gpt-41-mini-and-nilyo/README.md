# ⚡ Triage urgent messages across email and social with OpenAI GPT-4.1-mini and Nilyo

> ⚡ **0 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow triggers on new emails via Nilyo (Gmail, Outlook, or IMAP), uses OpenAI GPT to classify each message as urgent or not, and sends a WhatsApp alert through Nilyo only when the email needs a reply today.

## How it works
1. Triggers when Nilyo receives an `email.new` event from a connected Gmail, Outlook, or IMAP mailbox.
2. Sets the WhatsApp recipient name used for alerts.
3. Sends the email sender, subject, snippet, and a cleaned body excerpt to OpenAI and asks for a strict JSON verdict with `urgent` and a short `reason`.
4. Checks the model’s JSON response and stops the run if the email is not marked urgent.
5. Sends an urgent-only WhatsApp message via Nilyo containing the subject, sender, and the model’s reason.

## Setup
1. Install and enable the Nilyo community node (`n8n-nodes-nilyo`) in your n8n instance.
2. Create a Nilyo personal token, add it as an n8n Nilyo API credential, and connect your mailbox provider(s) and WhatsApp in Nilyo.
3. Add an OpenAI API credential in n8n and ensure the selected model (gpt-4.1-mini) is available to your account.
4. Set the WhatsApp recipient name in the workflow’s Settings step (`alert_recipient`) to match a contact in Nilyo.
5. Activate the workflow so Nilyo can register the email event subscription for the configured destination name.

## 🔗 Nodes Used

OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
