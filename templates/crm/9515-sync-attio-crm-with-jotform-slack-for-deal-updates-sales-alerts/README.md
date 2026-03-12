# 🤝 Sync Attio CRM with Jotform & Slack for deal updates & sales alerts

> ⚡ **57 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow streamlines your lead management process by automatically capturing form submissions from **Jotform**, updating **Attio CRM**, and notifying your **team (sales team for example) via Slack** — all without manual work.

## How it works
1. **Receive Lead:**
- A new submission is captured from Jotform (name, email, message).

2. **Prepare CRM:**
- Checks if the `Pending` and `Urgent` deal stages exist in Attio CRM and creates them if they don’t exist.
- Checks if the `Message` column exists in Attio CRM and creates it if it doesn't exist.

3. **Lead Handling:**
- If the lead **doesn't exist** in Attio CRM, the contact is created, a new deal is added to the `Pending` stage, and a Slack notification is sent.
- If the lead **exists but has no deal**, a new deal is added to `Pending`, and Slack is notified.
- If the **lead exists with a deal**, the deal is moved to the `Urgent` stage, and Slack is notified.

4. **Slack Notification:**
- Your team (sales team for example) receives an instant Slack message whenever a new or existing lead is processed, so they can act fast.


## Requirements
Make sure to have **Jotform**, **Attio CRM** and **Slack** accounts, then follow this [video guide](https://www.youtube.com/watch?v=FCGmVZsGYWk) on how to start using this template.

## 🔗 Nodes Used

HTTP Request, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
