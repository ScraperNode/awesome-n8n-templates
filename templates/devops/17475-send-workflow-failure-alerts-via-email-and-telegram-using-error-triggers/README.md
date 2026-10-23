# ⚙️ Send workflow failure alerts via email and Telegram using error triggers

> ⚡ **128 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
Get notified by Email and Telegram the instant any n8n workflow fails. Connect this as an Error Workflow on your other workflows to catch failures before you notice them yourself, with the workflow name, failed node, and a direct link to the execution.

## How it works
1. Set this workflow as the Error Workflow on any workflow you want monitored (Workflow Settings → Error Workflow).
2. When that workflow fails, the On Workflow Error trigger catches it automatically.
3. A CONFIG node holds your alert email and Telegram chat ID in one place.
4. The Build Alert Message node extracts the failed workflow's name, the specific node that failed, the error message, and a direct link to the execution.
5. The formatted alert is sent via Email, Telegram, or both — whichever you've configured.

## Setup
1. Set up an SMTP credential for email alerts and/or a Telegram Bot credential for Telegram alerts (only configure the one(s) you plan to use).
2. Open the CONFIG node and enter your alert email and/or Telegram chat ID.
3. Delete the Send Email Alert or Send Telegram Alert node if you only want one channel.
4. On each workflow you want monitored, go to Settings → Error Workflow and select this workflow.
5. Publish this workflow so it's active and ready to catch failures.

## Requirements
- SMTP credential (email) and/or Telegram Bot credential (Telegram) — only one is required

## Customization
- Edit the message format in Build Alert Message to include additional execution details
Add more notification channels (Slack, Discord, SMS) by duplicating the Send node pattern

## Additional info
This is Module 1 of a larger Watchdog monitoring system (missed-execution detection, API/credential health canaries, daily health reports) I'm developing as a paid template. This instant-alert module works great on its own.

## 🔗 Nodes Used

Send Email, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
