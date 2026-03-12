# ⚙️ Centralized error monitoring & alerts via Telegram, Slack & other messengers

> ⚡ **410 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who is this for?
This workflow is designed for developers, DevOps engineers, and automation specialists who manage multiple n8n workflows and need a reliable way to monitor for failures and receive alerts in real time.

## What problem is this workflow solving?
Monitoring multiple workflows can be challenging, especially when silent failures occur. This workflow helps ensure you're immediately informed whenever another workflow fails, reducing downtime and improving system reliability.

## What this workflow does
The solution consists of two parts:
**ERROR NOTIFIER**: A centralized workflow that sends alerts through your chosen communication channel (e.g., Telegram, WhatsApp, Gmail).
**ERROR ALERTER**: A node snippet to be added to any workflow you want to monitor. It captures errors and triggers the **ERROR NOTIFIER** workflow.
Once set up, this system provides real-time error alerts for all integrated workflows.

## Setup
1. Import both workflows:
   - **ERROR NOTIFIER** (centralized alert handler)
   - **ERROR ALERTER** (to be added to your monitored workflows)
2. Add credentials for your preferred alert channel:
   - WhatsApp (OAuth or API)
   - Telegram
   - Gmail
   - Discord
   - Slack

3. Activate the workflows:
   - Ensure **ERROR NOTIFIER** is active and ready to receive triggers.
   - Paste **ERROR ALERTER** at the end of each workflow you want to monitor, connecting it to the error branch.

Sign up for a [free consultation](https://boanse.gumroad.com/l/free_n8n_consultation) and find out how n8n can help you.

## 🔗 Nodes Used

Slack, Telegram, Discord, Execute Sub-workflow, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
