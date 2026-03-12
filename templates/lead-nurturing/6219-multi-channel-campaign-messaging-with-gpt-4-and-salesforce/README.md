# 💬 Multi-channel campaign messaging with GPT-4 and Salesforce

> ⚡ **587 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works
1. **Fetch campaign & members** from Salesforce.
2. **GPT‑4** auto‑writes a channel‑appropriate, personalised outbound message.
3. **Switch** node sends via Twilio (SMS/WhatsApp), SMTP (Email).
4. **Mark** each member as processed to avoid double‑touches.
5. **Error trigger** notifies Slack if anything fails.

## Set‑up steps
1. **Time**: ~10‑15 min once credentials are ready.
2. **Prereqs**: Active Salesforce OAuth app, Twilio account, SMTP creds, Slack app.
3. **In‑flow sticky notes** walk you through credential mapping, environment variables, and optional tweaks (e.g., campaign SOQL filter).

&gt; Copy the workflow, add your keys, and run a quick manual test—after that you can place it on a cron or Salesforce trigger.

## 🔗 Nodes Used

Send Email, HTTP Request, Twilio, Salesforce, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
