# 🎫 Manage contact form submissions with Google Sheets, Slack alerts & Gmail replies

> ⚡ **228 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works

This workflow is triggered when the contact form is submitted.

It automatically saves the inquiry details to Google Sheets and sends a notification to Slack.
You can then review the inquiry and reply directly from Slack using the `Contact` button.

## How to use

* Open the `Gmail` node and set up the Credential.
* Open the `Google Sheets` node and set up the Credential.
* Open the `Slack` node and set up the Credential to allow sending messages.
    * You can create a new Slack App [here](https://api.slack.com/apps).
* Open the `ContactWebhook` node and configure Basic Auth.
* Open the `Config` node and update the `contactWebhookUrl` parameter to match the Production URL from the `ContactWebhook` node.

## Customizing this workflow

* You can customize the Slack notification message in the `Config` node.
* You can modify the reply email body in the `Gmail` node.
    * We recommend including a scheduling link (e.g., to book a meeting).

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
