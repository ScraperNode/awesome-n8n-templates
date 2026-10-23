# 🔬 Validate JSON and CSV import data via webhook with configurable rules

> ⚡ **62 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### **How it works**
Send a POST request with a JSON array of records and your validation rules. The workflow checks every field in every row and returns a structured report showing valid/invalid rows with specific error messages.

Supported rules: required, type (string, number, email, date, url, boolean), min/max, minLength/maxLength, regex, enum, and dateFormat (YYYY-MM-DD, DD.MM.YYYY, MM/DD/YYYY).

The response includes a summary (total, valid, and invalid row counts) plus a detailed error list with row number, field name, failed rule, and error message.

### Set up steps
1. Import the workflow and activate it
2. Send a POST request to the webhook URL with "data" (array of objects) and "rules" (validation config)
3. Optionally edit the Set Default Rules node to define fallback rules — these are used when no rules are sent in the request

No external services or API keys required. Works on self-hosted and cloud n8n instances.

### Who is this for
Operations teams, data engineers, and anyone importing data into ERP systems, CRMs, or databases who needs to catch errors before bad data enters the system.

### How to customize
Edit the Set Default Rules node for your standard field definitions. Rules sent in the request body override the defaults, so one endpoint works for multiple data structures. Extend the Code node for custom checks like cross-field validation.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
