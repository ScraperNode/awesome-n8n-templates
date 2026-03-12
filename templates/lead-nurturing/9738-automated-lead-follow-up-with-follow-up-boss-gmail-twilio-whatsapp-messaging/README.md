# 💬 Automated lead follow-up with Follow Up Boss, Gmail, Twilio & WhatsApp messaging

> ⚡ **1,499 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This workflow automates your entire lead follow-up process across email, SMS, and WhatsApp.

It starts on a schedule and pulls your latest leads from FollowUpBoss (FUB), checking when the workflow last ran. Each new contact is automatically validated — phone numbers and emails are cleaned, filtered, and checked for duplicates before sending any message.

Once validated, the system intelligently decides how to reach each lead:

💬 Email + SMS if all data looks good

📧 Email only if phone is invalid

📱 SMS/WhatsApp only if email is missing

Each message is personalized using data from the lead record, and everything is tracked back in your database for future reporting.

This template helps agents, marketing teams, and CRM users run consistent follow-ups without missing a single contact. Whether you manage 10 or 10 000 leads, this flow scales effortlessly.

Tools used: FollowUpBoss, Gmail, Twilio/WhatsApp, n8n

(Tip: Replace your API keys and Gmail credentials before running.)![Captura de pantalla 20251015 202825.png](fileId:2967)

## 🔗 Nodes Used

HTTP Request, Twilio, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
