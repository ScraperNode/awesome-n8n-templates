# 🧾 Notify on new emails with invoices in Slack

> ⚡ **2,734 views** · 🧾 [Invoice Processing](../)

## Description

This workflow checks for new emails in a mailbox and if the email body contains the word "invoice" it will send the attachment to Mindee. It then posts a message to Slack to let the team know a payment needs to be made, If the value of the invoice is over 1000 it will also email the finance manager.

To use this workflow you will need to configure the IMAP node to select the correct mailbox to use then configure the Mindee node to use your credentials.

Once that is done the Send Email node will need to be configured to use the correct mail server and to send to the correct people, The last thing to configure is the Slack node this will need your Slack credentials and the channel you want to post the message to.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Slack, Start, Mindee

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
