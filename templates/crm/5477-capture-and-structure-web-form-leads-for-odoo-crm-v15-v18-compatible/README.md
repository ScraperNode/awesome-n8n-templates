# 🤝 Capture and structure web form leads for Odoo CRM (v15-v18 compatible)

> ⚡ **333 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow captures raw lead data from a Webhook and formats it into a clean, structured object — perfectly tailored for Odoo CRM and create lead. It supports Odoo versions 15, 16, 17, and 18, both Community and Enterprise editions.

🔧 How It Works:
Captures POST data from any web form or lead tool using Webhook.

Extracts fields like:
email
phone
name
company
company_name
contact_name
description

🔐 Credentials Required:
Odoo credentials
https://docs.n8n.io/integrations/builtin/credentials/odoo/

Optionally, connect to Odoo's /crm.lead endpoint via an HTTP Request node.

🎯 Use Cases:
Standardize messy input from lead forms
Prepare API-ready data for direct CRM insert
Connect web campaigns to Odoo CRM
Automate follow-up, lead scoring, or notifications

🧰 Compatibility:
✅ Odoo v15, v16, v17, v18
✅ Odoo Community & Enterprise
✅ API or custom model compatible
✅ All n8n versions 1.0+

🚀 Setup Instructions:
Open n8n and import the workflow file.
Configure the Webhook URL in your form or tool.
Test the Webhook with sample data.
Review the structured JSON output.
(Optional) Add an HTTP node to push to Odoo CRM API.

## 🔗 Nodes Used

Webhook, Odoo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
