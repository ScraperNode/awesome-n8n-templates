# 🧾 Extract expenses from emails and add to Google Sheets

> ⚡ **22,705 views** · 🧾 [Invoice Processing](../)

## Description

This workflow will check a mailbox for new emails and if the Subject contains Expenses or Reciept it will send the attachment to Mindee for processing then it will update a Google sheet with the values.

To use this node you will need to set the Email Read node to use your mailboxes credentials and configure the Mindee and Google Sheets nodes to use your credentials.

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, Start, Mindee

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
