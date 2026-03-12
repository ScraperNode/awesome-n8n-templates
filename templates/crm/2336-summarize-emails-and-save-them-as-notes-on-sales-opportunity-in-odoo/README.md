# 🤝 Summarize emails and save them as notes on sales opportunity in Odoo

> ⚡ **10,562 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Use Case:
This n8n workflow automates the process of extracting information from emails. It uses OpenAI to summarize sales emails and adds this information in Odoo.

## How it works:
* When an email is received with a certain label, it sends the email to OpenAI for summarization
* A sales opportunity is created in Odoo with the email subject as title and the email summary as internal note

## Set up steps:
* Configure Google Cloud credentials with Gmail access
* In the Gmail node, choose an email label in the filter section
* Configure OpenAI credentials
* Configure Odoo credentials

## 🔗 Nodes Used

Odoo, Gmail Trigger, Summarization Chain, OpenAI Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
